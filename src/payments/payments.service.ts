import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListPaymentDto } from './dto/list-payment.dto';
import { PaymentEntity } from './payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentsService {
    constructor(
        @InjectRepository(PaymentEntity)
        private paymentRepository: Repository<PaymentEntity>,
      ) {} 

      async listPayments(){
          const savedPayments = await this.paymentRepository.find()
          const listPayments = savedPayments.map(
              (payment) => new ListPaymentDto(payment.id, payment.salesOrderID, payment.status)
          )

          return listPayments
      }

      async createPayments(paymentEntity: PaymentEntity){
        await this.paymentRepository.save(paymentEntity)
    }

}
