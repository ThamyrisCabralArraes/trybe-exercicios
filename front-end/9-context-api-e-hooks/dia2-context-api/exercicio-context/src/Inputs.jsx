import useFormInput from './useFormInput';

function Input() {
  const name = useFormInput('');
  const cidade = useFormInput('');
  const modulo = useFormInput('');
  const idade = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();
    name.clear();
    cidade.clear();
    modulo.clear();
    idade.clear();
  }

  return (
    <div>
      <h1>teste Hooks</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='name'
          value={name.value}
          onChange={name.onChange}
        />
        <input
          name='idade'
          type='number'
          placeholder='idade'
          value={idade.value}
          onChange={idade.onChange}
        />
        <input
          name='cidade'
          type='text'
          placeholder='cidade'
          value={cidade.value}
          onChange={cidade.onChange}
        />
        <input
          type='radio'
          name={modulo.value}
          value='Fundamentos'
          onChange={modulo.onChange}
        />{' '}
        Fundamentos
        <input
          type='radio'
          name={modulo.value}
          value='FrontEnd'
          onChange={modulo.onChange}
        />{' '}
        FrontEnd
        <input
          type='radio'
          name={modulo.value}
          value='BackEnd'
          onChange={modulo.onChange}
        />{' '}
        BackEnd
        <input
          type='radio'
          name={modulo.value}
          value='Ciência da Computação'
          onChange={modulo.onChange}
        />{' '}
        Ciência da Computação
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Input;