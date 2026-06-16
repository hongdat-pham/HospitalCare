import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PrescriptionItem } from './prescription-item.entity';
import { DrugBatch } from '../../pharmacy/entities/drug-batch.entity';

@Entity('medications')
export class Medication {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'brand_name' })
  brandName: string;

  @Column({ name: 'active_ingredient' })
  activeIngredient: string;

  // e.g. tablet, capsule, syrup, injection
  @Column({ name: 'dosage_form' })
  dosageForm: string;

  @Column()
  strength: string;

  // dispense/dosage unit: viên, chai, ống — distinct from dosage_form
  @Column()
  unit: string;

  // e.g. oral, intravenous, topical
  @Column()
  route: string;

  @Column({ name: 'byt_code', nullable: true })
  bytCode: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @OneToMany(() => PrescriptionItem, (item) => item.medication)
  prescriptionItems: PrescriptionItem[];

  @OneToMany(() => DrugBatch, (batch) => batch.medication)
  batches: DrugBatch[];
}
