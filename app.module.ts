import { Module } from '@nestjs/common';
import { AssignmentsModule } from './assignments.module';

@Module({
  imports: [AssignmentsModule], // Register the AssignmentsModule here
})
export class AppModule {}
