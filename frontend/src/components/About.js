//rfce

import React from 'react'
import { useEffect } from 'react';



function About() {
  useEffect(()=>{
    document.title='About Page'
  });


  return (
    <div>
        <h3>About Us</h3>
    </div>
  )
}

export default About