import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { Patient } from '../../patient/entities/patient.entity';
import { PatientVisit } from '../../exam/entities/patient-visit.entity';
import { InvoiceItem } from './invoice-item.entity';
import { Payment } from './payment.entity';

export enum InvoiceStatus {
  DRAFT = 'draft',
  PENDING = 'pending',
  PAID = 'paid',
  CANCELLED = 'cancelled',
}

@Entity('invoices')
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'visit_id' })
  visitId: string;

  @Column({ name: 'patient_id' })
  patientId: string;

  @Column({ name: 'total_amount', type: 'decimal', precision: 12, scale: 2 })
  totalAmount: number;

  @Column({
    name: 'insurance_covered',
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
  })
  insuranceCovered: number;

  @Column({ name: 'patient_pays', type: 'decimal', precision: 12, scale: 2 })
  patientPays: number;

  @Column({
    name: 'prepaid_amount',
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
  })
  prepaidAmount: number;

  @Column({ type: 'enum', enum: InvoiceStatus, default: InvoiceStatus.DRAFT })
  status: InvoiceStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => PatientVisit, (visit) => visit.invoices)
  @JoinColumn({ name: 'visit_id' })
  visit: PatientVisit;

  @ManyToOne(() => Patient, (patient) => patient.invoices)
  @JoinColumn({ name: 'patient_id' })
  patient: Patient;

  @OneToMany(() => InvoiceItem, (item) => item.invoice)
  items: InvoiceItem[];

  @OneToMany(() => Payment, (payment) => payment.invoice)
  payments: Payment[];
}
