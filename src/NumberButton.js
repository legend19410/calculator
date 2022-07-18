import React from 'react'

function NumberButton({className, value, status, setStatus, setLastStatus, total, setTotal}) {

    const numb = (e) => {
        if (status.includes(".") && e.target.innerText === ".") return;
    
          if (total) setLastStatus("");
        
          status? setStatus((preVal) => preVal + e.target.innerText) : setStatus(e.target.innerText);
       
          setTotal(false);
      };

    return (
          <div className={className} onClick={e=>numb(e)}>
              {value}
          </div>
    )
  }
  
  export default NumberButton