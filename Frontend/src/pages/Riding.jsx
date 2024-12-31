import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
        <Link to='/home' className="fixed right-2 h-10 w-10 bg-white flex items-center justify-center rounded-full mt-1 ">
            <i className="text-lg font-medium  ri-home-4-line"></i>
        </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://th.bing.com/th/id/OIP.CdPGs2UrpqjBv7cg9JrLTwHaLx?w=503&h=800&rs=1&pid=ImgDetMain "
        />
      </div>

      <div className="h-1/2 p-4">
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
        <button className="w-full bg-green-600 text-white font-semibold rounded-lg p-2 mt-8">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
