import './dropPPS.css'

export default function dropPPS() {
  return (
    <>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    
    
    <div class="dropdownPPS">
      <a href="#news" style={{ minWidth: '150px' }}>Privacy Policy Statement<i class="fa fa-angle-down"></i> </a>
       <div class="dropdown-contentPPS">
        <a href="#"> <i class="fa fa-get-pocket" aria-hidden="true"></i>USC Privacy Policy Statement<i class="fa fa-angle-right" aria-hidden="true" ></i></a>
        <div class ="sub-dropdownPPS">
        <a href="#"><i class="fa fa-angle-right" aria-hidden="true" ></i>USC Privacy Policy Statement</a>
        </div>
      </div>
      
    </div>
  
    </>
  );
}


