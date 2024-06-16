export class CreatePaymentDto {
  constructor(
      readonly salesOrderID: string,
      readonly paymentMethod: string,
      readonly status: boolean,
      readonly transactionAmount: number,
  ){}
}