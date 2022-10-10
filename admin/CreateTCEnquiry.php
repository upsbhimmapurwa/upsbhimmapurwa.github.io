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
<?php
extract($_POST);
         //ajax call for year
         echo $srno = $_POST['datapost'];
                
            $sql= "select * from student where srno='$srno'";
             $query=mysqli_query($conn,$sql);
              //echo $rows=mysqli_fetch_array($query);
            while($rows=mysqli_fetch_array($query))
            { ?>

            	<option value="<?php echo $rows['name']; ?>"><?php echo $rows['name'];?>   </option> 
            <?php
            }
         ?>


        <?php
          //ajax call for srno.
            include('include.php');
            
            $sql= "select * from student where srno='$srno'";
            $query=mysqli_query($conn,$sql);
             //echo $rows=mysqli_fetch_array($query);
           while($rows=mysqli_fetch_array($query))
           { ?>

               <option value="<?php echo $rows['fname']; ?>"><?php echo $rows['fname'];?>   </option> 
           <?php
           }
        


            $sql= "select * from student where srno='$srno' ";
             $query=mysqli_query($conn,$sql);
               //$rows=mysqli_fetch_array($query);
            while($rows=mysqli_fetch_array($query))
            { ?>

                <option value='<?php echo $rows['mname']; ?>'> <?php echo $rows['mname'];?> </option> 
            <?php
            }
 
             ?>
             <?php
          //ajax call for srno.
            include('include.php');
            
            $fname=$_POST['datapost'];
            
            $sql= "select * from student where fname='$fname' or mname='$fname' ";
             $query=mysqli_query($conn,$sql);
               //$rows=mysqli_fetch_array($query);
            while($rows=mysqli_fetch_array($query))
            { ?>

                <option value='<?php echo $rows['village']; ?>'> <?php echo $rows['village'];?> </option> 
            <?php
            }
 
             ?>


<?php 
 
  
  if(isset($_POST['submit']))
  {
    
 /* if (getimagesize($_FILES['photo']['tmp_name'])==false) 
  {
    echo "please select image";
  }
  else
  {
    
    $photoname= addslashes($_FILES['photo']['name']);
  
    $photo= base64_encode(file_get_contents(addslashes($_FILES['photo']['tmp_name'])));
    
  } */
    
  
  
      $srno=$_POST['srno'];
     // $fname=$_POST['fname'];
     // $mname=$_POST['mname'];
      $gname=$_POST['gname'];
      $faadhar=$_POST['faadhar'];
      $maadhar=$_POST['maadhar'];
      $gaadhar=$_POST['gaadhar'];
      $address=$_POST['address'];
      $mobileno=$_POST['mobileno'];
      $bname=$_POST['bname'];
      $branch=$_POST['branch'];
      $baddress=$_POST['baddress'];
      $ifsc=$_POST['ifsc'];
      $accountno=$_POST['accountno'];
      $occupation=$_POST['occupation'];
       
      
     
      $query= " INSERT INTO parents_details (srno,guardian_name,address,faadhar,maadhar,gaadhar,bank_name,bank_branch,bank_address,ifsc_code,account_number,mobileno,occupation) VALUES ('$srno','$gname','$address','$faadhar','$maadhar','$gaadhar','$bname','$branch','$baddress','$ifsc','$accountno','$mobileno','$occupation')";
      $run=mysqli_query($conn,$query);
      if($run)
      {
        echo " data insert sucessfully";
      }
      else
      {
        echo "there is some problem".mysqli_error($conn);
      }

  }
    
  
  if (isset($_POST['submit']) )
   { 
    $srno=$_POST['srno'];
    $sql=" select * from  parents_details where srno ='$srno'";
  $query=mysqli_query($conn,$sql);
    $num=mysqli_num_rows($query);
   
    $row=mysqli_fetch_array($query);
     /*$name=$row['photoname'];
    $img=$row['photo'];*/
    
  }
  
      //mymobileapi< P1DUnNJaGM7i5dQb40auMqAjL4Innmi8VJpOjePWa0sGosUcGRdVcqbEs08c>
    
