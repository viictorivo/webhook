import { Payment } from '../payment.entity';

export class ReturnPymentDto {
  payment: Payment;
  message: string;
}