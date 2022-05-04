import { ConflictError } from './ConflictError';
import { PrismaClientError } from './PrismaClientError';

export class UniqueConstraintError extends ConflictError {
  constructor(e: PrismaClientError) {
    let uniqueField = e.meta.target;

    switch (uniqueField[0]) {
      case 'name':
        uniqueField = 'nome';
        break;
      case 'mail':
        uniqueField = 'email';
        break;

      default:
        break;
    }

    super(`Um registro com esse ${uniqueField} já existe.`);
  }
}
