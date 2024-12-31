import React from "react";

export const ConfirmRide = (props) => {
  return (
    <div>
      <h5 className="p-1 text-center w-[93%] absolute top-0 mb-2 "onClick={()=>{
        props.setConfirmRidePanel(false);
        props.setVehiclePanel(true) // ye setVehiclePanel ko true hmne apne trf se kiya hai krne ki jruat nhi hai 
      }}>
        <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold -mb-4">Confirm your Ride</h3>

      <div className="flex justify-between flex-col items-center mt-3 ">
        <img className="h-24 "
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
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
                Prnajal Hospital,Bhopal </p>

            </div>
          </div>

          <div className="flex items-center gap-5 p-2">
          <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">Rs161.73</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Cash Cash
              </p>
            </div>
          </div>
        </div>
        <button onClick={()=>{
            props.setVehicleFound(true)
            props.setConfirmRidePanel(false)
          }}  className="w-full bg-green-600 text-white font-semibold rounded-lg p-2 mt-6">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;