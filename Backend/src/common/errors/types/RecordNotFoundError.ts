import { DatabaseError } from './DatabaseError';

export class RecordNotFoundError extends DatabaseError {
  constructor() {
    //onDelete
    super('Registro não encontrado.');
  }
}
