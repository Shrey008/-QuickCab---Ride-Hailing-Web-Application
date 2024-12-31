import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className="p-1 text-center w-[93%] absolute top-0 mb-2" onClick={() => {
            props.setVehiclePanel(false);
          }}>
        <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-3">Choose your Vehicle</h3>

      <div onClick={()=>{
        props.setConfirmRidePanel(true)
        props.setVehiclePanel(false); // it is from my side not in actual project 
      }} className="flex mb-2 p-1 border-2 active:border-black rounded-xl w-full items-center justify-between  ">
        <img
          className="h-12"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
        />
        <div className="w-1/2">
          <h4 className="text-lg font-semibold">
            QuickCab{" "}
            <span>
              <i className="ri-map-pin-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-base text-base font-semibold">4 mins away </h5>
          <p className="font-normal text-xs text-gray-700">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold ">Rs 183.20</h2>
      </div>
      
      <div  onClick={()=>{
        props.setConfirmRidePanel(true)
      }} className="flex mb-2 p-1 border-2 active:border-black rounded-xl w-full items-center justify-between  ">
        <img
          className="h-11"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
        />
        <div className="w-1/2 ">
          <h4 className="text-lg font-semibold">
            Bike{" "}
            <span>
              <i className="ri-map-pin-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-base text-base font-semibold">2 mins away </h5>
          <p className="font-normal text-xs text-gray-700">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">Rs 62.80</h2>
      </div>

      <div  onClick={()=>{
        props.setConfirmRidePanel(true)
      }} className="flex mb-2 p-1 border-2 active:border-black rounded-xl w-full items-center justify-between  ">
        <img
          className="h-11"
          src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
        />
        <div className="w-1/2">
          <h4 className="text-lg font-semibold">
            Auto{" "}
            <span>
              <i className="ri-map-pin-user-fill"></i>3
            </span>
          </h4>
          <h5 className="font-base text-base font-semibold">1 mins away </h5>
          <p className="font-normal text-xs text-gray-700">
            Affordable, auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">Rs 112.80</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
