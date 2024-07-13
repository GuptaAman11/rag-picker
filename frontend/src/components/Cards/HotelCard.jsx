import React from 'react'
import './hotelcard.css'

const HotelCard = () => {
  return (
    <div className="a-main-container">
        <div className="slider">
        <div className="a-maindiv" id='1'>
      <div className="a-textdiv">
        <label>Tthis is 1st main text</label>
      </div>
      <div className="a-imagediv">
        <div className='a-image'>
            <img src="https://via.placeholder.com/1000x250" alt="" />
        </div>

        <div className="a-imgtext">
            <div className="a-experience">experience</div>
            <div className="a-secondtext">
                <label>Dine Under the Stars.</label>
            </div>
            <div className="a-paragraph">
                <p>A carefully prepared meal for two, delivered by a personal butler, while you are surrounded by cascading water features and the stars. Choose from our suggested Royal Indian 'thali' or a carefully selected four-course meal. A special occasion will be inspired by delectable cuisines and a distinctive location.</p>

            </div>
            <div className="a-explore">
                <button>Explore</button>
            </div>
        </div>
      </div>
        </div>
        <div className="a-maindiv" id='2'>
      <div className="a-textdiv">
        <label>Tthis is 1st main text</label>
      </div>
      <div className="a-imagediv">
        <div className='a-image'>
            <img src="https://via.placeholder.com/1000x250" alt="" />
        </div>

        <div className="a-imgtext">
            <div className="a-experience">experience</div>
            <div className="a-secondtext">
                <label>Dine Under the Stars.</label>
            </div>
            <div className="a-paragraph">
                <p>A carefully prepared meal for two, delivered by a personal butler, while you are surrounded by cascading water features and the stars. Choose from our suggested Royal Indian 'thali' or a carefully selected four-course meal. A special occasion will be inspired by delectable cuisines and a distinctive location.</p>

            </div>
            <div className="a-explore">
                <button>Explore</button>
            </div>
        </div>
      </div>
    </div>
    <div className="a-maindiv" id='3'>
      <div className="a-textdiv">
        <label>Tthis is 1st main text</label>
      </div>
      <div className="a-imagediv">
        <div className='a-image'>
            <img src="https://via.placeholder.com/1000x250" alt="" />
        </div>

        <div className="a-imgtext">
            <div className="a-experience">experience</div>
            <div className="a-secondtext">
                <label>Dine Under the Stars.</label>
            </div>
            <div className="a-paragraph">
                <p>A carefully prepared meal for two, delivered by a personal butler, while you are surrounded by cascading water features and the stars. Choose from our suggested Royal Indian 'thali' or a carefully selected four-course meal. A special occasion will be inspired by delectable cuisines and a distinctive location.</p>

            </div>
            <div className="a-explore">
                <button>Explore</button>
            </div>
        </div>
      </div>
    </div>
    </div>

    <div className="slider-nav">
            <a href="1"></a>
            <a href="2"></a>
            <a href="3"></a>
        </div>

    </div>
  )
}

export default HotelCard