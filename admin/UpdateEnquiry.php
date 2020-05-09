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
<?php 


 echo $srno=$_GET['id'];


  
 /* if(isset($_POST['submit']))
  {
    
  if (getimagesize($_FILES['photo']['tmp_name'])==false) 
  {
    echo "please select image";
  }
  else
  {
    
    $photoname= addslashes($_FILES['photo']['name']);
  
    $photo= base64_encode(file_get_contents(addslashes($_FILES['photo']['tmp_name'])));
    
  } 
    
  
      $name=$_POST['name'];
      $srno=$_POST['srno'];
      $academicyearid=$_POST['academicyearid'];
      $classid=$_POST['classid'];
      $mothername=$_POST['mothername'];
      $fathername=$_POST['fathername'];
      $dateofbirth=$_POST['dateofbirth'];
      $village=$_POST['village'];
      $mobileno=$_POST['mobileno'];
      $phoneno=$_POST['phoneno'];
      $genderid=$_POST['genderid'];
      $gramsabh=$_POST['gramsabh']; 
      $city=$_POST['city'];  
      $pin=$_POST['pin'];  
       $state=$_POST['state']; 
      $country=$_POST['country'];  
      $remarks=$_POST['remarks'];  
      
     if ($name==''|| $srno==''|| $academicyearid=='' || $classid==''|| $mothername==''|| $fathername==''|| $dateofbirth==''|| $village==''||
      $mobileno==''|| $phoneno==''|| $genderid==''|| $gramsabh==''|| $city==''|| $pin==''|| $country=='' )
       {
      echo"<script>fill all values..</script>";
      exit();
     }
     else
     {
      $query= " INSERT INTO student (srno,name,year,class,mname,fname,dob,village,mobile, phone, gender, gramsabha,city,state, pin,country,remark,photoname,photo) VALUES ('$srno','$name','$academicyearid','$classid','$mothername','$fathername','$dateofbirth','$village','$mobileno','$phoneno','$genderid','$gramsabh','$city','$state','$pin','$country','$remarks','$photoname','$photo')";
      $run=mysqli_query($conn,$query);
      if($run)
      {
        echo " data insert sucessfully";
      }
      else
      {
        echo "there is some problem".mysqli_error($conn);
      }

  }*/
    
  
  if (isset($_POST['submit'])|| $srno!==0 )
   { 
    
    $sql=" select * from  student where srno='$srno'";
  $query=mysqli_query($conn,$sql);
    $num=mysqli_num_rows($query);
   
    $row=mysqli_fetch_array($query);
     $name=$row['photoname'];
    $img=$row['photo'];
    
  }
  
      //mymobileapi< P1DUnNJaGM7i5dQb40auMqAjL4Innmi8VJpOjePWa0sGosUcGRdVcqbEs08c>
    
?>

<!DOCTYPE html>
<html lang="en">
<head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
  <title>Enquiry | Form</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <!--   <script type="text/javascript" src="js/tcal.js"></script>
  <link rel="stylesheet" type="text/css" href="css/tcal.css" />
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>

  <script type="text/javascript" src="js/tcal.js"></script>-->
  <link rel="stylesheet" type="text/css" href="css/tcal.css" />
  <link rel="stylesheet" type="text/css" media="screen" href="css/jquery-ui.css" />
    <script src="js/jquery.js"></script>
    <script src="js/jquery-ui.js"></script>
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
  
