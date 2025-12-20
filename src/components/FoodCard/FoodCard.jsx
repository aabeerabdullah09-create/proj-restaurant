const FoodCard=({ item })=> {
    return (
        <div className="bg-white p-3 rounded shadow flex flex-col items-center
                    transform transition-transform duration-300 hover:scale-105">
            <img src={item.image} className="h-40 w-full object-contain mb-2" />
            <h2 className="text-lg font-semibold text-black">{item.name}</h2>
            <p className="text-gray-700 font-medium">{item.price}</p>
        </div>
    );
}
export default FoodCard;