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
  <script type="text/javascript">

function myFunction()
{

  document.getElementById("savebtn").disabled = true;
  var fname=document.getElementById('fname').value;
  var srno=document.getElementById('srno').value;
  var mname=document.getElementById('mname').value;
  var address=document.getElementById('address').value;  
  
 
  var message='';
  if(srno=='-1')
  {
    message="Please enter S.R.No.";
   } 
  
   else if(address=='')
  {
    message="Please enter Address.";
   } 
 else if(mname=='')
  {
    message="Please enter mname.";
   } 

  else if(fname=='')
  {
    message="Please enter Father's Name.";
  }

     
  if(message!='')
  {
     alert(message);
     document.getElementById("savebtn").disabled = false;
     return false;
     
  
  }
  else
  {
  document.getElementById('myform').submit();
  }
  
}

</script>

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
            <li ><a href="dashboard.php"> <i class="fas fa-home"></i>Home  </a></li>
            <li  ><a href="teacher.php"> <i class="fa fa-chalkboard-teacher"></i>Teacher   </a></li>
            <li class="active"><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class=" fas fa-user-tie"></i>Add Student Data</a>
              <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
                <li><a href="newstudent.php">Add Student Data</a></li>
                <li class="active"><a href="addparent.php">Add Parents Data</a></li>
                
              </ul>
            </li>
            <li><a href="class.php"> <i class="fas fa-book-reader"></i>Class  </a></li>
            <li ><a href="year.php"> <i class=" far fa-calendar-alt"></i>Year    </a></li>
            <li><a href="register.php"> <i class="fas fa-font"></i>Register Admin </a></li>
            <li><a href="subject.php"> <i class="fas fa-paste"></i>Subject </a></li>
            <li><a href="exam.php"> <i class="  fas fa-print"></i>Examination </a></li>
            <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class=" fas fa-file-alt"></i>Student Result</a>
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
            <li class="breadcrumb-item active">Add Parents Details </li>
          </ul>
        </div>
      </div>
<section>
 <div class="container-fluid">
          <!-- Page Header-->

        <form name='admission' class="zoom-anim-dialog mfp-hide white-popup-block mfp-hide form-horizontal" action="CreateParentEnquiry.php" method="post" enctype="multipart/form-data">
            
           <h4 style="background:#1ea0ba;color:#fff; padding:10px 0px 10px 5px; text-align: center;">Student Parent Information</h4>
         <div class="row">
           <div class="col-sm-4">
          <label class="control-label" for="em">Student S.R.No. :<span class="mandatory" style="color: #ff0000;">*</span></label>
          <select title="srno" id="srno" name="srno" class=' textbox form-control mandatoryvalue' onchange="myfun(this.value)" required>
                 <option value='-1'>S.R. No.</option>
              <?php
                 include('include.php');
                 $sql= "select * from student";
                $query=mysqli_query($conn,$sql);
                 //$rows=mysqli_fetch_array($query);
                 while($rows=mysqli_fetch_array($query))
                    { ?>
                        <option value='<?php echo $rows['srno']; ?>'> <?php echo $rows['srno'];?> </option> 
                       <?php
                    }  ?>
      
                </select>
    <!--<input type="text" title="srno" id="srno" name="srno" value='' class="textbox form-control text_upper" >-->
  </div>
 <div class="col-sm-4">  
    <label class="control-label" for="fln">Guardian Name<span class="mandatory" style="color: #ff0000;">*</span></label>
    <select title="guardianname" id="gname" name="gname" class='textbox form-control mandatoryvalue' onchange="myfun1(this.value)" required>
                 <option value='-1'>Guardian Name</option>
               </select>
