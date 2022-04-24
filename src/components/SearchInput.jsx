import React, { useCallback, useState } from 'react';
import { debounce, throttle } from '../helpers/debounce';

export default function SearchInput() {
  const [input, setInput] = useState('');

  const getData = (value) => {
    console.log({ value }, 'getData');
  };

  const debouncedGetData = useCallback(throttle(getData, 1000), []);

  const onInputChange = (e) => {
    setInput(e.target.value);

    debouncedGetData(e.target.value);
  };
  return (
    <div>
      <input
        className="input border-2 border-black font-medium mt-10"
        value={input}
        onChange={onInputChange}
      />
    </div>
  );
}
