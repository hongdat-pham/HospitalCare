import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';
import { PatientVisit } from '../../exam/entities/patient-visit.entity';
import { User } from '../../user/entities/user.entity';
import { LabService } from './lab-service.entity';
import { LabResult } from './lab-result.entity';

export enum LabOrderStatus {
  ORDERED = 'ordered',
  RECEIVED = 'received',
  IN_PROGRESS = 'in_progress',
  APPROVED = 'approved',
}

@Entity('lab_orders')
export class LabOrder {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'visit_id' })
  visitId: string;

  @Column({ name: 'doctor_id' })
  doctorId: string;

  @Column({ name: 'service_id' })
  serviceId: string;

  @Column({
    type: 'enum',
    enum: LabOrderStatus,
    default: LabOrderStatus.ORDERED,
  })
  status: LabOrderStatus;

  @Column({ nullable: true, type: 'text' })
  notes: string;

  @CreateDateColumn({ name: 'ordered_at' })
  orderedAt: Date;

  @ManyToOne(() => PatientVisit, (visit) => visit.labOrders)
  @JoinColumn({ name: 'visit_id' })
  visit: PatientVisit;

  @ManyToOne(() => User, (user) => user.labOrders)
  @JoinColumn({ name: 'doctor_id' })
  doctor: User;

  @ManyToOne(() => LabService, (service) => service.orders)
  @JoinColumn({ name: 'service_id' })
  service: LabService;

  @OneToOne(() => LabResult, (result) => result.order)
  result: LabResult;
}
