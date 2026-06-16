import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';
import { Patient } from '../../patient/entities/patient.entity';
import { Department } from '../../user/entities/department.entity';
import { Appointment } from '../../appointment/entities/appointment.entity';

export enum QueueStatus {
  WAITING = 'waiting',
  CALLED = 'called',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
  SKIPPED = 'skipped',
}

@Entity('queue_tickets')
export class QueueTicket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'patient_id' })
  patientId: string;

  @Column({ name: 'department_id' })
  departmentId: string;

  @Column({ name: 'appointment_id', nullable: true })
  appointmentId: string;

  @Column({ name: 'ticket_number' })
  ticketNumber: number;

  @Column({ type: 'enum', enum: QueueStatus, default: QueueStatus.WAITING })
  status: QueueStatus;

  @CreateDateColumn({ name: 'issued_at' })
  issuedAt: Date;

  @Column({ name: 'called_at', nullable: true })
  calledAt: Date;

  @ManyToOne(() => Patient, (patient) => patient.queueTickets)
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @ManyToOne(() => Department, (dept) => dept.queueTickets)
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @OneToOne(() => Appointment, (appt) => appt.queueTicket, { nullable: true })
  @JoinColumn({ name: 'appointment_id' })
  appointment: Appointment;
}
