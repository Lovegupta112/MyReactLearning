import React from "react";
import {AiFillStar} from 'react-icons/ai';

const Movie=(props)=>{

const {info}=props;
// console.log(info);

const voteStyle={
    color:Math.floor(info.vote_average)>5?'green':'red',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
}

const Img_path='https://image.tmdb.org/t/p/w1280';
    return(
       <div className="movie">
        <div className="image">
            <img src={Img_path+info.poster_path} alt="" />
        </div>
        <h3>{info.title}</h3>
        <p>Release: {info.release_date}</p>
        <h3 style={voteStyle}>Vote: {info.vote_average} <AiFillStar/> </h3>
        <p className="overview"><span id="overview">Overview:</span> {info.overview}</p>
       </div>
    )
}
export default Movie;