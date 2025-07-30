import React from 'react'

export default function Docs({params}) {
    console.log(params)
    const {slug}=params
    if(slug.length===2)
  return (
    <div>View Docs:{slug[0]} and concept is {slug[1]} </div>
  );
  else if(slug.length===1)
    return(<h1> view doc lenght:{slug[0]}</h1>)
}
