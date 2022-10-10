<?php
session_start();
include ('include.php');
if (!isset($_SESSION['username'])||!isset($_SESSION['role']))
 {
  header('location:index.php');
}
$name=$_SESSION['username'];
$role=$_SESSION['role'];
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>U.P.S. BHIMMAPURWA</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">
<link rel="icon" href="../admin/images/ban_32x32.jpg" sizes="32x32" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <!-- Bootstrap CSS-->
    <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/dashboard/1-4-7/vendor/bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome CSS-->
    <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/dashboard/1-4-7/vendor/font-awesome/css/font-awesome.min.css">
    <!-- Fontastic Custom icon font-->
    
    <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/dashboard/1-4-7/css/fontastic.css">
    <!-- Google fonts - Roboto -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
    <!-- jQuery Circle-->
    <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/dashboard/1-4-7/css/grasp_mobile_progress_circle-1.0.0.min.css">
    <!-- Custom Scrollbar-->
    <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/dashboard/1-4-7/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css">
    <!-- theme stylesheet-->
    <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/dashboard/1-4-7/css/style.default.css" id="theme-stylesheet">
    <!-- Custom stylesheet - for your changes-->
    <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/dashboard/1-4-7/css/custom.css">
    <!-- Favicon-->
    <link rel="shortcut icon" href="../admin/images/ban_32x32.jpg" sizes="32x32"">
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
  <!-- date picker -->
     <link rel="stylesheet" type="text/css" href="css/tcal.css" />
  <link rel="stylesheet" type="text/css" media="screen" href="css/jquery-ui.css" />
    
  </head>
  <body>
    <!-- Side Navbar -->
    <nav class="side-navbar">
      <div class="side-navbar-wrapper">
        <!-- Sidebar Header    -->
        <div class="sidenav-header d-flex align-items-center justify-content-center">
          <!-- User Info-->
          <div class="sidenav-header-inner text-center" style="text-transform: capitalize;"><img src="../images/teacher.jpg" alt="person" class="img-fluid rounded-circle">
            <h2 class="h5" ><?= $_SESSION['username'];?></h2><span><?= $_SESSION['role'];?></span>
          </div>
          <!-- Small Brand information, appears on minimized sidebar-->
          <div class="sidenav-header-logo"><a href="index.php" class="brand-small text-center"> <strong>M</strong><strong class="text-primary">V</strong></a></div>
        </div>
        <!-- Sidebar Navigation Menus-->
       <div class="main-menu">
          <h5 class="sidenav-heading">DASHBOARD</h5>
          <ul id="side-main-menu" class="side-menu list-unstyled">                  
            <li ><a href="index.php"> <i class="fas fa-home"></i>Home  </a></li>
            <li  ><a href="teacher.php"> <i class="fa fa-chalkboard-teacher"></i>Teacher   </a></li>
            <li  class="active" ><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class=" fas fa-user-tie"></i>Add Student Data</a>
              <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
                <li class="active" ><a href="newstudent.php">Add Student Data</a></li>
                <li><a href="addparent.php">Add Parents Data</a></li>
                
              </ul>
            </li>
            <li><a href="class.php"> <i class="fas fa-book-reader"></i>Class  </a></li>
            <li ><a href="year.php"> <i class=" far fa-calendar-alt"></i>Year    </a></li>
            <li><a href="register.php"> <i class="fas fa-font"></i>Register Admin </a></li>
            <li><a href="subject.php"> <i class="fas fa-paste"></i>Subject </a></li>
            <li><a href="exam.php"> <i class="fas fa-print"></i>Examination </a></li>
            <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class="fas fa-file-alt"></i>Student Result</a>
              <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
                <li><a href="result.php">Add Result</a></li>
                <li><a href="showresult.php">Show Result</a></li>
                
              </ul>
            </li>
            <li><a href="search.php"> <i class='fas fa-search'></i>Search Data </a></li>
          </ul>
        </div>
       
      </div>
    </nav>
    <div class="page">
      <!-- navbar-->
      <header class="header">
        <nav class="navbar">
          <div class="container-fluid">
            <div class="navbar-holder d-flex align-items-center justify-content-between">
              <div class="navbar-header"><a id="toggle-btn" href="#" class="menu-btn"><i class="fa fa-outdent" style="font-size:20px;color:red"> </i></a><a href="index.php" class="navbar-brand">
                  <div class="brand-text d-none d-md-inline-block"><strong class="text-success">उच्च प्राथमिक विद्यालय भिम्मापुरवा</strong> <span>कटरी अमीनाबाद, कन्नौज</span></div></a></div>
              <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                <!-- Log out-->
                <span class="text-success"> <?php echo date("d/m/Y")."   " .date("l");?></span>
                <li class="nav-item"><a href="logout.php" class="nav-link logout" style="font-size:15px;color:red"> <span class="d-none d-sm-inline-block">  Logout</span><i  class='fas fa-sign-out-alt' ></i></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <!-- Breadcrumb-->
      <div class="breadcrumb-holder">
        <div class="container-fluid">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.php">Home</a></li>
            <li class="breadcrumb-item active">Add Student  </li>
          </ul>
        </div>
      </div>
