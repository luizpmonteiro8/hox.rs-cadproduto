import { DatabaseError } from './DatabaseError';
import { PrismaClientError } from './PrismaClientError';

export class ForeignKeyConstraintError extends DatabaseError {
  constructor(e: PrismaClientError) {
    if (e.message.includes('delete')) {
      super('Registro em uso.');
    } else {
      //onInsert or onUpdate
      super('Registro não encontrado.');
    }
  }
}
