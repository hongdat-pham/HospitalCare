import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { PatientVisit } from '../../exam/entities/patient-visit.entity';
import { User } from '../../user/entities/user.entity';
import { PrescriptionItem } from './prescription-item.entity';
import { DispenseHistory } from '../../pharmacy/entities/dispense-history.entity';

export enum PrescriptionStatus {
  PENDING = 'pending',
  DISPENSED = 'dispensed',
  CANCELLED = 'cancelled',
}

@Entity('prescriptions')
export class Prescription {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'visit_id' })
  visitId: string;

  @Column({ name: 'doctor_id' })
  doctorId: string;

  @Column({
    type: 'enum',
    enum: PrescriptionStatus,
    default: PrescriptionStatus.PENDING,
  })
  status: PrescriptionStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => PatientVisit, (visit) => visit.prescriptions)
  @JoinColumn({ name: 'visit_id' })
  visit: PatientVisit;

  @ManyToOne(() => User, (user) => user.prescriptions)
  @JoinColumn({ name: 'doctor_id' })
  doctor: User;

  @OneToMany(() => PrescriptionItem, (item) => item.prescription)
  items: PrescriptionItem[];

  @OneToMany(() => DispenseHistory, (dh) => dh.prescription)
  dispenseHistory: DispenseHistory[];
}
