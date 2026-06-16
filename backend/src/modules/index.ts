// Patient group
export { Patient } from './patient/entities/patient.entity';
export { PatientVisit } from './exam/entities/patient-visit.entity';
export { VitalSign } from './exam/entities/vital-sign.entity';

// Appointment & Queue group
export { Appointment } from './appointment/entities/appointment.entity';
export { QueueTicket } from './queue/entities/queue-ticket.entity';

// User & Department group
export { User } from './user/entities/user.entity';
export { Department } from './user/entities/department.entity';

// Lab & Diagnosis group
export { LabService } from './lab/entities/lab-service.entity';
export { LabOrder } from './lab/entities/lab-order.entity';
export { LabResult } from './lab/entities/lab-result.entity';
export { Icd10Code } from './lab/entities/icd10-code.entity';
export { VisitDiagnosis } from './lab/entities/visit-diagnosis.entity';

// Prescription & Medication group
export { Medication } from './prescription/entities/medication.entity';
export { Prescription } from './prescription/entities/prescription.entity';
export { PrescriptionItem } from './prescription/entities/prescription-item.entity';

// Pharmacy group
export { DrugBatch } from './pharmacy/entities/drug-batch.entity';
export { DispenseHistory } from './pharmacy/entities/dispense-history.entity';

// Billing group
export { Invoice } from './billing/entities/invoice.entity';
export { InvoiceItem } from './billing/entities/invoice-item.entity';
export { Payment } from './billing/entities/payment.entity';

// Inpatient group
export { Bed } from './inpatient/entities/bed.entity';
export { Admission } from './inpatient/entities/admission.entity';
