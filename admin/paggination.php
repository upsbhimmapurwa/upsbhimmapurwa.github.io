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

	<title>Pagination</title>
 <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.min.css"/>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css"/>
 
<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.21/js/dataTables.bootstrap4.min.js"></script>
</head>
<body class="bg-info">

     <div class="container">
     	<div class="row justify-content-center">
     		<div class=" col-lg-10 bg-light rounded my-2 py-2">
             <h4 class="text-center text-dark pt-2 ">Search Student Data Live</h4>
             <hr>
             <table class="table table-bordered table-striped table-hover table-responsive">
             <thead>
         <tr>
         <th>S.R.No.</th>
         <th>Name</th>
        <th>Date of Birth</th>
         <th>Father Name</th>
         <th>Mother Name</th>
         <th>Gender</th>
         <th>Village</th>
          <th>Age</th> 
         <th>Class</th>
          <th>Aadhar No.</th> 
         <th>Caste</th>    
               
         <th>Mobile No.</th>
         <th>Year</th>
         <th>Guardion Name</th>
         <th>Father Aadhar</th>
         <th>Mother Aadhar</th>
         <th>Guardian Aadhar</th>
         <th>Bank Name</th>
         <th>Bank Branch</th>
         <th>Bank Address</th>
         <th>IFSC Code</th>
         <th>Account Number</th>  
                        
   </tr>
</thead>
<tbody>
 <?php
     
      $sql= "SELECT * FROM  student inner join parents_details WHERE student.srno = parents_details.srno ";

          $query = mysqli_query($conn,$sql) or die('error');
          $num =mysqli_num_rows($query);

        if ($num>0)
         { 
            $i=0;
               while ( $row = mysqli_fetch_array($query))
                   {?>
                    <tr><?php $sr=$row['srno'];?>
                        <td><a href="UpdateEnquiry.php?id=<?php echo $sr ;?>"><?php echo $row['srno']; ?></a></td>
                        <!-- <td><?php// echo  '<img src="data:image;base64,'. $row['photo'].'"  width="50px" height="60px" float="left">';  ?></td> -->
                        <td><?php echo $row['name']; ?></td>
                         <td><?php echo $row['dob']; ?></td>
                        <td><?php echo $row['fname']; ?></td>
                        <td><?php echo $row['mname']; ?></td>
                        <td><?php echo $row['gender']; ?></td>
                        <td><?php echo $row['village']; ?></td>
                        <td><?php echo $row['age']; ?></td> 
                        <td><?php echo $row['class']; ?></td>
                        <td><?php  echo $row['aadhar']; ?></td> 
                        <td><?php echo $row['caste']; ?></td>
                        <td><?php echo $row['mobile']; ?></td>
                        <td><?php echo $row['year']; ?></td>
                        <td><?php echo $row['guardian_name']; ?></td>
                        <td><?php echo $row['faadhar']; ?></td>
                        <td><?php echo $row['maadhar']; ?></td>
                        <td><?php echo $row['gaadhar']; ?></td>
                        <td><?php echo $row['bank_name']; ?></td>
                        <td><?php echo $row['bank_branch']; ?></td> 
                        <td><?php echo $row['bank_address']; ?></td>
                        <td><?php  echo $row['ifsc_code']; ?></td> 
                        <td><?php echo $row['account_number']; ?></td>
                        
                    </tr>
                    
               <?php       $i=$i+1;       
                    }
                             echo "Total student is ".$i;

         }
        else
          {
                             echo "Recored is not Save.";
          }
          ?>
 
</tbody>
</table>  

     		</div>
     	</div>
     </div> 

<script type="text/javascript">
$(document).ready(function(){
    $('table').DataTable();
});
</script>
</body>
</html>