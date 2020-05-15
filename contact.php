<?php

include ('include.php');
 

  
  if(isset($_POST['submit']))
  {  
    $name=$_POST['name'];
    $email=$_POST['email'];
   $msg=$_POST['msg'];  
    $subject=$_POST['subject'];  
   
   $query= " INSERT INTO contact (name, email, subject, massage) VALUES ('$name','$email','$subject','$msg')";
      $run=mysqli_query($conn,$query);
      if($run)
      {
        //echo " We will contact you soon....";
      }
      else
      {
        echo "there is some problem".mysqli_error($conn);
      }

  }
    
  
  
  
     
?>

<!DOCTYPE HTML>
<html class="html" lang="en-US">
<head>
    <meta charset="UTF-8">

    <title>उच्च प्राथमिक विद्यालय भिम्मापुरवा</title>
    <!-- Meta tag Keywords -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8" />
    <meta name="keywords" content="उच्च प्राथमिक विद्यालय भिम्मापुरवा " />
    <link rel="icon" href="../web/images/ban_32x32.jpg" sizes="32x32" />
    <script>
        addEventListener("load", function () {
			setTimeout(hideURLbar, 0);
		}, false);

		function hideURLbar() {
			window.scrollTo(0, 1);
		}
	</script>
    <!-- //Meta tag Keywords -->
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <!-- Custom-Files -->
    <link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
    <!-- Bootstrap-CSS -->
    <link href="css/style.css" rel='stylesheet' type='text/css' />
    <!-- Style-CSS -->
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Font-Awesome-Icons-CSS -->
    <!-- //Custom-Files -->
     
    <!-- Web-Fonts -->
    <link href="//fonts.googleapis.com/css?family=Lora:400,400i,700,700i&amp;subset=cyrillic,cyrillic-ext,latin-ext,vietnamese"
        rel="stylesheet">
    <link href="//fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&amp;subset=latin-ext" rel="stylesheet">
    <!-- //Web-Fonts -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    
</head>

<body >      
    <!-- header -->
    <header style="display:none;" id="myDiv" >
        <div class="container" >
            <div class="header d-md-flex justify-content-between align-items-center py-3 px-lg-1 px-2" >
                <!-- logo --><!-- <img src="images/ups logo.png" alt="about" width="105px" height="65px" /> -->
                <div id="logo">

                    <h1><a href="index.html" rel="" class="text-wh font-weight-bold" >उच्च प्राथमिक विद्यालय भिम्मापुरवा,अमीनाबाद कटारी,  जिला कन्नौज</a>
<!-- <a href="index.html">U.P.S.Bhimmapurwa</a> --></h1>
                </div>
            </div>
                <!-- //logo -->
                <!-- nav -->
                <div class="header d-md-flex justify-content-between align-items-center py-1 px-lg-2 px-1" style="font-family: fantasy;" >
                <div class="nav_w3ls ml-lg-5">
                    <nav>
                        <label for="drop" class="toggle" style="font-style: normal;">Menu</label>
                        <input type="checkbox" id="drop" />
                        <ul class="menu" >
                            <li><a href="index.html" ><i class='fas fa-house-user' style='font-size:20px;color:red;'></i>होम </a></li>
                            <li><a href="#about"><i class='fas fa-address-book' style='font-size:20px;color:red'></i>हमारे बारे में </a></li>
                            <li><a href="#join"><i class='fas fa-universal-access' style='font-size:20px;color:red'></i>सम्मलित हो </a></li>
                            <li>
                                <!-- First Tier Drop Down -->
                                <label for="drop-2" class="toggle toogle-2">पेज <span class="fa fa-angle-down"
                                        aria-hidden="true"></span>
                                </label>
                                <a href="#"><i class='fas fa-file-alt' style='font-size:20px;color:red'></i>पेज <span class="fas fa-angle-down" aria-hidden="true"></span></a>
                                <input type="checkbox" id="drop-2" />
                                <ul style="text-align:justify;">
                                    <li><a href="#events" class="drop-text"  >कार्यक्रम </a></li>
                                    <li><a href="#what" class="drop-text">जो हमने किया ।</a></li>
                                    <li><a href="#courses" class="drop-text">प्रसिद्ध पाठ्यक्रम </a></li>
                                    <li><a href="#stats" class="drop-text">आँकड़े </a></li>
                                    <li><a href="#gallery" class="drop-text">गैलरी </a></li>
                                </ul>
                            </li>
                            <li><a href="#contact"><i class='fas fa-phone-alt' style='font-size:20px;color:red'></i>सम्पर्क करे</a></li>
                            <li><a href="../web/admin/"><i class='fas fa-sign-in-alt' style='font-size:20px;color:red'></i>लॉग इन करें</a></li>
                            <li><a href="index.html"><i class='fas fa-edit' style='font-size:20px;color:red'></i>पंजीकृत </a></li>
                            <li><a href="gallery.html" ><i class='far fa-grin-alt' style='font-size:20px;color:red'></i>गैलरी </a></li>
                        </ul>
                        
                    </nav>

                </div>
                
                <!-- //nav -->
            </div>
            
        </div>
        <div>
            
    </header>

    
    <!-- //header -->

    <!-- banner -->
    <div class="main-w3pvt mian-content-wthree text-center pt-4" id="home">
        <div class="container  ">
            
       <h1 style="color:red; background-color:yellow; align:center; ">
         We will contact you soon..!
       </h1>
       <h2 style="color:blue; background-color:yellowgreen;" ><a href="index.html"> To go Back. Click Here.</a></h2>
        </div>
        
    </div>
   
</body>

</html>