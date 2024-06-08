import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentRepository } from './payments.repository';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';

@Module({imports: [TypeOrmModule.forFeature([PaymentRepository])], providers: [PaymentsService], controllers: [PaymentsController],})
export class PaymentsModule {}
