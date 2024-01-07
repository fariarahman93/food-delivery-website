import { useEffect, useState } from "react";
import Item from "../Item/Item";
import '../../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

// Modal component
const Modal = ({ onClose, children }) => {
    return (
        <div className={`modal ${onClose ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div className="modal-box">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                {children}
            </div>
        </div>
    );
};

const Popular = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [popularData, setPopularData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 767px)").matches);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia("(max-width: 767px)").matches);
        };

        handleResize(); // Set initial isMobile state

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        fetch("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
            .then((res) => res.json())
            .then((data) => {
                if (data && data.Items && Array.isArray(data.Items)) {
                    const popularItems = data.Items.filter((item) => item.IsPopular);
                    setPopularData(popularItems);
                } else {
                    console.error("Invalid data format:", data);
                }
            });
    }, []);
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        const itemsPerPage = isMobile ? 3 : 5;
        setCurrentIndex((prevIndex) => Math.min(popularData.length - itemsPerPage, prevIndex + 1));
    };

    const isLeftArrowHighlighted = currentIndex > 0;
    const isRightArrowHighlighted = currentIndex < popularData.length - (isMobile ? 3 : 5);

    const onSubmit = (data) => {
        setPopularData([data, ...popularData]);
        setShowModal(false);
    };

    return (
        <div className="popular-section">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold mb-4">Popular</h2>
                <h2>
                    <button className="text-orange-500" onClick={() => setShowModal(true)}>
                        Add More
                    </button>{" "}
                    <FontAwesomeIcon
                        icon={faAngleLeft}
                        className={`text-base-300 cursor-pointer ${isLeftArrowHighlighted ? 'text-gray-700' : 'text-gray-300 cursor-not-allowed'}`}
                        onClick={handlePrev}
                    />
                    <FontAwesomeIcon
                        icon={faAngleRight}
                        className={`text-base-300 cursor-pointer ${isRightArrowHighlighted ? 'text-gray-700' : 'text-gray-300 cursor-not-allowed'}`}
                        onClick={handleNext}
                    />
                </h2>
            </div>

            <div className={`grid grid-cols-${isMobile ? '3' : '5'} gap-4 overflow-hidden`}>
                {popularData.slice(currentIndex, currentIndex + (isMobile ? 3 : 5)).map((item) => (
                    <Item key={item.Id} item={item} />
                ))}
            </div>


            {/* Modal */}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-6">
                        <div className="mb-4">
                            <label htmlFor="Name" className="block text-gray-700 text-sm font-bold mb-2">
                                Name:
                            </label>
                            <input
                                type="text"
                                {...register("Name", { required: true })}
                                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                            />
                            {errors.Name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="Price" className="block text-gray-700 text-sm font-bold mb-2">
                                Price:
                            </label>
                            <input
                                type="number"
                                {...register("Price", { required: true })}
                                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                            />
                            {errors.Price && <p className="text-red-500 text-xs mt-1">Price is required</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="ImageUrl" className="block text-gray-700 text-sm font-bold mb-2">
                                Image URL:
                            </label>
                            <input
                                type="text"
                                {...register("ImageUrl", { required: true })}
                                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                            />
                            {errors.ImageUrl && <p className="text-red-500 text-xs mt-1">ImageUrl is required</p>}
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                        >
                            Add Product
                        </button>
                    </form>
                </Modal>
            )}
        </div>
    );
};

export default Popular;
