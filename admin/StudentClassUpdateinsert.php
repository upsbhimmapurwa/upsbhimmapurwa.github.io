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
	               <td>Year</td>
	               <td>Class</td>
	               <td>S.R.No.</td>
				   <td>Name</td>
	               <td>Edit</td>
	               <td>Delete</td>
	               </tr>';

$sql=" select * from session";
  $query=mysqli_query($conn,$sql);
  $num=mysqli_num_rows($query);
   
    if($num>0)
{
	 $i=1;
	while($rows=mysqli_fetch_array($query))
	{
		
       $data .= '<tr>
	               <td>'.$i.'</td>
	               <td>'.$rows['year'].'</td>
	               <td>'.$rows['class'].'</td>
				   <td>'.$rows['srno'].'</td>
	               <td>'.$rows['name'].'</td>
	               
	               <td><button  onclick="editData('.$rows['year'].')" class="btn btn-warning" >Edit</button></td>
	               <td><button  onclick="deleteData('.$rows['year'].')" class="btn btn-danger" >Delete</button></td>
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
if(isset($_POST['class_id'])&& isset($_POST['class']) )
{
$query= " INSERT INTO class (class_id,class) VALUES ('$class_id','$class')";
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
	 
	$query=" UPDATE class SET class_id='$class_id',class='$class' where class_id= '$hidden_class_id' ";
	mysqli_query($conn,$query); 
}
?>
