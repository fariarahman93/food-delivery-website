import image1 from '../../assets/images/Image1.png'
const Banner = () => {
    return (
        <div className="hero  bg-orange-400 text-white w-full h-3/4 mt-24 rounded-2xl">
 
   <div className="hero-content flex-col lg:flex-row">
   <div className="lg:pr-8">
      <h1 className="text-5xl font-bold leading-tight mb-2 ml-9 mt-14  lg:mb-4">Deliver Food to Your Door Step|</h1>
      <p className="mb-6 ml-9 lg:mb-8">Authentic Food|,Quick Service,Fast Delivery</p>
      
    </div>
    <div  className="lg:w-1/2 " >
    <img src={image1} className="rounded-lg " />
  </div>
   </div>
</div>
    );
};

export default Banner;