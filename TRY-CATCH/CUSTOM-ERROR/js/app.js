import { AuthError } from './modules/errors.js';

try {
  throw new AuthError({
    errors: ['Error 1', 'Error 2'],
    minhaMensage: 'Essa é minha mensagem',
  });
} catch (err) {
  console.warn(err.name);
  console.log(err.errors);
  console.log(err.minhaMensage);
  console.error(err.stack);
}
