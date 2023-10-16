import './dropSM.css'

export default function dropSM() {
 
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="dropdownSM">
  <a href="#news" style={{ minWidth: '180px' }}>SAFAD Magazine<i class="fa fa-angle-down"></i> </a>
  <div class="dropdown-contentSM">
    <a href="#"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Lantawan Magazine<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownSM1">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>2020 - Issue 2</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>2021 - Issue 1</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>2021 - Issue 2 (September)</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>2022 - Issue 1 (March)</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>2022 - Issue 2 (September)</a>
    </div>
  </div>
  
  <div class="dropdown-contentSM2">
    <a href="#" class="mobile-version-trigger"> <i class="fa fa-get-pocket" aria-hidden="true"></i>SAFAD Facebook Frame<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownSM2">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>SAFAD Facebook Frame</a>
    </div>
  </div>
  
</div>
    </>
  );
}


