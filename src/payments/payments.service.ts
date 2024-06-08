import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentRepository } from './payments.repository';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { Payment } from './payment.entity';

@Injectable()
export class PaymentsService {
    constructor(
        @InjectRepository(PaymentRepository)
        private paymentRepository: PaymentRepository,
      ) {} 

      async createStatusPayment(createPaymentDto: CreatePaymentDto): Promise<Payment> {
          return this.paymentRepository.createPayment(createPaymentDto);       
      }

}
