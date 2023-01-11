<?php
include("tcpdf.php");
//include("config/tcpdf_config.php");
$srno=$_GET['id'];
$examid=$_GET['id2'];

$conn=mysqli_connect("localhost","root","","srstutorial");
$sql=" select result.srno,result.name,result.year,result.class,student.fname,student.mname, student.photo,student.mobile,student.age,student.village From (result inner join student on result.srno =student.srno) where result.srno='$srno' ";
$query=mysqli_query($conn,$sql);
$row = mysqli_fetch_array($query);

$sql1="select  result.sub_1,result.sub_2,result.sub_3,result.sub_4,result.sub_5,result.sub_6,result.sub_7,result.sub_8,result.sub_9,result.sub_10,result.sub_11,result.sub_1+result.sub_2+result.sub_3+result.sub_4+result.sub_5+result.sub_6+result.sub_7+result.sub_8+result.sub_9+result.sub_10+result.sub_11 as total ,exam.exam_name FROM (result inner join exam on result.exam_id= exam.exam_id) where srno='$srno' AND result.exam_id = '$examid' ";
$query=mysqli_query($conn,$sql1);
$row1 = mysqli_fetch_array($query);

$pdf = new TCPDF('P','mm','A4');
$pdf->AddPage();


$pdf->SetAuthor('Mukesh');
$pdf->SetTitle('U.P.S.BHIMMAPURWA');
$pdf->SetSubject('Result Data');
$pdf->SetKeywords('TCPDF, PDF, example, test, guide');

// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, 100, ''.' 048', 'U.P.S.BHIMMAPURWA');
$pdf->setHeaderFont(Array('helvetica', '', 18));
$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));
$pdf->setJPEGQuality(75);
// Example of Image from data stream ('PHP rules')


