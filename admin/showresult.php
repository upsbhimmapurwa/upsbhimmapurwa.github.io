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

 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
     <!-- Bootstrap CSS-->
    <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/dashboard/1-4-7/vendor/bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome CSS-->
    <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/dashboard/1-4-7/vendor/font-awesome/css/font-awesome.min.css">
    <!-- Fontastic Custom icon font-->
    
    <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/dashboard/1-4-7/css/fontastic.css">
    <!-- Google fonts - Roboto -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
    <!-- jQuery Circle-->
    <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/dashboard/1-4-7/css/grasp_mobile_progress_circle-1.0.0.min.css">
    <!-- Custom Scrollbar-->
    <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/dashboard/1-4-7/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css">
    <!-- theme stylesheet-->
    <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/dashboard/1-4-7/css/style.default.css" id="theme-stylesheet">
    <!-- Custom stylesheet - for your changes-->
    <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/dashboard/1-4-7/css/custom.css">
    <!-- Favicon-->
    <link rel="shortcut icon" href="../admin/images/ban_32x32.jpg" sizes="32x32">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
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
  margin: 15px 10px;
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
/* .legend {
        text-align: left;
        line-height: 10px;
        color: #555;
    } */

        /* .legend i {
            width: 18px;
            height: 18px;
            float: left;
            margin-right: 8px;
            opacity: 0.7;
        } */
