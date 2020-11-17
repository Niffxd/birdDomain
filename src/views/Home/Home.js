import React from 'react';
import {Link} from 'react-router-dom';
import Carrousel from '../../components/Carrousel/Carrousel';
import Galeria from '../../components/Galeria/Galeria';
import HeroImg from '../../components/HeroImg/HeroImg';


const Home = () => (
    
    <Link to = '/'>
        <HeroImg/>
        <Carrousel/>
        <Galeria/>
        <div className="bg-secondary p-4">Publicidad</div>
    </Link>
);


export default Home;

/*  */