import React from 'react';

export const designInfo = [
  {
    id: 1,
    img: require('../assets/images/desginInformation/we-track.png'),
    label: 'We Track | Crimes Tracker App Case Study',
    spanOne: 'Social Good',
    spanTwo: 'Mobile Application',
    images : [
      require('../assets/images/website/we_track/1.png'),
      require('../assets/images/website/we_track/2.png'),
      require('../assets/images/website/we_track/3.png'),
      require('../assets/images/website/we_track/4.png'),
      require('../assets/images/website/we_track/5.png'),
      require('../assets/images/website/we_track/6.png'),
    ]
  },
  {
    id: 2,
    img: require('../assets/images/desginInformation/Little Kitty.png'),
    label: 'Little Kitty | Cat Accessories E-Commerce App Case Study',
    spanOne: 'E-Commerce',
    spanTwo: 'Mobile Application',
    images: [
      require('../assets/images/website/case_study/1.png'),
      require('../assets/images/website/case_study/2.png'),
      require('../assets/images/website/case_study/3.png'),
      require('../assets/images/website/case_study/4.png'),
    ]
  },
  {
    id: 3,
    img: require('../assets/images/desginInformation/AM.png'),
    label: 'Aflac | Associate Matching',
    spanOne: 'Insurance',
    spanTwo: 'Web Application',
    images: [
      require('../assets/images/website/associate_matching/1.png'),
      require('../assets/images/website/associate_matching/2.png'),
    ]
  },
  {
    id: 4,
    img: require('../assets/images/desginInformation/Active.png'),
    label: 'AIA Cambodia | Active App',
    spanOne: 'Health',
    spanTwo: 'Mobile Application',
    images: [
      require('../assets/images/website/aia/1.png'),
      require('../assets/images/website/aia/2.png'),
    ]
  },
  {
    id: 5,
    img: require('../assets/images/desginInformation/AI Learning.png'),
    label: 'Aflac | AI Learning System',
    spanOne: 'Insurance',
    spanTwo: 'Web Application',
    images: [
      require('../assets/images/website/ai/1.png'),
      require('../assets/images/website/ai/2.png'),
    ],
  },
  {
    id: 6,
    img: require('../assets/images/desginInformation/MyanX.png'),
    label: 'AIA Myanmar | MyanX App',
    spanOne: 'Insurance',
    spanTwo: 'Mobile Application',
    images: [
      require('../assets/images/website/myanx/1.png'),
      require('../assets/images/website/myanx/2.png'),
    ],
  },
  {
    id: 7,
    img: require('../assets/images/desginInformation/Myanma Insurance.png'),
    label: 'Myanmar Insurance | Claim App',
    spanOne: 'Insurance',
    spanTwo: 'Mobile Application',
    images: [
      require('../assets/images/website/insurance/1.png'),
    ],
  },
  {
    id: 8,
    img: require('../assets/images/desginInformation/Colors Rainbow.png'),
    label: 'Colors Rainbow | Magazine App',
    spanOne: 'Magazines',
    spanTwo: 'Mobile Application',
    images: [
      require('../assets/images/website/color_rainbow/1.png'),
      require('../assets/images/website/color_rainbow/2.png'),
    ],
  },
  {
    id: 9,
    img: require('../assets/images/desginInformation/ICAP.png'),
    label: 'ICAP | HIV Clincal Job Aids App',
    spanOne: 'Health',
    spanTwo: 'Mobile Application',
    images: [
      require('../assets/images/website/icap/1.png'),
      require('../assets/images/website/icap/2.png'),
    ],
  },
  {
    id: 10,
    img: require('../assets/images/desginInformation/UAB Pay.png'),
    label: 'UAB Bank | UAB Pay App',
    spanOne: 'Banking',
    spanTwo: 'Mobile Application',
    images: [
      require('../assets/images/website/uab/1.png'),
      require('../assets/images/website/uab/2.png'),
    ],
  },
  {
    id: 11,
    img: require('../assets/images/desginInformation/FNI.png'),
    label: 'FNI Insurance | Insurance Website',
    spanOne: 'Insurance',
    spanTwo: 'Website',
    images: [
      require('../assets/images/website/fni/1.png'),
      require('../assets/images/website/fni/2.png'),
    ],
  }
];

const DesginInformation = () => {
  return (
    <>
      <div className='row mt-3'>
        {
          designInfo.map((data, id) => {
            return (
              <div key={id} className='col-md-6 mb-5 custom-card' onClick={() => {
                window.open(`project/${data.id}`, '_blank');
              }}>
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
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default DesginInformation