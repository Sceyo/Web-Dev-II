import './dropOP.css'

export default function dropOP() {
 
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div class="dropdownOP">
    <a href="#about"style={{ minWidth: '290px' }}>Online Purchase(Textbook Dept) <i class="fa fa-angle-down"></i></a>
    <div class="dropdown-contentOP">
    <a href="#"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Online Purchase<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownOP">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Textbook/Uniform/Toga Carting</a>
    </div>
  </div>
    
    
    </div>

    </>
  );
}


