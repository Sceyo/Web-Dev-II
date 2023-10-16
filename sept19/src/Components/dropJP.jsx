import './dropJP.css'


export default function dropJP() {
 

  return (
    <>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="dropdownJP">
  <a href="#news" style={{ minWidth: '160px' }}>Job Placement<i class="fa fa-angle-down"></i> </a>
  <div class="dropdown-contentJP">
    <a href="#"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Job Openings<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownJP1">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>List of Job Openings</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Job Appliation Status</a>
    </div>
  </div>
  
</div>
    </>
  );
}


