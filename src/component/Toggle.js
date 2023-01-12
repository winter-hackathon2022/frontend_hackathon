import React from "react";
import Switch from "react-switch";

const Toggle = ({on, setOn}) => {
    console.log(on);
    return (
      <Switch
        checked={on}
        onChange={setOn}
        onColor="#ffffff"	
        onHandleColor="#FFAD41"//색깔
        offColor="#FFAD41"	
        offHandleColor="#ffffff"//색깔
        handleDiameter={28}          
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 2px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={37}
        width={75}
        className="react-switch"
        id="material-switch"
      />
    )
  
}

export default Toggle;