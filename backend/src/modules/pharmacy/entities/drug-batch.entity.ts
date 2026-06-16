import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Medication } from '../../prescription/entities/medication.entity';
import { DispenseHistory } from './dispense-history.entity';

@Entity('drug_batches')
export class DrugBatch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'medication_id' })
  medicationId: string;

  @Column({ name: 'batch_number' })
  batchNumber: string;

  @Column({ name: 'expiry_date', type: 'date' })
  expiryDate: Date;

  @Column()
  quantity: number;

  // Release logic handled at service layer, not DB constraint
  @Column({ name: 'quantity_reserved', default: 0 })
  quantityReserved: number;

  @Column({ name: 'unit_price', type: 'decimal', precision: 12, scale: 2 })
  unitPrice: number;

  @ManyToOne(() => Medication, (med) => med.batches)
  @JoinColumn({ name: 'medication_id' })
  medication: Medication;

  @OneToMany(() => DispenseHistory, (dh) => dh.batch)
  dispenseHistory: DispenseHistory[];
}
