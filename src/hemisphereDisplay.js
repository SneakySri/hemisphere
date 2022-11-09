import React from 'react';

import locator from './img/locator.png';

import style from './index.css'



const HemiSphere= (props) => {

    const hemi={

       northern:{
            name:'Northern',
            marginT:0,
            
        },
        southern:{
            name:'Southern',
            marginT:400,
            
        }
    };

    const show = props.lat > 0 ? 'northern' : 'southern';
    // var latitude=props.lat;
    // var longitude=props.long;
    
    
    return(
        <div className='bg'>
            
        <div className='locator' style={{marginTop:hemi[show].marginT}}>
            <img src={locator} alt="locator" height="25px" width="25px" ></img>
            {hemi[show].name}
        </div>
        <div className='bottom'>

        </div>
        </div>
        
    ); 
}
export default HemiSphere;