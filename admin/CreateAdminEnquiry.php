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
 $name=$_POST['uname'];
  
  if(isset($_POST['submit']))
  {
    
  /*if (getimagesize($_FILES['photo']['tmp_name'])==false) 
  {
    echo "please select image";
  }
  else
  {
    
    $photoname= addslashes($_FILES['photo']['name']);
  
    $photo= base64_encode(file_get_contents(addslashes($_FILES['photo']['tmp_name'])));
    
  } */
    
  
      $name=$_POST['uname'];
      $email=$_POST['email'];
      $password=$_POST['psw'];
      
      $mobile=$_POST['mobile'];
      $query= " INSERT INTO admin (adminname,email,password,mobile) VALUES ('$name','$email','$password','$mobile')";
      $run=mysqli_query($conn,$query);
      if($run)
      {
        echo " data insert sucessfully";
      }
      else
      {
        echo "there is some problem".mysqli_error($conn);
      }

  }
    
  
  if (isset($_POST['submit']) )
   { 
    $name=$_POST['uname'];
    $sql=" select * from  admin where adminname ='$name'";
  $query=mysqli_query($conn,$sql);
    $num=mysqli_num_rows($query);
   
    $row=mysqli_fetch_array($query);
    /* $name=$row['photoname'];
    $img=$row['photo'];
    */
  }
  
      //mymobileapi< P1DUnNJaGM7i5dQb40auMqAjL4Innmi8VJpOjePWa0sGosUcGRdVcqbEs08c>
    
?>
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
  <title>Enquiry | Form</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <script type="text/javascript" src="js/tcal.js"></script>
  <link rel="stylesheet" type="text/css" href="css/tcal.css" />
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>

  <script type="text/javascript" src="js/tcal.js"></script>
  <link rel="stylesheet" type="text/css" href="css/tcal.css" />
<style>
	.text_upper {text-transform:uppercase}

.content-table
{
  border-collapse: collapse;
  margin: 15px 0;
  font-size: 0.9em;
  min-width: 400px;
border: 2px solid #009879; 
border-radius: 5px 5px 5px 5px;



}
.content-table tr
{
  background-color: 
  color:#afffffff;
  text-align: left;
  font-weight: bold;
}
.content-table td
{
  padding: 12px 15px;
}
.content-table tbody tr
{
  border:1px solid #dddddd;
}
.content-table tbody tr:nth-of-type(even)
{
background-color: #f3f3f3;
}
.content-table tbody tr:last-of-type
{

}
	
	div.left{
		width: 350px;
		height: auto;
		float: left;
		

	}
	div.center{
		width: 450px;
		height: 800px;
		float: left;


	}
	div.right{
		width: auto;
		height: auto;
		float: left;
		align-items: left;
		
	}




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
        <h4 style="text-shadow: 4px 3px #e4e4e4; font-size: 30px; font-weight:bold; color:#1ea0ba">Admin Enquiry Form</h4>
                                    
    </div>
    <div class="col-md-2">
        
    </div>
</div>

<div>&nbsp;</div>

<form name='admission' class="zoom-anim-dialog mfp-hide white-popup-block mfp-hide form-horizontal" action="" method=""  enctype="multipart/form-data">
            <!--  <input type="hidden" class="columnlabel" value='1' name="isweb" id="isweb"/>
            <input type="hidden" class="columnlabel" value='' name="id" id="id"/>
            <input type="hidden" class="columnlabel" value='' name="candidateid" id="candidateid"/>
            <input type="hidden" class="columnlabel" value='enquiry/thanks.html' name="thankspage" id="thankspage"/>
            <input type="hidden" class="columnlabel" value='/enquiry/error.html' name="errorpage" id="errorpage"/>
            <input type="hidden"  value='1' name="enquiry_type_id"  id="enquiry_type_id"/>
 -->
<h4 style="background:#1ea0ba;color:#fff; padding:10px 0px 10px 5px">Admin Information</h4>
    <div class="middle">
              <div class="left">                                                   

&nbsp;

              </div>
              
        <div class="center">
        <table class="content-table">
          
          <tr>
            <td>User Name</td><td></td>
            <td><?php echo $row['adminname']; ?></td>
          </tr>

          <tr>
            <td>E-mail</td><td></td>
            <td><?php echo $row['email']; ?></td>
                     </tr>
                     
          <tr>
            <td>Password</td><td></td>
            <td><?php echo $row['password']; ?></td>
          </tr>
          <tr>
            <td>Mobile No.</td><td></td>
            <td><?php echo $row['mobile']; ?></td>
          </tr>
          
          
          <tr>
            <td></td><td><input type="submit" name="submit" value="Print" onclick="printPage()"></td>


            <td></td>
          </tr>
            </table>
  
            
          </div>
          <!-- <div class="right">
        <?php //echo '<img style="margin-top: 18px; height:120px;width:120px; border-radius:5px 5px 5px 5px; border:1px solid #008979; "  src="data:image;base64,'.$img.'"   >'; ?>
          </div>
 -->
    </div>
  </div>
    </form>
</div>  
<script type="text/javascript">
  function printPage()
  {
    window.print();
  }
</script>

</body>
</html>