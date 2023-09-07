import { Test, TestingModule } from '@nestjs/testing';
import { CitiesControllerController } from './cities-controller.controller';

describe('CitiesControllerController', () => {
  let controller: CitiesControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitiesControllerController],
    }).compile();

    controller = module.get<CitiesControllerController>(CitiesControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
