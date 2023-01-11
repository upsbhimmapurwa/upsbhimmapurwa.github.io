<?php
include("tcpdf.php");
//include("config/tcpdf_config.php");
$srno=$_GET['id'];
//$examid=$_GET['id2'];

$conn=mysqli_connect("localhost","root","","srstutorial");
 $sql=" select * from  student where srno ='$srno'";
  $query=mysqli_query($conn,$sql);
    $num=mysqli_num_rows($query);
   
    $row=mysqli_fetch_array($query);
     $name=$row['photoname'];
    $img=$row['photo'];

    $sql1=" select * from  parents_details where srno ='$srno'";
  $query1=mysqli_query($conn,$sql1);
    $num1=mysqli_num_rows($query1);
   
    $row1=mysqli_fetch_array($query1);
 $pdf = new TCPDF('P','mm','A4');
$pdf->AddPage();


$pdf->SetAuthor('Mukesh');
$pdf->SetTitle('उच्च प्राथमिक विद्यालय भिम्मापुरवा');
$pdf->SetSubject('Result Data');
$pdf->SetKeywords('TCPDF, PDF, example, test, guide');

// set default header data
/*$pdf->SetHeaderData(PDF_HEADER_LOGO, 100, ''.' 048', 'U.P.S.BHIMMAPURWA');*/
/*$pdf->setHeaderFont(Array('helvetica', '', 18));
$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));
$pdf->setJPEGQuality(75);*/
// Example of Image from data stream ('PHP rules')
$imgdata = base64_decode($row['photo']);

// The '@' character is used to indicate that follows an image data stream and not an image file name

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Image example with resizing

$pdf->Image('img/ups logo.png','', '',20, 20, '', '', 'T', false, 130,'L', false, false, 0, false, false, false);
$pdf->Ln(2);
$html = <<<EOD
<p style="color:#CC0000;text-align:center;font-size:18;">UPPER PRIMARY SCHOOL BHIMMAPURWA,</p>
<p style="color:#CC0000;text-align:center;font-size:15;line-height:0.25px;">Aminabad Katari,Kannauj,U.P</p>
EOD;
$pdf->writeHTMLCell(0, 0, '', '', $html, 0, 1, 0, true, '', true);
$pdf->Ln(2);

/*$pdf-> Cell(160,5,' Aminabad Katari',0,1,'C');
$pdf-> Cell(160,5,' Kannauj,U.P.',0,1,'C');*/
/*$pdf->ln();*/

$pdf->Image('@'.$imgdata,'', '',30,35, '', '', 'F', false, 130,'R', false, false, 0, false, false, false);
$pdf->Ln(10);
$pdf-> Cell(35,5,'Name:',0,0);
$pdf-> Cell(60,5,$row['name'],0,0);
$pdf-> Cell(35,5,'S.R.No.:',0,0);
$pdf-> Cell(50,5,$row['srno'],0,1);
/*$pdf-> Cell(35,5,'Class:',0,0);
$pdf-> Cell(50,5,$row['class'],0,0);
$pdf-> Cell(35,5,'Admission Year:',0,0);
$pdf-> Cell(50,5,$row['year'],0,1);*/
//$pdf->SetXY(8, 15);
$pdf->Ln(5);
$pdf->SetFont('helvetica', 'U');
$pdf-> Cell(190,10,'Student Details:-',0,1);
$pdf->SetFont('helvetica', 'R');



$pdf-> Cell(35,5,'Age:',0,0);
$pdf-> Cell(60,5,$row['age'].' years',0,0);


$pdf-> Cell(35,5,'Class:',0,0);
$pdf-> Cell(50,5,$row['class'],0,1);
$pdf-> Cell(35,5,'Mobile:',0,0);
$pdf-> Cell(60,5,$row['mobile'],0,0);

/*$pdf-> Cell(35,5,'Father Name:',0,0);
$pdf-> Cell(50,5,$row['fname'],0,1);
$pdf-> Cell(35,5,'Mother Name:',0,0);
$pdf-> Cell(50,5,$row['mname'],0,0);*/
$pdf-> Cell(35,5,'Date of Birth:',0,0);
$pdf-> Cell(50,5,$row['dob'],0,1);

