import type { Role } from '../types';

export const ROLE_DEFAULT_ROUTES: Record<Role, string> = {
  receptionist: '/receptionist',
  doctor: '/doctor',
  lab_technician: '/lab',
  pharmacist: '/pharmacy',
  cashier: '/cashier',
  manager: '/manager',
};

export const ROLE_LABELS: Record<Role, string> = {
  receptionist: 'Le tan',
  doctor: 'Bac si',
  lab_technician: 'Ky thuat vien CLS',
  pharmacist: 'Duoc si',
  cashier: 'Thu ngan',
  manager: 'Quan ly',
};
