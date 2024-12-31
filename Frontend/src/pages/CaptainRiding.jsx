import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Quick_cab_logo from "../assets/logo/quick_cab_logo.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import FinishRide from '../components/FinishRide';
const CaptainRiding = () => {
    const [finishRidepanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(
        function () {
          if (finishRidepanel) {
            gsap.to(finishRidePanelRef.current, {
              transform: "translateY(0)",
            });
          } else {
            gsap.to(finishRidePanelRef.current, {
              transform: "translateY(100%)",
            });
          }
        },
        [finishRidepanel]
      );
  return (
    <div className="h-screen">
        
      <div className='fixed p-6 top-0 flex items-center justify-end w-full'>
        <img className="w-28 absolute left-5 top-5" src={Quick_cab_logo} />
        <Link to='/captain-home' className=" h-10 w-10 bg-white flex items-center justify-center rounded-full mt-1 ">
            <i class=" text-lg font-medium ri-logout-box-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://th.bing.com/th/id/OIP.CdPGs2UrpqjBv7cg9JrLTwHaLx?w=503&h=800&rs=1&pid=ImgDetMain "
        />
      </div>

      <div className='h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative'
         onClick={()=>{
            setFinishRidePanel(true)
         }}
        >
        <h5
            className="p-1 text-center w-[93%] absolute top-0" onClick={() => {}}>
                <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
        </h5>
        <h4 className='text-xl font-semibold '>4 KM away</h4>
        <button className=" bg-green-600 text-white font-semibold rounded-lg p-3 px-8">Complete Ride</button>
      </div>

      <div ref={finishRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-8 pt-10 bg-white">
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  )
}

export default CaptainRiding