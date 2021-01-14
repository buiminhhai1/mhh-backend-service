import { NguoiDungModule } from './modules/nguoi-dung';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AdminContextMiddleware, AuthMiddleware, JWTConfigurationProvider, TenantContextMiddleware } from './common/configurations';
import { AuthModule, AuthService } from './modules/auth';
import { DatabaseModule } from './modules/database';
import { LoaiSachModule } from './modules/loai-sach';
import { SachModule } from './modules/sach';
import { TacGiaModule } from './modules/tac-gia';
import { NguoiNhanModule } from './modules/nguoi-nhan';
import { MuaHangModule } from './modules/mua-hang';
@Module({
  imports: [
    DatabaseModule.register(),
    NguoiDungModule,
    {
      ...JwtModule.registerAsync(JWTConfigurationProvider),
      global: true,
    },
    AuthModule,
    LoaiSachModule,
    TacGiaModule,
    SachModule,
    NguoiNhanModule,
    MuaHangModule
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    return consumer
      .apply(TenantContextMiddleware).forRoutes('*')
      .apply(AuthMiddleware).exclude('/swagger', '/health', '/auth/register', '/auth/login').forRoutes('*')
      .apply(AdminContextMiddleware).forRoutes('/auth/admin');
  }
}
