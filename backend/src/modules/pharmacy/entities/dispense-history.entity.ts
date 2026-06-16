import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Prescription } from '../../prescription/entities/prescription.entity';
import { DrugBatch } from './drug-batch.entity';
import { PrescriptionItem } from '../../prescription/entities/prescription-item.entity';
import { User } from '../../user/entities/user.entity';

@Entity('dispense_history')
export class DispenseHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'prescription_id' })
  prescriptionId: string;

  @Column({ name: 'batch_id' })
  batchId: string;

  @Column({ name: 'prescription_item_id' })
  prescriptionItemId: string;

  @Column({ name: 'dispensed_by' })
  dispensedById: string;

  @Column({ name: 'quantity_dispensed' })
  quantityDispensed: number;

  @CreateDateColumn({ name: 'dispensed_at' })
  dispensedAt: Date;

  @ManyToOne(() => Prescription, (rx) => rx.dispenseHistory)
  @JoinColumn({ name: 'prescription_id' })
  prescription: Prescription;

  @ManyToOne(() => DrugBatch, (batch) => batch.dispenseHistory)
  @JoinColumn({ name: 'batch_id' })
  batch: DrugBatch;

  @ManyToOne(() => PrescriptionItem, (item) => item.dispenseHistory)
  @JoinColumn({ name: 'prescription_item_id' })
  prescriptionItem: PrescriptionItem;

  @ManyToOne(() => User, (user) => user.dispenseHistory)
  @JoinColumn({ name: 'dispensed_by' })
  dispensedBy: User;
}
