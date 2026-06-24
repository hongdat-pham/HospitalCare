// src/database/seeds/users.seed.ts
import * as bcrypt from 'bcrypt';
import { DataSource } from 'typeorm';

export async function seedUsers(dataSource: DataSource) {
  const hash = (pw: string) => bcrypt.hash(pw, 10);

  const users = [
    {
      username: 'letan01',
      password: await hash('password123'),
      full_name: 'Nguyen Le Tan',
      role: 'receptionist',
    },
    {
      username: 'bacsi01',
      password: await hash('password123'),
      full_name: 'Tran Bac Si',
      role: 'doctor',
    },
    {
      username: 'ktv01',
      password: await hash('password123'),
      full_name: 'Le KTV CLS',
      role: 'lab_technician',
    },
    {
      username: 'duocsi01',
      password: await hash('password123'),
      full_name: 'Pham Duoc Si',
      role: 'pharmacist',
    },
    {
      username: 'thungan01',
      password: await hash('password123'),
      full_name: 'Vo Thu Ngan',
      role: 'cashier',
    },
    {
      username: 'quanly01',
      password: await hash('password123'),
      full_name: 'Hoang Quan Ly',
      role: 'manager',
    },
  ];

  for (const user of users) {
    await dataSource.query(
      `INSERT INTO users (id, username, password_hash, full_name, role, is_active)
       VALUES (gen_random_uuid(), $1, $2, $3, $4, true)
       ON CONFLICT (username) DO NOTHING`,
      [user.username, user.password, user.full_name, user.role],
    );
  }

  console.log(`Seeded ${users.length} users`);
}
