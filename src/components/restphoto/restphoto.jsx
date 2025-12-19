import coffeeImage from "../../assets/vann.png";
import Buttontomenu from"../Buttontomenu/Buttontomenu.jsx"
const HeroImage = () => {
    return (
        <div
            className="
        relative
        w-full
        h-screen
        bg-center
        bg-no-repeat
        bg-cover
      "
            style={{ backgroundImage: `url(${coffeeImage})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 flex items-center justify-center top-60">
                <p className="text-white text-4xl font-light font-serif">
                    - welcome to our restaurent -
                </p>

            </div>
            <div className="relative z-10 flex items-center justify-center top-65">
                <Buttontomenu/>
            </div>
        </div>
    );
};

export default HeroImage;
