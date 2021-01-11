import { NguoiDungModule } from './modules/nguoi-dung';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthMiddleware, JWTConfigurationProvider } from './common/configurations';
import { AuthModule, AuthService } from './modules/auth';
import { DatabaseModule } from './modules/database';
@Module({
  imports: [
    DatabaseModule.register(),
    NguoiDungModule,
    {
      ...JwtModule.registerAsync(JWTConfigurationProvider),
      global: true,
    },
    AuthModule,
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    return consumer.apply(AuthMiddleware).exclude('/swagger', '/health', '/auth/register').forRoutes('*');
  }
}