<script type="text/javascript">
function myFunction()
{
  document.getElementById("savebtn").disabled = true;
  var fname=document.getElementById('firstname').value;
  var srno=document.getElementById('srno').value;
  var rollno=document.getElementById('rollno').value;
  var academicyearid=document.getElementById('academicyearid').value;  
  var classid=document.getElementById('classid').value;  
  var mothername=document.getElementById('mothername').value;  
  var fathername=document.getElementById('fathername').value; 
  var village=document.getElementById('village').value;   
  var mobileno=document.getElementById('mobileno').value;   
  var genderid=document.getElementById('genderid').value;
  var address=document.getElementById('address').value;    
  var mobileno=document.getElementById('mobileno').value;
var message='';
  if(fname=='')
  {
    message="Please enter Student Name.";
  }
   else if(srno=='')
  {
    message="Please enter S.R.No.";
   } 
 else if(rollno=='')
  {
    message="Please enter Roll No.r";
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
  else if(village=='')
  {
    message="Please enter Village Name ";
   }
  else if(mobileno=='')
  {
    message="Please enter Mobile no";
   } 
   
  else if(genderid=='-1')
  {
    message="Please enter Gender.";
  }
  else if(address=='')
  {
    message="Please enter Gram Sabha";
   }   
  
  else if(phoneno=='')
  {
    message="Please enter phone No.";
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

<style>

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
    <h4 style="text-shadow: 4px 3px #e4e4e4; font-size: 30px; font-weight:bold; color:#1ea0ba">Student Enquiry Form</h4>
                  
  </div>
  <div class="col-md-2">
    
  </div>
</div>
<div>&nbsp;</div>

<form name='admission' class="zoom-anim-dialog mfp-hide white-popup-block mfp-hide form-horizontal" action="SearchUpdateVeiw.php" method="post" enctype="multipart/form-data">
            <input type="hidden" class="columnlabel" value='1' name="isweb" id="isweb"/>
      <input type="hidden" class="columnlabel" value='' name="id" id="id"/>
      <input type="hidden" class="columnlabel" value='' name="candidateid" id="candidateid"/>
      <input type="hidden" class="columnlabel" value='enquiry/thanks.html' name="thankspage" id="thankspage"/>
      <input type="hidden" class="columnlabel" value='enquiry/error.html' name="errorpage" id="errorpage"/>
      <input type="hidden"  value='1' name="enquiry_type_id"  id="enquiry_type_id"/>

<h4 style="background:#1ea0ba;color:#fff; padding:10px 0px 10px 5px">Student Information</h4>
  <div class="col-sm-3">
    <label class="control-label" for="fln">Student Name :<span class="mandatory" style="color: #ff0000;">*</span></label>
  </div>
  <div class="col-sm-3">
    <input type="text" title="First Name" id="firstname" name="name" value='<?php echo $row['name']; ?>' class="textbox mandatoryvalue form-control text_upper" required />
    </div>
  <div class="col-sm-3">
    <label class="control-label" for="em">Student S.R.No. :<span class="mandatory" style="color: #ff0000;">*</span></label></div>
  <div class="col-sm-3">
    <input type="text" title="srno" id="srno" name="srno" value='<?php echo $row['srno']; ?>' class="textbox form-control text_upper" readonly>
    </div>
  <div>&nbsp;</div>
  <div class="col-sm-3">
    <label class="control-label" for="em">Student Roll No.. :<span class="mandatory" style="color: #ff0000;">*</span></label></div>
  <div class="col-sm-3">
    <input type="text" title="rollno" id="rollno" name="rollno" value='<?php echo $row['rollno']; ?>' class="textbox form-control text_upper" readonly>
    </div>
  <div class="col-sm-3">
    <label>Academic Year :<span class="mandatory" style="color: #ff0000;">*</span></label>
  </div>
  <div class="col-sm-3">
        <select name="academicyearid" title="Academic Year" id="academicyearid" class='form-control mandatoryvalue'>
      <option value='<?php echo $row['year']; ?>'><?php echo $row['year']; ?></option>
      <option value="2022">2022
            </option> 
      <option value="2021">2021
            </option> 
      <option value="2020">2020
      </option>     
      <option value="2019">2019
      </option>         
        </select>
  </div>
  <div>&nbsp;</div>
  <div class="col-sm-3">
    <label>Grade Applying For :<span class="mandatory" style="color: #ff0000;">*</span></label>
  </div>
  <div class="col-sm-3">
        <select name="classid" title="Grade" id="classid" class='form-control mandatoryvalue'>
            <option value='<?php echo $row['class']; ?>'><?php echo $row['class']; ?></option>
            
           
            
            <option value="6">6
            </option>
            
            <option value="7">7
            </option>
            
            <option value="8">8
            </option>
            
           
            
        </select>
  </div>
  
  <div class="col-sm-3">
    <label class="control -label" for="mn">Mother's Name :<span class="mandatory" style="color: #ff0000;">*</span></label>
  </div>
  <div class="col-sm-3">
    <input type="text" title="Mother Name" id="mothername" name="mothername" value='<?php echo $row['mname']; ?>' class="textbox mandatoryvalue form-control text_upper" required />  
    </div>
    <div>&nbsp;</div>
  <div class="col-sm-3">
    <label>Father's Name :<span class="mandatory" style="color: #ff0000;">*</span></label>
  </div>
  <div class="col-sm-3">
    <input type="text" title="Father Name" id="fathername" name="fathername" value='<?php echo $row['fname']; ?>' class="textbox mandatoryvalue form-control text_upper" required />
    </div>
 
  <div class="col-sm-3">
    <label>D.O.B :</label>
  </div>
  <div class="col-sm-3">
    <input type="text" title="Date of Birth" id="dob" name="dateofbirth" value='<?php echo $row['dob']; ?>' class="textbox date tcal form-control" readonly/>
    </div>
     <div>&nbsp;</div>
    <div class="col-sm-3">
    <label>Age :</label>
  </div>
  <div class="col-sm-3">
    <input type="text" title="Age" id="age" name="age" value='<?php echo $row['age']; ?>' class="textbox form-control mandatoryvalue" readonly/>
    </div>
    
  <div class="col-sm-3">
    <label>Village:<span class="mandatory" style="color: #ff0000;">*</span></label>
  </div>
  <div class="col-sm-3">
    <input type="text" title="village" id="village" name="village" value='<?php echo $row['village']; ?>' class="textbox form-control mandatoryvalue" required />
    </div>
  <div>&nbsp;</div>
  <div class="col-sm-3">
    <label>Mobile No.:<span class="mandatory" style="color: #ff0000;">*</span></label>
  </div>
  <div class="col-sm-3">
    <input type="text" title="Mobile No." id="mobileno" name="mobileno" value='<?php echo $row['mobile']; ?>' maxlength="10" class="textbox form-control mandatoryvalue" required />
    </div>
     
  <div class="col-sm-3">
    <label>Aadhar No. :</label>
  </div>
  <div class="col-sm-3">
    <input type="text" title="Aadhar" id="aadhar" name="aadhar" value='<?php echo $row['aadhar']; ?>' class="textbox form-control" />
    </div>
  <div>&nbsp;</div>
  <div class="col-sm-3">
    <label>Gender:<span class="mandatory" style="color: #ff0000;">*</span></label>
  </div>
  <div class="col-sm-3">
    <select name="genderid" id="genderid" class="dropdown form-control mandatoryvalue" >
      <option value="<?php echo $row['srno']; ?>"><?php echo $row['srno']; ?></option>
      <option value="BOY">BOY</option>
      <option value="GIRL">GIRL</option>
    </select>
  </div>
   
  <div class="col-sm-3">
    <label>Gram Sabha :<span class="mandatory" style="color: #ff0000;">*</span></label>
  </div>
  <div class="col-sm-3">
    <input type="text" title="Gram Sabha" id="gramsabha" name="gramsabha" value='<?php echo $row['gramsabha']; ?>' class="textbox form-control text_upper" />
    </div>
 <div>&nbsp;</div>
  <div class="col-sm-3">
    <label>City :</label>
  </div>
  <div class="col-sm-3">
    <input type="text" title="City" id="city" name="city" value='<?php echo $row['city']; ?>' class="textbox form-control text_upper" />
    </div>
     
  <div class="col-sm-3">
    <label>State :</label>
  </div>
  <div class="col-sm-3">
    <input type="text" title="State" id="state" name="state" value='<?php echo $row['state']; ?>' class="textbox form-control text_upper" />
    </div>  
 <div>&nbsp;</div>
  <div class="col-sm-3">
    <label>Pin :</label>
  </div>
  <div class="col-sm-3">
    <input type="text" maxlength="6" title="Pin" id="pin" name="pin" value="<?php echo $row['pin']; ?>" class="textbox form-control">
    </div>
  <div class="col-sm-3">
    <label>Country :</label>
  </div>
  <div class="col-sm-3">
    <input type="text" title="Country" id="country" name="country" value="<?php echo $row['country']; ?>" class="textbox form-control">
    </div>
    <div>&nbsp;</div>
     <div class="col-sm-3">
    <label>Caste :</label>
  </div>
  <div class="col-sm-3">
    <select name="caste" id="caste" class="dropdown form-control mandatoryvalue" >
      <option value=-1><?php echo $row['caste']; ?></option>
      <option value="GEN">GEN</option>
      <option value="SC">SC</option>
      <option value="ST">ST</option>
      <option value="OBC">OBC</option>
    </select>
    </div>
     <div class="col-sm-3">
        <label>Photo :</label>
    </div>
    <div class="col-sm-3">
      
        <input type="file" title="photo" id="photo" name="photo" placeholder="Choose Photo" class="textbox form-control"><div><?php echo '<img src="data:image;base64,'.$img.'"  width="100px" height="120" float="left">';?></div>
    </div>
    
  <!-- <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div> 
  <div>&nbsp;</div>
  <div>&nbsp;</div>-->
  <div>&nbsp;</div> 
  <div>&nbsp;</div>
  <p align="center">
    <button type="submit"  name="submit" onclick="return myFunction();" style="background:#1ea0ba; color:#FFFFFF; padding:8px 20px; border:none; border-radius:3px; font-size:16px; cursor:pointer">Submit</button>
  </p>
  <!-- <div class="right">
            <?php //echo '<img src="data:image;base64,'.$img.'"  width="100px" height="120" float="left">';?><br>
             <input type="file" name="photo" placeholder="Choose Photo" ><font style="color: red">*</font> 
            </div> -->
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>     
  </div>    
  </body> 
  </html>  
  
  
  
  
