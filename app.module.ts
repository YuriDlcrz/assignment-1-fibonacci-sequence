import { Module } from '@nestjs/common';
import { AssignmentsController } from './assignments.controller';

@Module({
  imports: [],
  controllers: [AssignmentsController],
  providers: [],
})
export class AppModule {}
