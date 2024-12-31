import React from 'react'
import { Link } from 'react-router-dom'
const FinishRide = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
           props.setFinishRidePanel(false)
        }}
      >
        <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-3">Finish this Ride</h3>

      <div className="flex items-center justify-between mt-6 p-2 border-2 border-yellow-400 rounded-lg">
        <div className="flex items-center gap-3">
          <img className="h-12 w-12 rounded-full object-cover" src="http://farm6.staticflickr.com/5252/5403292396_0804de9bcf_z.jpg"   />
          <h2 className="text-xl font-medium">Harsh Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex justify-between flex-col items-center ">
         
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
         
       
        <div className='mt-10 w-full  '>
            <Link to='/captain-home' className="w-full   flex justify-center  bg-green-600 text-white font-semibold rounded-lg p-2 text-lg ">Finish Ride</Link>
            {/* <p className='  mt-8 text-xs'>Click on finish ride button if you have completed the payment.</p> */}
                 
             
        </div>
      </div>
    </div>
  )
}

export default FinishRide