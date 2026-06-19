import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../../common/enums/role.enum';

export class AuthResponseDto {
  @ApiProperty()
  access_token: string;

  @ApiProperty()
  expires_in: number;

  @ApiProperty({ enum: Role })
  role: Role;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  full_name: string;
}
