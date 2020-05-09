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
<!--
Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<!DOCTYPE HTML>
<html lang="zxx">

<head>
    <title>U.P.S.Bhimmapurwa School</title>
    <!-- Meta tag Keywords -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8" />
    <meta name="keywords" content=" web design" />
    <script>
        addEventListener("load", function () {
      setTimeout(hideURLbar, 0);
    }, false);

    function hideURLbar() {
      window.scrollTo(0, 1);
    }
  </script>
    <!-- //Meta tag Keywords -->

    <!-- Custom-Files -->
    <link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
    <!-- Bootstrap-CSS -->
    <link href="css/style.css" rel='stylesheet' type='text/css' />
    <!-- Style-CSS -->
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <!-- Font-Awesome-Icons-CSS -->
    <!-- //Custom-Files -->

    <!-- Web-Fonts -->
    <link href="//fonts.googleapis.com/css?family=Lora:400,400i,700,700i&amp;subset=cyrillic,cyrillic-ext,latin-ext,vietnamese"
        rel="stylesheet">
    <link href="//fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&amp;subset=latin-ext" rel="stylesheet">
    <!-- //Web-Fonts -->
</head>

<body>
    <!-- header -->
    <header>
        <div class="container">
            <div class="header d-lg-flex justify-content-between align-items-center py-2 px-sm-2 px-1">
                <!-- logo --><img style="width:105px; height:65px; border-radius:5px 5px 5px 5px; border:2px solid #009879; " src="images/ups logo.png">
                <div id="logo">
                   <h1><a href="index.html">U.P.S.Bhimmapurwa</a></h1>

                </div>
                <!-- //logo -->
                <!-- nav -->
                <div class="nav_w3ls ml-lg-5">
                    <nav>
                  <label for="drop" class="toggle">Menu</label>
                        <input type="checkbox" id="drop" />
                        <ul class="menu">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="update.html">Update</a></li>
                            <li><a href="search.php">Search</a></li>
                            <li>
                                <!-- First Tier Drop Down -->
                                <label for="drop-2" class="toggle toogle-2">Pages <span class="fa fa-angle-down"
                                        aria-hidden="true"></span>
                                </label>
                                <a href="#">Pages <span class="fa fa-angle-down" aria-hidden="true"></span></a>
                                <input type="checkbox" id="drop-2" />
                                <ul>
                                    <li><a href="newstudent.php">New Student</a></li>
                                    <li><a href="newstuff.php">New Staff</a></li>
                                     <li><a href="register.php">Admin Register</a></li>
                                </ul>
                            </li>
                               <!-- First Tier Drop Down -->                            
                        </ul>
                    
                    </nav>
                </div>
                <!-- //nav -->
               <div class="rightmenu">
                     <div class="name"><?php echo"Welcome ".$name; ?>     <a style="color: red;" href="logout.php">Logout</a></div>
               </div>
        </div>
    </header>
 <!-- //header -->
 <style>
 
  .rightmenu{

    width: auto;
    float: right;
    line-height: 10px;


  }
  .rightmenu ul li a:hover{
    color: red;

  }
 
 .name
    {
      font-family: sans-serif;
      font-size: 16px;
      font-weight: bold;
      text-transform:uppercase;
      line-height: 25px;
      color: blue;
    }
</style>
    <!-- inner banner -->
    <div class="inner-banner-w3ls py-5" id="home">
        <div class="container py-xl-5 py-lg-3">
            <!-- login  -->
            <div class="modal-body my-5 pt-4">
                <h3 class="title-w3 mb-5 text-center text-wh font-weight-bold">Search Studant Data</h3>
                <form action="UpdateEnquiry.php" method="post">
                    <div class="form-group">
                        <label class="col-form-label">S.R.No.</label>
                        <input type="text" class="form-control" placeholder="" name="srno" >
                    </div>
                    <div class="form-group">
                        <label class="col-form-label">Name</label>
                        <input type="password" class="form-control" placeholder="" name="name" >
                    </div>
                     <div class="form-group">
                        <label class="col-form-label">Father Name</label>
                        <input type="text" class="form-control" placeholder="" name="fname" >
                    </div>
                    
                    <button type="submit" name="submit" class="btn button-style-w3">Search</button>
                    <div class="row sub-w3l mt-3 mb-5">
                        
                    </div>
                    
                </form>
            </div>
            <!-- //login -->
        </div>
    </div>
    <!-- //inner banner -->

    <!-- footer -->
   <!-- footer -->
    <footer class="py-5">
        <div class="container py-xl-4 py-lg-3">
            <div class="row footer-grids">
                <div class="col-lg-2 col-6 footer-grid">
                    <h3 class="mb-sm-4 mb-3">Navigation</h3>
                    <ul class="list-unstyled">
                        <li>
                            <a href="index.html">Index</a>
                        </li>
                        <li>
                            <a href="#about">About Us</a>
                        </li>
                        <li>
                            <a href="#what">What We Do?</a>
                        </li>
                        <li>
                            <a href="#gallery">Our Gallery</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-6 footer-grid">
                    <h3 class="mb-sm-4 mb-3">Some More</h3>
                    <ul class="list-unstyled">
                        <li>
                            <a href="#join">Apply Now</a>
                        </li>
                        <li>
                            <a href="#events">Our Events</a>
                        </li>
                        <li>
                            <a href="#courses">Popular Courses</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-6 footer-grid footer-contact mt-lg-0 mt-4">
                    <h3 class="mb-sm-4 mb-3">Get In Touch</h3>
                    <ul class="list-unstyled">
                        <li>
                            +91 8299774759
                        </li>
                        <li>
                            <a href="mailto:mukeshverma0817@gmail.com">mukeshverma0817@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-6 footer-grid text-lg-right">
                    <ul class="list-unstyled">
                        <li>
                            <a href="#stats">Our Statistics</a>
                        </li>
                        <li>
                            <a href="login.html">Login</a>
                        </li>
                        <li>
                            <a href="index.html">Register</a>
                        </li>
                        <li>
                            <a href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-4 footer-grid mt-lg-0 mt-4">
                    <div class="footer-logo">
                        <h2 class="text-lg-center text-center">
                            <a class="logo text-wh font-weight-bold" href="index.html">
                                U.P.S.Bhimmapurwa School</a>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- //footer -->
    <!-- copyright -->
    <div class="copyright-w3ls py-4">
        <div class="container">
            <div class="row">
                <!-- copyright -->
                <p class="col-lg-8 copy-right-grids text-wh text-lg-left text-center mt-lg-2">© 2020 U.P.S.Bhimapurwa School. All
                    Rights Reserved | Design by
                    <a href="https:#" target="_blank">Tr.Mukesh </a>
                </p>
                <!-- //copyright -->
                <!-- social icons -->
                <div class="col-lg-4 w3social-icons text-lg-right text-center mt-lg-0 mt-3">
                    <ul>
                        <li>
                            <a href="#" class="rounded-circle">
                                <span class="fa fa-facebook-f"></span>
                            </a>
                        </li>
                        <li class="px-2">
                            <a href="#" class="rounded-circle">
                                <span class="fa fa-google-plus"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="rounded-circle">
                                <span class="fa fa-twitter"></span>
                            </a>
                        </li>
                        <li class="pl-2">
                            <a href="#" class="rounded-circle">
                                <span class="fa fa-dribbble"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- //social icons -->
            </div>
        </div>
    </div>
    <!-- //copyright -->
    <!-- move top icon -->
    <a href="#home" class="move-top text-center">
        <span class="fa fa-angle-double-up" aria-hidden="true"></span>
    </a>
    <!-- //move top icon -->

</body>

</html>