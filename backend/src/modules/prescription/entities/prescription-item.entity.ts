import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Prescription } from './prescription.entity';
import { Medication } from './medication.entity';
import { DispenseHistory } from '../../pharmacy/entities/dispense-history.entity';

@Entity('prescription_items')
export class PrescriptionItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'prescription_id' })
  prescriptionId: string;

  @Column({ name: 'medication_id' })
  medicationId: string;

  // e.g. "1 viên"
  @Column()
  dosage: string;

  // e.g. "3 lần/ngày"
  @Column()
  frequency: string;

  @Column({ name: 'duration_days' })
  durationDays: number;

  @Column()
  quantity: number;

  @Column({ nullable: true, type: 'text' })
  notes: string;

  @ManyToOne(() => Prescription, (rx) => rx.items)
  @JoinColumn({ name: 'prescription_id' })
  prescription: Prescription;

  @ManyToOne(() => Medication, (med) => med.prescriptionItems)
  @JoinColumn({ name: 'medication_id' })
  medication: Medication;

  @OneToMany(() => DispenseHistory, (dh) => dh.prescriptionItem)
  dispenseHistory: DispenseHistory[];
}
