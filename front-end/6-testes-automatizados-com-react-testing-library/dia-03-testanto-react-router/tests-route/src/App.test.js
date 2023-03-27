import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App, { About } from './App';
import renderWithRouter from './renderWithRouter';

test('renders learn react link', () => {
  renderWithRouter(<App />);
  const home = screen.getByRole('heading', {
    name: /você está na página início/i,
  });
  expect(home).toBeInTheDocument();
});

test('renders link about', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLink = screen.getByRole('link', { name: 'Sobre' });
  expect(aboutLink).toBeInTheDocument();
  // userEvent.click(aboutLink);

  act(() => {
    history.push('/about');
  });

  const {
    location: { pathname },
  } = history;
  expect(pathname).toBe('/about');

  const aboutTitle = screen.getByRole('heading', {
    name: /Você está na página Sobre/i,
  });
  expect(aboutTitle).toBeInTheDocument();
});

test('renders pagina que nao existe', () => {
  const { history } = renderWithRouter(<App />);

  act(() => {
    history.push('/pagina/que-nao-existe/');
  });

  const noMatch = screen.getByRole('heading', {
    name: /Página não encontrada/i,
  });
  expect(noMatch).toBeInTheDocument();
});

test('testar componente <About/>', () => {
  renderWithRouter(<About />);
  const aboutText = screen.getByRole('heading', {
    name: /Você está na página Sobre/i,
  });
  expect(aboutText).toBeInTheDocument();
});
