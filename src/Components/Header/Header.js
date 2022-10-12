import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import "./Header.css"
export const Header = ({type}) => {

    // for date selection
  const [openDate, setopenDate] = useState(false)
  const [date, setDate] = useState([
    {
        startDate:new Date(),
        endDate:new Date(),
        key:"selection"
    }
  ])
//   for person selection 
const [openOptions, setopenOptions] = useState(false)
const [options, setOptions] = useState({
    adult:1,
    children:0,
    room:0
});
const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "p" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
    return (
        <>
            

             <div className="header">
      <div className= {
          type === "list" ? "headerContainer listMode" : "Container"
        }>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
            { type!=="list" &&<>
            <h1 className="title">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="desc">
              Get rewarded for your travels  unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="btn">Sign in / Register</button>

            <div className="search">
                <div className="searchItem">
                    <FontAwesomeIcon icon={faBed} className="icon"/>
                    <input type="text" placeholder="Where are you going" className="searchinput"/>
                </div>
                <div className="searchItem">
                    <FontAwesomeIcon  icon={faCalendarDays} className="icon"/>
                    <span onClick={()=>setopenDate(!openDate)} className="searchText">{`${format(date[0].startDate,"dd/MM/yyyy")}to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                    {openDate &&<DateRange editableDateInputs={true} onChange={item=>setDate([item.selection])} moveRangeOnFirstSelection={false}
                    ranges={date} className="date"/>}
                </div>
                <div className="searchItem">
                {/* for person selection  */}
                    <FontAwesomeIcon icon={faPerson} className="icon"/>
                    <span onClick={()=>setopenOptions(!openOptions)} className="searchText">{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>

                    {openOptions &&<div className="options">
                        <div className="optionItem">
                            <span className="optionstext">Adult</span>
                            <div className="btndiv">
                            <button disabled={options.adult <=1}  onClick={() => handleOption("adult","m")} className="optionsbtn">-</button>
                            <span className="optionsnum">{options.adult}</span>
                            <button onClick={()=>handleOption("adult","p")} className="optionsbtn">+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                        <span className="optionstext">Children</span>
                            <div className="btndiv">
                            <button disabled={options.children <=0}  onClick={()=>handleOption("children","m")} className="optionsbtn">-</button>
                            <span className="optionsnum">{options.children}</span>
                            <button onClick={()=>handleOption("children","p")} className="optionsbtn">+</button>
                            </div>
                        
                        </div>
                        <div className="optionItem">
                        <span className="optionstext">Room</span>
                            <div className="btndiv">
                            <button disabled={options.room <=1} onClick={()=>handleOption("room","m")} className="optionsbtn">-</button>
                            <span className="optionnum">{options.room}</span>
                            <button onClick={()=>handleOption("room","p")} className="optionsbtn">+</button>
                            </div>
                        
                        </div>
                    </div>}
                    
                    <div className="headerSearchItem">
                <button id="btn" className="" >
                  Search
                </button>
              </div>
                </div>
            </div>
            </>}
     </div>
            </div>
        </>)
}


export default Header