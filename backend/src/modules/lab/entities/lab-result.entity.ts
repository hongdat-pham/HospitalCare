import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';
import { LabOrder } from './lab-order.entity';
import { User } from '../../user/entities/user.entity';

@Entity('lab_results')
export class LabResult {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'order_id' })
  orderId: string;

  @Column({ name: 'approved_by', nullable: true })
  approvedById: string;

  @Column({ name: 'result_text', type: 'text', nullable: true })
  resultText: string;

  @Column({ name: 'image_path', nullable: true })
  imagePath: string;

  @Column({ nullable: true })
  unit: string;

  @Column({ name: 'reference_range', nullable: true })
  referenceRange: string;

  @CreateDateColumn({ name: 'recorded_at' })
  recordedAt: Date;

  @Column({ name: 'approved_at', nullable: true })
  approvedAt: Date;

  @OneToOne(() => LabOrder, (order) => order.result)
  @JoinColumn({ name: 'order_id' })
  order: LabOrder;

  @ManyToOne(() => User, (user) => user.approvedResults, { nullable: true })
  @JoinColumn({ name: 'approved_by' })
  approvedBy: User;
}
