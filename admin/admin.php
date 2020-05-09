<?php
session_start();
include ('include.php');
if (!isset($_SESSION['adminname']))
 {
  header('location:login.php');
}
$name=$_SESSION['adminname'];
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
<link rel="icon" href="../admin/images/ban_32x32.jpg" sizes="32x32" />
    <!-- Custom-Files -->
    <link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
    <!-- Bootstrap-CSS -->
    <link href="css/style.css" rel='stylesheet' type='text/css' />
    <!-- Style-CSS -->
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <!-- Font-Awesome-Icons-CSS -->
    <!-- Custom-Files -->

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
                <!-- logo --><img src="images/ups logo.png" alt="about" width="105px" height="65px" />
                <div id="logo">
                   <h1><a href="index.html">U.P.S.Bhimmapurwa</a></h1>
                </div>
                <!-- logo -->
                <!-- nav -->
                <div class="nav_w3ls ml-lg-5">
                    <nav>
                  <label for="drop" class="toggle">Menu</label>
                        <input type="checkbox" id="drop" />
                        <ul class="menu">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="dashboard.php">Dashboard</a></li>
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
                                    <li><a href="updateclass.php">Update Class</a></li>
                                    <li><a href="result.php">Result</a></li>
                                     <li><a href="register.php">Admin Register</a></li>
                                </ul>
                            </li>
                               <!-- First Tier Drop Down -->                            
                        </ul>
                    
                    </nav>
                </div>
                <!-- //nav -->
               <div class="rightmenu">
                     <div class="name"><?php echo"Welcome ".$name; ?>    <a style="color: red;" href="logout.php">Logout</a></div>
               </div>
        </div>
    </header>
    <!-- //header --><style>
 {box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
body 
{
  /*background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("images/9.jpg");*/

  /* Set a specific height */
  height: 50%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  /*
  font-family: "Lato", sans-serif;
background-image: url('image/login3.jpg');
background-size: cover;
*/
}
.middle{

}
.leftmenu{
  margin-top: 90px;
    width: 70%;
    float: left;
    line-height: 30px;
       }
  .rightmenu{

    width: auto;
    float: right;
    line-height: 10px;


  }
  .leftmenu ul li{
    display: inline-block;
    list-style: none;
    font-weight: bold;
    color: white;
    font-size: 15px;
    margin-left: 20px;

}

   .rightmenu ul li{
    display: inline-block;
    list-style: none;
    font-weight: bold;
    color: white;
    font-size: 15px;
    margin-left: 10px;
    float: left;


  }
  .leftmenu ul li a{
    color: white;
    text-decoration: none;

  }
  .rightmenu ul li a{
    color: white;
    text-decoration: none;

  }

  
  .rightmenu ul li a:hover{
    color: red;

  }
  .active{
    font-color: green;
  }
.meddle{
  width: 100%;

}
/* Style the tab */
.tableft {
  margin-top:100px; 
  float: left;
  border: 0px solid #ccc;
  
  width: 20%;
  height: auto;
  background-color: rgba(0,0,0,0.2);
  
}

/* Style the buttons inside the tab */
.tableft button {
  display: block;
  background-color: inherit;
  color: black;
  padding: 22px 16px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
  color: white;
}

/* Change background color of buttons on hover */
.tableft button:hover {
  background-color: #ddd;
}

/* Create an active/current "tab button" class */
.tableft button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  margin-top:100px; 
  float:left;
  padding: 0px 12px;
    width: 60%;
  border-left: none;
  height: auto;
}
.tabright{
   margin-top:80px; 
  width: auto;
  height: auto;
  border: 1px solid #ccc;
  float: left;

}
.well{
  display:block;
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
</head>
<body>
<div>

  <div class="middle">
  <div class="tableft">
  <button class="tablinks" onclick="openCity(event, 'School Founder')" id="defaultOpen">School Founder</button>
  <button class="tablinks" onclick="openCity(event, 'Administration')">Administration</button>
  <button class="tablinks" onclick="openCity(event, 'Programme')">Programme</button>
  <button class="tablinks" onclick="openCity(event, 'Student Activities')">Student Activities</button>
  <button class="tablinks" onclick="openCity(event, 'Teachers Hardwork')">Teachers'Hardworks</button>
  <button class="tablinks" onclick="openCity(event, 'Progress')">Progress</button>
  <button class="tablinks" onclick="openCity(event, 'MDM Arrangment')">MDM Arrangment</button>
  </div>

   <div id="School Founder" class="tabcontent">
     <h2 style="color: blue;">Chairman of U.P.S. BHIMMAPURWA</h2>
      <img src="images/head1.jpg" style="float:right; margin:0px 0px 10px 10px;width: 100px; height: 100px;">
     <font style="text-align: justify;font-family:sans-serif; font-size: 15px;letter-spacing: 0px;"><b> <p>Head of U.P.S. Bhimmapurwa, Mr. Lala Ram  believes in maintaining the highest standards in terms of quality. Consequently the name U.P.S. BHIMMAPURWA has become synonymous with world class infrastructure and facilities. All schools under the Up GOVT. are equipped with the best teachers, sports facilities, classrooms, laboratories and transport facilities. A safe learning environment with world class facilities....What more could one ask for? Such a unique system of education has revolutionized education in our country taking India into the global arena and providing a platform where schools of other countries can actually learn from us.</b></p>
     </font>
  </div>

  <div id="Administration" class="tabcontent">
    <h2 style="color: blue;">Pre-Primary Section: Pre-Nursery to Grade I</h2>
    <font style="text-align: justify;font-family:sans-serif; font-size: 15px;letter-spacing: 0px;"><b><p>"When love and skill work together, expect a masterpiece" - All teaching in the Pre-Primary section from Class Nursery to Class I is activity oriented involving flashcards, puppets, storytelling, dramatization & role-play. The aim of teaching is to involve the children in the discussion so that the answers are forthcoming from them. The teaching aims at highlighting certain values and attitudes like caring for others, compassion and preservation of the environment.</p>
      <h2 style="color: blue;">Primary Section: Grade II to Grade V</h2>
      <p>The Child is now familiar with the School environment and is exposed to more formal ways of learning and testing. The Subjects taught are English, Hindi, Maths, EVS, G.K, and Computer. Students of class V are now introduced to an additional language.</p>
      <h2 style="color: blue;">Senior Section: Grade VI to Grade VIII</h2>
      <p>The child is now maturing and the process of making an honest and responsible member of the society has begun at an earnest. The child can now easily distinguish between the good and the bad and is able to make his or her own decisions. The Subjects now become more detailed and specific and also help the child make decisions regarding his/her aim in life. Also the child now starts focusing on the activities she or he likes.</b></p></font>
  </div>

  <div id="Programme" class="tabcontent">
    <h2 style="color: blue;">Programme</h2>
      <font style="text-align: justify;font-family:sans-serif; font-size: 15px;letter-spacing: 0px;"><b><p>We follow the U.P. Board of Secondary Education's curriculum. We offer a wide range of subjects and co curricular activities. With international boundaries shrinking, fast growing communication technology, world economy and business process outsourcing, global acceptance of economical and intellectual growth has opened a huge challenge to our educational system. We intend to hone the inherent skills and personalities of the children and make them globally competitive without burdening their frail, innocent minds. Special remedial as well as enrichment classes are organized for students requiring further attention.</p>
      <p>U.P.S. Bhimmapurwa Kannauj has a curriculum that is integrated, the curriculum is concept oriented rather than exam oriented. The curriculum is designed keeping in view the overall development of the child. The classroom is the nerve center of the activities that are undertaken in shaping and grooming the leaders of tomorrow. The integrated curriculum not only concentrates on the academics but also on the qualitative development of every individual child. Our strength lies in our ability to maintain the completeness of our programs, offering unique and important options to each and every person and providing a way to evaluate each student's learning to ensure that we all continue to grow and we remain completely accountable to our community. </b></p></font>
  </div>
  <div id="Student Activities" class="tabcontent">
     <h2 style="color: blue;">Student Activities</h2>
     <a href="gameimage.php">Sports</a>
     <a href="schoolgardening.php">Gardening</a>
     <a href="raillyimage.php">Jagrukta Railly</a>

     <p>Content Focus (and Interaction) Whether the learning outcomes for a session or module include declarative or functioning knowledge,     almost all of them will be supported in some way by the presentation of information to students. ...
         Interactivity (with Others) Focus. ...
         Critical Thinking. ...
         Production. ...
         Reflection.</p>
  </div>
  <div id="Teachers Hardwork" class="tabcontent">
     <h2 style="color: blue;">Teachers Hardwork</h2>
     <p>Assign the homework (don’t forget about the reasonable amount)
Give time limits – be realistic, don’t overload your students with projects or “War and Peace” reading due to tomorrow. You will never get their homework done. Many students have part-time jobs and take part in after-school sports or activities. All these need a lot of student's time. Be understanding to all students’ interests outside their studying life, and make your homework assignments adjustable to their schedules.
Collect homework and grade it in time. Don’t waste the time. If you collect homework in January, but check it only in March, students will never take your class seriously an you will have problems with their attitude
Comment on the homework. Students should see that you also spent some time on their tasks, analyzed them and made some conclusion. It will be useful for them to see their mistakes and helpful for you to make the teaching process easier
All these aspects of an appropriate feedback to students proved to be one of the best motivation factors.</p>
  </div>
  <div id="Progress" class="tabcontent">
     <h2 style="color: blue;">Progress</h2>
     <p>You write a progress report to inform a supervisor, associate, or customer about progress you've made on a project over a certain period of time. The project can be the design, construction, or repair of something, the study or research of a problem or question, or the gathering of information on a technical subject.</p>
  </div>
  <div id="MDM Arrangment" class="tabcontent">
     <p><div id="midcontainer"  style="padding:10 10 10 10 px; width:90%; height:auto;margin-left: 10px;">
        <h2 style="width:94%">About the Mid Day Meal Scheme</h2></p>

      <p style="width:98%; height: 30px;"><strong><span style="font-family:Times New Roman;font-size:50px;line-height:70px;float:left; text-align:justify;padding-top: 4px;padding-right: 8px; padding-left: 3px;" >M</span></strong><blockquote>id Day Meal in schoolshas had a long history in India. In 1925, a Mid Day Meal Programme was introduced for disadvantaged children in Madras Municipal Corporation. By the mid 1980s three States viz. Gujarat, Kerala and Tamil  Nadu and the UT of Pondicherry had universalized a cooked Mid Day Meal Programme with their own resources for children studying at the primary stage by 1990-91 the number of States implementing the mid day meal programme with their own resources on a universal or a large scale had increased to twelve states.</blockquote>
      </p><br><br>

       <ol style="line-height:18px; width:94%; text-align:justify; height: auto;">
         <li>
           With a view to enhancing enrollment, retention and attendance and simultaneously improving nutritional levels among children, 
          the National Programme of Nutritional Support to Primary Education <b>(NP-NSPE)</b> was launched as a Centrally Sponsored 
         Scheme on <b>15th August 1995,</b> initially in 2408 blocks in the country. By the year 1997-98 the NP-NSPE was introduced 
           in all blocks of the country. It was further extended in 2002 to cover not only children in classes I -V of Government, 
          Government aided and local body schools, but also children studying in EGS and AIE centres. Central Assistance under the 
           scheme consisted of free supply of food grains @ 100 grams per child per school day, and subsidy for transportation of food 
          grains up to a maximum of Rs 50 per quintal.
        </li><br /><span id="dots">...</span><span id="more">
        <li>
         In <b>September 2004</b> the scheme was revised to provide cooked mid day meal with 300 calories and 8-12 grams of protein 
          to all children studying in classes I – V in Government and aided schools and EGS/ AIE centres. In addition to free supply of 
         food grains, the revised scheme provided Central Assistance for (a) Cooking cost @ Re 1 per child per school day, (b) Transport 
         subsidy was raised from the earlier maximum of Rs 50 per quintal to Rs. 100 per quintal for special category states, and Rs 75 
         per quintal for other states, (c) Management, monitoring and evaluation costs @ 2% of the cost of foodgrains, transport subsidy 
         and cooking assistance, (d) Provision of mid day meal during summer vacation in drought affected areas.
        </li><br/>
         <li>
         In <b>July 2006</b> the scheme was further revised to provide assistance for cooking cost at the rate of (a) Rs 1.80 per 
         child/school day for States in the North Eastern Region, provided the NER States contribute Rs 0.20 per child/school day, 
          and (b) Rs 1.50 per child/ school day for other States and UTs, provided that these States and UTs contribute Rs 0.50 per 
         child/school day.
         </li><br />
        <li>
          In <b>October 2007</b>, the scheme has been further revised to cover children in upper primary (classes VI to VIII) initially 
          in 3479 Educationally Backwards Blocks (EBBs). Around 1.7 crore upper primary children were included by this expansion of the 
          scheme. From 2008-09 i.e w.e.f 1st April, 2008, the programme covers all children studying in Government, Local Body and
           Government-aided primary and upper primary schools and the EGS/AIE centres including Madarsa and Maqtabs supported under 
          SSA of all areas across the country. The calorific value of a mid-day meal at upper primary stage has been fixed at a minimum 
          of 700 calories and 20 grams of protein by providing 150 grams of food grains (rice/wheat) per child/school day.
        </li><br />
        <li>
           From the year 2009 onwards the following changes have been made to improve the implementation of the scheme:-
        <ol style="margin-left: 10px;">
            <li>
             Food norms have been revised to ensure balanced and nutritious diet to children of upper primary group by increasing the quantity of pulses from 25 to 30 grams, vegetables from 65 to 75 grams and by decreasing the quantity of oil and fat from 10 grams to 7.5 grams.
            </li>
            <li>
             Cooking cost (excluding the labour and administrative charges) has been revised from Rs.1.68 to  to Rs. 2.50 for primary and from Rs. 2.20 to Rs. 3.75 for upper primary children from 1.12.2009 to facilitate serving meal to eligible children in prescribed quantity and of good quality .The cooking cost for primary is Rs. 2.69 per child per day and Rs. 4.03 for upper primary children  from 1.4.2010.The cooking cost will be revised prior approval of competent authority by 7.5% every financial year from 1.4.2011.

            </li>
            <li>
             The honorarium for cooks and helpers was paid from the labour and other administrative charges of Rs.0.40 per child per day provided under 
             the cooking cost. In many cases the honorarium was so little that it became very difficult to engage manpower for cooking the meal. A Separate component for Payment of honorarium @ Rs.1000 per month per cook- cum-helper was introduced from  1.12.2009. Honorarium at the above prescribed rate is being paid to cook-cum-helper. However, in some of the states the honorarium to cook-cum-helpers are being paid more than Rs.1000/- through their state fund. Following norms for engagement of cook-cum-helper have been made:
         
            <ol style="list-style:none;">
                <li>One cook- cum-helper for schools up to 25 students.</li>
                <li> Two cooks-cum-helpers  for schools with 26 to 100 students. </li>
                <li> One additional cook-cum-helper for every addition of upto 100 students. </li>
            </ol>
            </li>
            <li>
               More than 25.25 lakhs cook-cum-helper are engaged  by the State/UTs during 2016-17&nbsp; for preparation and serving of Mid Day Meal to Children in Elementary Classes:
            </li>
            <li>
               A common unit cost of construction of kitchen shed @ Rs.60,000 for the whole country was impractical and also inadequate .Now the cost of construction of kitchen-cum-store will be determined on the basis of plinth area norm and State Schedule of Rates.  The Department of School Education and Literacy vide letter No.1-1/2009-Desk(MDM) dated 31.12.2009 had prescribed 20 sq.mt. plinth area for schools having upto 100 children.  For every additional upto 100 children additional 4 sq.mt plinth area will be added.  States/UTs have the flexibility to modify the Slab of 100 children depending upon the local condition.
                
             </li>
          </ol>
          </li>
            <li>
              Due to difficult geographical terrain of the Special category States the transportation cost @ Rs.1.25 per quintal was not adequate to meet the actual cost of transportation of foodgrains from the FCI godowns to schools in these States.  On the request of the North Eastern States the transportation assistance in the 11 Special Category States (Northern Eastern States, Himachal Pradesh, Jammu & Kashmir and Uttarakhand)  have been made at par with the Public Distribution System (PDS) rates prevalent in these States with effect from 1.12.2009.
            </li>
        </ol>
    </span></ol></div>
</div>
<button onclick="myFunction()" id="myBtn">Read more</button>
</p>
</div>
</div>
      <div class="tabright">
       <div class="well"><img src="images/logo.jpg" style="width: 220px; height: 200px;"></div>
      <div class="well"><img src="images/logo2.jpg" style="width: 220px; height: 200px;"></div>
      </div>
</div>
</b></font></div></b></font></div></b></font></div></div></div>

<script>
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
</script>
</body>
</html> 
