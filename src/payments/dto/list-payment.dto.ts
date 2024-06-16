
export class ListPaymentDto {
  constructor(
      readonly id: string,
      readonly salesOrderID: string,
      readonly status: boolean
  ){}
}