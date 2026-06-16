import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Department } from './department.entity';
import { PatientVisit } from '../../exam/entities/patient-visit.entity';
import { LabOrder } from '../../lab/entities/lab-order.entity';
import { LabResult } from '../../lab/entities/lab-result.entity';
import { Prescription } from '../../prescription/entities/prescription.entity';
import { DispenseHistory } from '../../pharmacy/entities/dispense-history.entity';
import { Payment } from '../../billing/entities/payment.entity';
import { Appointment } from '../../appointment/entities/appointment.entity';
import { Admission } from '../../inpatient/entities/admission.entity';

export enum UserRole {
  RECEPTIONIST = 'receptionist',
  DOCTOR = 'doctor',
  LAB_TECHNICIAN = 'lab_technician',
  PHARMACIST = 'pharmacist',
  CASHIER = 'cashier',
  MANAGER = 'manager',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ name: 'password_hash' })
  passwordHash: string;

  @Column({ name: 'full_name' })
  fullName: string;

  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;

  @Column({ name: 'department_id', nullable: true })
  departmentId: string;

  @ManyToOne(() => Department, (dept) => dept.users, { nullable: true })
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @OneToMany(() => PatientVisit, (visit) => visit.doctor)
  visits: PatientVisit[];

  @OneToMany(() => LabOrder, (order) => order.doctor)
  labOrders: LabOrder[];

  @OneToMany(() => LabResult, (result) => result.approvedBy)
  approvedResults: LabResult[];

  @OneToMany(() => Prescription, (rx) => rx.doctor)
  prescriptions: Prescription[];

  @OneToMany(() => DispenseHistory, (dh) => dh.dispensedBy)
  dispenseHistory: DispenseHistory[];

  @OneToMany(() => Payment, (payment) => payment.cashier)
  payments: Payment[];

  @OneToMany(() => Appointment, (appt) => appt.doctor)
  appointments: Appointment[];

  @OneToMany(() => Admission, (admission) => admission.doctor)
  admissions: Admission[];
}
