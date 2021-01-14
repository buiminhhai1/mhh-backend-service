import { Module } from "@nestjs/common";
import * as repositories from './repositories';
import * as controllers from './controllers';
import * as services from './services';
import { TypeOrmModule } from "@nestjs/typeorm";
import { scanComponents, scanEntities } from "../../common";
@Module({
  imports: [TypeOrmModule.forFeature([...scanEntities(repositories)])],
  providers: [...scanComponents(services)],
  controllers: [...scanComponents(controllers)]
})
export class MuaHangModule {

}
