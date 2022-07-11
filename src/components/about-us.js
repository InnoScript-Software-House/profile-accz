import '../assets/css/about-us.css';
import profile from '../assets/images/profile.png';

const AboutUsComponent = () => {

    const downloadLink = 'https://drive.google.com/file/d/1G0iV6mZJerjzVROCvXVZZZRHjsQ9OeGb/view?usp=sharing';

    return(
        <div className='row mt-5'>
            <div className='description col-md-6 align-self-center'>
                <h3>
                    <span className="title-black-color"> Hi! I'm </span>
                    <span className='title-green-color'> Aye Chyo </span>
                </h3>
                <p className='paragraph'> An ambitious product, UI/UX designer Passionate about solving design challenges of digital products </p>

                <button className='btn btn-customize mt-3 mb-3' onClick={() => {
                    window.location.replace(downloadLink);
                }}> Hire Me! </button>
            </div>

            <div className='col-md-6'>
                <div className='d-flex flex-row justify-content-end'>
                    <div className='profile-box'>
                        <img className='profile-image' src={profile} alt="Aye Chyo Chyo Zin" title='Aye Chyo Chyo Zin' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsComponent;