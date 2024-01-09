import logo from "../../assets/img/logo/enairalogo.png"
const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-32 h-32 border-8 border-green-700 rounded-full animate-spin">
        {/* Add your image inside the spinner */}
        <img
          src={logo}
          alt="Loader"
          className="w-24 h-24 mx-auto animate-pulse"
        />
      </div>
    </div>
  );
};

export default Spinner;
