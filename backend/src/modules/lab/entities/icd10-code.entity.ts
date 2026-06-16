import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { VisitDiagnosis } from './visit-diagnosis.entity';

@Entity('icd10_codes')
export class Icd10Code {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  code: string;

  @Column({ name: 'description_vi' })
  descriptionVi: string;

  @Column({ name: 'description_en', nullable: true })
  descriptionEn: string;

  @Column({ nullable: true })
  category: string;

  @OneToMany(() => VisitDiagnosis, (vd) => vd.icd10)
  visitDiagnoses: VisitDiagnosis[];
}
