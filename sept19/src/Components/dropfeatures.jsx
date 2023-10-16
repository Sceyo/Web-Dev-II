import './dropfeatures.css'


export default function dropfeatures() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
   
    <a href="#news" style={{height:'55px'}}>Home</a>
    <div class="dropdown">
      <a href="#news" style={{ minWidth: '100px' }}>Features <i class="fa fa-angle-down"></i> </a>
       <div class="dropdown-content">
        <a href="#"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Enrollment Related<i class="fa fa-angle-right" aria-hidden="true" ></i></a>
        <div class ="sub-dropdown">
        <a href="#"><i class="fa fa-angle-right" aria-hidden="true" ></i>Student Enrollment</a>
        <a href="#"><i class="fa fa-angle-right" aria-hidden="true" ></i>Exam Permit</a>
        <a href="#"><i class="fa fa-angle-right" aria-hidden="true" ></i>Student Clearance</a>
        <a href="#"><i class="fa fa-angle-right" aria-hidden="true" ></i>Offered Courses</a>
        <a href="#"><i class="fa fa-angle-right" aria-hidden="true" ></i>Student Grades</a>
        </div>
      </div>
      
    </div>
   
    </>
  )
}


