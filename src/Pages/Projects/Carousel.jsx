import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'
import gabbi from '../../Assets/gabbi.png'
import shade from '../../Assets/shadespeare.png'
import groupies from '../../Assets/groupies.png'
import alchimia from '../../Assets/alchimia1.png'
export default () => (
    <Carousel infiniteLoop>
        <div>
            <img alt="gabbi" src={gabbi} className='gabbi'/>
            <p className="legend">Legend 1</p>
            <h3>Alchimia</h3>
        </div>
        <div>
            <img alt="" src={shade} />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img alt="" src={groupies} />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img alt="" src={alchimia} />
            <p className="legend">Legend 4</p>
        </div>
    </Carousel>
);
