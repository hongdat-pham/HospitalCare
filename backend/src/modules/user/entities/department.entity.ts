import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PatientVisit } from '../../exam/entities/patient-visit.entity';
import { Appointment } from '../../appointment/entities/appointment.entity';
import { QueueTicket } from '../../queue/entities/queue-ticket.entity';
import { LabService } from '../../lab/entities/lab-service.entity';
import { User } from './user.entity';
import { Bed } from '../../inpatient/entities/bed.entity';
import { Admission } from '../../inpatient/entities/admission.entity';

export enum DepartmentType {
  CLINICAL = 'clinical',
  PARACLINICAL = 'paraclinical',
  PHARMACY = 'pharmacy',
  ADMIN = 'admin',
}

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: DepartmentType })
  type: DepartmentType;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => PatientVisit, (visit) => visit.department)
  visits: PatientVisit[];

  @OneToMany(() => Appointment, (appt) => appt.department)
  appointments: Appointment[];

  @OneToMany(() => QueueTicket, (ticket) => ticket.department)
  queueTickets: QueueTicket[];

  @OneToMany(() => LabService, (service) => service.department)
  labServices: LabService[];

  @OneToMany(() => User, (user) => user.department)
  users: User[];

  @OneToMany(() => Bed, (bed) => bed.department)
  beds: Bed[];

  @OneToMany(() => Admission, (admission) => admission.department)
  admissions: Admission[];
}
