import { useState } from 'react';
import { useEffect } from 'react';
import './Emails.css';

const Emails = () => {
  const [emails, setEmails] = useState([
    {
      id: 1,
      title: 'Boleto da TIM',
      status: 0,
    },
    {
      id: 2,
      title: 'Promoçao da Amazon',
      status: 0,
    },
    {
      id: 3,
      title: 'Regras do Sorteio',
      status: 0,
    },
  ]);

  useEffect(() => {
    emails.every((email) => email.status === 1) && alert('Todos lidos');
  }, [emails]);

  const handleLido = (id) => {
    setEmails((prevState) => {
      return prevState.map((email) => {
        if (email.id === id) {
          return {
            ...email,
            status: 1,
          };
        }
        return email;
      });
    });
  };

  const handlenaoLido = (id) => {
    setEmails((prevState) => {
      return prevState.map((email) => {
        if (email.id === id) {
          return {
            ...email,
            status: 0,
          };
        }
        return email;
      });
    });
  };

  const handleLidos = () => {
    setEmails((prevState) => {
      return prevState.map((email) => {
        return {
          ...email,
          status: 1,
        };
      });
    });
  };

  return (
    <div>
      <button onClick={handleLidos}> marcar todos como lidos</button>
      {emails.map((email) => {
        return (
          <div
            key={email.id}
            className='emails'
          >
            <h2 className={email.status === 0 ? 'enabled' : 'disabled'}>
              {email.title}
            </h2>
            <button onClick={() => handleLido(email.id)}>lido</button>
            <button onClick={() => handlenaoLido(email.id)}>não lido</button>
          </div>
        );
      })}
    </div>
  );
};

export default Emails;