/*.content-table tr:hover {background-color:#f5f5f5;}
*/
    </style>
  </head>

  <body>
    <!-- Side Navbar -->
    <nav class="side-navbar">
      <div class="side-navbar-wrapper">
        <!-- Sidebar Header    -->
        <div class="sidenav-header d-flex align-items-center justify-content-center">
          <!-- User Info-->
          <div class="sidenav-header-inner text-center" style="text-transform: capitalize;"><img src="../images/teacher.jpg" alt="person" class="img-fluid rounded-circle">
            <h2 class="h5" ><?= $_SESSION['username'];?></h2><span><?= $_SESSION['role'];?></span>
          </div>
          <!-- Small Brand information, appears on minimized sidebar-->
          <div class="sidenav-header-logo"><a href="dashboard.php" class="brand-small text-center"> <strong>M</strong><strong class="text-primary">V</strong></a></div>
        </div>
        <!-- Sidebar Navigation Menus-->
         <div class="main-menu">
          <h5 class="sidenav-heading">DASHBOARD</h5>
          <ul id="side-main-menu" class="side-menu list-unstyled">                  
            <li ><a href="dashboard.php"> <i class="fas fa-home"></i>Home  </a></li>
            <li  ><a href="teacher.php"> <i class="fa fa-chalkboard-teacher"></i>Teacher   </a></li>
            <li><a href="" aria-expanded="false" data-toggle="collapse"> <i class=" fas fa-user-tie"></i>Add Student Data</a>
              <ul id="" class="collapse list-unstyled ">
                <li><a href="newstudent.php">Add Student Data</a></li>
                <li><a href="addparent.php">Add Parents Data</a></li>                
              </ul>
            </li>
            <li><a href="SearchStudentDetail.php"><i class='fas fa-search'></i>Student/Parent Details</a></li>
            <li><a href="class.php"> <i class="fas fa-book-reader"></i>Class  </a></li>
            <li ><a href="year.php"> <i class=" far fa-calendar-alt"></i>Year    </a></li>
            <li><a href="register.php"> <i class="fas fa-font"></i>Register Admin </a></li>
            <li><a href="subject.php"> <i class="fas fa-paste"></i>Subject </a></li>
            <li><a href="exam.php"> <i class="  fas fa-print"></i>Examination </a></li>
            <li class="active"><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class=" fas fa-file-alt"></i>Student Result</a>
              <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
                <li><a href="result.php">Add Result</a></li>
                <li class="active"><a href="showresult.php">Show Result</a></li>
                                
              </ul>
            </li>
            <li><a href="search.php"> <i class='fas fa-search'></i>Search Data </a></li>
            
          </ul>
        </div>
      </div>
    </nav>
    <div class="page">
      <!-- navbar-->
      <header class="header">
        <nav class="navbar">
          <div class="container-fluid">
            <div class="navbar-holder d-flex align-items-center justify-content-between">
              <div class="navbar-header"><a id="toggle-btn" href="#" class="menu-btn"><i class="fa fa-outdent" style="font-size:20px;color:red"> </i></a><a href="index.php" class="navbar-brand">
                  <div class="brand-text d-none d-md-inline-block"><strong class="text-success">उच्च प्राथमिक विद्यालय भिम्मापुरवा</strong> <span>कटरी अमीनाबाद, कन्नौज</span></div></a></div>
              <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                <!-- Log out-->
                <span class="text-success"> <?php echo date("d/m/Y")."   " .date("l");?></span>
                <li class="nav-item"><a href="logout.php" class="nav-link logout" style="font-size:15px;color:red"> <span class="d-none d-sm-inline-block">  Logout</span><i  class='fas fa-sign-out-alt' ></i></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <!-- Breadcrumb-->
      <div class="breadcrumb-holder">
        <div class="container-fluid">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><a href="dashboard.php">Home</a></li>
            <li class="breadcrumb-item active">Show Result  </li>
          </ul>
        </div>
      </div>
      <div align="right"><a href="../admin/tcpdf/resultpdf.php?id=<?php echo $_POST['srno']; ?>&& id2=<?php echo $_POST['exam_id']; ?>" class="btn btn-primary" style="text-decoration: none;">Download Results</a></div>
 <section>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3" >
        <form name='updateclass' class="zoom-anim-dialog mfp-hide white-popup-block mfp-hide form-horizontal" action=" " method="post" enctype="" >

              <h4 style="background:#1ea0ba;color:#fff;text-align: center; padding:10px 0px 10px 5px">Student Result</h4>
          <div class="col-sm-12">
             <label>Academic Year :<span class="mandatory" style="color: #ff0000;">*</span></label>
          </div>
          <div class="col-sm-12">
          <select name="year" title="Academic Year" id="academicyearid" class=' textbox form-control mandatoryvalue' onchange="myfun(this.value)" required>
                 <option value='-1'>Select Academic Year</option>
              <?php
                 include('include.php');
                 $sql= "select * from year";
                $query=mysqli_query($conn,$sql);
                 //$rows=mysqli_fetch_array($query);
                 while($rows=mysqli_fetch_array($query))
                    { ?>
                        <option value='<?php echo $rows['year']; ?>'> <?php echo $rows['year'];?> </option> 
                       <?php
                    }  ?>
      
                </select>
            </div>
            <div class="col-sm-12">
             <label>Class :<span class="mandatory" style="color: #ff0000;">*</span></label>
            </div>
           <div class="col-sm-12">
           <select name="class" title="Grade" id="class"   class='textbox form-control mandatoryvalue' onchange="myfun1(this.value)" required>
                <option value='-1'>Class</option>
              </select>
           </div>
           <div class="col-sm-12">
               <label>S.R.No.<span class="mandatory" style="color: #ff0000;">*</span></label>
           </div>
           <div class="col-sm-12">
           <select name="srno" title="S.R.No." id="srno" class='textbox form-control mandatoryvalue' onchange="myfun2(this.value)" required>
                <option value='-1'>Select S.R.No.</option>
             </select>
            </div>
            <div class="col-sm-12">
                  <label>Student Name<span class="mandatory" style="color: #ff0000;">*</span></label>
           </div>
           <div class="col-sm-12">
           <select name="name" title="Student Name" id="name" class='textbox form-control mandatoryvalue' required>
                 <option value='-1'>Student Name</option>
               </select>
               </div>
           <div class="col-sm-12">
                  <label>Exam Type :<span class="mandatory" style="color: #ff0000;">*</span></label>
           </div>
           <div class="col-sm-12">
               <select name="exam_id" title="exam Type" id="Exam" class=' textbox form-control mandatoryvalue'  required>
                <option value='-1'>--Select Exam Type--</option>
                <?php
                  include('include.php');
                  $sql= "select * from exam";
                  $query=mysqli_query($conn,$sql);
               //$rows=mysqli_fetch_array($query);
                   while($rows=mysqli_fetch_array($query))
                   { ?>
                      <option value='<?php echo $rows['exam_id']; ?>'> <?php echo $rows['exam_name'];?> </option> 
                   <?php
                   }
                   ?>
              </select>
           </div>
            <div>&nbsp;</div>
          <p align="center">
          <button type="submit"  name="submit" onclick="return myFunction();" style="background:#1ea0ba; color:#FFFFFF; padding:8px 20px; border:none; border-radius:3px; font-size:16px; cursor:pointer">Show Result</button>
             </p>

   </div>
   <fieldset style="border: 1px solid #01a2b7;">
            <legend style="text-align: center; border: 2px solid #01a2b7; border-radius: 30px; padding: 6px;">Result 2019</legend>
   <div class="col-sm-9" > 
            <?php  
              include('include.php');
              if(isset($_POST['submit'])&& $_POST['srno']!='')
              {
                $srno= $_POST['srno']; 
                $year=$_POST['year'];
                echo "<div >";
                echo "<table class='content-table'>";
                //echo "<thead>";
                echo "<tr>";
               // echo  "<th>#</th>";
                echo  "<th>S.R.No.</th>";
                echo  "<th>Name</th>";
                echo  "<th>Class</th>";
                echo  " <th>Year</th>";
                echo  " <th>Father Name</th>";
                echo  " <th>Mother Name</th>";
                //echo  " <th>Subject</th>";
                //echo  " <th>Marks</th>";
                echo  "</tr>";
                //echo  "</thead>";
                echo  "<tbody>";

                 $sql=" select result.srno,result.name,result.year,result.class,student.fname,student.mname From (result inner join student on result.srno =student.srno) where result.srno='$srno' ";
                 $query=mysqli_query($conn,$sql);
                 $num=mysqli_num_rows($query);
                if ($num>0)
                   { 
                     
                      $row = mysqli_fetch_array($query);
                      {?>
                        <tr> 
                        <!-- <td><?php //echo $i+1; ?></td> --> 
                        <td><a href="UpdateEnquiry.php?id=<?php echo $sr ?>"><?php echo $row['srno']; ?></a></td> 
                        <td><a ><?php echo $row['name']; ?></a></td>
                         <td><?php echo $row['class']; ?></td> 
                        <td><?php echo $row['year']; ?></td> 
                        <td><?php echo $row['fname']; ?></td>
                        <td><?php echo $row['mname']; ?></td>
                        <!-- <td><?php //echo $row['subject']; ?></td> -->
                        <!-- <td><?php //echo  $row['marks'];  ?></td> -->
                        </tr>
                         <?php      
                         //$i=$i+1;       
                      }
                            // echo "<h3 class='text-center bg-dark color-white'>Total student added ".$i."</h3>";
                    }else
                    {
                             echo "Recored is not Save.";
                    }
                }
                        ?>
                       </tbody>
                      </table>
                     </div>
                     <?php
        //display data on table
             if (isset($_POST['submit']) && $srno!='') 
               { 
                
                 $srno= $_POST['srno']; 
                 $year=$_POST['year'];
                 $exam_id=$_POST['exam_id'];
                echo "<div class='table-responsive'>";
                echo "<table class='content-table'>";
                echo "<thead>";
                 echo "<tr>";
                 // echo  " <th>Exam Type</th>";
                echo  "<th >Subject</th>";
                echo  "<th>Max. Marks</th>";
                echo  "<th>Obtain Mraks</th>";
                /*echo  " <th>Science</th>";
                echo  " <th>S.Science</th>";
                echo  " <th>Sanskrit</th>";
                echo  " <th>Art</th>";
                echo  " <th>H.Scinece</th>";
                echo  " <th>Agriculture</th>";
                echo  " <th>Phy.Science</th>";
                echo  " <th>Enviroment</th>";
                echo  " <th>Total</th>";
               
                echo  "</tr>";*/

                //echo  "</thead>";
                echo  "<tbody>";

                 $sql="select  result.sub_1,result.sub_2,result.sub_3,result.sub_4,result.sub_5,result.sub_6,result.sub_7,result.sub_8,result.sub_9,result.sub_10,result.sub_11,result.sub_1+result.sub_2+result.sub_3+result.sub_4+result.sub_5+result.sub_6+result.sub_7+result.sub_8+result.sub_9+result.sub_10+result.sub_11 as total ,exam.exam_name FROM (result inner join exam on result.exam_id= exam.exam_id) where srno='$srno' AND result.exam_id = '$exam_id' ";
                 $query=mysqli_query($conn,$sql);
                 $num=mysqli_num_rows($query);
                if ($num>0)
                   { 
                     $i=0;
                     while ( $row = mysqli_fetch_array($query))
                      {?>

                        
                        <!-- <td><?php //echo $i+1; ?></td>  -->
                        <tr  ><td colspan='3' style='text-align: center;font-weight: bold;font-size: 20px;color:blue;'><?php echo $row['exam_name']; ?></td></tr>
                        <tr>  <td>Hindi</td><td> 50 </td><td><?php echo $row['sub_1']; ?></td>  </tr>
                         <tr> <td>English</td><td> 50 </td><td><?php echo $row['sub_2']; ?></td> </tr>
                        <tr>  <td>Maths</td><td> 50 </td><td><?php echo $row['sub_3']; ?></td> </tr> 
                        <tr>  <td>Science</td><td> 50 </td><td><?php echo $row['sub_4']; ?></td> </tr>
                        <tr> <td>So.Science</td><td> 50 </td><td><?php echo $row['sub_5']; ?></td> </tr>
                        <tr>  <td>Sanskrit</td><td> 50 </td><td><?php echo $row['sub_6']; ?></td> </tr>
                        <tr>  <td>Art</td><td> 50 </td><td><?php echo $row['sub_7']; ?></td> </tr>
                        <tr>  <td>Home Science</td><td> 50 </td><td><?php echo $row['sub_8']; ?></td> </tr>
                         <tr> <td>Agricuture</td><td> 50 </td><td><?php echo $row['sub_9']; ?></td> </tr>
                         <tr> <td>Phy.Science</td><td> 50 </td><td><?php echo $row['sub_10']; ?></td> </tr>
                        <tr>  <td>Enviroment</td><td> 50 </td><td><?php echo $row['sub_11']; ?></td> </tr>
                        <tr style='font-weight: bold;font-size: 15px;color:blue;'>  <td>Total</td><td> 550 </td><td><?php echo $row['total']; ?></td>
                        
                        </tr>

                         <?php      
                         $i=$i+1; 

                      }
                            // echo "<h3 class='text-center bg-dark color-white'>Total student added ".$i."</h3>";
                    }else
                    {
                             echo "Recored is not Save.";
                    }
                }
                        ?>

                       </tbody>
                      </table>
                     </div>
                     </fieldset>
        </form>
      </div>
    </div>
  </div>
