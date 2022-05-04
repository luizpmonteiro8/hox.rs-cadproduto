import { DatabaseError } from './DatabaseError';

export class ForeignKeyConstraintError extends DatabaseError {
  constructor() {
    super(`Registro em uso.`);
  }
}
