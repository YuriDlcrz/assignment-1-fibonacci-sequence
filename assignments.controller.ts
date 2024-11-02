import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('factorial/:number')
  calculateFactorial(@Param('number', ParseIntPipe) number: number): { factorial: number | string } {
    const result = this.factorial(number);
    return { factorial: result };
  }

  // Helper function to calculate factorial using an iterative approach
  private factorial(num: number): number | string {
    if (num < 0) return "Factorial not defined for negative numbers"; // Handle negative input
    if (num === 0 || num === 1) return 1;

    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }

    return result;
  }
}
