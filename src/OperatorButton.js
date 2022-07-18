import React from 'react'

function OperatorButton({className, value, status, setStatus, lastStatus, setLastStatus, equals, setTotal, setOperator}) {

    const operator = (e) => {
        setTotal(false);
        setOperator(e.target.innerText);
        if (status === "") return;
        if (lastStatus !== "") {
          equals();
        } else {
          setLastStatus(status);
          setStatus("");
        }
      };

    return (
          <div className={className} onClick={operator}>
              {value}
          </div>
    )
  }
  
  export default OperatorButton