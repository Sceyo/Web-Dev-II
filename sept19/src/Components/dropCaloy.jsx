import './dropCaloy.css'

export default function dropCaloy() {
 
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="dropdownCl">
  <a href="#news" style={{ minWidth: '150px' }}>Meet CALOY<i class="fa fa-angle-down"></i> </a>
  <div class="dropdown-contentCl">
    <a href="#"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Caloy Kiosk Location<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownCl1">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Arthur Dingman</a>
    </div>
  </div>
  
  <div class="dropdown-contentCl2">
    <a href="#" class="mobile-version-trigger"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Caloy Mobile Version<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownCl2">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Mobile Version</a>
    </div>
  </div>
  
</div>

        
    


    </>
  );
}


