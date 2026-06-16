import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Department } from '../../user/entities/department.entity';
import { LabOrder } from './lab-order.entity';

@Entity('lab_services')
export class LabService {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ name: 'service_type' })
  serviceType: string;

  @Column({ name: 'department_id' })
  departmentId: string;

  @ManyToOne(() => Department, (dept) => dept.labServices)
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price: number;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @OneToMany(() => LabOrder, (order) => order.service)
  orders: LabOrder[];
}
