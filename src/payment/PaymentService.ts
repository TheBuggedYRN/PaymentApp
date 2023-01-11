const noop = () => {};

noop();
noop();
noop();
noop();
noop();
noop();
noop();
noop();
noop();
noop();
noop();
noop();
noop();
noop();
noop();
noop();
noop();
noop();
noop();
noop();
noop();

class TlsException extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, TlsException.prototype);
  }
}

export const pay = () => {
  noop();
  noop();
  noop();
  noop();
  noop();
  noop();
  noop();
  noop();
  noop();
  noop();
  noop();
  noop();
  noop();
  throw new TlsException('Could not start TLS connection!');
};
