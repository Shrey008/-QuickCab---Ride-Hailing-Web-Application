import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className="p-1 text-center w-[93%] absolute top-0 mb-2" onClick={() => {
              props.waitingForDriver(false);
            }} >
        <i className="text-3xl text-gray-300 ri-arrow-down-wide-line" ></i>
      </h5>
      
      <div className="flex items-center justify-between">
        <img
          className="h-12"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium ">Vishal</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">MP15 AG 3668</h4>
          <p className="text-sm text-gray-700">Maruti Suzuki Alto</p>
        </div>
      </div>

      <div className="flex justify-between flex-col items-center">
        <div className="w-full mt-5  ">
          <div className="flex items-center gap-5 p-2 border-b-2">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">261/11A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Railway station,Bhopal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-2 border-b-2">
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">261/11A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Prnajal Hospital,Bhopal{" "}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-2">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">Rs161.73</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
