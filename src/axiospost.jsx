import Axios from "axios";
import { useState } from "react";
function AxiosPost() {
    const data = {fname : "", lastName : ""}
        const [inputData, setInputData] = useState(data)

    const handleData = (e) => {
        setInputData({...inputData, [e.target.name] : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("https://reqres.in/api/users", inputData)
        .then((res) => console.log(res))
    }
  return (
    <>
    <label> First Name: </label>
    <input type="text" name="fname" value = {inputData.fname} onChange={handleData}></input><br/>
    <label> Last Name: </label>
    <input type="text" name="lastName" value = {inputData.lastName} onChange={handleData}></input>
<button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default AxiosPost
