import './Navbar.css'
import React, { useState } from 'react';
import Menus from './Menus'
import Header from './Header'

//Note: npm install bootstrap and npm install npm install --save font-awesome
//https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_dropdown_multilevel_css&stacked=h

export default function Navbar() {
  return (
    <>
      <div class ="head-one">
        <Header/>
      </div>
      <div class = "bar">
      </div>
      <div class = "bar-two">
          <Menus/>
      </div>
      
    </>
  )
}


