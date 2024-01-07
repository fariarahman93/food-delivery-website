import image1 from '../../assets/images/Image1.png'
const Banner = () => {
    return (
        <div className="hero  md:bg-orange-400 sm: text-black md:text-white w-full h-3/4 mt-24 rounded-2xl">
 
   <div className="hero-content flex-col lg:flex-row">
   <div className="lg:pr-8">
      <h1 className="text-5xl font-bold leading-tight mb-2 ml-9 mt-14  lg:mb-4">Deliver Food to Your Door Step|</h1>
      <p className="mb-6 ml-9 lg:mb-8">Authentic Food|,Quick Service,Fast Delivery</p>
       
    </div>
    {/* <div  className="lg:w-1/2 sm: bg-orange-300 rounded-3xl  "  >
    <img src={image1} className="rounded-lg " />
  </div> */}
  <div className="relative lg:w-1/2 sm:w-full bg-orange-300 rounded-3xl overflow-hidden shadow-lg ">
    <img src={image1} className=" w-full h-auto rounded-lg " alt="" />
</div>







   </div>
</div>
    );
};

export default Banner;