import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Patient } from '../../patient/entities/patient.entity';
import { Bed } from './bed.entity';
import { User } from '../../user/entities/user.entity';
import { Department } from '../../user/entities/department.entity';

export enum AdmissionStatus {
  ACTIVE = 'active',
  DISCHARGED = 'discharged',
  TRANSFERRED = 'transferred',
}

@Entity('admissions')
export class Admission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'patient_id' })
  patientId: string;

  @Column({ name: 'bed_id' })
  bedId: string;

  @Column({ name: 'doctor_id' })
  doctorId: string;

  @Column({ name: 'department_id' })
  departmentId: string;

  @CreateDateColumn({ name: 'admitted_at' })
  admittedAt: Date;

  @Column({ name: 'discharged_at', nullable: true })
  dischargedAt: Date;

  @Column({
    type: 'enum',
    enum: AdmissionStatus,
    default: AdmissionStatus.ACTIVE,
  })
  status: AdmissionStatus;

  @Column({ nullable: true, type: 'text' })
  notes: string;

  @ManyToOne(() => Patient, (patient) => patient.admissions)
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @ManyToOne(() => Bed, (bed) => bed.admissions)
  @JoinColumn({ name: 'bed_id' })
  bed: Bed;

  @ManyToOne(() => User, (user) => user.admissions)
  @JoinColumn({ name: 'doctor_id' })
  doctor: User;

  @ManyToOne(() => Department, (dept) => dept.admissions)
  @JoinColumn({ name: 'department_id' })
  department: Department;
}
