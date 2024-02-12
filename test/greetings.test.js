import { greetings } from '../src/greetings.js';

test('should return greetings', () => {
  const azis = greetings('Azis');

  expect(azis).toBe('Hello, Azis!');
});
