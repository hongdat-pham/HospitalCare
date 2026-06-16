import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Invoice } from './invoice.entity';

export enum InvoiceItemType {
  EXAM_FEE = 'exam_fee',
  LAB_SERVICE = 'lab_service',
  MEDICATION = 'medication',
}

@Entity('invoice_items')
export class InvoiceItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'invoice_id' })
  invoiceId: string;

  @Column({ name: 'item_type', type: 'enum', enum: InvoiceItemType })
  itemType: InvoiceItemType;

  // Polymorphic — no FK constraint
  // exam_fee    -> patient_visits.id
  // lab_service -> lab_orders.id
  // medication  -> prescription_items.id
  @Column({ name: 'ref_id', type: 'uuid' })
  refId: string;

  @Column()
  description: string;

  @Column({ name: 'unit_price', type: 'decimal', precision: 12, scale: 2 })
  unitPrice: number;

  @Column()
  quantity: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  subtotal: number;

  @ManyToOne(() => Invoice, (invoice) => invoice.items)
  @JoinColumn({ name: 'invoice_id' })
  invoice: Invoice;
}
