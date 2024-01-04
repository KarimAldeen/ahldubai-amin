import React from 'react'

const Partners = () => {
    return (
        <div className='Partners'>
            <h1>Partners</h1>
            <div>
                   { ["2","8","9","11","13","14","15","16","18","19"]?.map((item,index)=>{
                    return(
                        <div key={index}>
                <img src={`../Partners/${item}.jpg`} alt="" />
                              
                        </div>
                    )
                   })}

                             <img src={`../Partners/Sheild.webp`} alt="" />
                             <img src={`../Partners/1.png`} alt="" />

            </div>
        </div>
    )
}

export default Partners