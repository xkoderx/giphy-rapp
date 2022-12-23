import { useState } from "react";

export const AddCategory = ({ newC }) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return;
    // category((categories) => [inputValue, ...categories]);
    newC(inputValue.trim());
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="m-4">
        <input
          className="form-control"
          type="text"
          value={inputValue}
          onChange={onInputChange}
        />
      </div>
    </form>
  );
};
