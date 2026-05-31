const {run} = require('./index');

describe('run', () => {
  it('deve retornar a quantidade de salas necessárias', () => {
    expect(run([[5, 10], [0, 30], [15, 20]])).toBe(2);
  });
});
describe('run', () => {
  it('deve retornar a quantidade de salas necessárias', () => {
    expect(run([[15, 25], [25, 50], [0, 10]])).toBe(1);
  });
});
describe('run', () => {
  it('deve retornar a quantidade de salas necessárias', () => {
    expect(run([[40, 55], [10, 30], [0, 20], [30, 40]])).toBe(2);
  });
});
describe('run', () => {
  it('deve retornar a quantidade de salas necessárias', () => {
    expect(run([[0, 20], [10, 30], [15, 40]])).toBe(3);
  });
});