import React from 'react'

function Button({className, value, funct}) {
    
    return (
          <div className={className} onClick={funct}>
              {value}
          </div>
    )
  }
  
  export default Button