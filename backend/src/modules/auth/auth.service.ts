import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { JwtPayload } from './strategies/jwt.strategy';
import { Role } from '../../common/enums/role.enum';

// JWT access token hết hạn sau 8 giờ (theo ràng buộc thiết kế SRS)
const JWT_EXPIRES_SECONDS = 8 * 60 * 60;

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto): Promise<AuthResponseDto> {
    const user = await this.userRepository.findOne({
      where: { username: dto.username, isActive: true },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatches = await bcrypt.compare(
      dto.password,
      user.passwordHash,
    );
    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = {
      sub: user.id,
      username: user.username,
      role: user.role as string,
      full_name: user.fullName,
    };

    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
      expires_in: JWT_EXPIRES_SECONDS,
      role: user.role as unknown as Role,
      user_id: user.id,
      full_name: user.fullName,
    };
  }

  async getProfile(userId: string) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      select: ['id', 'username', 'fullName', 'role', 'departmentId'],
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
