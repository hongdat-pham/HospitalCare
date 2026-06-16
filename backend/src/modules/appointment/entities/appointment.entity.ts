import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import { Patient } from '../../patient/entities/patient.entity';
import { Department } from '../../user/entities/department.entity';
import { User } from '../../user/entities/user.entity';
import { PatientVisit } from '../../exam/entities/patient-visit.entity';
import { QueueTicket } from '../../queue/entities/queue-ticket.entity';

export enum AppointmentStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
  NO_SHOW = 'no_show',
}

@Entity('appointments')
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'patient_id' })
  patientId: string;

  @Column({ name: 'department_id' })
  departmentId: string;

  @Column({ name: 'doctor_id', nullable: true })
  doctorId: string;

  @Column({ name: 'visit_id', nullable: true })
  visitId: string;

  @Column({ name: 'scheduled_at' })
  scheduledAt: Date;

  @Column({
    type: 'enum',
    enum: AppointmentStatus,
    default: AppointmentStatus.PENDING,
  })
  status: AppointmentStatus;

  @Column({ nullable: true, type: 'text' })
  notes: string;

  @ManyToOne(() => Patient, (patient) => patient.appointments)
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @ManyToOne(() => Department, (dept) => dept.appointments)
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @ManyToOne(() => User, (user) => user.appointments, { nullable: true })
  @JoinColumn({ name: 'doctor_id' })
  doctor: User;

  @OneToOne(() => PatientVisit, (visit) => visit.appointment, {
    nullable: true,
  })
  @JoinColumn({ name: 'visit_id' })
  visit: PatientVisit;

  @OneToOne(() => QueueTicket, (ticket) => ticket.appointment)
  queueTicket: QueueTicket;
}
