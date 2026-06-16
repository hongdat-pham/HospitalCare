import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';
import { Patient } from '../../patient/entities/patient.entity';
import { User } from '../../user/entities/user.entity';
import { Department } from '../../user/entities/department.entity';
import { VitalSign } from './vital-sign.entity';
import { LabOrder } from '../../lab/entities/lab-order.entity';
import { Prescription } from '../../prescription/entities/prescription.entity';
import { VisitDiagnosis } from '../../lab/entities/visit-diagnosis.entity';
import { Invoice } from '../../billing/entities/invoice.entity';
import { Appointment } from '../../appointment/entities/appointment.entity';

export enum VisitStatus {
  WAITING = 'waiting',
  IN_PROGRESS = 'in_progress',
  PENDING_RESULTS = 'pending_results',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity('patient_visits')
export class PatientVisit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'patient_id' })
  patientId: string;

  @Column({ name: 'doctor_id', nullable: true })
  doctorId: string;

  @Column({ name: 'department_id' })
  departmentId: string;

  @Column({ type: 'enum', enum: VisitStatus, default: VisitStatus.WAITING })
  status: VisitStatus;

  @Column({ name: 'chief_complaint', nullable: true })
  chiefComplaint: string;

  @Column({ nullable: true, type: 'text' })
  symptoms: string;

  @Column({ name: 'physical_exam', nullable: true, type: 'text' })
  physicalExam: string;

  @Column({ name: 'diagnosis_note', nullable: true, type: 'text' })
  diagnosisNote: string;

  @CreateDateColumn({ name: 'visited_at' })
  visitedAt: Date;

  @Column({ name: 'ended_at', nullable: true })
  endedAt: Date;

  @ManyToOne(() => Patient, (patient) => patient.visits)
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @ManyToOne(() => User, (user) => user.visits, { nullable: true })
  @JoinColumn({ name: 'doctor_id' })
  doctor: User;

  @ManyToOne(() => Department, (dept) => dept.visits)
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @OneToMany(() => VitalSign, (vs) => vs.visit)
  vitalSigns: VitalSign[];

  @OneToMany(() => LabOrder, (order) => order.visit)
  labOrders: LabOrder[];

  @OneToMany(() => Prescription, (rx) => rx.visit)
  prescriptions: Prescription[];

  @OneToMany(() => VisitDiagnosis, (vd) => vd.visit)
  diagnoses: VisitDiagnosis[];

  @OneToMany(() => Invoice, (invoice) => invoice.visit)
  invoices: Invoice[];

  @OneToOne(() => Appointment, (appt) => appt.visit)
  appointment: Appointment;
}
