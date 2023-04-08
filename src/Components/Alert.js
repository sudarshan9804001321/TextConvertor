import React from "react";

const Alert = (props) => {
  const capitalize=(word) => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1);//it captialize the first letter at string character 0 and slice method dont take the first character and taake all other characters
  }
  return (

    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong>:{props.alert.message} 
        
      </div>
    
  );
};

export default Alert;
