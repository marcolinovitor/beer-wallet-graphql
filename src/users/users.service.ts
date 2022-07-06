import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async create(createUserInput: CreateUserInput): Promise<User | BadRequestException> {
    const equalPasswords = createUserInput.password === createUserInput.confirmPassword;
    if (!equalPasswords) {
      throw new BadRequestException('Passwords does not match.');
    }
    const user = this.userRepository.create(createUserInput);
    return this.userRepository.save(user)
      .catch(error => {
        if (error instanceof QueryFailedError) {
          return new BadRequestException((<any>error).sqlMessage);
        }
        return new InternalServerErrorException('Unexpected error');
      });
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
