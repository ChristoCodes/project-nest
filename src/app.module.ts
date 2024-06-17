import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UsuariosModule,PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
