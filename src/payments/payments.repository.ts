import { DataSource, Repository } from 'typeorm';
import { Payment } from './payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import {
    ConflictException,
    InternalServerErrorException,
    Injectable,
} from '@nestjs/common';

@Injectable()
export class PaymentRepository extends Repository<Payment> {
    constructor(private dataSource: DataSource){
        super(Payment, dataSource.createEntityManager());
    }
    async  createPayment(
        createpaymentDto: CreatePaymentDto,
      ): Promise<Payment> {
        const { salesOrderID, paymentMethod, status} = createpaymentDto;
    
        const payment = this.create();
        payment.salesOrderID = salesOrderID;
        payment.paymentMethod = paymentMethod;
        payment.status = status;
        try {
          await payment.save();
          return payment;
        } catch (error) {
          if (error.code.toString() === '23505') {
            throw new ConflictException('salesOrderID já existe');
          } else {
            throw new InternalServerErrorException(
              'Erro ao salvar o pagamento no banco de dados',
            );
          }
        }
    }
}