<?php
session_start();
include('include.php');
?>
<?php 
$fname=$_POST['fname'];
	
	if(isset($_POST['submit']))
	{ 
		
 	
	  $fname=$_POST['fname'];
      $lname=$_POST['lname'];
      $mobile=$_POST['mobile'];
      $msg=$_POST['massage'];
     if ($fname==''||$lname==''|| $mobile==''||$msg=='') {
     	echo"<script>fill all values..</script>";
     	exit();
     }
     else
     {
      $query= " INSERT INTO joinme (fname, lname, mobile, msg) VALUES ('$fname','$lname','$mobile','$msg') ";
      $run=mysqli_query($conn,$query);
      if($run)
      {
      	//echo " data insert sucessfully";
      }
      else
      {
      	echo "there is some problem".mysqli_error($conn);
      }

	}
    }
	
	if (isset($_POST['submit']) )
	 { $fname=$_POST['fname'];
	 	$sql=" select * from  joinme where fname ='$fname'";
	$query=mysqli_query($conn,$sql);
    $num=mysqli_num_rows($query);
   
    $row=mysqli_fetch_array($query);
		
	}
	
    	//mymobileapi< P1DUnNJaGM7i5dQb40auMqAjL4Innmi8VJpOjePWa0sGosUcGRdVcqbEs08c>
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Join Me Detail</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
	body{
		background-image: url('image/login3.jpg');
background-size: cover;

	}
	div.main{
		max-width: 1400px;
		height: auto;	
		float: left;
	}
	div.header{
		max-width: 1400px;
		height: 150px;
		margin: auto;


	}
	div.middle{
		width: 1400px;
		height:800px;
		float: left;
		
	}
	div.left{
		width: 350px;
		height: 800px;
		float: left;
		

	}
	div.center{
		width: 700px;
		height: 800px;
		float: left;


	}
	div.right{
		width: 350px;
		height: 800px;
		float: left;
		align-items: left;

	}

	
table {
  width:100%;
  border: solid;
  border-color: black;

}
table, th, td {
  font-family:verdana, Arial, Helvetica, sans-serif;
  font-size:12px;
  border-collapse:collapse;
}
th, td {
  padding: 15px;
  text-align: left;

}
.image{
	top: 30px;
	float: right;
	margin-right: 100px;
	border: 1;
	
	
}

</style>
</head>
<body >
	<a href="index.html" style="text-decoration: none; color: blue;float: right;">Back</a>
<form action=" " method="post" enctype="multipart/form-data">
<div class="main" >
	<div class="header">
    <center><font color="red"><h1>Welcome in U.P.S.BhimmapurwaL</h1></font>
		<hr color="blue" width="400px" height="50px"/>
        <hr color="red" width="700px" height="50px"/>
        <h2><center>Student You have joinned</center></h2>

	</center>
	</div>
	<div class="middle">
	            <div class="left">	                                                 



	            </div>
							
				<div class="center"><font face="Arial" size="24" >
					Mr.<font color="red"> <?php echo $row['fname'];echo $row['lname']; ?></font> ,we will be contact you soon on you Mobile no.<font color="blue"> <?php echo $row['mobile']; ?></font>.<br>
					Thank you to join my tutorial..
				</font>

				
						
			    </div>
			    
		</div>
	
</div>
		</form>

</body>
</html>