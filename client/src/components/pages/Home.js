import React from 'react';
import puzzle from '../images/homeImg.jpg';


function Home() {
  return (
    
    <div className='homePage'>
        <h1
          style={{

            display:'block',
            color:'red',
            width:'100%'
          }}
        >Buonasera</h1>
        
        <div
          style={{
            
            display:'block'
          }}
        >
          <img 
          alt='puzzlle' 
          src={puzzle} 
          style={{
            width:'50%',
            display:'block'
          }}
          />
        </div>
        
    </div>
    
  );
}

export default Home;