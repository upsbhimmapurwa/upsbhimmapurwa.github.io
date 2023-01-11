<?php
session_start();
include('include.php');
extract($_POST);
         //ajax call for year
          $year= $_POST['datapost'];
             
            $sql= "select * from class where year='$year' ";
             $query=mysqli_query($conn,$sql);
              //echo $rows=mysqli_fetch_array($query);
            while($rows=mysqli_fetch_array($query))
            { ?>

            	<option value="<?php echo $rows['class']; ?>"><?php echo $rows['class'];?></option> 
            <?php
            }
         ?>

          <?php
          //ajax call for srno.
            include('include.php');
            $class=$_POST['datapost'];
            $sql= "select srno from session where class ='$class' order by srno asc";
             $query=mysqli_query($conn,$sql);
               //$rows=mysqli_fetch_array($query);
            while($rows=mysqli_fetch_array($query))
            { ?>

                <option value='<?php echo $rows['srno']; ?>'> <?php echo $rows['srno'];?> </option> 
            <?php
            }
 
             ?>
      
         <?php 
         ///ajax call for name
         include('include.php');
         $srno=$_POST['datapost'];
         $sql= "select name from student where srno='$srno' order by srno asc";
          $query=mysqli_query($conn,$sql);
            //$rows=mysqli_fetch_array($query);
         while($rows=mysqli_fetch_array($query))
         { ?>

             <option value='<?php echo $rows['name']; ?>'> <?php echo $rows['name'];?> </option> 
         <?php
         }

          ?>