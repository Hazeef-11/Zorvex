import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faTruckFast,
  faShieldHalved,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons"

const Foot = () => {
  return (
    <div className='flex justify-center gap-75 bg-slate-200 pt-15 pb-10 pl-10'>
      <div className='flex gap-3 '>
         <FontAwesomeIcon
              icon={faTruckFast}
              className="text-3xl text-[#172b4d]"
            />

            <div className='-mt-5 ml-2'>
              <p className="font-bold text-lg">
                Fast Delivery
              </p>
              <p>Fast delivery to <br />your doorstep</p>
              </div>
      </div>

      <div className='flex gap-3'>
         <FontAwesomeIcon
              icon={faShieldHalved}
              className="text-3xl text-[#172b4d]"
            />

            <div className='-mt-5 '>
              <p className="font-bold text-lg">
                Secure Shopping
              </p>
              <p>100% secure checkout <br /> and payments</p>

              </div>
      </div>

      <div className='flex gap-3'>
         <FontAwesomeIcon
              icon={faHeadset}
              className="text-3xl text-[#172b4d]"
            />

            <div className='-mt-5 '>
              <p className="font-bold text-lg">
                24/7 Customer Support
              </p>
              <p>We're always here <br />to help you</p>
              </div>
      </div>
    </div>
  )
}

export default Foot