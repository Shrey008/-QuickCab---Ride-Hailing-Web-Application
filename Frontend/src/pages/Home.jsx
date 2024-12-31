import React, { useRef, useState } from "react";
import Quick_cab_logo from "../assets/logo/quick_cab_logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import { ConfirmRide } from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";


const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);
  const [vehicleFound,setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [waitingForDriver, setWaitingForDriver] = useState(false);




  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
          // opacity:1,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          // transform: "translateY(10%)",
          
          //opacity:0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );



  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-28 absolute left-5 top-5" src={Quick_cab_logo} />

      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://th.bing.com/th/id/OIP.CdPGs2UrpqjBv7cg9JrLTwHaLx?w=503&h=800&rs=1&pid=ImgDetMain "
        />
      </div>

      <div className="h-screen absolute top-0  w-full flex flex-col justify-end">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute top-5 opacity-0 right-6 text-2xl "
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>

            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick location"
            />

            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div ref={panelRef} className=" h-0 bg-white ">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      {/* code for providing vehicle selection properties */}

      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-8 pt-10 bg-white"
      >
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>

      <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-10 bg-white">
         <ConfirmRide setConfirmRidePanel={setConfirmRidePanel}  setVehicleFound={setVehicleFound} setVehiclePanel={setVehiclePanel}  /> 
         {/* // ye setVehiclePanel hmne apni trf se edit kiya hai actual code me ye nhi hai   */}
      </div>
 
      <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-10 bg-white">
        <LookingForDriver setVehicleFound={setVehicleFound}  />
      </div>

      <div ref={waitingForDriverRef}  className="fixed w-full z-10 bottom-0   px-3 py-6 pt-10 bg-white">
        <WaitingForDriver  waitingForDriver={waitingForDriver}  />
      </div>
    </div>
  );
};

export default Home;
