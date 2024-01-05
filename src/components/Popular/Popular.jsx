import { useEffect, useState } from "react";
import Item from "../Item/Item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight,faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Popular = () => {
    const [popularData, setPopularData] = useState([]);
    useEffect(()=>{
        fetch('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
        .then(res=>res.json())
        .then((data) => {
            if (data && data.Items && Array.isArray(data.Items)) {
                const popularItems = data.Items.filter((item) => item.IsPopular);
          setPopularData(popularItems);
            } else {
              console.error('Invalid data format:', data);
            }
          })
    },[])
    return (
        <div className="popular-section">
      <div className="flex justify-between items-center">
      <h2 className="text-3xl font-bold mb-4">Popular </h2>
      <h2 ><span className="text-orange-500">Add More </span> <FontAwesomeIcon icon={faAngleLeft} className="text-base-300" /> <FontAwesomeIcon icon={faAngleRight} /></h2>
      </div>
     
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 ">
      {popularData.map((item) => <Item key={item.id} item={item}></Item>)}
      </div>
    </div>
    );
};

export default Popular;