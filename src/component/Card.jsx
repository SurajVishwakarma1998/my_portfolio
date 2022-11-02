import React from 'react';
import Image1 from "./imgaes/web.png";
import Image2 from "./imgaes/mobile.png";
import Image3 from "./imgaes/uiux (1).png";


function Card() {
  return (
    <div className='cardSec'>

         <section className="work">
        <div className="grid_item">
            <div className="card">
                <div className="img_container">
                    <img src={Image1} alt="web development" />
                </div>

                <div className="card_content">
                    <h3>React Development</h3>
                    <p>
                    React.js developers design and implement user interface components for JavaScript-based
                     web and mobile applications using the React open-source library ecosystem.
                    </p>
                </div>
            </div>
        </div>
        <div className="grid_item">
            <div className="card">
                <div className="img_container">
                    <img src={Image2} alt="web development" />
                </div>

                <div className="card_content">
                    <h3>Responsive  Designe</h3>
                    <p>
                       Designers are responsible artists. Whether it is web designing or development it requires a sense of 
                                 imagination for looking at the output even before it is published.
                    </p>
                </div>
            </div>
        </div>
        <div className="grid_item">
            <div className="card">
            <div className="img_container">
                    <img src={Image3} alt="web development" />
                </div>

                <div className="card_content">
                    <h3>Frontend Development</h3>
                    <p>
                    The life of a designer is a life of fight. Fight against the ugliness. 
                    Just like a doctor fights against disease. For us, the visual disease is what we have around,
                     and what we try to do is cure it somehow with design.
                    </p>
                </div>
            </div>
        </div>
    </section>  
    </div>
  )
}

export default Card