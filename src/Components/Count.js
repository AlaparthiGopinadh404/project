import React ,{memo}from 'react';

function Count(props) {
    console.log('count component')
  return (
    <div>
        <h1>{props.text} is {props.Count} </h1>
    </div>
  )
}

export default memo(Count);