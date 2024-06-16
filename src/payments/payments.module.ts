import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { PaymentEntity } from './payment.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PaymentEntity])], 
    providers: [PaymentsService], 
    controllers: [PaymentsController],})
export class PaymentsModule {}
