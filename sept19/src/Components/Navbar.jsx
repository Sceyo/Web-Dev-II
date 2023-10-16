import './Navbar.css'
import React, { useRef, useEffect } from 'react';
import Menus from './Menus'
import Header from './Header'
import lbj from './LBJ.jpg'
import kareem from './kareem.jpg'

//Note: npm install bootstrap and npm install npm install --save font-awesome
//https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_dropdown_multilevel_css&stacked=h
//80% of the website view

export default function Navbar() {
  
  const ref = useRef(null);

  useEffect(() => {
    console.log('Scrolling effect triggered');
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  });
  
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
      <div class = "god-bar">
      <div class = "bar-three">
        <h2><i class="fa fa-newspaper-o" aria-hidden="true"></i>Academic Announcements</h2>
      </div>

      <div class = "bar-four">
        <div class ="pic4">
          <img src = {lbj} style={{ width: '110px', height: '100px', borderRadius: '50%', border: '2px solid rgb(36, 157, 255)' }}></img>
        </div>
        <h3>Lebron James</h3>
        <h2>ISMIS Student Assessment and Student Ledger: Temporary Downtime </h2>
        <h5>To: All Students<br></br>

              Please be informed that the Commission of Higher Education (CHED) has given its approval for a 5% increase in tuition fees for undergraduate programs and a 15% increase for Master's and Ph.D. courses, effective from the academic year 2023-2024. As a result, there will be a temporary disruption in accessing the ISMIS Assessment and Student Ledger modules while we update the tuition fee rates.
              <br></br>
              Access to the assessment and student ledger will be announced as soon as it is restored.
              <br></br>
              Thank you.</h5>
      </div>

      <div class = "bar-five">
      <div class = "pic5">
      <img src = {kareem} style={{ width: '110px', height: '100px', borderRadius: '50%', border: '2px solid rgb(36, 157, 255)' }}></img>
      </div>
      <h3>Kareem Abdul-Jabbar</h3>
      <h2>No Single-Use Plastics Policy </h2>
      <h5>To: All Tertiary Faculty, Staff and Students 
<br/><br/>

Please click this link to view the memo. Thank you. </h5>
      </div>
    
    </div>
    </>
  )
}


