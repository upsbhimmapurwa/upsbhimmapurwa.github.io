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
    <title>उच्च प्राथमिक विद्यालय भिम्मापुरवा</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">
     <meta name="keywords" content=" U.P.S.Bhimmapurwa " />
    
    <link rel="icon" href="../admin/images/ban_32x32.jpg" sizes="32x32" />
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
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
   <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">
        <style>
          .w3-tangerine {
  font-family: "Tangerine", serif;
}
.card{
    width: 270px;
    height: 350px;
    background-color: rgb(241, 245, 247);
    border-radius: 5px;
    position: relative;
    box-shadow: 0 3px 10px -2px rgba(red, green, blue, alpha);
    left: 10px;
    right: 10px;
}
.card::before, .card::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0%;
    right: 0%;
    background-color: #fff;
    z-index: -1;
    transition: 0.2s;
}
.card:hover::before{
    transform: rotate(-20deg);
    box-shadow: rgba(213, 213, 219, 0.25) 0px 50px 50px -40px, rgba(156,154 ,154,0.3) 0px 30px 40px -30px,rgba(74,128 ,182,0.35 ) 0px -2px 6px 0px inset,;
}
.card:hover::after{
    transform: rotate(20deg);
    box-shadow: rgba(213, 213, 219, 0.25) 0px 50px 50px -40px, rgba(156,154 ,154,0.3) 0px 30px 40px -30px,rgba(74,128 ,182,0.35 ) 0px -2px 6px 0px inset,;

}
.img-container{
    position: absolute;
    top: 10px;
    bottom: 10px;
    right: 10px;
    left: 10px;
    background-color: silver;
    z-index: 3;
    
}
.card:hover .img-container{
    bottom: 80px;
}
img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

}
.details{
    position: absolute;
    bottom: 10px;
    right: 10px;
    left: 10px;
    text-align: center;
    height: 50px;
}
p{
    height: 90px;
    
}


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
            <li class="active"><a href="dashboard.php"> <i class="fas fa-home"></i>Home  </a></li>
            <li  ><a href="teacher.php"> <i class="fa fa-chalkboard-teacher"></i>Teacher   </a></li>
            <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class=" fas fa-user-tie"></i>Add Student Data</a>
              <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
                <li><a href="newstudent.php">Add Student Data</a></li>
                <li><a href="addparent.php">Add Parents Data</a></li>                
              </ul>
            </li>
            <li><a href="updateclass.php"><i class='fas fa-search'></i>Student Class Update</a></li>
            <li><a href="SearchStudentDetail.php"><i class='fas fa-search'></i>Student/Parent Details</a></li>
            <li><a href="trancferstudent.php"><i class='fas fa-search'></i>T.C. issue</a></li>
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
      <!-- Counts Section -->
      <section class="dashboard-counts section-padding">
        <div class="container-fluid">
          <div class="row">
            <!-- Count item widget-->
            <div class="col-xl-2 col-md-4 col-6">
              <div class="wrapper count-title d-flex">
                <div class="icon"><i class="  fas fa-user-tie"></i></div>
                <div class="name"><strong class="text-uppercase">New  Student  </strong><span> Current Year</span>
                <span> <?php echo $currentyear= date("Y");?></span>
                  <div class="count-number"><?php 
                  $currentyear= date("Y");
                  $sql="select year from student where year ='$currentyear'";
                  $query=mysqli_query($conn,$sql);
                  $num=mysqli_num_rows($query);
                  echo $num;
                  ?></div>
                </div>
              </div>
            </div>
            <!-- Count item widget-->
            <div class="col-xl-2 col-md-4 col-6">
              <div class="wrapper count-title d-flex">
                <div class="icon"><i class="  far fa-clipboard"></i></div>
                <div class="name"><strong class="text-uppercase">Working Teachers</strong><span>Total</span>
                 <span> <?php echo $currentyear= date("Y");?></span>
                  <div class="count-number"><?php 
                  $currentyear= date("Y");
                  $sql="select * from staff ";
                  $query=mysqli_query($conn,$sql);
                  $num=mysqli_num_rows($query);
                  echo $num;
                  ?></div>
                </div>
              </div>
            </div>
            <!-- Count item widget-->
            <div class="col-xl-2 col-md-4 col-6">
              <div class="wrapper count-title d-flex">
                <div class="icon"><i class="  fas fa-book-reader"></i></div>
                <div class="name"><strong class="text-uppercase">Total Students</strong><span>Current Year</span>
                <span> <?php echo $currentyear= date("Y");?></span>
                  <div class="count-number"><?php 
                  $currentyear= date("Y");
                  $sql="select year from session where year ='$currentyear'";
                  $query=mysqli_query($conn,$sql);
                  $num=mysqli_num_rows($query);
                  echo $num;
                  ?></div>
                </div>
              </div>
            </div>
            <!-- Count item widget-->
            <div class="col-xl-2 col-md-4 col-6">
              <div class="wrapper count-title d-flex">
                <div class="icon"><i class="fas fa-print"></i></div>
                <div class="name"><strong class="text-uppercase">Pass Out Studenst</strong><span>Last Year</span>
                <span> <?php echo $currentyear= date("Y")-1;?></span>
                  <div class="count-number"><?php 
                  $currentyear= date("Y")-1;
                  $sql="select year from session where year ='$currentyear' and class= '8'";
                  $query=mysqli_query($conn,$sql);
                  $num=mysqli_num_rows($query);
                  echo $num;
                  ?></div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-md-4 col-6">
              <div class="wrapper count-title d-flex">
                <div class="icon"><i class="fas fa-book-reader"></i></div>
                <div class="name"><strong class="text-uppercase">Total Student Inrolled</strong>
                <span> Till <?php echo $currentyear= date("Y");?></span>
                  <div class="count-number"><?php 
                  $currentyear= date("Y");
                  $sql="select * from student ";
                  $query=mysqli_query($conn,$sql);
                  $num=mysqli_num_rows($query);
                  echo $num;
                  ?></div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
      <!-- Header Section-->
      <section class="dashboard-header section-padding">
        <div class="container-fluid">
          <div class="row d-flex align-items-md-stretch">
            <!-- To Do List-->
            <div class="col-lg-3 col-md-5">
              <div class="card to-do">
                <h2 class="display h4" >To do List</h2>
                <p>According to the schooling rules</p>
                <ul class="check-lists list-unstyled">
                  <li class="d-flex align-items-center"> 
                    <input type="checkbox" id="list-1" name="list-1" class="form-control-custom" checked>
                    <label for="list-1">Increasing the number of student in school.</label>
                  </li>
                  <li class="d-flex align-items-center"> 
                    <input type="checkbox" id="list-2" name="list-2" class="form-control-custom" checked>
                    <label for="list-2">Quality study in whole year</label>
                  </li>
                  <li class="d-flex align-items-center"> 
                    <input type="checkbox" id="list-3" name="list-3" class="form-control-custom" checked>
                    <label for="list-3">Well Educated Teacher's effort</label>
                  </li>
                  <li class="d-flex align-items-center"> 
                    <input type="checkbox" id="list-4" name="list-4" class="form-control-custom" checked>
                    <label for="list-4">Well maneged by Principal.</label>
                  </li>
                  <li class="d-flex align-items-center"> 
                    <input type="checkbox" id="list-5" name="list-5" class="form-control-custom" checked>
                    <label for="list-5">Study with play developing place.</label>
                  </li>
                  <li class="d-flex align-items-center"> 
                    <input type="checkbox" id="list-6" name="list-6" class="form-control-custom" checked>
                    <label for="list-6">Sport for the pyshical development of students.</label>
                  </li>
                  
                </ul>
              </div>
            </div>
            <!--Principal-->
            <div class="col-lg-3 col-sm-6 ">
            <div class="card" style="display: flex;justify-content: center;align-items: center;">
               <div class="img-container"><img src="../images/teacher.jpg" alt=""></div>
               <div class="details" >
                     <h2 class="display h4">Mukesh Verma</h2>
                   <h2 class="w3-tangerine" style="font-weight: bold; font-size: 24px;" >
                     Head Teacher  </h2>
                </div>
            </div>
            </div>
            <!-- Assistant Teacher -->
            <div class="col-lg-3 col-sm-6">
            <div class="card" style="display: flex;justify-content: center;align-items: center;">
               <div class="img-container"><img src="../images/teacher.jpg" alt=""></div>
               <div class="details" >
                     <h2 class="display h4">Mukesh Verma</h2>
                   <h2 class="w3-tangerine" style="font-weight: bold; font-size: 24px;" >
                     Assistant Teacher  </h2>
                </div>
            </div>
            </div>
         <div class="col-lg-3 col-sm-6">
          <div class="card" style="display: flex;justify-content: center;align-items: center;">
               <div class="img-container"><img src="../images/teacher.jpg" alt=""></div>
               <div class="details" >
                     <h2 class="display h4">Mukesh Verma</h2>
                   <h2 class="w3-tangerine" style="font-weight: bold; font-size: 24px;" >
                   Assistant Teacher  </h2>
                </div>
            </div>

            </div>
          </div>
        </div>
      </section>
          <footer class="main-footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <p>U.P.S.BHIMMAPURWA &copy; 2018-2020</p>
            </div>
            <div class="col-sm-6 text-right">
              <p>Design by <a href="" class="external">Tr. Mukesh Verma</a></p>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
    <!-- JavaScript files-->


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