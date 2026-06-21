import { useState } from "react";

function Forms() {
  let [formdata, setFormData] = useState({
    fullname: "",
    username: "",
  });

  let handleInput = () => {
    setFormData((currData) => {
     
      return {
        ...currData, [event.target.name] : event.target.value};
    });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formdata);
    setFormData({
      fullname: "",
      username: "",
    });
  };
  return (
    <form className="container">
      <label htmlFor="fullname">FullName</label>
      <input
        type="text"
        placeholder="FullName"
        id="fullname"
        value={formdata.fullname}
        onChange={handleInput}
        name="fullname"
      />
      <label htmlFor="fullname">UserName</label>
      <input
        type="text"
        placeholder="username"
        id="fullname"
        value={formdata.username}
        onChange={handleInput}
        name="username"
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Forms;
