import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, FindOneUserDto, PaginationDto, UpdateUserDto, UsersServiceController, UsersServiceControllerMethods } from '@app/common';
import { Observable } from 'rxjs';

@Controller()
@UsersServiceControllerMethods()
export class UsersController implements UsersServiceController {
  constructor(private readonly usersService: UsersService) { }

  createUser(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  findAllUsers() {
    return this.usersService.findAll();
  }

  findOneUser(findOneuserDto: FindOneUserDto) {
    return this.usersService.findOne(findOneuserDto.id);
  }

  updateUser(updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  removeUser(findOneuserDto: FindOneUserDto) {
    return this.usersService.remove(findOneuserDto.id);
  }

  queryUsers(paginationDtoStream: Observable<PaginationDto>) {
    return this.usersService.queryUsers(paginationDtoStream)
  }
}