?>
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
    <link rel="shortcut icon" href="https://d19m59y37dris4.cloudfront.net/dashboard/1-4-7/img/favicon.ico">
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
  <!-- date picker -->
     <link rel="stylesheet" type="text/css" href="css/tcal.css" />
  <link rel="stylesheet" type="text/css" media="screen" href="css/jquery-ui.css" />
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
  b
}
.content-table th,
.content-table td
{
  padding: 10px 5px;
   border:1px solid #009879;
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
          <div class="sidenav-header-inner text-center" style="text-transform: capitalize;"><img src="../images/teacher.jpg" alt="person" class="img-fluid rounded-circle">
            <h2 class="h5" ><?= $_SESSION['username'];?></h2><span><?= $_SESSION['role'];?></span>
          </div>
          <!-- Small Brand information, appears on minimized sidebar-->
          <div class="sidenav-header-logo"><a href="index.php" class="brand-small text-center"> <strong>M</strong><strong class="text-primary">V</strong></a></div>
        </div>
        <!-- Sidebar Navigation Menus-->
       
       
        <div class="main-menu">
          <h5 class="sidenav-heading">DASHBOARD</h5>
          <ul id="side-main-menu" class="side-menu list-unstyled">                  
            <li class="active"><a href=""> <i class="fas fa-home"></i>Home  </a></li>
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
              <div class="navbar-header"><a id="toggle-btn" href="#" class="menu-btn"><i class="fa fa-outdent" style="font-size:20px;color:red"> </i></a><a href="index.html" class="navbar-brand">
                  <div class="brand-text d-none d-md-inline-block"><strong class="text-success">U.P.S. BHIMMAPURWA</strong> <span>Aminabad Katri, Kannauj</span></div></a></div>
              <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                <!-- Log out-->
                <li class="nav-item"><a href="logout.php" class="nav-link logout" style="font-size:15px;color:red"> <span class="d-none d-sm-inline-block">Logout</span><i  class='fas fa-sign-out-alt' ></i></a></li>
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
            <li class="breadcrumb-item active">Show Parent Data  </li>
          </ul>
        </div>
      </div>
      <div align="right"><a href="../admin/tcpdf/newstudentparentdatapdf.php?id=<?php echo $_POST['srno']; ?>" class="btn btn-primary" style="text-decoration: none;">Download Admission Form</a></div>
      <!-- Counts Section -->
      <section class="dashboard-counts">
        <div class="container-fluid">
          <div class="row">       
            <form name='admission' class="zoom-anim-dialog mfp-hide white-popup-block mfp-hide form-horizontal" action="" method=""  enctype="multipart/form-data">            
          <h4 style="background:#1ea0ba;color:#fff; padding:10px 0px 10px 5px">Parents Information</h4>
    
         <table class='content-table' >
          
          <thead >          
          <tr>
            <th>S.R. No.</th><th>Guardian Name</th><th>Address</th><th>Father Aadhar</th><th>Mother Aadhar</th><th>Guardian Aadhar</th><th>Bank Name</th><th>Branch</th><th>Bank Address</th><th>IFSC Code</th><th>Account No.</th><th>Mobile No.</th>
          </tr>
        </thead>
        <tr><td><?php echo $row['srno']; ?></td>
    
            <td><?php echo $row['guardian_name']; ?></td>
          
            <td><?php echo $row['address']; ?></td>
          
            <td><?php echo $row['faadhar']; ?></td>
          
            <td><?php echo $row['maadhar']; ?></td>
          
            <td><?php echo $row['gaadhar']; ?></td>
              
            <td><?php echo $row['bank_name'];?></td>
            <td><?php echo $row['bank_branch']; ?></td>
          
            <td><?php echo $row['bank_address'];?></td>
          
            <td><?php echo $row['ifsc_code']?></td>
         
            <td><?php echo $row['account_number'];?></td>
          
            <td><?php echo $row['mobileno']?></td>
          
            
          </tr>
         </table>
        </form>
      </div>
    </div>

     </section>
     <DIV style=" align:center;"><a href="addparent.php"> Add New Parent Details</a>
     </DIV>
  </div>
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