$pdf-> Cell(35,5,'Aadhar No.:',0,0);
$pdf-> Cell(60,5,$row['aadhar'],0,0);
$pdf-> Cell(35,5,'Admission Year:',0,0);
$pdf-> Cell(50,5,$row['year'],0,1);
$pdf->Ln(5);
$pdf->SetFont('helvetica', 'U');
$pdf-> Cell(190,10,'Postal Details:-',0,1);
$pdf->SetFont('helvetica', 'R');
$pdf-> Cell(35,5,'Village:',0,0);
$pdf-> Cell(60,5,$row['village'],0,0);


$pdf-> Cell(35,5,'Caste:',0,0);
$pdf-> Cell(50,5,$row['caste'],0,1);
$pdf-> Cell(35,5,'Gram Sabha:',0,0);
$pdf-> Cell(60,5,$row['gramsabha'],0,0);
$pdf-> Cell(35,5,'District:',0,0);
$pdf-> Cell(50,5,$row['city'],0,1);
$pdf-> Cell(35,5,'State:',0,0);
$pdf-> Cell(60,5,$row['state'],0,0);
$pdf-> Cell(35,5,'Nationality:',0,0);
$pdf-> Cell(50,5,$row['country'],0,1);
$pdf-> Cell(35,5,'Pin:',0,0);
$pdf-> Cell(50,5,$row['pin'],0,1);

$pdf-> Cell(190,5,'',0,1);

//$pdf->SetXY(8, 15);

$pdf->SetFont('helvetica', 'U');
$pdf-> Cell(190,10,'Parents Details:-',0,1);
$pdf->SetFont('helvetica', 'R');

$pdf-> Cell(35,5,'Father Name:',0,0);
$pdf-> Cell(60,5,$row['fname'],0,0);
$pdf-> Cell(35,5,'Mother Name:',0,0);
$pdf-> Cell(50,5,$row['mname'],0,1);
$pdf-> Cell(35,5,'Guardian Name:',0,0);
$pdf-> Cell(60,5,$row1['guardian_name'],0,0);
$pdf-> Cell(35,5,'Father Aadhar:',0,0);
$pdf-> Cell(50,5,$row1['faadhar'],0,1);
$pdf-> Cell(35,5,'Mother Aadhar:',0,0);
$pdf-> Cell(60,5,$row1['maadhar'],0,0);


$pdf-> Cell(35,5,'Guardian Aadhar:',0,0);
$pdf-> Cell(50,5,$row1['gaadhar'],0,1);
$pdf-> Cell(35,5,'Mobile:',0,0);
$pdf-> Cell(60,5,$row1['mobileno'],0,0);

$pdf-> Cell(35,5,'Bank Name:',0,0);
$pdf-> Cell(50,5,$row1['bank_name'],0,1);
$pdf-> Cell(35,5,'Branch :',0,0);
$pdf-> Cell(60,5,$row1['bank_branch'],0,0);
$pdf-> Cell(35,5,'Bank Address:',0,0);
$pdf-> Cell(50,5,$row1['bank_address'],0,1);

$pdf-> Cell(35,5,'IFSC Code:',0,0);
$pdf-> Cell(60,5,$row1['ifsc_code'],0,0);
$pdf-> Cell(35,5,'Account Number:',0,0);
$pdf-> Cell(50,5,$row1['account_number'],0,1);
$pdf->Ln(5);

$pdf->SetFont('helvetica', 'R');
$pdf-> Cell(35,5,'Occupation:',0,0);
$pdf-> Cell(60,5,$row1['occupation'],0,0);

$pdf-> Cell(190,5,'',0,1);
$pdf-> ln(2);
$html = <<<EOD

<p>I ............ hearby declare that the above information given by me is true. If any any information will be false , I myself respossible for this.
</p>
<table>
<tr><td><pre style="text-align:left;font-weight:bold;font-family:helvetica;">
Name of Student _________________<br><br>
Father's Name   _________________<br><br>
Class           _________________<br><br>
Last School     _________________<br><br>
</pre></td><td><p style="text-align:right;"> (Signatur of Student) <br><br>
____________________<br></p>
</td></tr>
<tr><td></td></tr>
<tr><td><p style="text-align:left;"> Date <br><br>
___________________</p></td><td><p style="text-align:right;"> Principal Signature <br><br>
___________________</p></td></tr>

EOD;
$pdf->writeHTMLCell(190, 0, '', '', $html, 0, 1, 0, true, '', true);
$html = <<<EOD
<div>



</div>
EOD;

// Print text using writeHTMLCell()
$pdf->writeHTMLCell(190, 0, '', '', $html, 0, 1, 0, true, '', true);







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