import React from 'react'
import { Link } from 'react-router-dom'

const designInfo = [
  {
    img: require('../assets/images/desginInformation/Little Kitty.png'),
    label: 'Little Kitty | Cat Accessories E-Commerce App Case Study',
    spanOne: 'E-Commerce',
    spanTwo: 'Mobile Application'
  },
  {
    img: require('../assets/images/desginInformation/AM.png'),
    label: 'Aflac | Associate Matching',
    spanOne: 'Insurance',
    spanTwo: 'Web Application'
  },
  {
    img: require('../assets/images/desginInformation/Active.png'),
    label: 'AIA Cambodia | Active App',
    spanOne: 'Health',
    spanTwo: 'Mobile Application'
  },
  {
    img: require('../assets/images/desginInformation/AI Learning.png'),
    label: 'Aflac | AI Learning System',
    spanOne: 'Insurance',
    spanTwo: 'Web Application'
  },
  {
    img: require('../assets/images/desginInformation/MyanX.png'),
    label: 'AIA Myanmar | MyanX App',
    spanOne: 'Insurance',
    spanTwo: 'Mobile Application'
  },
  {
    img: require('../assets/images/desginInformation/Myanma Insurance.png'),
    label: 'Myanmar Insurance | Claim App',
    spanOne: 'Insurance',
    spanTwo: 'Mobile Application'
  },
  {
    img: require('../assets/images/desginInformation/Colors Rainbow.png'),
    label: 'Colors Rainbow | Magazine App',
    spanOne: 'Magazines',
    spanTwo: 'Mobile Application'
  },
  {
    img: require('../assets/images/desginInformation/ICAP.png'),
    label: 'ICAP | HIV Clincal Job Aids App',
    spanOne: 'Health',
    spanTwo: 'Mobile Application'
  },
  {
    img: require('../assets/images/desginInformation/UAB Pay.png'),
    label: 'UAB Bank | UAB Pay App',
    spanOne: 'Banking',
    spanTwo: 'Mobile Application'
  },
  {
    img: require('../assets/images/desginInformation/FNI.png'),
    label: 'FNI Insurance | Insurance Website',
    spanOne: 'Insurance',
    spanTwo: 'Website'
  }
]
const DesginInformation = () => {
  return (
    <>
      <div className='row mt-3'>
        {
          designInfo.map((data, id) => {
            return (
              <div key={id} className='col-md-6 mb-5'>
                {/* <Link to='/about' className='info-link'> */}
                  <div className='card info-wrapper'>
                    <img src={data.img} className="card-img-top" alt="E-Commerce" />
                    <div className='card-body'>
                      <p className='content-label'> {data.label} </p>
                      <span className='content-one'>
                        {data.spanOne}
                      </span>
                      <span className='content-two'>
                        {data.spanTwo}
                      </span>
                    </div>
                  </div>
                {/* </Link> */}
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default DesginInformation