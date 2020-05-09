<?php
session_start();
include ('include.php');
if (!isset($_SESSION['username']))
 {
  header('location:index.php');
}
$name=$_SESSION['username'];
extract($_POST);

if (isset($_POST['readrecord'])) 
{
 $data = '<table class="table table-bordered table-striped text-center " >
	               <tr>
	               <td>S.No.</td>
	               <td>Year ID</td>
	               <td>Year</td>
	               <td>Edit</td>
	               <td>Delete</td>
	               </tr>';

$sql=" select * from year ";
  $query=mysqli_query($conn,$sql);
  $num=mysqli_num_rows($query);
   
    if($num>0)
{
	 $i=1;
	while($rows=mysqli_fetch_array($query))
	{
		
       $data .= '<tr>
	               <td>'.$i.'</td>
	               <td>'.$rows['year_id'].'</td>
	               <td>'.$rows['year'].'</td>
	               <td><button  onclick="editData('.$rows['year_id'].')" class="btn btn-warning" >Edit</button></td>
	               <td><button  onclick="deleteData('.$rows['year_id'].')" class="btn btn-danger" >Delete</button></td>
               </tr>';
              $i= $i+1;
	}
 /*    if($query)
      {
        echo " data insert sucessfully";
      }
      else
      {
        echo "there is some problem".mysqli_error($conn);
      }*/

}
$data.= '</table>';
echo $data;
}
//insert data
if(isset($_POST['year_id']) && isset($_POST['year']))
{
$query= " INSERT INTO year (year_id,year) VALUES ('$year_id','$year')";
      $rows= mysqli_query($conn,$query);
    }

/// delete data


if (isset($_POST['deleteid'])) 
{
	$year_id=$_POST['deleteid'];
 	$query="delete from year where year_id='$year_id'";
	mysqli_query($conn,$query);

}

////update data access
if(isset($_POST['year_id']) && isset($_POST['year_id'])!="")
{
	$year_id=$_POST['year_id'];
	$sql=" select * from year where year_id='$year_id'";
  $query=mysqli_query($conn,$sql);
 // $response=array();

   $num=mysqli_num_rows($query);
   
    if($num>0)
{
	 
	while($rows=mysqli_fetch_array($query))
	{
		$response =$rows;

}
}else
{
	$response['ststus']=200;
	$response['message'] = "Data is not found";
}
echo json_encode($response);
}else
{
	$response['status']=200;
	$response['message']="Invalid Request!";

}

////update table data
if(isset($_POST['edithidden_year_id']))
{
	 $hidden_year_id=$_POST['edithidden_year_id'];
	 $year_id=$_POST['edityear_id'];
	 $year=$_POST['edityear'];
	$query=" UPDATE year SET year_id='$year_id', year='$year' where year_id= '$hidden_year_id' ";
	mysqli_query($conn,$query); 
}
?>
