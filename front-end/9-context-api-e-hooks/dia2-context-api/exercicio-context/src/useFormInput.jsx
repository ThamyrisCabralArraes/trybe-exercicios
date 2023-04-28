import { useState } from 'react';

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const clear = () => {
    setValue('');
  };

  return {
    value: value,
    onChange: handleChange,
    clear,
  };
};

export default useFormInput;
