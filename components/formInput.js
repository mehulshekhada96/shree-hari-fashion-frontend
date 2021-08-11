import { useState } from "react";

export default function FormInput({
  name,
  placeholder,
  type,
  onChange,
  options,
  data,
  setData,
  fileUploadHandler,
  handleUpload
}) {
  if (type === "select") {
    return (
      <div>
        <label
          htmlFor={name}
          className=" mb-1 font-bold block text-lg text-gray-600"
        >
          {placeholder}
        </label>
        <select
          className="capitalize"
          name={name}
          id={name}
          type={type}
          required
          onChange={onChange}
          placeholder={placeholder}
        >
          {options.map((opt, index) => (
            <>
              <option
                key={`${name}-${index}`}
                value={opt}
                className="capitalize"
              >
                {opt}
              </option>
            </>
          ))}
        </select>
      </div>
    );
  }
  if (type === "checkbox") {
    const [checkedState, setCheckedState] = useState(
      new Array(options.length).fill(false)
    );

    const handleOnChange = (position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );

      setCheckedState(updatedCheckedState);
      console.log(1, updatedCheckedState);
      console.log(2, checkedState);
      const arr = [];
      const finalArr = updatedCheckedState.forEach((currentState, index) => {
        if (currentState === true) {
          arr.push(options[index]);
        }
      });
      console.log(arr);
      setData(Object.assign(data, { [name]: arr }));
    };

    return (
      <div>
        <label
          htmlFor={name}
          className=" mb-1 font-bold block text-lg text-gray-600"
        >
          {placeholder}
        </label>

        {options.map((opt, index) => (
          <div key={`${opt}-${index}`}>
            <input
              type="checkbox"
              name={name}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
              id={`custom-checkbox-${index}`}
              value={opt}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />

            <label
              htmlFor={`custom-checkbox-${index}`}
              className=" mx-2  text-gray-600 capitalize"
            >
              {opt}
            </label>
          </div>
        ))}
      </div>
    );
  }
  if (type === "file") {
   
    return (
      <div>
        <label
          htmlFor={name}
          className=" mb-1 font-bold block text-lg text-gray-600"
        >
          {placeholder}
        </label>
        <input
          name={name}
          id={name}
          type={type}
          required
          // multiple
          onChange={fileUploadHandler}
          placeholder={placeholder}
          className="appearance-none rounded-none  block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        />
        <button onClick={handleUpload}> Upload </button>
      </div>
    );
  }
  return (
    <div>
      <label
        htmlFor={name}
        className=" mb-1 font-bold block text-lg text-gray-600"
      >
        {placeholder}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        required
        onChange={onChange}
        placeholder={placeholder}
        className="appearance-none rounded-none  block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      />
     
    </div>
  );
}
