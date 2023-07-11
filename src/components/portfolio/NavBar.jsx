import React from 'react';


function NavBar(props){
const {text,links}=props;

    return(
        <nav>
            <h2>{text}</h2>
            <div>
                {links.map((link)=>{
                    return <a href={`#${link}`} key={link}>{link}</a>;
                })}
              
                {/* <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#skills">Skills</a>
                <a href="#qualification">Qualifications</a> */}
            </div>
        </nav>
    );
}
export default NavBar;