import { Test, TestingModule } from '@nestjs/testing';
import { UserInterceptorsController } from './user-interceptors.controller';

describe('UserInterceptorsController', () => {
  let controller: UserInterceptorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserInterceptorsController],
    }).compile();

    controller = module.get<UserInterceptorsController>(UserInterceptorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
