import React from 'react'
import { BottomPart, DayWrapper, TopPart } from "./styles"

const Day = () => {
  return (
    <DayWrapper>
      <TopPart>
        <div>
          <h2>wed</h2>
          <h3>06.25</h3>
        </div>
        <img src="./images/weatherIcons/snow.svg" />
      </TopPart>
      <BottomPart>
        <h2>21°</h2>
        <h3>19°</h3>
      </BottomPart>
    </DayWrapper>
  )
}

export default Day