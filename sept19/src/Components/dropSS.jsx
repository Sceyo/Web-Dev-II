import './dropSS.css'

export default function dropSS() {
 
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div class="dropdownSS">
    <a href="#about" style={{ minWidth: '180px' }} >Student Services <i class="fa fa-angle-down"></i></a>
    
    <div class="dropdown-contentSS">
    <a href="#"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Student Manual/Handbook<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownSS1">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>SHS Handbook 2020 Edition</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Student Manual - Tertiary</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>CLG Trailer</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Carolinian Lifestyle Guide CLG</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Quality Improvement Tool</a>
    </div>
  </div>
    
  <div class="dropdown-contentSS2">
    <a href="#"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Counseling and Development<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownSS2">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Reach out to your Counselor</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Programs and Activities</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>CLG Trailer</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Carolinian Lifestyle Guide CLG</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Quality Improvement Tool</a>
    </div>
  </div>

  <div class="dropdown-contentSS3">
    <a href="#"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Campus Ministry<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownSS3">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Contact a spiritual advisor</a>
      
    </div>
  </div>


    </div>

    </>
  );
}


