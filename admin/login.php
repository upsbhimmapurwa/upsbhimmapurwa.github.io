<?php
session_start();
include('../admin/include.php');

 
if(isset($_POST['submit']))
  { 
    
  
      $name=$_POST['uname'];
      $password=$_POST['psw'];
      $query= "SELECT * FROM admin WHERE admin_name='$name' && password='$password' ";
      $run=mysqli_query($conn,$query);
      $num=mysqli_num_rows($run);
      if ($num==1)
       {
            $_SESSION['adminname']= $name;
            header('location:admin.php');
              
       }
       else     
       {
        $rows=mysqli_fetch_array($query);
        if($name!=$rows['admin_name'] || $password!= $rows['password']){ echo "Admin Name is not match! ";
        echo "Password is not match!";}
        header('location:index.html');
       }
  }
?>