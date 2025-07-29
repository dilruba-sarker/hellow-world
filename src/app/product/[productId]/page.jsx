import React from 'react'

export default function ProdectDetails({params}) {
    console.log(params.productId)
  return (
    <div>Prodect Details {params.productId}</div>
  )
}
