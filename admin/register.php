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
    <link rel="shortcut icon"  href="../admin/images/ban_32x32.jpg" sizes="32x32" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
  
    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
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
            <li ><a href="dashboard.php"> <i class="fas fa-home"></i>Home  </a></li>
            <li  ><a href="teacher.php"> <i class="fa fa-chalkboard-teacher"></i>Teacher   </a></li>
            <li  ><a href="newstudent.php"> <i class="fas fa-user-tie"></i>New Student  </a></li>
            <li><a href="class.php"> <i class="fas fa-book-reader"></i>Class  </a></li>
            <li ><a href="year.php"> <i class=" far fa-calendar-alt"></i>Year    </a></li>
            <li class="active"><a href="register.php"> <i class="fas fa-font"></i>Register Admin </a></li>
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
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active">Admin     </li>
          </ul>
        </div>
      </div>
      <section>
        <div class="container-fluid">
          <!-- Page Header-->
          <div class="row">
            <div class="col-lg">
              <h2 class="text-primary text-uppercase text-center">ADMIN RECORDS </h2>
    <div class="d-flex justify-content-end">
  <!-- Button to Open the Modal -->
      <button type="button" class="btn btn-primary btn-success" data-toggle="modal" data-target="#myModal">Add Records </button>
    </div>
  <h3 class="text-primary" > All Records</h3>
  <div id="record_container">

    
  </div>
  <!-- The Modal -->
<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Add Admin</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <div class="form-group">
          <label>Admin Name</label>
          <input type="text" name="name" id="name" class="form-control" placeholder="Enter Admin Name">
        
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" name="Password" id="password" class="form-control" placeholder="Password">
        
        </div>
        <div class="form-group">
          <label>E-mail</label>
          <input type="email" name="email" id="email" class="form-control" placeholder="Enter E-mail">
        
        </div>
        <div class="form-group">
          <label>Mobile</label>
          <input type="text" name="mobile" id="mobile" class="form-control" placeholder="Enter Mobile No.">
        
        </div>  
        
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button"  name="submit" class="btn btn-success" data-dismiss="modal" onclick="addadmin()" >Save</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>

<!-- /// update data modal
 --><!-- The Modal -->
<div class="modal fade" id="UpdateModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Update Admin Data</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <div class="form-group">
          <label>Admin Name</label>
          <input type="text" name="updatename" id="updatename" class="form-control" placeholder="Enter  Name">
        
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" name="updatepassword" id="updatepassword" class="form-control" placeholder="Password">
        
        </div>
        <div class="form-group">
          <label>E-mail</label>
          <input type="email" name="email" id="updateemail" class="form-control" placeholder="Enter E-mail">
        
        </div>
        <div class="form-group">
          <label>Mobile</label>
          <input type="text" name="mobile" id="updatemobile" class="form-control" placeholder="Enter Mobile No.">
        
        </div>  
        
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button"  name="submit" class="btn btn-success" data-dismiss="modal" onclick="update_admin()" >Update</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        <input type="hidden" name="" id="hidden_admin_id">
      </div>

    </div>
  </div>
</div>

</div>
  

<script type="text/javascript">


  $(document).ready(function(){
     readRecord();
  });


function readRecord()
{
  var readrecord = "readrecord";
  $.ajax({
      url: "addregister.php",
      type: "post",
      data: { readrecord : readrecord },
      success:function(data, status){
        $('#record_container').html(data);
      }
  });
}

//end above


  function addadmin()
    {
      var name = $('#name').val();
      var password = $('#password').val();
      var email = $('#email').val();
      var mobile = $('#mobile').val();
    
      $.ajax({
        url:"addregister.php",
        type:"post",
        data:{
          name:name,
          password:password,
          email:email,
          mobile:mobile,
        },
        success:function(data, status)
        {
          readRecord();       }

      });
    }
    ///delete record
    function deleteData(deleteid){
      var conf= confirm("Are you sure to delete data");
      if(conf==true)
      {
        $.ajax({
          url:"addregister.php",
            type:"post",
            data:{
          deleteid : deleteid
        
        },
        success:function(data, status)
        {
          readRecord();       }

      }); 
      }
    }
/// edit data
function editData(admin_id)
{
 $('#hidden_admin_id').val(admin_id);
 $.post("addregister.php",{
  admin_id:admin_id
 },function(data , status){
  var user = JSON.parse(data);
    $('#updatename').val(user.admin_name);
  $('#updatepassword').val(user.password);
  $('#updateemail').val(user.email);
  $('#updatemobile').val(user.mobile);
  
 }
 );
 $('#UpdateModal').modal("show");

}
///save update
function update_admin()
{
  var editname = $('#updatename').val();
  var editpassword = $('#updatepassword').val();
  var editemail=$('#updateemail').val();
  var editmobile=$('#updatemobile').val();
  var edithidden_admin_id=$('#hidden_admin_id').val();
  $.post("addregister.php",{
    edithidden_admin_id:edithidden_admin_id,
    editname:editname,
    editpassword:editpassword,
    editemail:editemail,
    editmobile:editmobile
  },
  function(data,status){
     $('#UpdateModal').modal("hide");
     readRecord();
  }
  );

}



    </script>
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
              <p>Design by <a href="" class="external">Tr. <div class="name"><?php echo $name; ?>    </div> Verma</a></p>
              <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions and it helps me to run Bootstrapious. Thank you for understanding :)-->
            </div>
          </div>
        </div>
      </footer>
    </div>
     
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