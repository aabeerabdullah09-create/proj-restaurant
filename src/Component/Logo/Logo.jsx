import logo from "../../../assets/lojpeg.jpeg";

const Logoo = () => {
    return (
        <div className="-mt-5">
            <div className="flex items-center">
                <img alt="Vanilla logo" src={logo}
                    className="w-28 md:w-40 brightness-[80%]"/>
            </div>
        </div>
    );
}

export default Logoo;
