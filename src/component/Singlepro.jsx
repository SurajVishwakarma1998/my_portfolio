import React from 'react';


const Singlepro = (props) => {
  return (
    <>
         <div className="grid_item_project">
              <div className="card_project">
                <img src={props.Image} alt="Project 5"  target="blank" />
                <div className="card_content_project">
                  <h3>{props.title}</h3>
                </div>
              </div>
            </div>
    </>
  )
}

export default Singlepro