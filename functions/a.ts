};

const add = (a: number, b: number): number => a + b;

export const handler = () => {
  return add(1, 2);
};