import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BonusRate } from '../entity/bonusrate.entity';

@Injectable()
export class BonusrateService {
    constructor(@InjectRepository(BonusRate)
    private readonly bonusRateRepository: Repository<BonusRate>,
    ) { }

    async findAll(): Promise<BonusRate[]> {
        return await this.bonusRateRepository.find();
    }

    async findById(id: any): Promise<BonusRate[]> {
        return await this.bonusRateRepository.find(id);
    }

    async save(data) {
        const bonus = new BonusRate();
            bonus.BonusRate = data.BonusRate,
            bonus.YearDuration = data.YearDuration
        await this.bonusRateRepository.save(bonus);
    }

    async update(data, id: number) {
        const bonus = await this.bonusRateRepository.findOne(id);
            bonus.BonusRate = data.BonusRate,
            bonus.YearDuration = data.YearDuration
        await this.bonusRateRepository.save(bonus);
    }

}
