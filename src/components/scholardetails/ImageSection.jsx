import React from 'react'
import p1 from '../../assets/bank/1.png'

const ImageSection = () => {
    return (
        <div className='my-16'>
            <div className='container mx-auto px-4'>
                <div className='xl:h-[575px] h-full'>
                    <img src={p1} alt="woori bank" className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default ImageSection