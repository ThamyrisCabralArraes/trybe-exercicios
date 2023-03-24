import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
describe('testando o evendo do input e botao', () => {
  it('testando input', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText(/email/i);

    expect(inputEmail).toBeInTheDocument();
    // expect(inputEmail.type).tobe('email');
    expect(inputEmail).toHaveProperty('type', 'email');
  });

  it('testando input sem texto', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(2);
  });

  it('testando botao enviar', () => {
    render(<App />);
    const bntEnviar = screen.getByTestId(/id-send/i);

    expect(bntEnviar).toBeInTheDocument();
    expect(bntEnviar).toHaveValue('Enviar');
    expect(bntEnviar).toHaveProperty('type', 'button');
  });
});
