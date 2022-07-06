import React from 'react'
import '../../assets/css/about/core-skill.css'
import figma from '../../assets/images/designerTools/figma.png'
import ps from '../../assets/images/designerTools/ps.png'
import xd from '../../assets/images/designerTools/xd.png'
import ai from '../../assets/images/designerTools/ai.png'
import pr from '../../assets/images/designerTools/pr.png'

const right = [
    {
        img: figma,
        title: 'Figma',
        rate: 90
    },
    {
        img: ps,
        title: 'Adobe Photoshop',
        rate: 87
    },
    {
        img: xd,
        title: 'Adobe XD',
        rate: 83
    },
    {
        img: ai,
        title: 'Adobe Illustrator',
        rate: 78
    },
    {
        img: pr,
        title: 'Adobe Premiere Pro',
        rate: 67
    }
]

const left = [
    {
        title: 'Communication',
        rate: 88
    },
    {
        title: 'Time Management',
        rate: 85
    },
    {
        title: 'Flexibility',
        rate: 85
    },
    {
        title: 'Flexibility',
        rate: 76
    },
    {
        title: 'Flexibility',
        rate: 76
    }
]

const CoreSkill = () => {
    return (
        <>
            <div className='row justify-content-center align-items-center'>
                <label className='core-title'>What are my core skills?</label>
            </div>
            <div className='row g-0'>
                <div className='col-md-6'>
                    {
                        right.map((data, id) => {
                            return (
                                <div className='core-wrapper' key={`core-right ${id}`}>
                                    <div className='row g-0'>
                                        <img className='core-img' src={data.img} alt='image not found'/>
                                        <label>{data.title}</label>
                                    </div>
                                    <div className="progress-bar">
                                        <span className='progress-show' style={{width : `${data.rate}%`}}></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='col-md-6'>
                    {left.map((data, id) => {
                        return(
                            <div className='core-wrapper' key={`core-left ${id}`}>
                                <label>{data.title}</label>
                                <div className="progress-bar">
                                        <span className='progress-show' style={{width : `${data.rate}%`}}></span>
                                    </div>
                            </div>    
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CoreSkill