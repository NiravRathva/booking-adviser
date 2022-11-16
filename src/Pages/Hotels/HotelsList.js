import { useLocation } from "react-router-dom"
import { useState } from "react"
import Header from "../../Components/Header/Header"
import Navbar from "../../Components/Navbar/Navbar"
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "./HotelsList.css"
import SearchItem from "../../Components/SearchItem/SearchItem";


const HotelsList = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [opendate, setOpenDate] = useState(false)
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (<>

    <Navbar />
    <Header type="list" />
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="listTitle">Search</h1>
          <div className="listItem">
            <label htmlFor="destination">Destination</label>
            <input placeholder={destination} type="text" />
          </div>
          <div className="listItem">
            <label htmlFor="destination">chech-in Date</label>
            <span onClick={() => setOpenDate(!opendate)}>{`${format(date[0].startDate, "dd/MM/yyyy")}to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
            {opendate && <DateRange editableDateInputs={true} onChange={item => setDate([item.selection])} moveRangeOnFirstSelection={false}
              minDate={new Date()} ranges={date} className="hotellistdate" />}
          </div>
          <div className="listItem">
            <label htmlFor="Options">Options</label>
            <div className="listOption">
              <div className="listOptionsItem">
                <span className="listOptionText">Min price <small>per night</small> </span>
                <input type="number" className="listItemInput" />
              </div>
              <div className="listOptionsItem">
                <span className="listOptionText">Max price <small>per night</small> </span>
                <input type="number" className="listItemInput" />
              </div>
              <div className="listOptionsItem">
                <span className="listOptionText">Adult </span>
                <input type="number" min={1} placeholder={options.adult} className="listItemInput" />
              </div>
              <div className="listOptionsItem">
                <span className="listOptionText"> Children </span>
                <input type="number" min={0} placeholder={options.children} className="listItemInput" />
              </div>
              <div className="listOptionsItem">
                <span className="listOptionText">Room </span>
                <input type="number" min={1} placeholder={options.room} className="listItemInput" />
              </div>
            </div>
          </div>
          <button id="listbtn">Search</button>
        </div>
        <div className="listResult">
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          </div>

      </div>
    </div>

  </>)
}

export default HotelsList