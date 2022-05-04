import { DatabaseError } from '../types/DatabaseError';
import { ForeignKeyConstraintError } from '../types/ForeignKeyConstraintError';
import { NotFoundError } from '../types/NotFoundError';
import { PrismaClientError } from '../types/PrismaClientError';
import { RecordNotFoundError } from '../types/RecordNotFoundError';
import { UniqueConstraintError } from '../types/UniqueConstraintError';

enum PrismaErrors {
  UniqueConstraintFail = 'P2002',
  ForeignKeyConstraintFail = 'P2003',
  RecordNotFound = 'P2025',
}

export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErrors.UniqueConstraintFail:
      return new UniqueConstraintError(e);
    case PrismaErrors.ForeignKeyConstraintFail:
      return new ForeignKeyConstraintError(e);
    case PrismaErrors.RecordNotFound:
      return new RecordNotFoundError();

    default:
      return new DatabaseError(e.message);
  }
};