// The '@' character is used to indicate that follows an image data stream and not an image file name

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Image example with resizing
if($row)
{   $imgdata = base64_decode($row['photo']);
    $pdf->Image('img/ups logo.png','', '',15, 10, '', '', 'T', false, 130,'L', false, false, 0, false, false, false);
    $pdf-> Cell(160,5,'U.P.S. BHIMMAPURWA',0,1,'C');
    $pdf-> Cell(190,5,'Aminabad Katari, Kannauj',0,1,'C');
    $pdf-> ln();
    $pdf-> Cell(35,5,'Name:',0,0);
    $pdf-> Cell(50,5,$row['name'],0,0);
    
    $pdf-> Cell(35,5,'S.R.No.:',0,0);
    $pdf-> Cell(50,5,$row['srno'],0,1);
    //$pdf->SetXY(8, 15);
    $pdf->Image('@'.$imgdata,'', '',25,30, '', '', 'F', false, 130,'R', false, false, 0, false, false, false);
    
    
    $pdf-> Cell(35,5,'Year:',0,0);
    $pdf-> Cell(50,5,$row['year'],0,0);
    $pdf-> Cell(35,5,'Age:',0,0);
    $pdf-> Cell(50,5,$row['age'].' years',0,1);
    
    
    $pdf-> Cell(35,5,'Class:',0,0);
    $pdf-> Cell(50,5,$row['class'],0,0);
    $pdf-> Cell(35,5,'Mobile:',0,0);
    $pdf-> Cell(50,5,$row['mobile'],0,1);
    
    $pdf-> Cell(35,5,'Father Name:',0,0);
    $pdf-> Cell(50,5,$row['fname'],0,0);
    $pdf-> Cell(35,5,'Village:',0,0);
    $pdf-> Cell(50,5,$row['village'],0,1);
    
    $pdf-> Cell(35,5,'Mother Name:',0,0);
    $pdf-> Cell(50,5,$row['mname'],0,1);
}
else
{
  echo "tthere is no Result of any Student.".mysqli_error($conn);
  $pdf-> ln();
}
if($row1)
{
    $pdf-> Cell(190,5,'',0,1);
    $pdf->SetFont('helvetica', 'U');
    $pdf-> Cell(190,10,'Report Card 2019',0,1,'C');
    
    $pdf-> Cell(190,10,$row1['exam_name'],0,1,'C');
    $pdf->SetFont('helvetica', 'R');
    
    $pdf-> Cell(40,5,'S.No.',1,0,'C');
    $pdf-> Cell(40,5,'Subject ',1,0);
    $pdf-> Cell(40,5,'Max Marks',1,0,'C');
    $pdf-> Cell(60,5,'Obtain Marks',1,1,'C');
    
    $pdf-> Cell(40,5,'1',1,0,'C');
    $pdf-> Cell(40,5,'Hindi ',1,0);
    $pdf-> Cell(40,5,'50',1,0,'C');
    $pdf-> Cell(60,5,$row1['sub_1'],1,1,'C');
    
    $pdf-> Cell(40,5,'2',1,0,'C');
    $pdf-> Cell(40,5,'English',1,0);
    $pdf-> Cell(40,5,'50',1,0,'C');
    $pdf-> Cell(60,5,$row1['sub_2'],1,1,'C');
    
    $pdf-> Cell(40,5,'3',1,0,'C');
    $pdf-> Cell(40,5,'Maths',1,0);
    $pdf-> Cell(40,5,'50',1,0,'C');
    $pdf-> Cell(60,5,$row1['sub_3'],1,1,'C');
    
    $pdf-> Cell(40,5,'4',1,0,'C');
    $pdf-> Cell(40,5,'Science',1,0);
    $pdf-> Cell(40,5,'50',1,0,'C');
    $pdf-> Cell(60,5,$row1['sub_4'],1,1,'C');
    
    $pdf-> Cell(40,5,'5',1,0,'C');
    $pdf-> Cell(40,5,'Soc.Science',1,0);
    $pdf-> Cell(40,5,'50',1,0,'C');
    $pdf-> Cell(60,5,$row1['sub_5'],1,1,'C');
    
    $pdf-> Cell(40,5,'6',1,0,'C');
    $pdf-> Cell(40,5,'Sanskrit',1,0);
    $pdf-> Cell(40,5,'50',1,0,'C');
    $pdf-> Cell(60,5,$row1['sub_6'],1,1,'C');
    
    $pdf-> Cell(40,5,'7',1,0,'C');
    $pdf-> Cell(40,5,'Art',1,0);
    $pdf-> Cell(40,5,'50',1,0,'C');
    $pdf-> Cell(60,5,$row1['sub_7'],1,1,'C');
    
    $pdf-> Cell(40,5,'8',1,0,'C');
    $pdf-> Cell(40,5,'Hom.Science',1,0);
    $pdf-> Cell(40,5,'50',1,0,'C');
    $pdf-> Cell(60,5,$row1['sub_8'],1,1,'C');
    
    $pdf-> Cell(40,5,'9',1,0,'C');
    $pdf-> Cell(40,5,'Agriculture',1,0);
    $pdf-> Cell(40,5,'50',1,0,'C');
    $pdf-> Cell(60,5,$row1['sub_9'],1,1,'C');
    
    $pdf-> Cell(40,5,'10',1,0,'C');
    $pdf-> Cell(40,5,'Phy.Science',1,0);
    $pdf-> Cell(40,5,'50',1,0,'C');
    $pdf-> Cell(60,5,$row1['sub_10'],1,1,'C');
    
    $pdf-> Cell(40,5,'11',1,0,'C');
    $pdf-> Cell(40,5,'Enviroment',1,0);
    $pdf-> Cell(40,5,'50',1,0,'C');
    $pdf-> Cell(60,5,$row1['sub_11'],1,1,'C');
    
    $pdf-> Cell(40,5,'',1,0,'C');
    $pdf-> Cell(40,5,'',1,0,'C');
    $pdf-> Cell(20,5,' Total',1,0,'C');
    $pdf-> Cell(20,5,'550',1,0,'C');
    $pdf-> Cell(30,5,'Obtain Total',1,0);
    $pdf-> Cell(30,5,$row1['total'],1,1,'C');
    
    $pdf-> ln();
    $pdf-> Cell(30,5,'Date:',0,0);
    $pdf-> Cell(150,5,'Principal Signature',0,1,'R');
    
    
    
}
else
{
  echo "there is no Result of any Student".mysqli_error($conn);
  $pdf-> ln();
}




// set header and footer fonts
$pdf->setHeaderFont(Array('helvetica', '', 18));
$pdf->setFooterFont(Array('helvetica', '', 10));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

// set auto page breaks
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// set some language-dependent strings (optional)
if (@file_exists(dirname(__FILE__).'/lang/eng.php')) {
    require_once(dirname(__FILE__).'/lang/eng.php');
    $pdf->setLanguageArray($l);
}

// ---------------------------------------------------------

// set font
$pdf->SetFont('helvetica', 'B', 20);


$pdf->Output('RESULT2019.pdf');
?>