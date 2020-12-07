import React from 'react';

type Props={
  name: string
}

const Icon = (props: Props)=>{
  return (
    <svg className="icons">
      <use xlinkHref={'#'+props.name}/>
    </svg>
  )
}

export default Icon
