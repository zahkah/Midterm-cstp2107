import React from 'react'
import HotelCard from '../HotelCard/HotelCard'
import './HotelList.css';

const HotelList = ({ hotelData }) => {
  return (
    <div className='hotel-list-container'>
        {/* SHOW ALL THE LIST OF HOTELS HERE! */}
        {
            hotelData.map((hotel, index) => {
                return <HotelCard hotel={hotel} key={index} />
            })
        }
    </div>
  )
}

export default HotelList