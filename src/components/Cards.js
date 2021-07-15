import React from "react"
import "./Cards.css"
import CardItem from "./CardItem"

function Cards() {
  return (
    <div className="cards">
      {/* <h1>Check out these EPIC Destinations!</h1> */}
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/north.jpg"
              text="Snowfall in Lachung"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/zuluk.jpg"
              text="The Ancient Silk Route"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="images/lake.jpg"
              text="One of the highest lakes in the world"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/south.jpg"
              text="Adventures in South Sikkim"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/monk.jpg"
              text="The Ancinet Monasteries of Sikkim"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/lake.jpg"
              text="One of the highest lakes in the world"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
