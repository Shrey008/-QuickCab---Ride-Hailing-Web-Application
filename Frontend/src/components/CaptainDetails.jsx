import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://i.pinimg.com/736x/f6/53/69/f6536980c8c0b05d6816341479e37037.jpg"
          />
          <h4 className="text-lg font-medium">Driver</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Rs760.44</h4>
          <p className="text-sm   text-gray-700">Earned</p>
        </div>
      </div>

      <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-center">
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin  ri-time-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-700">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-700">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-wallet-3-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-700">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
