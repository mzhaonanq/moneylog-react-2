import {useLocation} from 'react-router-dom';
import React from 'react';

const  NoMatch=()=>{
  let location = useLocation();
  return (
    <div>
      <h3>
        未匹配到<code>{location.pathname}</code>
      </h3>
      <h3>请重新输入地址</h3>
    </div>
  );
}
export default NoMatch