import { DotLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center">
                  <DotLoader
        color="#000000"
        loading="true"
        cssOverride=""
        size={150}
        
      />
        </div>
    );
};

export default Loader;