import { faGoogle, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-orange-400 text-base-content">
            <form>
          
          <fieldset className="form-control w-80">
           
            <div className="join">
              <input type="text" placeholder="Enter Your Email"  className="input input-bordered join-item" /> 
              <button className="btn bg-orange-700 rounded text-white ">Subscribe</button>
            </div>
          </fieldset>
        </form>
        
        
        <div className="footer items-center p-4  text-black-content">
  <div className="items-center grid-flow-col">
  
    <p>Copyright © 2024 - All right reserved</p>
  </div> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <FontAwesomeIcon icon={faGoogle} />
  <div className="circle bg-white p-2 rounded-full">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
  <FontAwesomeIcon icon={faInstagram } />
  </nav>
</div>
        
      </footer>
    );
};

export default Footer;