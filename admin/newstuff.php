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
<html lang="en">
<head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
  <title>Enquiry | Form</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="icon" href="../admin/images/ban_32x32.jpg" sizes="32x32" />
  <script type="text/javascript" src="js/tcal.js"></script>
  <link rel="stylesheet" type="text/css" href="css/tcal.css" />
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>

  <script type="text/javascript" src="js/tcal.js"></script>
  <link rel="stylesheet" type="text/css" href="css/tcal.css" />
  

<script type="text/javascript">
function myFunction()
{
document.getElementById("savebtn").disabled = true;
  var fname=document.getElementById('firstname').value;
  var academicyearid=document.getElementById('academicyearid').value;  
  var classid=document.getElementById('classid').value;  
  var mothername=document.getElementById('mothername').value;  
  var fathername=document.getElementById('fathername').value; 
  var emailid=document.getElementById('emailid').value;   
  var mobileno=document.getElementById('mobileno').value;   
  var genderid=document.getElementById('genderid').value;
  var address=document.getElementById('address').value;
  var subject=document.getElementById('subject').value;    
  var mobileno=document.getElementById('mobileno').value;
var message='';
  if(fname=='')
  {
    message="Please enter Student First Name.";
  }

  else if(academicyearid=='-1')
  {
    message="Please enter Academic Year";
   } 

  else if(classid=='-1')
  {
    message="Please enter Grade Applying For";
   } 

  else if(mothername=='')
  {
    message="Please enter Mother Name";
   } 

  else if(fathername=='')
  {
    message="Please enter Father Name";
   } 
  else if(emailid=='')
  {
    message="Please enter Email";
   }
  else if(mobileno=='')
  {
    message="Please enter Mobileno";
   } 
   
  else if(genderid=='-1')
  {
    message="Please enter the Gender.";
  }
  else if(address=='')
  {
    message="Please enter Address";
   }   
   else if(subject=='')
  {
    message="Please enter Subject";
   }   
  
  else if(mobileno=='')
  {
    message="Please enter Mobile No.";
   }  
   
  if(message!='')
  {
     alert(message);
     document.getElementById("savebtn").disabled = false;
     return false;

  }else
  {
  document.getElementById('myform').submit();
  }
  
}
</script>

<style>
/*input[type=text]{
  width: 100%;
  -webkit-transition: width .35s ease-in-out;
  transition: width .80s ease-in-out;
}
input[type=text]:focus {
  width: 110%;
}

select{
  width: 100%;
  -webkit-transition: width .35s ease-in-out;
  transition: width .35s ease-in-out;
}
select:focus {
  width: 110%;
}

textarea{
  width: 100%;
  -webkit-transition: width .35s ease-in-out;
  transition: width .35s ease-in-out;
}
textarea:focus {
  width: 110%;
}*/
.text_upper {text-transform:uppercase}
</style>
</head>
<body style="background-color:#e4e4e4; max-width: auto;">
<div style="background-color:#fff" class="container">
<div class="row"> 
    <div class="col-md-2">
        <img style="margin-top: 18px; height:180px; border-radius:5px 5px 0 0; border:2px solid #009879; " src="images/ups logo.png">
    </div>
    <div class="col-md-8 text-center">
        <h2 style="text-shadow: 4px 3px #e4e4e4; font-size: 35px; margin-top: 20px;margin-bottom: -12px; font-weight:bold; color:#1ea0ba">U.P.S. BHIMMAPURWA, </h2>
        <p class="lead">
        <h4 style="text-shadow: 4px 3px #e4e4e4; line-height:33px; font-size:22px; font-weight:bold;">Aminabad Katari, Kannauj<br> Email: upsbhimmapurwa@gmail.cpm<br>Tel: 8299774759</h4></p>
        <h4 style="text-shadow: 4px 3px #e4e4e4; font-size: 30px; font-weight:bold; color:#1ea0ba">Enquiry Form</h4>
                                    
    </div>
    <div class="col-md-2">
        
    </div>
</div>
<div>&nbsp;</div>

<form name='admission' class="zoom-anim-dialog mfp-hide white-popup-block mfp-hide form-horizontal" action="CreateStaffEnquiry.php" method="post"  enctype="multipart/form-data">
           
