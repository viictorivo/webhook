
import { Controller, Post, Body } from '@nestjs/common'
import { ReturnPymentDto } from './dto/return-payment.dto';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Controller('payments')
export class PaymentsController {
    constructor(private paymentService: PaymentsService) {}

    @Post()
    async createPayment(
      @Body() createPaymentDto: CreatePaymentDto,
    ): Promise<ReturnPymentDto> {
      const payment = await this.paymentService.createStatusPayment(createPaymentDto);
      return {
        payment,
        message: 'pagamento cadastrado com sucesso',
      };
    }
}
