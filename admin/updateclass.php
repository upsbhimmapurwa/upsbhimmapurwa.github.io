<? php
session_start();
include('include.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>UPS BIMMAPURWA </title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/bootstrap.min.css">
<!--   <script type="text/javascript" src="js/tcal.js"></script>
  <link rel="stylesheet" type="text/css" href="css/tcal.css" />
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>

  <script type="text/javascript" src="js/tcal.js"></script>-->
  <link rel="stylesheet" type="text/css" href="css/tcal.css" />
  <link rel="stylesheet" type="text/css" media="screen" href="css/jquery-ui.css" />
  <link rel="stylesheet" type="text/css" media="screen" href="css/jquery-ui.css" />
    <script src="js/jquery.js"></script>
    <script src="js/jquery-ui.js"></script>
    <script type="text/javascript">

function myFunction()
{

  document.getElementById("savebtn").disabled = true;
  var name=document.getElementById('name').value;
  var srno=document.getElementById('srno').value;
  var rollno=document.getElementById('rollno').value;
  var academicyearid=document.getElementById('academicyearid').value;  
  var classid=document.getElementById('class').value;  
 
  var message='';
  if(name=='')
  {
    message="Please enter Student Name.";
  }
   else if(srno=='')
  {
    message="Please enter S.R.No.";
   } 
 else if(rollno=='')
  {
    message="Please enter Roll No.";
   } 

  else if(academicyearid=='-1')
  {
    message="Please enter Academic Year";
   } 

  else if(class=='-1')
  {
    message="Please enter Class";
   } 

   
   
  if(message!='')
  {
     alert(message);
     document.getElementById("savebtn").disabled = false;
     return false;
     
  
  }
  else
  {
  document.getElementById('myform').submit();
  }
  
}
</script>
     <style >
        .content-table
{
  border-collapse: collapse;
  margin: 15px 350px;
  font-size: 0.9em;
  min-width: auto;
border-radius: 5px 5px 0 0;

overflow: hidden;
box-shadow: 0 0 20px rgba(0,0,0,0.15);



}
.content-table thead tr
{
  background-color:#009879; 
  color:#afffffff;
  text-align: left;
  font-weight: bold;
}
.content-table th,
.content-table td
{
  padding: 18px 12px;
}
.content-table tbody tr
{
  border:1px solid #dddddd;
}
.content-table tbody tr:nth-of-type(even)
{
background-color: #f3f3f3;
}
.content-table tbody tr:last-of-type
{
border-bottom: 2px solid #009879;
}
.content-table tr:hover {background-color:#f5f5f5;}

    </style>
  
</head>
<body style="background-color:#e4e4e4; max-width: auto;">
<div style="background-color:#fff" class="container">
<div class="row"> 
  <div class="col-md-2">
    <img style="margin-top: 18px; height:180px; border-radius:5px 5px 0 0; border:2px solid #009879; " src="images/ups logo.png">
  </div>
  <div class="col-md-8 text-center">
    <h2 style="text-shadow: 4px 3px #e4e4e4; font-size: 35px; margin-top: 20px;margin-bottom: -12px; font-weight:bold; color:#1ea0ba">U.P.S. BHIMMAPURWA, </h2>
    <p class="lead">
    <h4 style="text-shadow: 4px 3px #e4e4e4; line-height:33px; font-size:22px; font-weight:bold;">Aminabad Katari, Kannauj<br> Email: upsbhimmapurwa@gmail.cpm<br>Tel: 8299774759</h4></p>
    <h4 style="text-shadow: 4px 3px #e4e4e4; font-size: 30px; font-weight:bold; color:#1ea0ba">Update Student class </h4>
                  
  </div>
  <div class="col-md-2">
    
  </div>
</div>
<div>&nbsp;</div>

<form name='updateclass' class="zoom-anim-dialog mfp-hide white-popup-block mfp-hide form-horizontal" action="" method="post" enctype="multipart/form-data" >

<h4 style="background:#1ea0ba;color:#fff; padding:10px 0px 10px 5px">Student Class Update</h4>
<div class="col-sm-3">
    <label>Academic Year :<span class="mandatory" style="color: #ff0000;">*</span></label>
  </div>
  <div class="col-sm-3">
        <select name="year" title="Academic Year" id="academicyearid" class=' textbox form-control mandatoryvalue' onchange="myfun(this.value)" required>
      <option value='-1'>--Select Academic Year--</option>
      <?php
      include('include.php');
      $sql= "select * from year";
             $query=mysqli_query($conn,$sql);
               //$rows=mysqli_fetch_array($query);
            while($rows=mysqli_fetch_array($query))
            { ?>

              <option value='<?php echo $rows['year']; ?>'> <?php echo $rows['year'];?> </option> 
            <?php
            }
 
       ?>
      
        </select>
  </div>
  
  <div class="col-sm-3">
    <label>Class :<span class="mandatory" style="color: #ff0000;">*</span></label>
  </div>
  <div class="col-sm-3">
        <select name="class" title="Grade" id="class"   class='textbox form-control mandatoryvalue' onchange="myfun1(this.value)" required>
            <option value='-1'>--Class--</option>
            
               
            
        </select>
         <div>&nbsp;</div>
  </div><div class="col-sm-3">
    <label>S.R.No.<span class="mandatory" style="color: #ff0000;">*</span></label>
  </div>
  <div class="col-sm-3">
        <select name="srno" title="S.R.No." id="srno" class='textbox form-control mandatoryvalue' onchange="myfun2(this.value)"required>
      <option value='-1'>Select S.R.No.</option>
        
        </select>
  </div>
  
  <div class="col-sm-3">
    <label>Student Name :<span class="mandatory" style="color: #ff0000;">*</span></label>
  </div>
  <div class="col-sm-3">
        <select name="name" title="Grade" id="name" class='form-control mandatoryvalue' required>
            <option value='-1'>--Select Grade--</option>
            
            
                    
            
        </select>
  </div>
 <div>&nbsp;</div>  
  <div>&nbsp;</div>
  <p align="center">
    <button type="submit"  name="submit" onclick="return myFunction();" style="background:#1ea0ba; color:#FFFFFF; padding:8px 20px; border:none; border-radius:3px; font-size:16px; cursor:pointer">Update Class</button>
  </p>

  <div>&nbsp;</div>
  <script type="text/javascript">
    function myfun(datavalue)
    {
      $.ajax({
        url: 'classaddupdate.php',
        type:'POST',
        data: { datapost : datavalue },
        success: function(result)
        {
          $('#class').html(result);
        }
      })
    }
       
       function myfun1(datavalue)
    {
      $.ajax({
        url: 'classaddupdate.php',
        type:'POST',
        data: { datapost : datavalue-1 },
        success: function(result)
        {
          $('#srno').html(result);
        }
      })
    }
    function myfun2(datavalue)
    {
      $.ajax({
        url: 'classaddupdate.php',
        type:'POST',
        data: { datapost : datavalue },
        success: function(result)
        {
          $('#name').html(result);
        }
      })
    }
  </script>

<div>

  <?php  
include('include.php');

 if(isset($_POST['submit'])&& $_POST['srno']!='')
  {
    
 
    
  
      $name=$_POST['name'];
      $srno=$_POST['srno'];
      //$rollno=$_POST['rollno'];
      $year=$_POST['year'];
      $class=$_POST['class'];
       
      
      $query= " INSERT INTO session (srno,name,year,class) VALUES ('$srno','$name','$year','$class')";
      $run=mysqli_query($conn,$query);
      /*if($run)
      {
        echo " data insert sucessfully";
      }
      else
      {
        echo "there is some problem".mysqli_error($conn);
      }
*/
  }
    
  

      //display data on table
    
if (isset($_POST['submit'])) 
{
 
     echo "<div style='align='center''>";
   echo "<table class='content-table'>";
         echo "<thead>";
         echo  "<tr>";
               echo  "  <th>Roll No.</th>";
              echo  "  <th>S.R.No.</th>";
              echo  "  <th>Name</th>";
               
               echo  "  <th>Class</th>";
               echo  " <th>Year</th>";
               echo  " <th>Age</th>";
               echo  " <th>Photo</th>";
            
                        
          echo  "</tr>";
        echo "</thead>";
        echo " <tbody>";

    $srno= $_POST['srno']; 
 $year=$_POST['year'];
    $sql=" select session.srno,session.name,session.class,session.year,student.photo,student.age from session inner join student on student.srno=session.srno order by srno desc ";
  $query=mysqli_query($conn,$sql);
    $num=mysqli_num_rows($query);
      if ($num>0)
         { 
            $i=0;
               while ( $row = mysqli_fetch_array($query))
                   {?>
                    <tr> <td><?php echo $i+1; ?></td> 
                        <td><a href="UpdateEnquiry.php?id=<?php echo $sr ?>"><?php echo $row['srno']; ?></a></td>
                        
                        <td><a ><?php echo $row['name']; ?></td>
                        <td><?php echo $row['class']; ?></td>
                        <td><?php echo $row['year']; ?></td>
                        <td><?php echo $row['age']; ?></td>
                        <td><?php echo  '<img src="data:image;base64,'. $row['photo'].'"  width="50px" height="60px" float="left">';  ?></td>
                     </tr>
                    
               <?php       $i=$i+1;       
                    }
                             echo "<h3 class='text-center bg-dark color-white'>Total student added ".$i."</h3>";

         }
        else
          {
                             echo "Recored is not Save.";
          }
    
       }
                


        ?>
    </tbody>
    </table>

</div>
</form>
</body>
</html>
