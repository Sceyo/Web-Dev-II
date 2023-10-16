import './dropAdmin.css'


export default function dropAdmin() {
 

  return (
    <>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="dropdownAdmin">
  <a href="#news" style={{ minWidth: '160px' }}>Administrative<i class="fa fa-angle-down"></i> </a>
  <div class="dropdown-contentAdmin">
    <a href="#"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Campus Entry Application<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownAdmin1">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Apply Campus Entry</a>
      
    </div>
  </div>
  
  <div class="dropdown-contentAdmin2">
    <a href="#" class="mobile-version-trigger"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Facility Utilization<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownAdmin2">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Apply Facility Utilization</a>
    </div>
  </div>
  
</div>
    </>
  );
}


