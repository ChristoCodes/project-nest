import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from 'src/prisma.service';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [AuthModule, UsuariosModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
