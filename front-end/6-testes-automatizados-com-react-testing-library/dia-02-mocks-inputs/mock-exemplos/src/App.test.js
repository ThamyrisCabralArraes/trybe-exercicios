import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

//gostei mais

it('mudando o promisse por async e await', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(async () => ({
    json: async () => joke,
  }));

  render(<App />);
  const renderedJoke = await screen.findByText(
    'Whiteboards ... are remarkable.',
  );
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
});

// Outra forma de mock do fetch:
test('renders learn react link', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const findJoke = await screen.findByText(joke.joke);
  expect(findJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
});

// Outra forma de mock do fetch:
it('fetches a joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(joke),
    }),
  );

  render(<App />);
  const renderedJoke = await screen.findByText(
    'Whiteboards ... are remarkable.',
  );
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
});
