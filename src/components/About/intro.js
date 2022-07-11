import React from 'react'
import accz from '../../assets/images/accz.png'
import '../../assets/css/about/intro.css'
const Introduction = () => {
    return (
        <>
            <div className='row justify-content-center align-items-center mt-3 mb-3'>
                <h3 className='intro-title'>Who am I? </h3>
            </div>
            <div className='row justify-content-center align-items-center'>
                <div className='intro-box mb-3'>
                    <img src={accz} className='intro-img' alt='Aye Chyo Chyo Zin' title="Aye Chyo Chyo Zin" />
                </div>
            </div>
            <div className='paragraph mt-3 mb-3'>
                <p>
                    My full name is Aye Chyo Chyo Zin. I am burmese and I was born and raised in Myanmar.I am currently working as
                    an experienced UI/UX designer with nearly 5 years experience in design and IT fields.
                </p>
                <p>
                    I was graduated from Univeristy of Information Technology (UIT) with Business Information Systems specialization
                    in 2017. As soon as I finished my university, I joined as an intern at 2C2P Myanmar Co., Ltd and then I worked as a
                    product executive at that company.
                </p>
                <p>
                    I was very lucky since I had the chance to learn much new skills and experiences from my intenship journey. Now, I
                    have strong experience and skills of working on different types of projects for various kinds of local and foreign
                    clients together with both local teams and international outsourcing teams.
                </p>
                <p className='pb-3'>
                    Travelling, eating out and watching movies are my favorite lecture activities.
                </p>
            </div>
        </>
    )
}

export default Introduction