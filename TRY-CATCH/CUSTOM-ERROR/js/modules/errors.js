export class AuthError extends Error {
  constructor(options) {
    super();
    this.minhaMensage = options.minhaMensage;
    this.errors = options.errors;
    this.name = 'AuthError';
  }
}
