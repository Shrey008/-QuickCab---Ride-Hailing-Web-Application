import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Quick_cab_logo from "../assets/logo/quick_cab_logo.png";
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopup from '../components/ConfirmRidePopup';

const CaptainHome = () => {
      const [ridePopupPanel, setRidePopupPanel] =  useState(true)
      const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
      const ridePopupPanelRef = useRef(null)
      const confirmRidePopupPanelRef = useRef(null)
       
      

      useGSAP(
        function () {
          if (ridePopupPanel) {
            gsap.to(ridePopupPanelRef.current, {
              transform: "translateY(0)",
            });
          } else {
            gsap.to(ridePopupPanelRef.current, {
              transform: "translateY(100%)",
            });
          }
        },
        [ridePopupPanel]
      );

      useGSAP(
        function () {
          if (confirmRidePopupPanel) {
            gsap.to(confirmRidePopupPanelRef.current, {
              transform: "translateY(0)",
            });
          } else {
            gsap.to(confirmRidePopupPanelRef.current, {
              transform: "translateY(100%)",
            });
          }
        },
        [confirmRidePopupPanel]
      );
  return (
    <div className="h-screen">
      <div className='fixed p-6 top-0 flex items-center justify-end w-full'>
        <img className="w-28 absolute left-5 top-5" src={Quick_cab_logo} />
        <Link to='/captain-home' className=" h-10 w-10 bg-white flex items-center justify-center rounded-full mt-1 ">
            <i class=" text-lg font-medium ri-logout-box-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://th.bing.com/th/id/OIP.CdPGs2UrpqjBv7cg9JrLTwHaLx?w=503&h=800&rs=1&pid=ImgDetMain "
        />
      </div>

      <div className="h-2/5 p-6">
        <CaptainDetails />  
      </div>

      <div ref={ridePopupPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-8 pt-10 bg-white">
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
      </div>

      <div ref={confirmRidePopupPanelRef} className="fixed w-full h-full z-10 bottom-0 translate-y-full px-3 py-8 pt-10 bg-white">
        <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome