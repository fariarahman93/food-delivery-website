

const Item = ({ item }) => {
    const { Name, Price, ImageUrl } = item;
    return (
        <div>
            <div className=" image-full">
                <figure><img src={ImageUrl} className="w-full h-52 rounded-lg" alt="Shoes" /></figure>
            </div>
            <h2 className="text-center font-semibold text-black-500">{Name}</h2>
        </div>

    );
};

export default Item;