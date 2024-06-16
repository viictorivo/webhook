import {
    BaseEntity,
    Entity,
    Unique,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  @Unique(['salesOrderID'])
  export class PaymentEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ nullable: false, type: 'varchar', length: 200 })
    salesOrderID: string;
  
    @Column({ nullable: false, type: 'varchar', length: 20 })
    paymentMethod: string;
  
    @Column({ nullable: false, default: true })
    status: boolean;
      
    @Column({ nullable: true, type: 'int'})
    transactionAmount: number;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }