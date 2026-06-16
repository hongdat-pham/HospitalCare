import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { PatientVisit } from '../../exam/entities/patient-visit.entity';
import { Appointment } from '../../appointment/entities/appointment.entity';
import { QueueTicket } from '../../queue/entities/queue-ticket.entity';
import { Invoice } from '../../billing/entities/invoice.entity';
import { Admission } from '../../inpatient/entities/admission.entity';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'patient_code', unique: true })
  patientCode: string;

  @Column({ name: 'full_name' })
  fullName: string;

  @Column({ name: 'date_of_birth', type: 'date' })
  dateOfBirth: Date;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;

  @Column()
  phone: string;

  @Column({ nullable: true })
  cccd: string;

  @Column({ name: 'insurance_number', nullable: true })
  insuranceNumber: string;

  @Column({ name: 'insurance_type', nullable: true })
  insuranceType: string;

  @Column({ nullable: true })
  address: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => PatientVisit, (visit) => visit.patient)
  visits: PatientVisit[];

  @OneToMany(() => Appointment, (appt) => appt.patient)
  appointments: Appointment[];

  @OneToMany(() => QueueTicket, (ticket) => ticket.patient)
  queueTickets: QueueTicket[];

  @OneToMany(() => Invoice, (invoice) => invoice.patient)
  invoices: Invoice[];

  @OneToMany(() => Admission, (admission) => admission.patient)
  admissions: Admission[];
}
