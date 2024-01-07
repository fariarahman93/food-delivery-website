
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleChevronDown, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className="navbar md:flex gap-2 md:justify-between items-center bg-base-100">
            <div className='pl-0'>
                <a className="btn btn-ghost text-2xl font-bold">pti.</a>
            </div>
            <div className="">
                <div className="form-control relative md:flex justify-center items-center gap-10">
                    <FontAwesomeIcon icon={faSearch} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-orange-500" />
                    <input type="text" placeholder="Search Audiobook" className="input input-bordered  h-12 pl-8 sm:pr-0 md:pr-96 w-36 md:w-auto" />
                </div>

                <div className="dropdown dropdown-bottom ml-2">
                    <div tabIndex={0} role="button" className="btn">
                        Menu <FontAwesomeIcon icon={faCircleChevronDown} className="text-orange-500 pl-2" />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 ">
                        <li><a className="text-gray-800 hover:text-orange-500">Home</a></li>
                        <li><a className="text-gray-800 hover:text-orange-500">Details</a></li>
                        <li><a className="text-gray-800 hover:text-orange-500">Category</a></li>
                        <li><a className="text-gray-800 hover:text-orange-500">My Favourites</a></li>
                        <li><a className="text-gray-800 hover:text-orange-500">Profile</a></li>
                        <li><a className="text-gray-80 hover:text-orange-500">Log in/Sign Up</a></li>
                    </ul>
                </div>

            </div>

            <div className="hidden md:flex dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center pt-4">
                        <FontAwesomeIcon icon={faUser} className="text-white " />
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2  menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;



