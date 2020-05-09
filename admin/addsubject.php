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
	               <td>Subject ID</td>
	               <td>Subject</td>
	               <td>Edit</td>
	               <td>Delete</td>
	               </tr>';

$sql=" select * from subject ";
  $query=mysqli_query($conn,$sql);
  $num=mysqli_num_rows($query);
   
    if($num>0)
{
	 $i=1;
	while($rows=mysqli_fetch_array($query))
	{
		
       $data .= '<tr>
	               <td>'.$i.'</td>
	               <td>'.$rows['sub_id'].'</td>
	               <td>'.$rows['subject'].'</td>
	               <td><button  onclick="editData('.$rows['sub_id'].')" class="btn btn-warning" >Edit</button></td>
	               <td><button  onclick="deleteData('.$rows['sub_id'].')" class="btn btn-danger" >Delete</button></td>
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
if(isset($_POST['sub_id']) && isset($_POST['sub']))
{
	$sub_id=$_POST['sub_id'];
	$sub=$_POST['sub'];
$query= " INSERT INTO subject (sub_id,subject) VALUES ('$sub_id','$sub')";
      $rows= mysqli_query($conn,$query);
    }

/// delete data


if (isset($_POST['deleteid'])) 
{
	$sub_id=$_POST['deleteid'];
 	$query="delete from subject where sub_id='$sub_id'";
	mysqli_query($conn,$query);

}

////update data access
if(isset($_POST['sub_id']) && isset($_POST['sub_id'])!="")
{
	$sub_id=$_POST['sub_id'];
	$sql=" select * from subject where sub_id='$sub_id'";
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
if(isset($_POST['edithidden_sub_id']))
{
	 $hidden_sub_id=$_POST['edithidden_sub_id'];
	 $sub_id=$_POST['editsub_id'];
	 $sub=$_POST['editsub'];
	$query=" UPDATE subject SET sub_id='$sub_id', subject='$sub' where sub_id= '$hidden_sub_id' ";
	mysqli_query($conn,$query); 
}
?>
