import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function Error() {
    const err= useRouteError();
    console.log(err)
  return (
    <div className='err-page'>
        <h1>
            SomeThing went Wrong!!!
        </h1>
        <br></br>
        <h3>{err.status} : {err.statusText}</h3>
    </div>
  )
}
