import './dropOSA.css'


export default function dropJP() {
 

  return (
    <>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="dropdownOSA">
  <a href="#news" style={{ minWidth: '100px' }}>OSA<i class="fa fa-angle-down"></i> </a>
  <div class="dropdown-contentOSA">
    <a href="#"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Student Organization<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownOSA1">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Application</a>
    </div>
  </div>
  
  <div class="dropdown-contentOSA2">
    <a href="#" class="mobile-version-trigger"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Activity Permit<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownOSA2">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Activity Permit</a>
    </div>
  </div>
  
</div>
    </>
  );
}


