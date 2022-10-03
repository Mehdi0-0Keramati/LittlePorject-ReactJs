import "./HidePassword.css";
import { BiHide, BiShow } from "react-icons/bi"
import { useState } from "react";

const HidePassword = () => {
  const [type, setType] = useState('password')

  return (
    <>
      <div className="boxinput">
        <h3>you're Password</h3>
        <input type={type} />
        <span onClick={() => type === "password" ? setType('text') : setType('password')} className="icon">
          {type === "password" ? <BiHide /> : <BiShow />}</span>
      </div>

    </>
  )
}
export default HidePassword;
