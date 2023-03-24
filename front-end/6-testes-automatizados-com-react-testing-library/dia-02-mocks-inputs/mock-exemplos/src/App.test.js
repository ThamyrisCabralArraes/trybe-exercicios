import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

it('a funcao fetch foi chamada 1x', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(async () => ({
    json: async () => joke,
  }));

  render(<App />);
  const frase = await screen.findByText('Whiteboards ... are remarkable.');
  const button = screen.getByText('new joke');

  expect(global.fetch).toHaveBeenCalled();
  expect(frase).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  userEvent.click(button);

  expect(frase).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(2);
  expect(frase).toBeInTheDocument();
});
