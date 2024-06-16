
import { Controller, Post, Body, Get } from '@nestjs/common'
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentEntity } from './payment.entity';
import { v4 as uuid } from 'uuid';

@Controller('payments')
export class PaymentsController {
    constructor(private paymentService: PaymentsService, 
    ) {}

    @Post()
    async createPayment(@Body() paymentData: CreatePaymentDto ){
      const paymentEntity = new PaymentEntity();
      paymentEntity.salesOrderID = paymentData.salesOrderID
      paymentEntity.paymentMethod = paymentData.paymentMethod
      paymentEntity.status = paymentData.status
      paymentEntity.transactionAmount = paymentData.transactionAmount
      paymentEntity.id = uuid();

      const savedPayments = await this.paymentService.createPayments(paymentEntity);
      return savedPayments
    }

    @Get()
    async listPayments(){
      const savedPayments = await this.paymentService.listPayments();
      return savedPayments
    }
}
