<?php
session_start();
include('admin/include.php');
$msg="";
if(isset($_POST['submit'])){
  $username=$_POST['uname'];
   $password=$_POST['psw'];
   $usertype=$_POST['usertype'];
    $query="select * from admin where admin_name=? and password=? and usertype=?";
    $stmt=$conn->prepare($query);
    $stmt->bind_param("sss",$username,$password,$usertype);
    $stmt->execute();
    $result=$stmt->get_result();
    $rows=$result->fetch_assoc();
   /* $run=mysqli_query($conn,$query);
      $num = mysqli_num_rows($run);
      $row=mysqli_fetch_array($run);
   */    session_regenerate_id();
      echo $_SESSION['username']=$rows['admin_name'];
      echo $_SESSION['role']=$rows['usertype'];
      session_write_close();
      
      if ($result->num_rows==1 && $_SESSION['role']=="student")
       {
               header('location:admin/studentdashboard.php');
              
       }
       else if($result->num_rows==1  && $_SESSION['role']=="teacher")    
       {
        header('location:admin/teacherdashboard.php');
       }elseif ($result->num_rows==1 && $_SESSION['role']=="admin") {
          header('location:admin/dashboard.php');
       }else{
         $msg="Username or Password is Incorrect!";
       }
}

?>
<!DOCTYPE HTML>
<html lang="zxx">

<head>
<title>उच्च प्राथमिक विद्यालय भिम्मापुरवा</title>
    <!-- Meta tag Keywords -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8" />
    <meta name="keywords" content="उच्च प्राथमिक विद्यालय भिम्मापुरवा " />
    <link rel="icon" href="images/ban_32x32.jpg" sizes="32x32" />
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
                <!-- logo -->
                <img src="images/ups logo.png" alt="about" width="105px" height="65px" />
                <div id="logo">
                <h1><a href="index.html" rel="" class="text-wh font-weight-bold">उच्च प्राथमिक विद्यालय भिम्मापुरवा,अमीनाबाद कटारी,  जिला कन्नौज</a>
<!-- <a href="index.html">U.P.S.Bhimmapurwa</a> --></h1>
                </div>
    </div>
                <!-- //logo -->
                <!-- nav -->
                <div class="header d-md-flex justify-content-between align-items-center py-1 px-lg-2 px-1" style="font-family: fantasy;" >
                <div class="nav_w3ls ml-lg-5">
                <nav>
                        <label for="drop" class="toggle">Menu</label>
                        <input type="checkbox" id="drop" />
                        <ul class="menu" >
                            <li><a href="index.html" ><i class='fas fa-house-user' style='font-size:20px;color:red;'></i>होम </a></li>
                            <li><a href="admin/index.php"><i class='fas fa-sign-in-alt' style='font-size:20px;color:red'></i>लॉग इन करें</a></li>
                            <li><a href="index.html"><i class='fas fa-edit' style='font-size:20px;color:red'></i>पंजीकृत </a></li>
                        </ul>
                        
                    </nav>

                </div>
                <!-- //nav -->
            </div>
        </div>
    </header>
    <!-- //header -->

    <!-- inner banner -->
    <div class="inner-banner-w3ls py-5" id="home"style="background-image: url(../admin/images/ban_1.jpg);">
        <div class="container py-xl-5 py-lg-3">
            <!-- login  -->
            <div class="modal-body my-5 pt-4"style="background-color: #B6C8C6 " >
                <h3 class="title-w3 mb-5 text-center text-wh font-weight-bold" style="font-size: 35px;color:red;">Login Now</h3><hr style="color:white;">
                <form action="<?php $_SERVER["PHP_SELF"] ?>" method="post" class="p-4">
                    <div class="form-group">
                        <!-- <label class="col-form-label">USER NAME</label> -->
                        <input type="text" class="form-control"  placeholder="Enter Username" name="uname" required>
                    </div>
                    <hr style="color:white;">
                    <div class="form-group">
                       <!--  <label class="col-form-label">PASSWORD</label> -->
                        <input type="password" class="form-control" placeholder="Enter Password" name="psw" required>
                    </div>
                    <hr style="color:white;">
                    <div class="form-group lead">
                        <label for="usertype">I am a:</label>
                        <input type="radio" class="Custom-radio" value="student" name="usertype" required>&nbsp;Student |
                        <input type="radio" class="Custom-radio" value="teacher" name="usertype" required>&nbsp;Teacher |
                        <input type="radio" class="Custom-radio" value="admin" name="usertype" required>&nbsp;Admin
                        
                    </div>
                    
                    <button type="submit" name="submit" class="btn button-style-w3">Login</button>
                    <h5 class="text-danger text-center"><?= $msg; ?></h5>
                    <div class="row sub-w3l mt-3 mb-5">
                        <div class="col-sm-6 sub-w3layouts_hub">
                            <input type="checkbox" id="brand1" value="">
                            <label for="brand1" class="text-li text-style-w3ls">
                                <span></span>Remember me?</label>
                        </div>
                        <div class="col-sm-6 forgot-w3l text-sm-right">
                            <a href="#" class="text-li text-style-w3ls">Forgot Password?</a>
                        </div>
                    </div>
                    <p class="text-center dont-do text-style-w3ls text-li">Don't have an account?
                        <a href="index.html" class="font-weight-bold text-li">
                            Register Now</a>
                    </p>
                </form>
            </div>
            <!-- //login -->
        </div>
    </div>
    <!-- //inner banner -->

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
