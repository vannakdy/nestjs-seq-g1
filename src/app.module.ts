import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [CustomerModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
