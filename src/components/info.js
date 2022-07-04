import React, { useState } from 'react'
import '../assets/css/info.css'
import DesginInformation from './desgin-info'
import GraphicInformation from './graphic-info'

const Information = () => {

    const [open , setOpen] = useState(false)
    return (
        <>
            <div className='row mt-5 justify-content-center align-items-center'>
                <label className='label-letter'>Let's see what I have done!</label>
            </div>
            <div className='row mt-3 justify-content-center align-items-center'>
                <div className='switch'>
                    <a type='button' className='switch-right' onClick={() => setOpen(false)}>UI/UX</a>
                    <a type='button' className='switch-left' onClick={() => setOpen(true)}>Graphic</a>
                </div>
            </div>
            {
             open === false ? (
               <DesginInformation />
             ):
             (
               <GraphicInformation />
             )
           }  
        </>
    )
}

export default Information