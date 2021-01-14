import { Module } from "@nestjs/common";
import * as repositories from './tac-gia.repository';
import * as controllers from './tac-gia.controller';
import * as services from './tac-gia.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { scanComponents, scanEntities } from "../../common";
import { AuthModule } from "../auth";

@Module({
  imports: [TypeOrmModule.forFeature([...scanEntities(repositories)]), AuthModule],
  controllers: [...scanComponents(controllers)],
  providers: [...scanComponents(services)]
})
export class TacGiaModule {

}
