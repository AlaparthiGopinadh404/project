import React,{memo} from 'react'

function Button(props) {
    console.log('button component')
  return (
    <div>
        
        <button onClick={props.handleClick }>{props.children}</button>
        {/* <button onClick={props.handleClick}>updatesalary</button> */}
    </div>
   
  )
}

export default memo(Button)