<h4 style="background:#1ea0ba;color:#fff; padding:10px 0px 10px 5px">Stuff Information</h4>
    <div class="col-sm-3">
        <label class="control-label" for="fln">First Name :<span class="mandatory" style="color: #ff0000;">*</span></label>
    </div>
    <div class="col-sm-3">
        <input type="text" title="First Name" id="firstname" name="firstname" value='' class="textbox mandatoryvalue form-control text_upper" required />
    </div>
    <div class="col-sm-3">
        <label class="control-label" for="em">Last Name :<span class="mandatory" style="color: #ff0000;">*</span></label></div>
    <div class="col-sm-3">
        <input type="text" title="Last Name" id="lastname" name="lastname" value='' class="textbox form-control text_upper" >
    </div>
    <div>&nbsp;</div>
    <div class="col-sm-3">
        <label>Academic Year :<span class="mandatory" style="color: #ff0000;">*</span></label>
    </div>
    <div class="col-sm-3">
        <select name="academicyearid" title="Academic Year" id="academicyearid" class='form-control mandatoryvalue'>
            <option value='-1'>--Select Academic Year--</option>
            <option value="2020-21">2020-21
            </option> 
            <option value="2019-20">2019-20
            </option>           
            <option value="2018-19">2018-19
            </option>         
        </select>
    </div>
    <div class="col-sm-3">
        <label>Grade Applying For :<span class="mandatory" style="color: #ff0000;">*</span></label>
    </div>
    <div class="col-sm-3">
        <select name="classid" title="Grade" id="classid" class='form-control mandatoryvalue'>
            <option value='-1'>--Select Grade--</option>
            
            <option value="Play Group">Play Group
            </option>
            
            <option value="Pre-Nursery">Pre-Nursery
            </option>
            
            <option value="Primary">Primary
            </option>
            
            <option value="Junior">Junior
            </option>
            
            <option value="Senior">Senior
            </option>
                     
            
        </select>
    </div>
    <div>&nbsp;</div>
    <div class="col-sm-3">
        <label class="control   -label" for="mn">Mother's Name :<span class="mandatory" style="color: #ff0000;">*</span></label>
    </div>
    <div class="col-sm-3">
        <input type="text" title="Mother Name" id="mothername" name="mothername" value='' class="textbox mandatoryvalue form-control text_upper" required />    
    </div>
    <div class="col-sm-3">
        <label>Father's Name :<span class="mandatory" style="color: #ff0000;">*</span></label>
    </div>
    <div class="col-sm-3">
        <input type="text" title="Father Name" id="fathername" name="fathername" value='' class="textbox mandatoryvalue form-control text_upper" required />
    </div>
    <div>&nbsp;</div>
    <div class="col-sm-3">
        <label>D.O.B :</label>
    </div>
    <div class="col-sm-3">
        <input type="text" title="Date of Birth" id="dateofbirth" name="dateofbirth" value='' class="textbox date tcal form-control" readonly/>
    </div>
    <div class="col-sm-3">
        <label>Email ID :<span class="mandatory" style="color: #ff0000;">*</span></label>
    </div>
    <div class="col-sm-3">
        <input type="text" title="Email Id" id="emailid" name="emailid" value='' class="textbox emailid form-control" required />
    </div>
    <div>&nbsp;</div>
    <div class="col-sm-3">
        <label>Mobile No.:<span class="mandatory" style="color: #ff0000;">*</span></label>
    </div>
    <div class="col-sm-3">
        <input type="text" title="Mobile No." id="mobileno" name="mobileno" value='' maxlength="10" class="textbox form-control mandatoryvalue" required />
    </div>
    <div class="col-sm-3">
        <label>Phone No. :</label>
    </div>
    <div class="col-sm-3">
        <input type="text" title="Phone No." id="phoneno" name="phoneno" value='' class="textbox form-control" />
    </div>
    <div>&nbsp;</div>
    <div class="col-sm-3">
        <label>Gender:<span class="mandatory" style="color: #ff0000;">*</span></label>
    </div>
    <div class="col-sm-3">
        <select name="genderid" id="genderid" class="dropdown form-control mandatoryvalue" >
            <option value=-1>--Select Gender--</option>
            <option value="MALE">MALE</option>
            <option value="GIRL">GIRL</option>
        </select>
    </div>
    <div class="col-sm-3">
        <label>Address :<span class="mandatory" style="color: #ff0000;">*</span></label>
    </div>
    <div class="col-sm-3">
        <input type="text" title="Address" id="address" name="address" value='' class="textbox form-control text_upper" />
    </div>
    <div>&nbsp;</div>
    <div class="col-sm-3">
        <label>City :</label>
    </div>
    <div class="col-sm-3">
        <input type="text" title="City" id="city" name="city" value='' class="textbox form-control text_upper" />
    </div>
    <div class="col-sm-3">
        <label>State :</label>
    </div>
    <div class="col-sm-3">
        <input type="text" title="State" id="state" name="state" value='' class="textbox form-control text_upper" />
    </div>  
    <div>&nbsp;</div>
    <div class="col-sm-3">
        <label>Pin :</label>
    </div>
    <div class="col-sm-3">
        <input type="text" maxlength="6" title="Pin" id="pin" name="pin" value="" class="textbox form-control">
    </div>
    <div class="col-sm-3">
        <label>Country :</label>
    </div>
    <div class="col-sm-3">
        <input type="text" title="Country" id="country" name="country" value="" class="textbox form-control">
    </div>
    <div>&nbsp;</div>   
    <div class="col-sm-3">
        <label>Subject :</label>
    </div>
    <div class="col-sm-3">
        <input type="text" title="Subject" id="subject" name="subject" class="textbox form-control ">
    </div> 
    <div class="col-sm-3">
        <label>Photo :</label>
    </div>
    <div class="col-sm-3">
        <input type="file" title="photo" id="photo" name="photo" placeholder="Choose Photo" class="textbox form-control">
    </div> 
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>   
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>   
    <div>&nbsp;</div>
    <p align="center">
        <button type="submit" name="submit" onclick="return myFunction();" style="background:#1ea0ba; color:#FFFFFF; padding:8px 20px; border:none; border-radius:3px; font-size:16px; cursor:pointer">Submit</button>
    </p>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <div>&nbsp;</div>       
    </div>      
  </body>   
  </html>  
  
  
  
  
  