<section>
 <div class="container-fluid">
          <!-- Page Header-->

        <form name='admission' class="zoom-anim-dialog mfp-hide white-popup-block mfp-hide form-horizontal" action="CreateStudentEnquiry.php" method="post" enctype="multipart/form-data">
            
           <h4 style="background:#1ea0ba;color:#fff; padding:10px 0px 10px 5px; text-align: center;">Student Information</h4>
         <div class="row">
           <div class="col-sm-4">
          <label class="control-label" for="em">Student S.R.No. :<span class="mandatory" style="color: #ff0000;">*</span></label>

    <input type="text" title="srno" id="srno" name="srno" value='' class="textbox form-control text_upper" >
  </div>
  <div class="col-sm-4">  
    <label class="control-label" for="fln">Student Name :<span class="mandatory" style="color: #ff0000;">*</span></label>
  
    <input type="text" title="First Name" id="firstname" name="name" value='' class="textbox mandatoryvalue form-control text_upper" required />
    </div>
  

  <div class="col-sm-4">
    <label class="control-label" for="em">Student Roll No.:<span class="mandatory" style="color: #ff0000;">*</span></label>
    <input type="text" title="rollno" id="rollno" name="rollno" value='' class="textbox form-control text_upper" >
    </div>
  <div class="col-sm-4">
    <label>Academic Year :<span class="mandatory" style="color: #ff0000;">*</span></label>
  
        <select name="academicyearid" title="Academic Year" id="academicyearid" class='form-control mandatoryvalue'>
      <option value='-1'>--Select Academic Year--</option>
      <option value="2021">2021
            </option> 
      <option value="2020">2020
            </option> 
      <option value="2019">2019
      </option>     
      <option value="2018">2018
      </option>         
        </select>
  </div>
 
  <div class="col-sm-4">
    <label>Grade Applying For :<span class="mandatory" style="color: #ff0000;">*</span></label>
  
        <select name="classid" title="Grade" id="classid" class='form-control mandatoryvalue'>
            <option value='-1'>--Select Grade--</option>
            
            
            <option value="6">6
            </option>
            
            <option value="7">7
            </option>
            
            <option value="8">8
            </option>
            
            
        </select>
  </div>
  
  <div class="col-sm-4">
    <label class="control -label" for="mn">Mother's Name :<span class="mandatory" style="color: #ff0000;">*</span></label>
  
    <input type="text" title="Mother Name" id="mothername" name="mothername" value='' class="textbox mandatoryvalue form-control text_upper" required />  
    </div>
   
  <div class="col-sm-4">
    <label>Father's Name :<span class="mandatory" style="color: #ff0000;">*</span></label>
  
    <input type="text" title="Father Name" id="fathername" name="fathername" value='' class="textbox mandatoryvalue form-control text_upper" required />
    </div>
  
  <div class="col-sm-4">
    <label>D.O.B :</label>
  
    <input type="text" title="Date of Birth" id="dob" name="dateofbirth" value='' class="textbox date tcal form-control" readonly />
    </div>

    <div class="col-sm-4">
    <label>Age :</label>
  
    <input type="text" title="Age" id="age" name="age" value='' class="textbox form-control mandatoryvalue" readonly/>
    </div>
    
  <div class="col-sm-4">
    <label>Village:<span class="mandatory" style="color: #ff0000; ">*</span></label>
  
    <input type="text" title="village" id="village" name="village" value='' class="textbox form-control mandatoryvalue" required />
    </div>
  
  <div class="col-sm-4">
    <label>Mobile No.:<span class="mandatory" style="color: #ff0000;">*</span></label>
  
    <input type="text" title="Mobile No." id="mobileno" name="mobileno" value='' maxlength="10" class="textbox form-control mandatoryvalue" required />
    </div>
    
  <div class="col-sm-4">
    <label>Aadhar No. :</label>
  
    <input type="text" title="Aadhar No." id="aadhar" name="aadhar" value='' class="textbox form-control" />
    </div>
  
  <div class="col-sm-4">
    <label>Gender:<span class="mandatory" style="color: #ff0000;">*</span></label>
     <select name="genderid" id="genderid" class="dropdown form-control mandatoryvalue" >
      <option value=-1>--Select Gender--</option>
      <option value="BOY">BOY</option>
      <option value="GIRL">GIRL</option>
    </select>
  </div>
  
  <div class="col-sm-4">
    <label>Gram Sabha :<span class="mandatory" style="color: #ff0000;">*</span></label>
  
    <input type="text" title="Address" id="address" name="gramsabh" value='' class="textbox form-control text_upper" />
    </div>
  
  <div class="col-sm-4">
    <label>City :</label>
  
    <input type="text" title="City" id="city" name="city" value='' class="textbox form-control text_upper" />
    </div>
    
  <div class="col-sm-4">
    <label>State :</label>
  
    <input type="text" title="State" id="state" name="state" value='' class="textbox form-control text_upper" />
    </div>  
  
  <div class="col-sm-4">
    <label>Pin :</label>
  
    <input type="text" maxlength="6" title="Pin" id="pin" name="pin" value="" class="textbox form-control">
    </div>
    
  <div class="col-sm-4">
    <label>Country :</label>
  
    <input type="text" title="Country" id="country" name="country" value="" class="textbox form-control">
    </div>
    
    <div class="col-sm-4">
    <label>Caste :</label>
 
    <select name="caste" id="caste" class="dropdown form-control mandatoryvalue" >
      <option value=-1>--Select Caste--</option>
      <option value="GEN">GEN</option>
      <option value="SC">SC</option>
      <option value="ST">ST</option>
      <option value="OBC">OBC</option>
    </select>
    </div>
  <!--<div>&nbsp;</div> 
   <div class="col-sm-4">
    <label>Remarks :</label>
  </div>
  <div class="col-sm-4">
    <textarea rows="3" title="Message" id="remarks" name="remarks" class="textbox form-control text_upper"></textarea>
    </div> -->
   
    <div class="col-sm-4">
        <label>Photo :</label>
    
        <input type="file" title="photo" id="photo" name="photo" placeholder="Choose Photo" class="textbox form-control">
    </div>
    
  </div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
 
  <p align="center">
    <button type="submit"  name="submit" onclick="return myFunction();" style="background:#1ea0ba; color:#FFFFFF; padding:8px 20px; border:none; border-radius:3px; font-size:16px; cursor:pointer">Submit</button>
  </p>
 
 
  </div></form>
      
        </div> 
      </section>
   
   <script type = "text/javascript">
        $(document).ready(function () {
            var age = "";
            $('#dob').datepicker({
                onSelect: function (value, ui) {
                    var today = new Date();
                    age = today.getFullYear() - ui.selectedYear;
                    $('#age').val(age);
                },
                changeMonth: true,
                changeYear: true
            })
        })
    </script>
   <!-- JavaScript files-->
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <script src="../admin/dashboard/jquery/jquery.min.js"></script>
    <script src="../admin/dashboard/jquery/bootstrap.bundle.min.js"></script>
    <script src="../admin/dashboard/jquery/grasp_mobile_progress_circle-1.0.0.min.js"></script>
    <script src="../admin/dashboard/jquery/jquery.cookie.js"> </script>
    <script src="../admin/dashboard/jquery/Chart.min.js"></script>
    <script src="../admin/dashboard/jquery/jquery.validate.min.js"></script>
    <script src="../admin/dashboard/jquery/jquery.mCustomScrollbar.concat.min.js"></script>
    <!-- Main File-->
    <script src="../admin/dashboard/jquery/front.js"></script>
    <script src="js/jquery.js"></script>
    <script src="js/jquery-ui.js"></script>
  </body>
</html>