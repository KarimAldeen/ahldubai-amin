import React from 'react'
import useImageError from '../../Hooks/useImageError'

const ReviewCard = ({index}:any) => {
  return (
    <div className='ReviewCard'>
        <img src={`../Services/Cusromer${index+1}.png`} onError={useImageError} alt="" />
        <h1>{index+1}Mohammed Karim</h1>
        <h6>happy client.</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quisquam in totam id hic sequi animi fugit. Eaque illo exercitationem at excepturi!</p>
    </div>
  )
}

export default ReviewCard