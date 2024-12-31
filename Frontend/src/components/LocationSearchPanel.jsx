import React from 'react'

const LocationSearchPanel = (props) => {
   const locations = [
      "231A, Near prbhat Hospital, Ashoka Garden, Bhopal ",
      "231B, Near Pranjal Hospital, Ashoka Garden, Bhopal ",
      "231C, Near sharma chai hotel, Ashoka Garden, Bhopal "
   ]
  return (
    <div> 
     {/* This is just a sample data for providing the location or destination  */}
     {
      locations.map(function(elem,idx){
         return <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
         }}  className='flex items-center justify-start gap-2 my-2 p-1 mt-3  border-2 border-gray-100 active:border-black rounded-xl'>
         <h2 className='bg-[#eee] h-8 flex items-center justify-center rounded-full w-14 '><i  className="ri-map-pin-fill text-[18px] "></i></h2>
         <h4 className='font-medium'>{elem}</h4>
      </div>
      })
     }  
    </div>
  )
}

export default LocationSearchPanel