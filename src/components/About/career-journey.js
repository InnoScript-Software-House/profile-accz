import React from 'react'
import '../../assets/css/about/career-journey.css'
const Career = () => {
    return (
        <>
            <div className='row justify-content-center align-items-center mt-3 mb-3'>
                <label className='career-title mb-3 pb-3'>How is my career journey?</label>
            </div>
            <div className='row mt-3 pt-3'>
                {/* one section */}
                <div className='col-md-6'>
                    <div className='career-box-left-one'>
                        <ul>
                            <li>Handle UI/UX projects</li>
                            <li>Manage the tasks associated with UI/UX perspective </li>
                            <li>Consider client’s requirements</li>
                            <li>Create screen flows, wireframes, and prototypes </li>
                            <li>Create UI interfaces of web and mobile</li>
                            <li>Take responsibilities all the tasks related with design during and after final product is delivered</li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='career-content-right-one'>
                        <h3>Senior Designer</h3>
                        <p>Aceplus Solutions Co., Ltd</p>
                        <span>August 2019 - April 2022</span>
                    </div>
                </div>

                {/* two section */}
                <div className='col-md-6'>
                    <div className='career-content-left-two'>
                        <h3>Senior Designer</h3>
                        <p>Apexand Internationl Co., Ltd</p>
                        <span>August 2018 - May 2019</span>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='career-box-right-two'>
                        <ul>
                            <li>Handled UI/UX designs for development of mobile app and website</li>
                            <li>Created designs for events </li>
                            <li>Created print-ads designs </li>
                            <li> Created social media designs </li>
                        </ul>
                    </div>
                </div>
                
                {/* three section */}
                <div className='col-md-6'>
                    <div className='career-box-left-three'>
                        <ul>
                            <li>Took responsibility for overall digital products </li>
                            <li>Gave trainings to customers and juniors </li>
                            <li>Created graphic designs for social media</li>
                            <li>Created print-ads designs </li>
                            <li>Supported customers of digital products</li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='career-content-right-three'>
                        <h3>Senior Designer</h3>
                        <p>Aceplus Solutions Co., Ltd</p>
                        <span>August 2019 - April 2022</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Career