import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { seedUsers } from './database/seeds/users.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('HospitalCare API')
    .setDescription(
      'API documentation for HospitalCare Hospital Management System',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const dataSource = app.get(DataSource);
  const userCount = await dataSource.query('SELECT COUNT(*) FROM users');
  if (parseInt(userCount[0].count) === 0) {
    await seedUsers(dataSource);
  }

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
