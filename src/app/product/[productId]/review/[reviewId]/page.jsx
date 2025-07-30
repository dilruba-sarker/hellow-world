import React from 'react'
import {notFound} from "next/navigation"
export default function Review({params}) {

  const {reviewId}=params
  if(reviewId>100){
notFound()
  }
  return (
    <div>Review Details:{params.reviewId}</div>
  )
}
