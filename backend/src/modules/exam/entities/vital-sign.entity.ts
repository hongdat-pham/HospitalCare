import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { PatientVisit } from './patient-visit.entity';

@Entity('vital_signs')
export class VitalSign {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'visit_id' })
  visitId: string;

  @ManyToOne(() => PatientVisit, (visit) => visit.vitalSigns)
  @JoinColumn({ name: 'visit_id' })
  visit: PatientVisit;

  @Column({ name: 'heart_rate', type: 'float', nullable: true })
  heartRate: number;

  @Column({ name: 'blood_pressure_sys', type: 'float', nullable: true })
  bloodPressureSys: number;

  @Column({ name: 'blood_pressure_dia', type: 'float', nullable: true })
  bloodPressureDia: number;

  @Column({ type: 'float', nullable: true })
  temperature: number;

  @Column({ name: 'respiratory_rate', type: 'float', nullable: true })
  respiratoryRate: number;

  @Column({ type: 'float', nullable: true })
  weight: number;

  @Column({ type: 'float', nullable: true })
  height: number;

  @Column({ type: 'float', nullable: true })
  spo2: number;

  @CreateDateColumn({ name: 'recorded_at' })
  recordedAt: Date;
}
