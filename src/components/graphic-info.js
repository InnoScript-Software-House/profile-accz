import React from 'react'

const graphicInfo = [
  {
    img: require('../assets/images/graphicInformation/Nail Polish.png'),
    label: 'Nail Polish Advertising Design',
    spanOne: 'Ads Design',
    spanTwo: 'Social Media Design'
  },
  {
    img: require('../assets/images/graphicInformation/bakdrop mockup 1.png'),
    label: 'Freshgora | Backdrop Design',
    spanOne: 'Backdrop',
    spanTwo: 'Event Design'
  },
  {
    img: require('../assets/images/graphicInformation/Heartbeat.png'),
    label: 'Heartbeat Typography Design',
    spanOne: 'Heartbeat',
    spanTwo: 'Typography Design'
  },
  {
    img: require('../assets/images/graphicInformation/Air Line.png'),
    label: 'Airline Advertising Design',
    spanOne: 'Ads Design',
    spanTwo: 'Social Media Design'
  },
  {
    img: require('../assets/images/graphicInformation/Photo Booth.png'),
    label: 'Freshgora | Photo Booth Design',
    spanOne: 'Photo Booth',
    spanTwo: 'Event Design'
  },
  {
    img: require('../assets/images/graphicInformation/Flyer.png'),
    label: 'Freshgora | Flyer Design',
    spanOne: 'Flyer',
    spanTwo: 'Print ads Design'
  },
  {
    img: require('../assets/images/graphicInformation/Beauty.png'),
    label: 'Beauty Typography Design',
    spanOne: 'Beauty',
    spanTwo: 'Typography Design'
  },
  {
    img: require('../assets/images/graphicInformation/New Year.png'),
    label: 'Happy New Year Illustration Design',
    spanOne: 'Perspective',
    spanTwo: 'Illustration Design'
  },
  {
    img: require('../assets/images/graphicInformation/Billboard.png'),
    label: 'Energy Drink Billboard Design',
    spanOne: 'Billboard',
    spanTwo: 'Print ads Design'
  }
]

const GraphicInformation = () => {
  return (
    <>
      <div className='row mt-3'>
        {
          graphicInfo.map((data, id) => {
            return (
              <div key={id} className='col-md-6 mb-5'>
                {/* <Link to='/about' className='info-link'> */}
                <div className='card info-wrapper'>
                  <img src={data.img} className="card-img-top" alt="image not found" />
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

export default GraphicInformation