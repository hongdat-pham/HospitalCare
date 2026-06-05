# HospitalCare

🇻🇳 Vietnamese Version: [README.vi.md](https://github.com/hongdat-pham/HospitalCare/blob/main/README.vi.md)

## Overview

HospitalCare is a Hospital Information System (HIS) designed to support outpatient clinical workflows, electronic medical records (EMR), laboratory services, pharmacy operations, and billing management.

This project is being developed as a graduation project with a focus on healthcare workflow digitalization and modern web technologies.

---

## Features

### Patient Management

- Patient registration
- Patient profile management
- Medical history tracking

### Appointment Management

- Appointment scheduling
- Queue management
- Visit tracking

### Electronic Medical Records (EMR)

- Clinical examination records
- Vital signs recording
- ICD-10 diagnosis management

### Laboratory Management

- Laboratory test orders
- Result processing
- Real-time result synchronization

### Prescription Management

- Electronic prescriptions
- Medication tracking
- Treatment history

### Pharmacy Management

- Inventory management
- Medication dispensing
- Stock monitoring

### Billing Management

- Service billing
- Invoice generation
- Payment processing

---

## User Roles

| Role                  | Description                                       |
| --------------------- | ------------------------------------------------- |
| Manager               | System configuration and reporting                |
| Receptionist          | Patient registration and appointment management   |
| Doctor                | Clinical examination, diagnosis, and prescription |
| Laboratory Technician | Laboratory test processing and result submission  |
| Pharmacist            | Pharmacy and inventory management                 |
| Cashier               | Billing and payment processing                    |

---

## Technology Stack

### Backend

- NestJS
- PostgreSQL
- TypeORM
- JWT Authentication
- Role-Based Access Control (RBAC)
- Socket.IO
- Swagger

### Frontend

- React
- TypeScript
- Tailwind CSS
- React Router
- TanStack Query
- Zustand

### Deployment

- Railway (Backend)
- Vercel (Frontend)

---

## Project Structure

```text
hospitalcare/
│
├── docs/
│   ├── ERD/
│   ├── SDD/
│   ├── SRS/
│   └── PROJECT_TIMELINE.docx
├── backend/
├── frontend/
├── README.md
└── README.vi.md
```

---

## Documentation

Project documentation is available in the `docs/` directory:

- Software Requirements Specification (SRS)
- Software Design Description (SDD)
- Entity Relationship Diagram (ERD)
- Test Documentation

---

## Project Scope

### Included

- Outpatient Department (OPD)
- Basic Inpatient Admission
- Laboratory Services
- Pharmacy Operations
- Billing and Payments

### Excluded

- ICU Management
- Surgery Management
- Medical Device Integration
- Advanced Insurance Integration

---

## Author

Pham Hong Dat
