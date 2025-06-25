import React from 'react'
import { ThisDayInfoWrapper, ImgWrapper } from './styles'

const ThisDayInfo = () => {
  return (
    <ThisDayInfoWrapper>
      <div className="infi-row">
        <ImgWrapper>
          <img src="./images/temperature.svg" />
        </ImgWrapper>
        <h2>Temperature</h2>
        <p>100</p>
      </div>

      <div className="infi-row">
        <ImgWrapper>
          <img src="./images/pressure.svg" />
        </ImgWrapper>
        <h2>Pressure</h2>
        <p>100</p>
      </div>

      <div className="infi-row">
        <ImgWrapper>
          <img src="./images/Humidity.svg" />
        </ImgWrapper>
        <h2>Temperature</h2>
        <p>100</p>
      </div>

      <div className="infi-row">
        <ImgWrapper>
          <img src="./images/windy.svg" />
        </ImgWrapper>
        <h2>Temperature</h2>
        <p>100</p>
      </div>
    </ThisDayInfoWrapper>
    
  )
}

export default ThisDayInfo