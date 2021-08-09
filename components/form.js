import { useState } from "react";
import FormInput from "../components/formInput";
import items from "../data/items";
export default function Form({ path }) {
   const [data, setData] = useState({})
//    const [checkedItems, setCheckedItems] = ([])
   const changeHandler = (e) => {
        e.preventDefault();
        const { value, name } = e.target
        setData(Object.assign(data,{[name]:value} ) )
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5050${path}`, {
      method: "post",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => alert(result.message))
      .catch((error) => alert("Something went wrong", error));
  };

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          
          {items.map((item, index) => {
             
           return(
            <FormInput
              name={item.name}
              placeholder={item.placeholder}
              type={item.type}
              onChange={changeHandler}
              data={data}
              setData = {setData}
              key={index}
              val={item.val}
              options={item.options}
            />
          )})}
        </div>
        {/* <FormInput name='category' placeholder='Select Category' type='text' /> */}
        <div>
          <button
            type="submit"
            className="group  relative w-full max-w-lg mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Product
          </button>
        </div>
      </form>
    </>
  );
}
