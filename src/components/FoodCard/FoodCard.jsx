const FoodCard = ({ item }) => {
    return (
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition mt-3
        bg-white">
            <img src={item.image} alt={item.name} className="mb-2 w-full h-40 object-cover rounded"/>
            <h3 className="font-semibold text-lg text-black text-center">{item.name}</h3>
            <p className="text-black text-center">{item.price}</p>
        </div>
    );
};

export default FoodCard;
