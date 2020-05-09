<?php
session_start();
include ('include.php');
if (!isset($_SESSION['username']))
 {
  header('location:index.php');
}
$name=$_SESSION['username'];

extract($_POST);



///for class retrive according to year
if (isset($_POST['datapost'])) {
    $year1 = $_POST['datapost'];
         
         
         

         $sql= "select * from class where year='$year1'";
             $query=mysqli_query($conn,$sql);
              //echo $rows=mysqli_fetch_array($query);
            while($rows=mysqli_fetch_array($query))
            { ?>

              <option value="<?php echo $rows['class']; ?>"><?php echo $rows['class'];?>   </option> 
            <?php
            }
         

}?>
<?php

//////end above query


if (isset($_POST['readrecord'])) 
{
 $data = '<table class="table table-bordered table-striped text-center " >
                 <tr>
                 <td>S.No.</td>
                 <td>Teacher Name</td>
                 <td>Year</td>
                 <td>Grade</td>
                 <td>Subject</td>
                 <td>Gender</td>
                 <td>E-mail</td>
                 <td>Mobile</td>
                 <td>Edit</td>
                 <td>Delete</td>
                 </tr>';

$sql=" select * from teacher ";
  $query=mysqli_query($conn,$sql);
  $num=mysqli_num_rows($query);
   
    if($num>0)
{
   $i=1;
  while($rows=mysqli_fetch_array($query))
  {
    
       $data .= '<tr>
                 <td>'.$i.'</td>
                 <td>'.$rows['firstname'] . $rows['lastname'].'</td>
                 <td>'.$rows['year'].'</td>
                 <td>'.$rows['grade'].'</td>
                 <td>'.$rows['subject'].'</td>
                 <td>'.$rows['gender'].'</td>
                 <td>'.$rows['email'].'</td>
                 <td>'.$rows['mobile'].'</td>
                 <td><button  onclick="editData('.$rows['teacher_id'].')" class="btn btn-warning" >Edit</button></td>
                 <td><button  onclick="deleteData('.$rows['teacher_id'].')" class="btn btn-danger" >Delete</button></td>
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
if(isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['year']) && isset($_POST['grade']) && isset($_POST['subject']) && isset($_POST['gender']) && isset($_POST['email']) && isset($_POST['mobile']))
{
echo $query= " INSERT INTO teacher (firstname,lastname,year,grade,subject,gender,email,mobile) VALUES ('$firstname','$lastname','$year','$grade','$subject','$gender','$email','$mobile')";
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
  $teacher_id=$_POST['deleteid'];
  $query="delete from teacher where teacher_id='$teacher_id'";
  mysqli_query($conn,$query);

}

////update data access
if(isset($_POST['teacher_id']) && isset($_POST['teacher_id'])!="")
{
  $teacher_id=$_POST['teacher_id'];
  $sql=" select * from teacher where teacher_id='$teacher_id'";
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
if(isset($_POST['edithidden_teacher_id']))
{
   $hidden_teacher_id=$_POST['edithidden_teacher_id'];
   $teacher_id=$_POST['editteacher_id'];
    $firstname=$_POST['editfirstname'];
    $lastname=$_POST['editlastname'];
    $year=$_POST['edityear'];
    $grade=$_POST['editgrade'];
    $subject=$_POST['editsubject'];
    $gender=$_POST['editgender'];
    $email=$_POST['editemail'];

   $mobile=$_POST['editmobile'];
  $query=" UPDATE teacher SET firstname='$firstname',lastname='$lastname', year='$year',grade='$grade',subject='$subject',gender='$gender',email='$email',mobile='$mobile' where teacher_id= '$hidden_teacher_id' ";
  mysqli_query($conn,$query); 
}
?>
