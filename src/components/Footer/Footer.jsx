import { faGoogle, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image2 from '../../assets/images/Image2.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='footer md:flex justify-center items-center gap-96 bg-orange-400'>
            <div className="text-base block ">
                <form className='pt-10'>

                    <fieldset className="form-control ">

                        <div className="join">
                            <input type="text" placeholder="Enter Your Email" className="input input-bordered join-item" />
                            <button className="btn bg-orange-700 rounded text-white ">Subscribe<FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                    </fieldset>
                </form>


                <div className={`footer pt-14 pl-2 pr-4 pb-4 flex flex-col-reverse justify-center items-center md:flex-row md:justify-between md:items-center gap-28 text-black`}>
                    <div>
                        <h4 className='font-bold text-xl'>pti<span className='text-orange-600 font-bold text-2xl'>.</span></h4>
                        <p className='font-semibold pb-9'>Copyright©Tripp.All right reserved</p>
                    </div>
                    <nav className="flex pt-6">
                        <div className="circle rounded-full  md: bg-orange-200 p-2 text-orange-500  ">
                            <FontAwesomeIcon icon={faGoogle} />
                        </div>
                        <div className="circle bg-orange-200 p-2 text-orange-500 rounded-full">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="circle  bg-orange-200 p-2  text-orange-500 rounded-full">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </nav>
                </div>

            </div>

            <img src={image2} className='hidden md:block w-72 h-72' alt="" />
        </div>
    );
};

export default Footer;