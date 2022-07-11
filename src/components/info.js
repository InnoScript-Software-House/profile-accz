import React, { useState } from 'react'
import DesginInformation from './desgin-info'
import GraphicInformation from './graphic-info'

import '../assets/css/info.css';

const Information = () => {

    const [open , setOpen] = useState(false)
    return (
        <>
            <div className='row mt-5 pt-5 justify-content-center align-items-center'>
                <label className='label-letter pb-3'>Let's see what I have done!</label>
            </div>
            <div className='row mt-3 justify-content-center align-items-center'>
                <div className='switch pb-3'>
                    <div type='button' className={`switch-left ${open === false ? 'switch-active' : ''}`} onClick={() => setOpen(false)}>UI/UX</div>
                    <div type='button' className={`switch-left ${open === true ? 'switch-active' : ''}`} onClick={() => setOpen(true)}>Graphic</div>
                </div>
            </div>
            {
                open === false ? (<DesginInformation />):(<GraphicInformation />)
            }  
        </>
    )
}

export default Information