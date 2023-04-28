import useFormInput from './useFormInput';

function InputComUse() {
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const email = useFormInput('');
  console.log(firstName, lastName, email);
  function handleSubmit(e) {
    e.preventDefault();

    // Swal.fire(
    //   'Formulário enviado',
    //   JSON.stringify({
    //     firstName: firstName.value,
    //     lastName: lastName.value,
    //     email: email.value,
    //   }),
    //   'success'
    // );
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <label>
          First name:
          <input
            value={firstName.value}
            onChange={firstName.onChange}
          />
        </label>
        <label>
          Last name:
          <input
            value={lastName.value}
            onChange={lastName.onChange}
          />
        </label>
        <label>
          E-mail:
          <input
            value={email.value}
            onChange={email.onChange}
          />
        </label>
        <button type='submit'>Submeter formulário</button>
      </form>
    </div>
  );
}

export default InputComUse;
