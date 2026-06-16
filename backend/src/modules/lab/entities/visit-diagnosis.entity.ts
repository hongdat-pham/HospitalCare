import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PatientVisit } from '../../exam/entities/patient-visit.entity';
import { Icd10Code } from './icd10-code.entity';

export enum DiagnosisType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

@Entity('visit_diagnoses')
export class VisitDiagnosis {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'visit_id' })
  visitId: string;

  @Column({ name: 'icd10_id' })
  icd10Id: string;

  @Column({
    name: 'diagnosis_type',
    type: 'enum',
    enum: DiagnosisType,
    default: DiagnosisType.PRIMARY,
  })
  diagnosisType: DiagnosisType;

  @ManyToOne(() => PatientVisit, (visit) => visit.diagnoses)
  @JoinColumn({ name: 'visit_id' })
  visit: PatientVisit;

  @ManyToOne(() => Icd10Code, (icd10) => icd10.visitDiagnoses)
  @JoinColumn({ name: 'icd10_id' })
  icd10: Icd10Code;
}
