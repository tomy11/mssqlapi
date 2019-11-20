import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BonusrateService } from '../services/bonusrate.service';
import { BonusrateController } from '../controllers/bonusrate.controller';
import { BonusRate } from '../entity/bonusrate.entity'

@Module({
    imports: [TypeOrmModule.forFeature([BonusRate])],
    providers: [BonusrateService],
    controllers: [BonusrateController],
    exports: [BonusrateService]
})
export class BonusrateModule {}
