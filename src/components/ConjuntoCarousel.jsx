import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './ConjuntoCarousel.css'

import Finans from '../img/image/Finans.png'
import Poke from '../img/image/ApiPokemon.png'
import ListaTarefa from '../img/image/ListaTarefa.png'
import Netflix from '../img/image/netflix.png'
import TecBlog from '../img/image/tecblog.png'
import Carousel from "./Carousel";



const ConjuntoCarousel = (props) => (
<div className="cards">
    <Carousel className='cardImg' nome={Netflix}/>
    <Carousel className='cardImg' nome={TecBlog}/>
    <Carousel className='cardImg' nome={Finans}/>
    <Carousel className='cardImg' nome={Poke}/>
    <Carousel className='cardImg' nome={ListaTarefa}/>  
    
</div>
)

export default ConjuntoCarousel;
