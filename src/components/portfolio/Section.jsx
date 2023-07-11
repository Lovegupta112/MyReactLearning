import React from "react";


function Section(props) {
    console.log(props)
    const { heading, desc,image,id } = props;


    return (
        <div className="section">
            <h2 id={id}>{heading}</h2>
            {image && 
             <div className="image">
             <img src={image} alt={heading} />
             </div>
            }
               
            <p>{desc}</p>
        </div>
    );
}
export default Section;