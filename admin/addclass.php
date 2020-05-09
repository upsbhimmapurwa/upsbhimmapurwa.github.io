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
	               <td>Class ID</td>
	               <td>Class</td>
	               <td>Year</td>
	               <td>Edit</td>
	               <td>Delete</td>
	               </tr>';

$sql=" select * from class ";
  $query=mysqli_query($conn,$sql);
  $num=mysqli_num_rows($query);
   
    if($num>0)
{
	 $i=1;
	while($rows=mysqli_fetch_array($query))
	{
		
       $data .= '<tr>
	               <td>'.$i.'</td>
	               <td>'.$rows['class_id'].'</td>
	               <td>'.$rows['class'].'</td>
	               <td>'.$rows['year'].'</td>
	               <td><button  onclick="editData('.$rows['class_id'].')" class="btn btn-warning" >Edit</button></td>
	               <td><button  onclick="deleteData('.$rows['class_id'].')" class="btn btn-danger" >Delete</button></td>
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
if(isset($_POST['class_id'])&& isset($_POST['class']) && isset($_POST['year']))
{
$query= " INSERT INTO class (class_id,class,year) VALUES ('$class_id','$class','$year')";
      $rows= mysqli_query($conn,$query);
    }

/// delete data


if (isset($_POST['deleteid'])) 
{
	$class_id=$_POST['deleteid'];
 	$query="delete from class where class_id='$class_id'";
	mysqli_query($conn,$query);

}

////update data access
if(isset($_POST['class_id']) && isset($_POST['class_id'])!="")
{
	$class_id=$_POST['class_id'];
	$sql=" select * from class where class_id='$class_id'";
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
if(isset($_POST['edithidden_class_id']))
{
	 $hidden_class_id=$_POST['edithidden_class_id'];
	 $class_id=$_POST['editclass_id'];
	  $class=$_POST['editclass'];
	 $year=$_POST['edityear'];
	$query=" UPDATE class SET class_id='$class_id',class='$class', year='$year' where class_id= '$hidden_class_id' ";
	mysqli_query($conn,$query); 
}
?>
