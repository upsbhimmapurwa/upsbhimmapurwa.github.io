<?php
session_start();
include ('include.php');
if (!isset($_SESSION['username'])||!isset($_SESSION['role']))
 {
  header('location:index.php');
}
$name=$_SESSION['username'];
$role=$_SESSION['role'];?>
<?php
    echo $sr = $_GET['srno'];
     echo  $name = $_GET['name'];
      echo $fname = $_GET['fname'];
      $gender = $_GET['gender'];
      $class = $_GET['class'];
      $year = $_GET['year'];

      if ($sr != "" || $name != "" || $fname != "" || $gender != "" || $class != "" || $year != "" ) 
      {
      
     // $sql= "SELECT * FROM  student WHERE srno = '$sr' or name='$name' or gender='$gender' or fname='$fname' or class='$class' or year ='$year'";

$html='<table>
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
                        
   </tr>';
   $sql= "SELECT * FROM  student   inner join parents_details on student.srno = parents_details.srno where student.srno= '$sr' or student.name ='$name' or student.gender='$gender' or student.fname='$fname' or student.class='$class' or student.year='$year' "; 

$query = mysqli_query($conn,$sql) or die('error');
          $num =mysqli_num_rows($query);

        if ($num>0)
         { 
            $i=0;
               while ( $row = mysqli_fetch_array($query))
                   {
                   $html.='<tr>
                        <td>'.$row['srno'].'</td>
                        <td>'.$row['name'].'</td>
                        <td>'.$row['dob'].'</td>
                        <td>'.$row['fname'].'</td>
                        <td>'.$row['mname'].'</td>
                        <td>'.$row['gender'].'</td>
                        <td>'.$row['village'].'</td>
                        <td>'.$row['age'].'</td>
                        <td>'.$row['class'].'</td>
                        <td>'.$row['aadhar'].'</td>
                        <td>'.$row['caste'].'</td>
                        <td>'.$row['mobile'].'</td>
                        <td>'.$row['year'].'</td>
                        <td>'.$row['guardian_name'].'</td>
                        <td>'.$row['faadhar'].'</td>

                        <td>'.$row['maadhar'].'</td>

                        <td>'.$row['gaadhar'].'</td>
                        <td>'.$row['bank_name'].'</td>
                        <td>'.$row['bank_branch'].'</td>
                        <td>'.$row['bank_address'].'</td>
                        <td>'.$row['ifsc_code'].'</td>
                        <td>'.$row['account_number'].'</td>
                        
                    </tr>';
                    
                     $i=$i+1;       
                    }
                             echo "Total student is ".$i;
                             $html.='</table>';  
                             header('Content-Type:application/vnd.ms-excel');
                             header('Content-Disposition:attachment; filename=studentData.xls');        
                             echo $html;    		
         }
        }
        else
          {
                             echo "Recored is not Save.";

          }
     
?>
