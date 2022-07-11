import React from 'react'
import '../../assets/css/about/bg-and-qualify.css'

const BackgroundAndQualification = () => {
    return (
        <>
            <div className='row justify-content-center align-items-center mt-3 mb-3 pt-3 pb-3'>
                <h3 className='bg-title'>What is my education Background?</h3>
            </div>
            <div className='row g-0'>
                <div className='col-md-6'>
                    <div className='left'>
                        <label>Horizon University, French</label>
                        <span>Duration : 2020 - Present </span>
                        <span>Specialization : International Business Management </span>
                        <span>Degree : Master of Business Administration (MBA)</span>
                    </div>
                </div>
                <div className='col-md-6 mt-3 mb-3 pt-3 pb-3'>
                    <div className='right'>
                        <label>University of Information Technology</label>
                        <span>   Duration : 2012 - 2017 </span>
                        <span>  Specialization : Business Information Systems </span>
                        <span>   Degree : B.C.Sc (Business Information Systems) </span>
                    </div>
                </div>
            </div>

            <div className='row justify-content-center align-items-center'>
                <h3 className='q-title'>What is my education Background?</h3>
            </div>
            <div className='row g-0'>
                <div className='col-md-6 mb-3'>
                    <div className='left'>
                        <label>Coursea - Google UX Design</label>
                        <span>Google UX Design Professional Certificate</span>
                        <label className='mt-3'>The World Design Institute</label>
                        <span>Certificate in Professional Graphic Design (Lvl 3)</span>
                    </div>
                </div>
                <div className='col-md-6 mb-3'>
                    <div className='right'>
                        <label>STI Myanmar University</label>
                        <span>  Duration : 2015 - 2017 </span>
                        <span>  Specialization : Business Management</span>
                        <span>  Diploma in Business Management </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BackgroundAndQualification