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

class Statement {
  constructor(public id: string) {}
  public download() {}
}

export const findStatement = (id: string): Statement => {
  noop();
  noop();
  noop();
  noop();
  throw new Error(`Statement ${id} is not found`);
};

export const downloadStatement = (id: string) => {
  noop();
  noop();
  noop();
  noop();
  const statement = findStatement(id);
  statement.download();
};
