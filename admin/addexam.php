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
	               <td>Exam ID</td>
	               <td>Exam</td>
	               <td>Edit</td>
	               <td>Delete</td>
	               </tr>';

$sql=" select * from exam ";
  $query=mysqli_query($conn,$sql);
  $num=mysqli_num_rows($query);
   
    if($num>0)
{
	 $i=1;
	while($rows=mysqli_fetch_array($query))
	{
		
       $data .= '<tr>
	               <td>'.$i.'</td>
	               <td>'.$rows['exam_id'].'</td>
	               <td>'.$rows['exam_name'].'</td>
	               <td><button  onclick="editData('.$rows['exam_id'].')" class="btn btn-warning" >Edit</button></td>
	               <td><button  onclick="deleteData('.$rows['exam_id'].')" class="btn btn-danger" >Delete</button></td>
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
if(isset($_POST['exam_id']) && isset($_POST['exam']))
{
$query= " INSERT INTO exam (exam_id,exam_name) VALUES ('$exam_id','$exam')";
      $rows= mysqli_query($conn,$query);
    }

/// delete data


if (isset($_POST['deleteid'])) 
{
	$exam_id=$_POST['deleteid'];
 	$query="delete from exam where exam_id='$exam_id'";
	mysqli_query($conn,$query);

}

////update data access
if(isset($_POST['exam_id']) && isset($_POST['exam_id'])!="")
{
	$exam_id=$_POST['exam_id'];
	$sql=" select * from exam where exam_id='$exam_id'";
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
if(isset($_POST['edithidden_exam_id']))
{
	 $hidden_exam_id=$_POST['edithidden_exam_id'];
	 $exam_id=$_POST['editexam_id'];
	 $exam=$_POST['editexam'];
	$query=" UPDATE exam SET exam_id='$exam_id', exam_name='$exam' where exam_id= '$hidden_exam_id' ";
	mysqli_query($conn,$query); 
}
?>
