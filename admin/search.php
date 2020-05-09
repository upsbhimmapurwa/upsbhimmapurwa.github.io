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

 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap-4/4.4.1/css/bootstrap.min.css">
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
          <div class="sidenav-header-inner text-center" style="text-transform: capitalize;"><img src="../images/head1.jpg" alt="person" class="img-fluid rounded-circle">
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
            <li  ><a href="newstudent.php"> <i class="fas fa-user-tie"></i>New Student  </a></li>
            <li><a href="class.php"> <i class="fas fa-book-reader"></i>Class  </a></li>
            <li ><a href="year.php"> <i class=" far fa-calendar-alt"></i>Year    </a></li>
            <li><a href="register.php"> <i class="fas fa-font"></i>Register Admin </a></li>
            <li><a href="subject.php"> <i class="fas fa-paste"></i>Subject </a></li>
            <li><a href="exam.php"> <i class="  fas fa-print"></i>Examination </a></li>
            <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class=" fas fa-file-alt"></i>Student Result</a>
              <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
                <li><a href="result.php">Add Result</a></li>
                <li><a href="showresult.php">Show Result</a></li>
                
              </ul>
            </li>
            <li class="active"><a href="search.php"> <i class='fas fa-search'></i>Search Data </a></li>
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
              <div class="navbar-header"><a id="toggle-btn" href="#" class="menu-btn"><i class="fa fa-outdent" style="font-size:20px;color:red"> </i></a><a href="dashboard.php" class="navbar-brand">
                  <div class="brand-text d-none d-md-inline-block"><strong class="text-success">U.P.S. BHIMMAPURWA</strong> <span>Aminabad Katri, Kannauj</span></div></a></div>
              <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                <!-- Log out-->
                <li class="nav-item"><a href="logout.php" class="nav-link logout" style="font-size:15px;color:red"> <span class="d-none d-sm-inline-block">Logout</span><i class='fas fa-sign-out-alt' ></i></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <!-- Breadcrumb-->
      <div class="breadcrumb-holder">
        <div class="container-fluid">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.php">Home</a></li>
            <li class="breadcrumb-item active">Search   </li>
          </ul>
        </div>
      </div>
 <section>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2" >
        <div class="modal-body my-3 pt-4">
                 <h4 style="background:#1ea0ba;color:#fff;text-align: center; padding:10px 0px 10px 5px">Search Student Data</h4>
                <form action="search.php" method="post">
                    <div class="form-group">
                        <label class="col-form-label">S.R.No.</label>
                        <input type="text" class="form-control" placeholder="" name="srno" >
                    </div>
                    <div class="form-group">
                        <label class="col-form-label">Name</label>
                        <input type="text" class="form-control" placeholder="" name="name" >
                    </div>
                     <div class="form-group">
                        <label class="col-form-label">Father Name</label>
                        <input type="text" class="form-control" placeholder="" name="fname" >
                    </div>
                    <div class="form-group">
                        <label class="col-form-label">Gender</label>
                        <input type="text" class="form-control" placeholder="" name="gender" >
                    </div>
                    <div class="form-group">
                        <label class="col-form-label">Year</label>
                        <input type="text" class="form-control" placeholder="" name="year" >
                    </div>
                    <div class="form-group">
                        <label class="col-form-label">Class</label>
                        <input type="text" class="form-control" placeholder="" name="class" >
                    </div>
                    <button type="submit" name="submit" class="btn btn-primary">Search</button>
                    <div class="row sub-w3l mt-3 mb-5">
                        
                    </div>
                    
                </form>
            </div>

   </div>
   <div class="col-sm-10" > 
             <?php
if (isset($_POST['submit'])) 
{
 
     echo "<div class='table-responsive'>";
   echo "<table class='content-table'>";
         echo "<thead>";
         echo  "<tr>";
              echo  "  <th>S.R.No.</th>";
              echo  " <th>Photo</th>";
              echo  "  <th>Name</th>";
             //  echo  "  <th>Roll No.</th>";
               echo  " <th>Date of Birth</th>";
               echo  " <th>Father Name</th>";
              echo  "  <th>Mother Name</th>";
              echo  "  <th>Gender</th>";
              echo  "  <th>Village</th>";
               echo  "  <th>Age</th> ";
              echo  "  <th>Class</th>";
               echo  "  <th>Aadhar No.</th> ";
               echo  " <th>Caste</th>    ";
               
               echo  " <th>Mobile No.</th>";
               echo  " <!--<th>Admited Person</th>";
               echo  " <th>Admited Date</th>-->";
               echo  " <th>Year</th>";
               //echo  " <th>Photo</th>";
            
                        
          echo  "</tr>";
        echo "</thead>";
        echo " <tbody>";

        $sr = $_POST['srno'];
      $name = $_POST['name'];
      $fname = $_POST['fname'];
      $gender = $_POST['gender'];
      $class = $_POST['class'];
      $year = $_POST['year'];

      if ($sr != "" || $name != "" || $fname != "" || $gender != "" || $class != "" || $year != "" ) 
     {
      
      $sql= "SELECT * FROM  student WHERE srno = '$sr' or name='$name' or gender='$gender' or fname='$fname' or class='$class' or year ='$year'";

          $query = mysqli_query($conn,$sql) or die('error');
          $num =mysqli_num_rows($query);

        if ($num>0)
         { 
            $i=0;
               while ( $row = mysqli_fetch_array($query))
                   {?>
                    <tr><?php $sr=$row['srno'];?>
                        <td><a href="UpdateEnquiry.php?id=<?php echo $sr ?>"><?php echo $row['srno']; ?></a></td>
                        <td><?php echo  '<img src="data:image;base64,'. $row['photo'].'"  width="50px" height="60px" float="left">';  ?></td>
                        <td><a ><?php echo $row['name']; ?></td>
                          <!--  <td><?php //echo $row['rollno']; ?></td> -->
                        <td><?php echo $row['dob']; ?></td>
                        <td><?php echo $row['fname']; ?></td>
                        <td><?php echo $row['mname']; ?></td>
                        <td><?php echo $row['gender']; ?></td>
                        <td><?php echo $row['village']; ?></td>
                        <td><?php echo $row['age']; ?></td> 
                        <td><?php echo $row['class']; ?></td>
                        <td><?php  echo $row['aadhar']; ?></td> 
                        <td><?php echo $row['caste']; ?></td>
                       <!-- <td><?php //echo $row['scaste']; ?></td> -->
                        <td><?php echo $row['mobile']; ?></td>
                        <!--<td><?php //echo $row['aperson']; ?></td>
                        <td><?php //echo $row['adate']; ?></td>-->
                        <td><?php echo $row['year']; ?></td>
                        
                    </tr>
                    
               <?php       $i=$i+1;       
                    }
                             echo "Total student is ".$i;

         }
        else
          {
                             echo "Recored is not Save.";
          }
    
       }
                
}

        ?>
    </tbody>
    </table>
                     </div>
        </form>
      </div>
    </div>
  </div>
</section>

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