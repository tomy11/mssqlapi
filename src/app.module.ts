import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BonusrateModule } from './modules/bonusrate.module';


@Module({
  imports: [TypeOrmModule.forRoot(), BonusrateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
