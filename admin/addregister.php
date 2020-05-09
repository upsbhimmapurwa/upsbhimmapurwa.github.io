<?php
session_start();
include ('include.php');
if (!isset($_SESSION['username']))
 {
  header('location:index.php');
}
$name=$_SESSION['username'];

extract($_POST);




//////end above query


if (isset($_POST['readrecord'])) 
{
 $data = '<table class="table table-bordered table-striped text-center " >
                 <tr>
                 <td>S.No.</td>
                 <td>Admin Name</td>
                 <td>Password</td>
                 <td>E-mail</td>
                 <td>Mobile</td>
                 <td>Edit</td>
                 <td>Delete</td>
                 </tr>';

$sql=" select * from admin ";
  $query=mysqli_query($conn,$sql);
  $num=mysqli_num_rows($query);
   
    if($num>0)
{
   $i=1;
  while($rows=mysqli_fetch_array($query))
  {
    
       $data .= '<tr>
                 <td>'.$i.'</td>
                 <td>'.$rows['admin_name'] .'</td>
                 <td>'.$rows['password'].'</td>
                 <td>'.$rows['email'].'</td>
                 <td>'.$rows['mobile'].'</td>
                 <td><button  onclick="editData('.$rows['admin_id'].')" class="btn btn-warning" >Edit</button></td>
                 <td><button  onclick="deleteData('.$rows['admin_id'].')" class="btn btn-danger" >Delete</button></td>
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
if(isset($_POST['name']) && isset($_POST['password']) && isset($_POST['email']) && isset($_POST['mobile']))
{
echo $query= " INSERT INTO admin (admin_name,password,email,mobile) VALUES ('$name','$password','$email','$mobile')";
      $rows= mysqli_query($conn,$query);
      if($query)
      {
        echo " data insert sucessfully";
      }
      else
      {
        echo "there is some problem".mysqli_error($conn);
      }
    }
    
    


/// delete data


if (isset($_POST['deleteid'])) 
{
  $admin_id=$_POST['deleteid'];
  $query="delete from admin where admin_id='$admin_id'";
  mysqli_query($conn,$query);

}

////update data access
if(isset($_POST['admin_id']) && isset($_POST['admin_id'])!="")
{
  $admin_id=$_POST['admin_id'];
  $sql=" select * from admin where admin_id='$admin_id'";
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
if(isset($_POST['edithidden_admin_id']))
{
   $hidden_admin_id=$_POST['edithidden_admin_id'];
   $admin_id=$_POST['editadmin_id'];
    $name=$_POST['editname'];
    $password=$_POST['editpassword'];
    
    $email=$_POST['editemail'];

   $mobile=$_POST['editmobile'];
  $query=" UPDATE admin SET admin_name='$name',password='$password', email='$email',mobile='$mobile' where admin_id= '$hidden_admin_id' ";
  mysqli_query($conn,$query); 
}
?>
