import React from 'react'
import NumberFormat from "react-number-format";

function Screen({input, lastStatus}) {
  return (
    
    <div className='screen'>
            {input !== "" || input === "0" ? (
            <NumberFormat
                value={input}
                displayType={"text"}
                thousandSeparator={true}
            />
            ) : (
            <NumberFormat
                value={lastStatus}
                displayType={"text"}
                thousandSeparator={true}
            />
            )}
  </div>
  )
}

export default Screen