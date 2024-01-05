
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCircleChevronDown, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl font-bold">pti.</a>
      </div>
      <div className="flex-none gap-2 items-center">
        <div className="form-control relative flex items-center">
          <FontAwesomeIcon icon={faSearch} className="absolute top-1/2 left-5 transform -translate-y-1/2 text-orange-500" />
          <input type="text"  placeholder=" Search Audiobook" className="input input-bordered w-full h-12 mr-56  md:w-auto pl-56" />
        </div>
        <div className="dropdown dropdown-bottom ml-2">
  <div tabIndex={0} role="button" className="btn  pl-10 ">
    Menu <FontAwesomeIcon icon={faCircleChevronDown} className="text-orange-500 pl-2" />
  </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white-500 rounded-box w-52 ">
    <li><a className="text-gray-800 hover:text-orange-500">Home</a></li>
    <li><a className="text-gray-800 hover:text-orange-500">Details</a></li>
    <li><a className="text-gray-800 hover:text-orange-500">Category</a></li>
    <li><a className="text-gray-800 hover:text-orange-500">My Favourites</a></li>
    <li><a className="text-gray-800 hover:text-orange-500">Profile</a></li>
    <li><a className="text-gray-80 hover:text-orange-500">Log in/Sign Up</a></li>
  </ul>
</div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center pt-4">
              <FontAwesomeIcon icon={faUser} className="text-white " />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge text-orange-500">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;





