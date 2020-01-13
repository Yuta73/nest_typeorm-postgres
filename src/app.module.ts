import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './car/cars.entity';
import { PhotoModule } from './car/car.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'p2873541',
      password: '',
      database: 'transportation',
      entities: [Cars],
      synchronize: true,
    }),
    PhotoModule,
  ],
})
export class AppModule {}
