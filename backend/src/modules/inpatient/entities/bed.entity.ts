import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Department } from '../../user/entities/department.entity';
import { Admission } from './admission.entity';

export enum BedStatus {
  AVAILABLE = 'available',
  OCCUPIED = 'occupied',
  MAINTENANCE = 'maintenance',
}

@Entity('beds')
export class Bed {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'department_id' })
  departmentId: string;

  @Column({ name: 'bed_code', unique: true })
  bedCode: string;

  @Column({ name: 'room_code' })
  roomCode: string;

  @Column({ type: 'enum', enum: BedStatus, default: BedStatus.AVAILABLE })
  status: BedStatus;

  @ManyToOne(() => Department, (dept) => dept.beds)
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @OneToMany(() => Admission, (admission) => admission.bed)
  admissions: Admission[];
}
