import  './HotelRating.css'

const HotelRating = () => {

    return (

        <div className="hr">
            <div className="hrItem">
                <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="hrimg" />
                <span className="hrName">kimat</span>
                <span className="hrcity">surat</span>
                <span className="hrprice">120</span>
                <div className="rating">
                    <button className="ratingbtn">8.8</button>
                    <span>exellent</span>
                </div>
            </div>
            <div className="hrItem">
                <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="hrimg" />
                <span className="hrName">kimat</span>
                <span className="hrcity">surat</span>
                <span className="hrprice">120</span>
                <div className="rating">
                    <button className="ratingbtn">7.7</button>
                    <span>exellent</span>
                </div>
            </div>
            <div className="hrItem">
                <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="hrimg" />
                <span className="hrName">kimat</span>
                <span className="hrcity">surat</span>
                <span className="hrprice">120</span>
                <div className="rating">
                    <button className="ratingbtn">5.6</button>
                    <span>exellent</span>
                </div>
            </div>
        </div>)
}

export default HotelRating