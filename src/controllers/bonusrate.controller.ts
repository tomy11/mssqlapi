import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { BonusrateService } from '../services/bonusrate.service';
import { BonusRate } from '../entity/bonusrate.entity'

@Controller('bonusrate')
export class BonusrateController {
    constructor(private readonly bonusrateService: BonusrateService) { }

    @Get()
    findAll(): Promise<BonusRate[]> {
        return this.bonusrateService.findAll();
    }
    @Get('{id}')
    findName(@Param() params) {
        return this.bonusrateService.findById(params.id);
    }
    @Post()
    savePhoto(@Body() bonus: string) {
        let data = this.bonusrateService.save(bonus);
        return data;
    }

    @Patch('{id}')
    updatePhoto(@Body() bonus: any, id: number){
        
        let data = this.bonusrateService.update(bonus, id);
        return data;
        
    }
}
