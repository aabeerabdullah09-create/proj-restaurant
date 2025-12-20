import bgimage from "../../../assets/vannI.png";

const Restphoto = () => {
    return (

    <img
        src={bgimage}
        alt="background"
        className="mask-x-from-85% mask-x-to-90%
        absolute top-0 left-0 w-full h-full object-contain -z-10 opacity-40
        mask-t-from-70% mask-b-from-95% mask-b-to-100%"

    />
    );
};

export default Restphoto;