<!--<input type="text" title="F Name" id="fname" name="fname" value='' class="textbox mandatoryvalue form-control text_upper" required />-->
    </div>
  
 <!-- <div class="col-sm-4">
    <label class="control -label" for="mn">Mother's Name :<span class="mandatory" style="color: #ff0000;">*</span></label>
    <select title="Mother Name" id="mname" name="mname" class='textbox form-control mandatoryvalue' onchange="myfun2(this.value)" required>
                 <option value='-1'>Mother's Name</option>
               </select>-->
    <!--<input type="text" title="Mother Name" id="mname" name="mname" value='' class="textbox mandatoryvalue form-control text_upper" required /> --> 
   <!-- </div>

   <div class="col-sm-4">  
    <label class="control-label" for="fln">Guardian Name :<span class="mandatory" style="color: #ff0000;">*</span></label>
  
    <input type="text" title="guardianname" id="gname" name="gname" value='' class="textbox mandatoryvalue form-control text_upper" required />
    </div>
 -->
   
   
  <div class="col-sm-4">
    <label>Address :<span class="mandatory" style="color: #ff0000;">*</span></label>
    <select title="Address" id="address" name="address" class='textbox form-control mandatoryvalue'  required>
                 <option value='-1'>Address</option>
               </select>
    <!--<input type="text" title="Address" id="address" name="address" value='' class="textbox mandatoryvalue form-control text_upper" required />-->
    </div>
  <div class="col-sm-4">
    <label>Mobile No.:<span class="mandatory" style="color: #ff0000;">*</span></label>
  
    <input type="text" title="Mobile No." id="mobileno" name="mobileno" value='' maxlength="10" class="textbox form-control mandatoryvalue" required />
    </div>
  <div class="col-sm-4">
    <label>Father Aadhar :<span class="mandatory" style="color: #ff0000;">*</span></label>
  
    <input type="text" title="Father's Aadhar" id="faadhar" name="faadhar" value='' class="textbox date tcal form-control" required />
    </div>

    <div class="col-sm-4">
    <label>Mother's Aadhar :</label>
  
    <input type="text" title="Mother's Aadhar" id="maadhar" name="maadhar" value='' class="textbox form-control mandatoryvalue" required/>
    </div>
    
  <div class="col-sm-4">
    <label>Guardian's Aadhar<span class="mandatory" style="color: #ff0000; ">*</span></label>
  
    <input type="text" title="Guardian's Aadhar" id="gaadhar" name="gaadhar" value='' class="textbox form-control mandatoryvalue" required />
    </div>
  
  
    
  <div class="col-sm-4">
    <label>Bank Name :</label>
  
    <input type="text" title="Bank Name" id="bname" name="bname" value='' class="textbox form-control" />
    </div>
  
  <div class="col-sm-4">
    <label>Branch :<span class="mandatory" style="color: #ff0000;">*</span></label>
    <input type="text" title="Branch" id="branch" name="branch" value='' class="textbox form-control" />
     
  </div>
  
  <div class="col-sm-4">
    <label>Bank Address :<span class="mandatory" style="color: #ff0000;">*</span></label>
  
    <input type="text" title="Bank Address" id="baddress" name="baddress" value='' class="textbox form-control text_upper" />
    </div>
  
  <div class="col-sm-4">
    <label>IFSC Code : <span class="mandatory" style="color: #ff0000;">*</span></label>
  
    <input type="text" title="IFSC Code" id="ifsc" name="ifsc" value='' class="textbox form-control text_upper" />
    </div>
    
  <div class="col-sm-4">
    <label>Account Number :</label>
  
    <input type="text" title="Account No." id="accountno" name="accountno" value='' class="textbox form-control text_upper" />
    </div>  
  
  <div class="col-sm-4">
    <label>Occupation :</label>
  
    <input type="text" maxlength="6" title="Occupation" id="occupation" name="occupation" value="" class="textbox form-control">
    </div>
    
  
  </div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
 
  <p align ="center">
    <button type="submit"  name="submit" onclick="return myFunction();" style="background:#1ea0ba; color:#FFFFFF; padding:8px 20px; border:none; border-radius:3px; font-size:16px; cursor:pointer">Submit</button>
  </p>
 
 
  </div></form>
      
        </div> 
      </section>
     
  <script type="text/javascript">
   function myfun(datavalue)
    {
      $.ajax({
        url: 'CreateParentEnquiry.php',
        type:'POST',
        data: { datapost : datavalue },
        success: function(result)
        {
          $('#gname').html(result);
        }
      })
    }
    function myfun1(datavalue)
    {
      $.ajax({
        url: 'CreateParentEnquiry.php',
        type:'POST',
        data: { datapost : datavalue },
        success: function(result)
        {
          $('#address').html(result);
        }
      })
    }
    
   
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