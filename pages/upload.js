import { useState } from "react"
export default function Upload (){
const [file, setFile] = useState(null);
    const fileChange = (e) =>{
         setFile(e.target.files[0])
    }
    const submitForm =(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('images',file)
        fetch(`http://localhost:5050/demoUpload`,{
            method: 'post',
            body: formData
        }).then((res) => res.json())
      .then((result) => alert(result.message))
      .catch((error) => alert("Something went wrong", error));
    }
    return(
        <>
        <form onSubmit={submitForm}>
          <input
          type='file'
          onChange={fileChange}
          />
          <button type='submit'>Submit</button>
        </form>  
        </>
    )
}