</section>
 <script type="text/javascript">
    function myfun(datavalue)
    {
      $.ajax({
        url: 'resultupdate.php',
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
        url: 'resultupdate.php',
        type:'POST',
        data: { datapost : datavalue },
        success: function(result)
        {
          $('#srno').html(result);
        }
      })
    }
    function myfun2(datavalue)
    {
      $.ajax({
        url: 'resultupdate.php',
        type:'POST',
        data: { datapost : datavalue },
        success: function(result)
        {
          $('#name').html(result);
        }
      })
    }
  </script>
    <!-- JavaScript files-->
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <script src="../admin/dashboard/jquery/jquery.min.js"></script>
    <script src="../admin/dashboard/jquery/bootstrap.bundle.min.js"></script>
    <script src="../admin/dashboard/jquery/grasp_mobile_progress_circle-1.0.0.min.js"></script>
    <script src="../admin/dashboard/jquery/jquery.cookie.js"> </script>
    <script src="../admin/dashboard/jquery/Chart.min.js"></script>
    <script src="../admin/dashboard/jquery/jquery.validate.min.js"></script>
    <script src="../admin/dashboard/jquery/jquery.mCustomScrollbar.concat.min.js"></script>
    <!-- Main File-->
    <script src="../admin/dashboard/jquery/front.js"></script>
  </body>
</html>