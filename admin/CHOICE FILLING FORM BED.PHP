

<!DOCTYPE html> 
<meta http-equiv="X-UA-Compatible" content="IE=edge" />


















<html>
	
	

	
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="PRAGMA" content="no-cache"/>
		
 




<meta name="keywords" content="">



<meta name="description" content="">





<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

 
 


 
 		<!-- <title>APPLICATION FORM</title>	 -->
				
					
				
		
		
		
		
		
		
		
		
			
		
		
			
		<link id="favicon" rel="shortcut icon" type="image/png" href="" />
	
 	
		
		
		 	<link rel="stylesheet" type="text/css" href="/EForms/css/font-awesome.min.css?v=19" />
		 
		 	<link rel="stylesheet" type="text/css" href="css/onlineApplicationForm/bootstrap.css?v=19" />
		 
		 	<link rel="stylesheet" type="text/css" href="css/onlineApplicationForm/tab.css?v=19" />
		 
		 	<link rel="stylesheet" type="text/css" href="css/onlineApplicationForm/icons.css?v=19" />
		 
		 	<link rel="stylesheet" type="text/css" href="css/onlineApplicationForm/bootstrap-select.min.css?v=19" />
		 
		 	<link rel="stylesheet" type="text/css" href="css/onlineApplicationForm/table.css?v=19" />
		 
		 	<link rel="stylesheet" type="text/css" href="css/onlineApplicationForm/dropzone.css?v=19" />
		 
		 	<link rel="stylesheet" type="text/css" href="css/onlineApplicationForm/cropper.min.css?v=19" />
		 
		 	<link rel="stylesheet" type="text/css" href="css/onlineApplicationForm/custommenu.css?v=19" />
		 
		 	<link rel="stylesheet" type="text/css" href="css/onlineApplicationForm/form76621/main.css?v=19" />
		 
		 <link rel="stylesheet" type="text/css" href="css/onlineApplicationForm/form76621/main.css?v=19" />
		 
	<!-- 	<script language="JavaScript" type="text/javascript" src="js/onlineAppForm/jquery-1.11.1.min.js"></script>
<script src="js/onlineAppForm/bootstrap.js"></script>
<script src="js/onlineAppForm/bootstrap-select.js"></script> -->
		<!-- Iterating JS Paths  -->
		
		 <script type="text/javascript" src="js/onlineAppForm/jquery-1.11.1.min.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/bootstrap.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/bootstrap-responsive-tabs.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/moment.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/jquery-migrate-1.2.1.min.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/jquery-ui.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/jquery.datePicker.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/jquery.tabs.pack.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/AJAXInteraction.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/formMaster.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/crop/ajaxfileupload.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/form76621.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/genericMethods.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/formViewTabsMaster.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/bootstrap-select.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/main_dashborad.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/dropzone.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/cropper.min.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/imageUpload.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/GCBgenericMethods.js?v=19"></script>
		 
		 <script type="text/javascript" src="js/onlineAppForm/GCBValidationMethods.js?v=19"></script>
		 


<script type="text/javascript" src="/ConsentManagement/js/policyCommon.js"></script> 
  <!--<script>     
		function init_captcha()
{
	captchaService.setAppId(30);
	//captchaService.setImageKey('user_"<1234');
	captchaService.createCaptcha("captchaHolder");
}
		</script>
-->
<script>
var var1= 'BEd 2K22 Preference Application Form';
document.title = "BEd 2K22 Preference Application Form";
var popupStatus = 0;

//loading popup with jQuery magic!
function loadPopup(elemt){
	//loads popup only if it is disabled
	if(popupStatus==0){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#popupContact").fadeIn("slow");
		popupStatus = 1;
	}
	
	document.getElementById('lovClicked').value=elemt;
}

//disabling popup with jQuery magic!
function disablePopup(){
	document.getElementById('pageNo').value=0;
	//disables popup only if it is enabled
	if(popupStatus==1){
		$("#backgroundPopup").fadeOut("slow");
		$("#popupContact").fadeOut("slow");
		popupStatus = 0;
	}
	document.getElementById('populateTableContent').innerHTML = "";
}

//centering popup
function centerPopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#popupContact").height();
	var popupWidth = $("#popupContact").width();
	//centering
	$("#popupContact").css({
		"position": "absolute",
		"top": "20px",
		"left": windowWidth/2-popupWidth/2
	});
	//only need force for IE6
	
	$("#backgroundPopup").css({
		"height": windowHeight
	});
	
}


//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
	
	//LOADING POPUP
	//Click the button event!
	if($("#isAdminEdit").val()!="Y"){
		$("#entityId").val('');
		$("#entity_id").val('');
	}
	
	

var isListingForm="true";
if(isListingForm=="true"){
	$("#eicuListing").val('true');
	$("#tabId").val('92');
	$("#ListingParentFormId").val('76624');
}

else{
	$("#eicuListing").val('false');
}
//v12.00 new image upload popup
	$( "[onclick*='openImagePopUpWithIdentifierNew']" ).attr({
  'data-toggle': "modal",
  'data-target': ".uploadimagepop"
}); 
	$( "[onclick*='openImagePopUp']").addClass('lnkTrance');
	//image upload changes end for readystate
	//CLOSING POPUP
	//Click the x event!
	$("#popupContactClose").click(function(){
		disablePopup();
	});
	//Click out event!
	$("#backgroundPopup").click(function(){
		disablePopup();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});

});
function populateLOV()
{


var lovKeyArr=''.split(",");
var lovValueArr=''.split(",");
var parentForm=''
var i=0;
var text="<table cellspacing='5' cellpadding='0'><tr><td height='10px'></td></tr>";

for(var a=0;a<lovKeyArr.length-1;a++)
{
  
  if(i==0)
  {
     text=text+"<tr>";
  }

if(i==1 && a==1){
	text=text+"<td width='1%' valign='top' rowspan='' id='lovSeparator_td' ><img width='1' height='30px' id='lovSeparator_img' src='images/onlineAppForm/seperator.gif' height='' style='padding:0 3px 0 3px'></td>";
}

  text=text+"<td align='right'>"+lovKeyArr[a]+"</td><td><input type='text' id='lov_"+lovValueArr[a]+"' value='' class='text_field' size='30'>";
  if(i==1)
  {
    	text=text+"</tr>";
  }
  i++
  if(i==2)
  {
	 i=0;
  }
}
if(!lovKeyArr.length-1%2)
{
   text=text+"</tr>";
}



childFormId=document.getElementById('formId').value;
text=text+"</table>";
text=text+"<input type='hidden' id='parentForm' name='parentForm' value='"+parentForm+"' /><input type='hidden' id='childForm' name='childForm' value='"+childFormId+"' />";
text=text+"<div id='searchTable'></div>"
var templovValue='';
text=text+"<input type='hidden' id='pageNo' name='pageNo' value='0'>";
text=text+"<div width='100%' align='center'><br/><button type='button' style='background:url(images/onlineAppForm/submit.gif) no-repeat;border:none; height:28px;width:75px;' id='lovSubmit' onclick='searchLovResult(\""+lovValueArr+"\")' /></div>";
document.getElementById('populateLovContent').innerHTML=text;
document.getElementById('lovValue').value=lovValueArr;

if(lovKeyArr.length>1){
	var rowspan=lovKeyArr.length/2 + lovKeyArr.length%2;
	var calcHeight = rowspan*30;
	document.getElementById('lovSeparator_td').setAttribute("rowspan",rowspan);
	document.getElementById('lovSeparator_img').setAttribute("height",calcHeight);
}

}


function fnSetKeyValues(tid,cnt)
{
for(var i=0;i<cnt;i++)
{
  var temp='lovValueHidden'+i;
  if(document.getElementById(temp)!=null){
  var htmlName=(document.getElementById(temp).innerHTML).split("@@");
  //var valueField=id+'td'+i;
  //var valueField="lovValueHidden"+id;
  //var htmlName=document.getElementById('lovClicked').value;
  //var valueField = htmlName[1]+"_header";
 	var headerName = htmlName[1] + "_header";
 	valueField = $("th[id^='"+headerName+"']").attr("id");
	valueField = valueField.substring(headerName.length);
  document.getElementById(htmlName[0]).value=document.getElementById(tid+"td"+valueField).innerHTML; 
}
}

disablePopup();
document.getElementById('lovClicked').value="";
document.getElementById('pageNo').value=0;
}

</script>		
 
<style>

#container {
            width: 968px;
            margin: 0 auto;
        }
		
@media only screen and (max-width: 768px) {
    #container {
        width: 90%;
        margin: 0 auto;
    }
}
	
#backgroundPopup{
display:none;
position:fixed;
_position:absolute; /* hack for internet explorer 6*/
height:100%;
width:100%;
top:0;
left:0;
background:#000000;
border:1px solid #cecece;
z-index:1;
}
#popupContact{
display:none;
position:fixed;
_position:absolute; /* hack for internet explorer 6*/
height:520px;
width:600px;
background:#FFFFFF;
border:1px solid #97A5B0;
z-index:2;
padding:12px;
font-size:13px;
overflow:auto;
}
#popupContact h1{
text-align:left;
color:#6FA5FD;
font-size:22px;
font-weight:700;
border-bottom:1px dotted #D3D3D3;
padding-bottom:2px;
margin-bottom:20px;
}
#popupContactClose{
font-size:14px;
line-height:14px;
right:6px;
top:4px;
position:absolute;
color:#6fa5fd;
font-weight:700;
display:block;
cursor:pointer;
}

.tablelist2 {  background-color:#f9fbfb; font: 11px "Tahoma", Arial, Helvetica, sans-serif; }
		.iconClass { border-right: solid 1px #809bae; border-bottom: solid 1px #809BAE; margin:0px; white-space:nowrap; text-indent:5px; padding-right:5px;width:60px; }
		.tablelist2 th { background:url(images/onlineAppForm/thbg2.gif) repeat-x top left; cursor:pointer; height:22px; font-size:11px; color:#000; line-height:22px; text-align:left; border-right: solid 1px #809bae; border-bottom: solid 1px #809bae;border-top: solid 1px #809bae; margin:0px; white-space:nowrap; padding:0 25px 0 25px; }
		.tablelist2 th.checkbox { background:url(images/onlineAppForm/thbg2.gif) repeat-x top left; cursor:pointer; height:22px; font-size:11px; color:#000; line-height:22px; text-indent:5px; text-align:left; padding-right:5px; border-right: solid 1px #809bae; border-bottom: solid 1px #809bae; margin:0px; white-space:nowrap; }
		.tablelist2 td { font-size:11px; color:#000; font-weight: normal; line-height:24px !important; border-bottom: solid 1px #809bae; margin:0px; white-space:normal; text-indent:10px; }
		.tablelist2 td.pagination td { font-size:11px; color:#000; font-weight: normal; background:url(images/thbg2.gif) repeat-x bottom left; border-bottom:0px !important; margin:0px; padding:0px 10px !important; white-space:normal; line-height:24px; text-indent:0px; }
		
.hinttext
{
padding-bottom:10px!important;
} 

</style>

</head>	
			
		
		
		
		<body onload=' document.forms[0].reset(); fnRetrieveMasterData();init_captcha();onLoadOfApplication();javascript:viewDetails();populateValForWithdrawal();' class="eform-wrp">
			
		<form name="onlineAppForm" method="post" action="/EForms/onlineApplicationAction.do" enctype="multipart/form-data"><div><input type="hidden" name="org.apache.struts.taglib.html.TOKEN" value="67726718d12cba138862b7dbbd422cf3"></div>
				<input type="hidden" name="adminFlag" id="adminFlag" value="" />
				<input type="hidden" name="token_img" id="token_img" value="" />
				
				<input type="hidden" name="appFieldNamesStr" value="">
				<input type="hidden" name="appFieldValuesStr" value="">
				
				<input type="hidden" name="org.apache.struts.taglib.html.TOKEN" value="67726718d12cba138862b7dbbd422cf3" />
				
					
										
													
										
														    
				    
                    
					
					
					
					
					
					
					
					
					
					
					
					
		
					<table align='center' id = "mainTable">
						<tr>
							<td width='900' >
    							<div style='width: 900px; margin: 20px auto;'>
    							
    							
    							
    							     
									﻿

<link rel="icon" href="images/onlineAppForm/form64585/Univ Logo.png">
<link rel='stylesheet' type='text/css' href='/EForms/css/font-awesome.min.css'/>
<link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.13/css/bootstrap-multiselect.css'/>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.13/js/bootstrap-multiselect.js"></script>

<div class="listbannerarea customBannerDivClass" id="bannerDiv1"></div>

<div class="customMenuH customTabDivClass" id="idForDiv">
	<nav class="tabs-bar">
		<div class="responsive-tabs-container clearfix " id="idForDiv">
			<ul class="nav nav-pills responsive-tabs tabs-nav" id="">
				<li role="presentation" id="tab-28" style="pointer-events: none;width: 200px;" title="Personal Details" class=" customClassForTabLi active tabLiCustomClass changetab ">
					<a href="#fragment-28" data-attr="#fragment-28" role="tab" data-toggle="tab" aria-expanded="false">
						<div class="tabicon"><i class="applicationprofile"></i></div>
						<div class="tabtext sansSB customTabNameClass"><span>College Selection</span></div>
					</a>
				</li>
			</ul>
		</div>
		<a style="display: none;" id="dropdown-toggle" class="count sansSB show">All<i class="fa fa-angle-down accordionArrow"></i></a>
	</nav>
	<div class="dropdown show mobileTabDiv" id="idForDiv" style="display: none;">
		<ul class=" mobileViewTabUL " id="">
			<div class="dropdown-header">
				<p class="count">All Category</p>
				<a class="close" id="tabDropdownclose"><span aria-hidden="true">X</span></a>
			</div>
			<li role="presentation" id="tab-28" title="Personal Details" class=" customClassForTabLiactive ">
				<a href="#fragment-28" data-attr="#fragment-28" role="tab" data-toggle="tab" aria-expanded="false">
					<div class="tabicon"><i class="applicationprofile"></i></div>
					<div class="tabtext sansSB customTabNameClass"><span>College Selection</span></div>
				</a>
			</li>
			
		</ul>
	</div>
</div>

<div id="fragment-28" class="tabs-container tab-container" style="border: none;">
	<section class="container-fluid" id="dataSection"  style="">
		<div class="customTabContainerDiv" id="" style="">
			<div class="tab-insidecontent customSectionDivClass newTabHeading" id="section_1_heading_div">
				<span id="PersonalDetails_span">Search Filter</span>
			</div>
			<div class="tab-insidecontent" style="margin-top: -1px;">
				<div class="row rowTopMargin" style="">
					<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 marginTop alignLeftClass margintop5">
						<div style="float:right;">
							<label>Select Course</label>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 marginTop alignLeftClass" id="txtCourseChoice_divContainer">
						<select title="---Select---" id="txtCourseChoice" name="txtCourseChoice" class="mandatoryinput fontAndColor form-control selectpicker bs-select-hidden"
						data-live-search="true" onchange="clearErrorDivAndRedBorder(this.id);">
							<option value="">---Select---</option>
							<option value="SA" title="Science">Science</option>
							<option value="SA" title="Agriculture">Agriculture</option>
							<option value="AC" title="Commerce">Commerce</option>
							<option value="AC" title="Arts">Arts</option>
						</select>
						<span class="errortxt errorSpanCustomClass"  id="txtCourseChoice_errorSpan">Please select Course.</span>
					</div>
				</div>
				<div class="row rowTopMargin">
					<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 marginTop alignLeftClass margintop5">
						<div style="float:right;">
							<label>Select Gender</label>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 marginTop alignLeftClass" id="txtSearchGender_divContainer">
						<select title="---Select---" id="txtSearchGender" name="txtSearchGender" class="mandatoryinput fontAndColor form-control selectpicker bs-select-hidden"
						data-live-search="true" onchange="clearErrorDivAndRedBorder(this.id);onchangeGender();">
							<option value="">---Select---</option>
							<option value="Male" title="Male">Male</option>
							<option value="Female" title="Female">Female</option>
							<option value="Transgender" title="Transgender">Transgender</option>
						</select>
						<span class="updateTooltipText" style="font-weight: bold; font-size: 12px; color: firebrick;">(Update Gender if filled wrong in application form)</span><br>
						<span class="errortxt errorSpanCustomClass"  id="txtSearchGender_errorSpan">Please select Gender.</span>
					</div>
					
					<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 marginTop alignLeftClass margintop5">
						<div style="float:right;">
							<label>Did you had Sanskrit in graduation as core subject?</label>
							<br/><label>क्या आपने अपने स्नातक पाठयक्रम में संस्कृत विषय का अध्ययन मुख्य विषय के रूप में किया है ?</label>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 marginTop alignLeftClass" id="txtIsSanskrit_divContainer">
						<select title="---Select---" id="txtIsSanskrit" name="txtIsSanskrit" class="mandatoryinput fontAndColor form-control selectpicker bs-select-hidden"
						data-live-search="true" onchange="clearErrorDivAndRedBorder(this.id)">
							<option value="">---Select---</option>
							<option value="No" title="No">No</option>
							<option value="No" title="In 1st Year Only">In 1st Year Only</option>
							<option value="No" title="In 1st Year and 2nd Year Only">In 1st Year and 2nd Year</option>
							<option value="Yes" title="In all the three years">In all the three years</option>
						</select>
						<span class="updateTooltipText" style="font-weight: bold; font-size: 12px; color: firebrick;">(Update option for Sanskrit if you had this subject in the final year of Graduation)</span><br>
						<span class="errortxt errorSpanCustomClass" id="txtIsSanskrit_errorSpan">Please select Did you have Sanskrit in final year graduation</span>
					</div>
				</div>
			</div>
			<div class="btndiv customClassForBtnDiv width100" style="margin: 0px !important;" id="Search_div" align="center">
			
				<div style="margin-top: 10px;">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="alert alert-warning" role="alert">
							<table width="100%">
								<tbody>
									<tr>
										<td class="noteTd"><span><b>NOTE</b></span></td><td></td>
										<td class="noteContentTd">
											<span>The above details can be changed only once. After saving and continuing no further changes would be allowed.</span>
											<br/><span>उपरोक्त परिवर्तन केवल एक बार ही किया जा सकता है। महाविद्यालय आवंटन की आगे की प्रक्रिया इसी परिवर्तित विवरण के आधार पर ही की जायेगी।</	</span>
										</td>
									</tr>
									<tr>
										<td class="noteTd"><span><b></b></span></td>
										<td> </td>
										<td class="noteContentTd">
											<span>If <b>'In all the three years'</b> is selected in <b>'Did you have Sanskrit in graduation as core subject'</b> then the candidates should have fulfill one of the following eligibilty condition:</span>
											<br/><span> यदि  <b> 'क्या आपने स्नातक पाठ्यक्रम में संस्कृत विषय का अध्ययन मुख्य विषय के रूप में अध्ययन किया है'  </b>  के अंतर्गत   <b> 'समस्त तीन वर्षों में'  </b>  का चुनाव किया है तो आपके द्वारा निम्नांकित में से एक अर्हता धारित करना आवश्यक है ।</: </span>
										</td>
									</tr>
									<tr>
										<td class="noteTd"></td>
										<td></td>
										<td class="noteContentTd">
											<span>Obtained at least 50% marks in three years Shastri examination from Sampurnanand Sanskrit University</span>
											<br/><span>सम्पूर्णानन्द संस्कृत विश्वविद्यालय से शास्त्री परीक्षा न्यूनतम 50 प्रतिशत अंको के साथ उत्तीर्ण की हो   </span>
										</td>
									</tr>
									<tr>
										<td></td>
										<td></td>
										<td style="padding-left: 287px;"><b>OR/अथवा</</b></td>
									</tr>
									<tr>
										<td class="noteTd"></td>
										<td></td>
										<td class="noteContentTd">
											<span>Passed two years Shastri examination with at least 50% marks before 1990 from Sampurnanand Sanskrit University</span>
											<br/><span>सम्पूर्णानन्द संस्कृत विश्वविद्यालय की शास्त्री द्विवर्षीय परीक्षा न्यूनतम 50 प्रतिशत अंको के साथ वर्ष 1990 के पूर्व उत्तीर्ण की हो</</</        	</span>
										</td>
									</tr>
									<tr>
										<td></td>
										<td></td>
										<td style="padding-left: 287px;"><b>OR/अथवा</b></td>
									</tr>
									<tr>
										<td class="noteTd"></td>
										<td></td>
										<td class="noteContentTd">
											<span>Passed three years graduation examination and Sanskrit in all three years or Shastri degree from any other University established by law with at least 50% marks</span>
											<br/><span>	विधि द्वारा स्थापित किसी अन्य विश्वविद्यालय से न्यूनतम 50 % अंको के साथ तीनो वर्षों में संस्कृत विषय के साथ त्रिवर्षीय स्नातक परीक्षा अथवा शास्त्री परीक्षा उत्तीर्ण की हो।   </span>
										</td>
									</tr>
									<tr>
										<td></td>
										<td></td>
										<td style="padding-left: 287px;"><b>OR/अथवा</b></td>
									</tr>
									<tr>
										<td class=""></td>
										<td></td>
										<td class="noteContentTd">
											<span>Passed two year Shastri or Sanskrit as optional subject in two years graduation examination till 1985 from any other University established by law with at least 50% marks</span>
											<br/><span>विधि द्वारा स्थापित किसी भी विश्वविद्यालय से द्विवर्षीय शास्त्री परीक्षा अथवा वैकल्पिक विषय के रुप में संस्कृत विषय के साथ स्नातक परीक्षा वर्ष 1985 या पूर्व में न्यूनतम 50 प्रतिशत विषयों के साथ उत्तीर्ण कर ली हो।</          	</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				
				<div>
					<!-- <a onclick="closeConfirmation();" class="check" id="close_button" data-toggle="tooltip" title="" data-original-title="Close">Close</a> -->
					<a onclick="validateSearchFilter()" class="check" id="Search_button" data-toggle="tooltip" title="" data-original-title="Save and Continue">Save and Continue</a>
				</div>
			</div>
		</div>
		
		<div id="sectionAfterSearch" style="display:none;">
			<div class="">
					<div class="col-lg-12 col-md-12 col-sm-12  col-xs-12">
						<div role="alert" class="alert alert-warning" id="loginNOte">
							<div class="row">
								<div class="col-lg-12 col-md-12 col-xs-13 col-sm-13">
									<div class="">
										<table>
											<tbody>
												<tr>
													<td style="vertical-align: top;">
														<span style="color: red;"><h5> <b> <i class="fa fa-exclamation-triangle"></i> &nbsp;Important Note / महत्वपूर्ण सूचना</	 :</b> </h5></span>
													</td>
												</tr>
												<tr>
													<td style="padding-top: 1px;">
														<span style="color: red;font-weight: bold;"> &nbsp;
															Candidates are advised to give more choices to avoid rejection in allotment. <br/>

															अभ्यर्थियों को सलाह दी जाती है की वे आवंटन में अस्वीकृति से बचने के लिए अधिक विकल्प दें । 	<br/> 
															
															Choices can be previewed and rearranged any number of times till final submission. 	<br/>
															
															अंतिम सबमिशन तक विकल्पों का पूर्वावलोकन और पुनर्व्यवस्थित किया जा सकता है।			<br/> 
															
															Choices can be filled in multiple sessions. There is option to save these choices before logging out. Data not saved will be lost 	<br/>
															
															विकल्प कई सत्रों में भरे जा सकते हैं। लॉग आउट करने से पहले इन विकल्पों को सेव करते रहना चाहिए। जो डेटा सेव नहीं किया गया है वह खो जायेगा।		<br/> 
															
															The choices filled by the candidate are final and cannot be changed once locked. Thus in their own interest, candidates must fill in a sufficiently large number of choices of college in required order of preference. <br/> 
															
															अभ्यर्थी द्वारा भरे गए विकल्प अंतिम हैं और एक बार लॉक होने के बाद इसे बदला नहीं जा सकता है । इस प्रकार, अपने स्वयं के हिट में, अभ्यर्थियों को वरीयता के आवश्यक क्रम में अधिक से अधिक संख्या में कॉलेज के विकल्पों को भरना होगा ।		<br/>
															 
														</span>
													</td>
												</tr>
												<!-- <tr>
													<td style="padding-top: 1px;">
														<span style="color: black;"><i class="fa fa-check-square"></i> &nbsp;
															The college having college code SL1039 (KARAMAT HUSAIN MUSLIM GIRLS DEGREE COLLEGE, LUCKNOW College Fees is Rs. 65250/-) or 
															SG1956 (ST. ANDREWS COLLEGE, GORAKHPUR College fees is Rs. 75000/-), the balance college fees is to be deposited at the time of admission in the college. 
														</span>
													</td>
												</tr> -->
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>	
			<div class="row rowTopMargin" style="margin-left: 10%;margin-top: 30px; margin-bottom: 30px;">
				<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 marginTop alignLeftClass margintop5">
					<div style="float:right;">
						<label>University Name</label>
					</div>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 marginTop alignLeftClass" id="txtUniversityCode_DD_divContainer">
					<select title="---Select---" id="txtUniversityCode_DD" name="txtUniversityCode_DD" onchange="createCollegeTable(this.id, this.value);clearErrorDivAndRedBorder(this.id);" 
					class="mandatoryinput fontAndColor form-control selectpicker bs-select-hidden"  data-live-search="true">
						<option value="">---Select---</option>
					</select>
					<span class="errortxt errorSpanCustomClass"  id="universityName_errorSpan">Please select University Name.</span>
				</div>
			</div>
		<div class="tab-insidecontent" style="border: 1px solid #ddd; padding: 0px;">
		<div class="tab-insidecontent customSectionDivClass newTabHeading" style="margin: 0px;">Available Colleges</div>
			<div class="overflwScrollDv">
				<table id="no-more-tables"
					class="table removemarginbottom postdatatable table-striped">
					<thead>
						<tr>
							<th><label id="">College Code</label></th>
							<th><label id="">College Name</label></th>
							<th><label id="">Course Code</label></th>
							<th><label id="">Type of College</label></th>
							<th><label id="">College Category</label></th>
							<th><label id="">Add Preference</label></th>
						</tr>
					</thead>
					<tbody id="collegeListBody"></tbody>
				</table>
			</div>
		</div>
		
		<div class="tab-insidecontent" style="margin-top: 20px;border: 1px solid #ddd; padding: 0px;">
			<div class="tab-insidecontent customSectionDivClass newTabHeading" style="margin: 0px;">Finally Selected Preferences</div>
				<div class="overflwScrollDv" id="finalPreferenceTable">
				<table id="no-more-tables" class="table removemarginbottom postdatatable table-striped">
					<thead id="selectedCollegeHead"></thead>
					<tbody id="selectedCollegeList"></tbody>
				</table>
			</div>
		</div>
		<div class="customTabContainerDiv" id="">
			<div class="tab-insidecontent customSectionDivClass newTabHeading" id="">
				<span id="">Declaration</span>
			</div>
			<div class="tab-insidecontent customSectionDivClass" id="sectionData_Declaration_13" style="margin-top: -1px;">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 inheritHeight">
						<table>
							<tbody>
								<tr>
									<td style="vertical-align: top;">
										<input id="acceptanceCHK" onclick="clearErrorDivAndRedBorder('acceptanceCHK');" class="mandatoryinput" 
										style="vertical-align: sub;" autocomplete="off" name="acceptanceCHK" value="" type="checkbox"/>
									</td>
									<td style="padding-left: 7px;cursor: pointer;" onclick="toggleCheckBox('acceptanceCHK')">
										<p style="margin-bottom: 0;font-weight: bold;">
											I accept that if I have submitted the choices but not locked till the last date of choice filling is over, it will automatically be locked before seat allotment. I will accept the university/college/institute allotted to me on the basis of my state rank and choices submitted  
											<br/>
											मैं स्वीकार करता हूँ की यदि मेरे द्वारा चुने हुए विक्लप अंतिम तिथि तक मेरे द्वारा लॉक नहीं किया जाता है तो वह सीट आवंटन से पूर्व स्वतः लॉक हो जायेगा ।मेरी राज्य स्तरीय रैंक एवं मेरे द्वारा चुने गए विकल्पों के आधार पर आवंटित विश्वविद्यालय/कॉलेज/ संसथान को मैं स्वीकार करूँगा ।
											<br/> 
										</p>
									</td>
								</tr>
								
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

		<div class="btndiv customClassForBtnDiv width100" style="margin-left:0px !important;" id="submit_div" align="center">
			<div class="">
			<a onclick="closeViewPage();" class="check" id="close_button" data-toggle="tooltip" title="Close" style="display:none;">CLOSE</a>
			<a onclick="createPreview();" class="check" id="preview_button" data-toggle="tooltip" title="Preivew">PREVIEW</a>
			<a onclick="doValidate('Save')" class="check" id="save_button" data-toggle="tooltip" title="Save">SAVE AS DRAFT</a>
			<a onclick="doValidate('Submit');" class="check" id="finalSubmit_button" data-toggle="tooltip" title="Final Submit">LOCK CHOICE</a>
			
		</div>
		</div>
		</div>
	</section>
	
	<section id="previewSection" style="display:none;">
		<div class="tab-insidecontent" style="margin-top: 20px;border: 1px solid #ddd; padding: 0px;">
			<div class="tab-insidecontent customSectionDivClass newTabHeading" style="margin: 0px;">Preview of Selected College</div>
			<div class="" id="">
				<table id="no-more-tables" class="table removemarginbottom postdatatable table-striped">
					<thead>
						<tr>
							<th><label id="">Preference</label></th>
							<th><label id="">University Code</label></th>
							<th><label id="">University Name</label></th>
							<th><label id="">College Code</label></th>
							<th><label id="">College Name</label></th>
							<th id="stream_preview"><label id="">Stream</label></th>
							<th><label id="">Type of College</label></th>
							<th><label id="">College Category</label></th>
						</tr>
					</thead>
					<tbody id="selectedCollegePreview"></tbody>
				</table>
			</div>
		</div>
		<div class="btndiv customClassForBtnDiv width100" style="margin-left:0px !important;" id="submit_div" align="center">
			<div class="">
				<a onclick="closePreviewSection();" class="check" id="" data-toggle="tooltip" title="Close">Close</a>
			</div>
		</div>
	</section>
</div>

<div align="center" id="alertMsgPopulateDiv" class="pop" style="display: none;">
 	<div style="display: block;height: 30%;" id="myPop2"></div>
	<div style="overflow: auto;height: 260px;border: 5px solid lightgray;border-radius: 10px;width: 325px;" class="pop-content">
		<div class="" id="alertMsgPopulate" style="overflow: auto;text-align: center;padding:30px 5px 0px 5px;height: 196px;background-color: white;font-size: 14px;"></div>
		<div class="pop-footer" id="" style="">
			<button type="button" class="btn btn-info Ok_button" onclick="$('#alertMsgPopulateDiv').fadeOut(100);">OK</button> 
		</div>
	</div>
	<div style="display: block;" id="myPop3"></div>
</div>

<div id="loader" class="loaderDivClass" style=""> <img class="loaderImgClass" src="images/onlineAppForm/loader.gif"></div>

<div class="modal fade" id="confirmationPopup" role="dialog" data-backdrop="static" data-keyboard="false">
	<div class="modal-dialog" align="center" style="margin-top:12%;">
		<div class="modal-content" style="width: 50%;">
			<div class="modal-header">
				<h4 class="modal-title" id="invalidDataHeader">Confirmation</h4>
			</div>
			<div class="modal-body">
				<div class="" id="confirmMsg"></div>
			</div>
			<div class="modal-footer">
				<button type="button" id="confirmAction" data-dismiss="modal" class="btn btn-default" onclick="">OK</button>
				<button type="button" data-dismiss="modal" class="btn btn-default" onclick="closeInvalidDataModal();">Cancel</button>
			</div>
		</div>
	</div>
</div>

<div align="center" id="timerDiv" class="pop" style="display:none;">
 	<div style="display: block;height: 30%;" id=""></div>
	<div class="modal-dialog" >
		<div class="modal-content" style="width: 60%;">
			<div class="modal-header">
				<h4 class="modal-title" id="">Note</h4>
			</div>
			<div class="modal-body" style=" text-align: left;">
				<div class="">
					<p>Session expires in <span id="timer_span" style="color:red;"></span><p>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" data-dismiss="modal" class="btn btn-default" onclick="$('#timerDiv').fadeOut(100);">OK</button>
			</div>
		</div>
	</div>
	<div style="display: block;" id="myPop3"></div>
</div>

<input type="hidden" value="" id="txtRegistrationNumber" name="txtRegistrationNumber" />
<input type="hidden" value="" id="txtAppName" name="txtAppName" />
<input type="hidden" value="" id="txtEmail" name="txtEmail" />
<input type="hidden" value="" id="txtMobile" name="txtMobile" />
<input type="hidden" value="" id="txtAlternateMobile" name="txtAlternateMobile" />
<input type="hidden" value="" id="txtGender" name="txtGender" />
<input type="hidden" value="" id="txtCategory" name="txtCategory" />
<input type="hidden" value="" id="isPWD" name="isPWD" />
<input type="hidden" value="" id="txtDisabilityType" name="txtDisabilityType" />
<input type="hidden" value="" id="isBlind" name="isBlind" />
<input type="hidden" value="" id="txtStateDomicile" name="txtStateDomicile" />
<input type="hidden" value="" id="txtSubCategory" name="txtSubCategory" />
<input type="hidden" value="" id="txtIsExserviceman" name="txtIsExserviceman" />
<input type="hidden" value="" id="isFreedomFIghter" name="isFreedomFIghter" />
<input type="hidden" value="" id="isDefence" name="isDefence" />
<input type="hidden" value="" id="txtRank" name="txtRank" />
<input type="hidden" value="" id="txtRollNumber" name="txtRollNumber" />
<input type="hidden" value="" id="optedStream" name="optedStream" />
<input type="hidden" value="" id="txtStreamCode" name="txtStreamCode" />
<input type="hidden" value="" id="txtUniversityCode" name="txtUniversityCode" />
<input type="hidden" value="" id="txtCollegeCode" name="txtCollegeCode" />
<input type="hidden" value="" id="txtCollegePreference" name="txtCollegePreference" />
<input type="hidden" value="" id="isFinalSubmit" name="isFinalSubmit" />
<input type="hidden" value="" id="txtIsDuplicate" name="txtIsDuplicate" />
<input type="hidden" value="" id="txtIsEligibleForCounselling" name="txtIsEligibleForCounselling" />
<input type="hidden" value="" id="txtRound" name="txtRound" />
<input type="hidden" value="" id="txtPhase" name="txtPhase" />
<input type="hidden" value="" id="txtIsCounsellingFeePaid" name="txtIsCounsellingFeePaid" />
<input type="hidden" value="" id="txtIsChoiceFilled" name="txtIsChoiceFilled" />
<input type="hidden" value="" id="txtIsSeatAlotted" name="txtIsSeatAlotted" />
<input type="hidden" value="" id="txtallotmentDate" name="txtallotmentDate" />
<input type="hidden" value="" id="txtCollegeSeatCategory" name="txtCollegeSeatCategory" />
<input type="hidden" value="" id="txtPreferenceNumber" name="txtPreferenceNumber" />
<input type="hidden" value="" id="txtIsDecisionTaken" name="txtIsDecisionTaken" />
<input type="hidden" value="" id="txtActionTaken" name="txtActionTaken" />
<input type="hidden" value="" id="txtIsWithdrawn" name="txtIsWithdrawn" />
<input type="hidden" value="" id="txtIsDirectAdmission" name="txtIsDirectAdmission" />
<input type="hidden" value="" id="R1_txtIsCounsellingFeePaid" name="R1_txtIsCounsellingFeePaid" />
<input type="hidden" value="" id="R1_txtIsChoiceFilled" name="R1_txtIsChoiceFilled" />
<input type="hidden" value="" id="R1_txtIsSeatAlotted" name="R1_txtIsSeatAlotted" />
<input type="hidden" value="" id="R1_txtallotmentDate" name="R1_txtallotmentDate" />
<input type="hidden" value="" id="R1_txtUniversityCode" name="R1_txtUniversityCode" />
<input type="hidden" value="" id="R1_txtCollegeCode" name="R1_txtCollegeCode" />
<input type="hidden" value="" id="R1_txtStreamCode" name="R1_txtStreamCode" />
<input type="hidden" value="" id="R1_txtCollegeSeatCategory" name="R1_txtCollegeSeatCategory" />
<input type="hidden" value="" id="R1_txtPreferenceNumber" name="R1_txtPreferenceNumber" />
<input type="hidden" value="" id="R1_txtIsDecisionTaken" name="R1_txtIsDecisionTaken" />
<input type="hidden" value="" id="R1_txtActionTaken" name="R1_txtActionTaken" />
<input type="hidden" value="" id="R1_txtIsWithdrawn" name="R1_txtIsWithdrawn" />
<input type="hidden" value="" id="R2_txtIsCounsellingFeePaid" name="R2_txtIsCounsellingFeePaid" />
<input type="hidden" value="" id="R2_txtIsChoiceFilled" name="R2_txtIsChoiceFilled" />
<input type="hidden" value="" id="R2_txtIsSeatAlotted" name="R2_txtIsSeatAlotted" />
<input type="hidden" value="" id="R2_txtallotmentDate" name="R2_txtallotmentDate" />
<input type="hidden" value="" id="R2_txtUniversityCode" name="R2_txtUniversityCode" />
<input type="hidden" value="" id="R2_txtCollegeCode" name="R2_txtCollegeCode" />
<input type="hidden" value="" id="R2_txtStreamCode" name="R2_txtStreamCode" />
<input type="hidden" value="" id="R2_txtCollegeSeatCategory" name="R2_txtCollegeSeatCategory" />
<input type="hidden" value="" id="R2_txtPreferenceNumber" name="R2_txtPreferenceNumber" />
<input type="hidden" value="" id="R2_txtIsDecisionTaken" name="R2_txtIsDecisionTaken" />
<input type="hidden" value="" id="R2_txtActionTaken" name="R2_txtActionTaken" />
<input type="hidden" value="" id="R2_txtIsWithdrawn" name="R2_txtIsWithdrawn" />
<input type="hidden" value="" id="R3_txtIsCounsellingFeePaid" name="R3_txtIsCounsellingFeePaid" />
<input type="hidden" value="" id="R3_txtIsChoiceFilled" name="R3_txtIsChoiceFilled" />
<input type="hidden" value="" id="R3_txtIsSeatAlotted" name="R3_txtIsSeatAlotted" />
<input type="hidden" value="" id="R3_txtallotmentDate" name="R3_txtallotmentDate" />
<input type="hidden" value="" id="R3_txtUniversityCode" name="R3_txtUniversityCode" />
<input type="hidden" value="" id="R3_txtCollegeCode" name="R3_txtCollegeCode" />
<input type="hidden" value="" id="R3_txtStreamCode" name="R3_txtStreamCode" />
<input type="hidden" value="" id="R3_txtCollegeSeatCategory" name="R3_txtCollegeSeatCategory" />
<input type="hidden" value="" id="R3_txtPreferenceNumber" name="R3_txtPreferenceNumber" />
<input type="hidden" value="" id="R3_txtIsDecisionTaken" name="R3_txtIsDecisionTaken" />
<input type="hidden" value="" id="R3_txtActionTaken" name="R3_txtActionTaken" />
<input type="hidden" value="" id="R3_txtIsWithdrawn" name="R3_txtIsWithdrawn" />
<input type="hidden" value="" id="txtCounsellingExtra1" name="txtCounsellingExtra1" />
<input type="hidden" value="" id="txtCounsellingExtra2" name="txtCounsellingExtra2" />
<input type="hidden" value="" id="txtCounsellingExtra3" name="txtCounsellingExtra3" />
<input type="hidden" value="" id="txtCounsellingExtra4" name="txtCounsellingExtra4" />
<input type="hidden" value="" id="txtCounsellingExtra5" name="txtCounsellingExtra5" />
<input type="hidden" value="" id="txtCounsellingExtra6" name="txtCounsellingExtra6" />
<input type="hidden" value="" id="txtCounsellingExtra7" name="txtCounsellingExtra7" />
<input type="hidden" value="" id="txtCounsellingExtra8" name="txtCounsellingExtra8" />
<input type="hidden" value="" id="txtCounsellingExtra9" name="txtCounsellingExtra9" />
<input type="hidden" value="" id="txtCounsellingExtra10" name="txtCounsellingExtra10" />
<input type="hidden" value="" id="txtExtraFlag1" name="txtExtraFlag1" />
<input type="hidden" value="" id="txtExtraFlag2" name="txtExtraFlag2" />
<input type="hidden" value="" id="txtExtraFlag3" name="txtExtraFlag3" />
<input type="hidden" value="" id="txtExtraFlag4" name="txtExtraFlag4" />
<input type="hidden" value="" id="txtExtraFlag5" name="txtExtraFlag5" />
<input type="hidden" value="" id="txtExtra1" name="txtExtra1" />
<input type="hidden" value="" id="txtExtra2" name="txtExtra2" />
<input type="hidden" value="" id="txtExtra3" name="txtExtra3" />
<input type="hidden" value="" id="txtExtra4" name="txtExtra4" />
<input type="hidden" value="" id="txtExtra5" name="txtExtra5" />
<input type="hidden" value="" id="txtFatherName" name="txtFatherName" />
<input type="hidden" value="" id="txtMotherName" name="txtMotherName" />
<input type="hidden" value="" id="txtAppDOB" name="txtAppDOB" />
<input type="hidden" value="" id="txtMobileNo" name="txtMobileNo" />
<input type="hidden" value="" id="txtStateRank" name="txtStateRank" />
<input type="hidden" value="" id="txtCategoryRank" name="txtCategoryRank" />
<input type="hidden" value="0" id="txtTotalMarks" name="txtTotalMarks" />
<input type="hidden" value="0" id="txtWrittenTestMarks" name="txtWrittenTestMarks" />
<input type="hidden" value="" id="txtTotalWeightage" name="txtTotalWeightage" />
<input type="hidden" value="" id="txtRegistrationType" name="txtRegistrationType" />
<input type="hidden" value="" id="ExtraDate1" name="ExtraDate1" />
<input type="hidden" value="" id="ExtraDate2" name="ExtraDate2" />
<input type="hidden" value="" id="ExtraDate3" name="ExtraDate3" />
<input type="hidden" value="" id="ExtraDate4" name="ExtraDate4" />
<input type="hidden" value="" id="ExtraDate5" name="ExtraDate5" />
<input type="hidden" value="" id="ExtraInt1" name="ExtraInt1" />
<input type="hidden" value="" id="ExtraInt2" name="ExtraInt2" />
<input type="hidden" value="" id="ExtraInt3" name="ExtraInt3" />
<input type="hidden" value="" id="ExtraInt4" name="ExtraInt4" />
<input type="hidden" value="" id="ExtraInt5" name="ExtraInt5" />
<input type="hidden" value="" id="txtExtra6" name="txtExtra6" />
<input type="hidden" value="" id="R1_txtRegistrationType" name="R1_txtRegistrationType" />
<input type="hidden" value="" id="R2_txtRegistrationType" name="R2_txtRegistrationType" />
<input type="hidden" value="" id="R3_txtRegistrationType" name="R3_txtRegistrationType" />
<input type="hidden" value="" id="txtCounsellingStream" name="txtCounsellingStream" />

<script>
	$(document).ready(function()
	{
	    $('[data-toggle="tooltip"]').tooltip(); 
	    setMandetoryClassForDD();
	    $(".selectpicker").selectpicker("refresh");
	    generateErrorMessagesForMandatory();
	    $('body').on('click', '.up,.down', function()
	    {
	    	var row = $(this).closest('tr');
	        if ($(this).hasClass('up'))
	            row.prev().before(row);
	        else  if ($(this).hasClass('down'))
	            row.next().after(row);
	        setPreferenceOrderAfterRemove();
	    });
	});
	function closeInvalidDataModal()
	{
		setValue("txtSearchGender", "");
		$("#txtSearchGender").selectpicker("refresh");
	}
</script>
									
									<div  id="uploadfile"></div>
	
								</div>

								
								<div id="submitButton" class="butonhldr" ></div>
							</td>
						</tr>
						
						
								<tr>
									<td style="text-align:center;" class="hinttext">Version 14.04.01
									<!--<a class="LovPopup">Click here to choose key</a>-->
									</td>
								</tr>
                             

							
					
					</table>
					
					
				
					<div class="overlayBG" style="display: none;"></div>
					<div class="popup1" style="display: none;" id="popupGrid">

	<div class="popup_div">
	<div class="portlet_topper">
	<div class="popupheader" id="popuptitle">Popup Title</div>
	<div class="arrowplace"><a class="remove_popup" href="#nogo"
		onclick="fnCloseGridPopup()">Close</a></div>
	</div>

	<div style="border-top: 1px solid #8BABC2; height: 1px; width: 100%;"></div>
	<div class="popup_content">
					
	<iframe width="100%" height="100%"
		style="border: 0;" id="imageuploadwithmodal" src=""> </iframe>				
	

		 </div>
					


	</div>
	</div>
	<style>
	.popup_div {
	z-index: 2;
	position: fixed;
}

.portlet_topper {
	height: 24px;
	background: url(../EForms/images/onlineAppForm/bg_portlet_top.gif)
		repeat-x top left;
	padding: 0px 5px 0px 10px;
	cursor: move;
}

.popupheader {
	display: inline;
	font-size: 10pt;
	color: #fff;
	font-weight: bold;
	float: left;
	font-family: Tahoma, Geneva, sans-serif;
	line-height: 24px;
	float: left;
}

.popupfilesheader {
	height: 33px;
	line-height: 33px;
	background: url(../EForms/images/onlineAppForm/bg_popupfilesheader.gif)
		repeat-x top left;
	padding-left: 10px;
	font-size: 11px;
	font-family: Tahoma, Geneva, sans-serif;
}

.arrowplace {
	float: right;
	font-size: 11px !important;
	line-height: 24px;
	color: #fff;
}

.arrowplace a {
	color: #fff;
	text-decoration: none;
	padding-right: 15px;
	background: url(../EForms/images/onlineAppForm/ico_close2.gif) no-repeat
		right 7px;
	display: block;
}

.arrowplace a:hover {
	color: #fff;
	text-decoration: underline;
}

.popup_content { /*padding:7px 20px 10px 20px;*/
	background: #d6e3e9 url(../EForms/images/onlineAppForm/popupbg.gif)
		repeat-x top left;
	font-family: Tahoma, Geneva, sans-serif;
}

.popup_button_area {
	background: #d6e3e9;
	padding: 10px;
}

.butonhldr_popup {
	background: none repeat scroll 0 0 #D8E3E9;
}

.dwnld {
	background: none repeat scroll 0 0 #3B7CBE !important;
	border-radius: 3px 3px 3px 3px;
	color: #FFFFFF !important;
	font-size: 11px !important;
	padding: 2px 4px;
	text-align: center;
	text-decoration: none !important;
	width: 60px;
}

#backgroundPopup {
	display: none;
	position: fixed;
	_position: absolute; /* hack for internet explorer 6*/
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	background: #000000;
	border: 1px solid #cecece;
	z-index: 1;
}

#popupContact {
	display: none;
	position: fixed;
	_position: absolute; /* hack for internet explorer 6*/
	width: 400px;
	background: #FFFFFF;
	border: 1px solid #97A5B0;
	z-index: 2;
	padding: 12px;
	font-size: 13px;
}

#popupContact h1 {
	text-align: left;
	color: #6FA5FD;
	font-size: 22px;
	font-weight: 700;
	border-bottom: 1px dotted #D3D3D3;
	padding-bottom: 2px;
	margin-bottom: 20px;
}

#popupContactClose {
	font-size: 14px;
	line-height: 14px;
	right: 6px;
	top: 4px;
	position: absolute;
	color: #6fa5fd;
	font-weight: 700;
	display: block;
}

#popupChangePassword {
	display: none;
	position: fixed;
	_position: absolute; /* hack for internet explorer 6*/
	width: 400px;
	background: #FFFFFF;
	border: 1px solid #97A5B0;
	z-index: 2;
	padding: 12px;
	font-size: 13px;
}

#popupChangePasswordClose {
	font-size: 14px;
	line-height: 14px;
	right: 6px;
	top: 4px;
	position: absolute;
	color: #6fa5fd;
	font-weight: 700;
	display: block;
}

/*Dropzone css changes */
.dropzone .dz-preview .dz-details .dz-filename{width:135px}
@media screen and (max-width: 580px) {
.dropzone{min-height:120px !important}
.dropzone .dz-preview .dz-details{padding:5px 0;top:auto;left:0;}
.dropzone .dz-preview .dz-progress {left:187%;top:0;width:250%;}
}

	</style>
		 
		  
		<input type="hidden" name="sessChk" id="sessChk" value="1665375811834" /> 
		<input type="hidden" name="checksum" id="checksum" value="+xzG6eZciNpOWHYmZtr/Mg==" /> 
		<input type="hidden" name="tabListForm" id="tabListForm" value="" /> 
		<input type="hidden" name="copyrightYear" id="copyrightYear" value="2022"> 
     
		
					<input type="hidden" name="subAction" value="" id="subAction">
					<input type="hidden" name="orgId" value="1936" id="orgId">
					<input type="hidden" name="formId" value="76621" id="formId">
					<input type="hidden" name="siteMasterFieldName" value="" id="siteMasterFieldName">
					<input type="hidden" name="onloadMethod" value="document.forms[0].reset(); fnRetrieveMasterData();init_captcha();onLoadOfApplication();" id="onloadMethod">
					<input type="hidden" name="preSubmitValidation" value="DUMMY" id="preSubmitValidation">
					<input type="hidden" name="jsFile" value="js/onlineAppForm/form76621.js" id="jsFile">
					<input type="hidden" name="appSeqNo" value="" id="appSeqNo">
                    <input type="hidden" name="entityId" value="" id="entityId"> 
                    
                    <input type="hidden" name="multilingualLanguageSelected" value="" id="multilingualLanguageSelected"> 
                    
                    
                    <input type="hidden" name="isRedirect" id="isRedirect" value="N"/>			
					<input type="hidden" name="txtFileName" id="txtFileName" value="" />
					<input type="hidden" name="txtFilePath" id="txtFilePath" value="" />
					<input type="hidden" id="txtFilePathEdit" name="txtFilePathEdit"/>
					<input type="hidden" id="txtFileNameEdit" name="txtFileNameEdit"/>
					<input type="hidden" name="txtFileDisplayName" id="txtFileDisplayName" value="" />
					<input type="hidden" name="secValidation" id="secValidation" />
					
					<input type="hidden" name="OID" id="OID" value="1936"/>
					<input type="hidden" name="FID" id="FID" value="76621"/>


					<input type="hidden" name="vClassName" id="vClassName" value=""/>
					<input type="hidden" name="dateFormat" id="dateFormat" value="dd/mm/yyyy"/>
					<input type="hidden" name="ajaxMethod" id="ajaxMethod" value="ajaxValidationForEntity1()"/>
					<input type="hidden" name="isAdminEdit" id="isAdminEdit" value="N" />
					<input type="hidden" name="paymentGatewayType" id="paymentGatewayType" value="online" />
					<input type="hidden" name="screenName" id="screenName" /> 
					<input type="hidden" name="PreSubmitValidation" id="PreSubmitValidation" />
					<input type="hidden" name="imgChkSum" id="imgChkSum" value="Y8elvP9%2Bw6puTwytpwZQlbzr1pbt%2FRyfVAJqwCvqB3A%3D"/>
<input type="hidden" name="usrempno" value="" id="usrempno">
	<input type="hidden" name="userSiteIds" value="" id="userSiteIds">
	<input type="hidden" name="userSiteNames" value="" id="userSiteNames">
					<input type="hidden" name="strDisplayProfile" id="strDisplayProfile"  value="" />
					<input type="hidden" name="eicuListing" id="eicuListing" value=""/>
					<input type="hidden" name="parentAppSeqNo" id="parentAppSeqNo" value=""/>
					<input type="hidden" name="listingTabId" id="listingTabId" value=""/>
					<input type="hidden" name="ListingParentFormId" id="ListingParentFormId" value=""/>
					<input type="hidden" name="tabId" id="tabId" value=""/>
	 				<input type="hidden" name="isFormMultilingualRequired" id="isFormMultilingualRequired" value="N"/>
	 					<input type="hidden" name="consent_required" id="consent_required" value="N"/>
	 				<input type="hidden" name="consent_agreed" id="consent_agreed" value=""/>
	 				<input type="hidden" name="data_deletion" id="data_deletion" value="N"/>
	 				<input type="hidden" name="sendOtpMedia" id="sendOtpMedia" value="SMS"/>

<input type="hidden" id="app_seq_no" name="app_seq_no" value="" />

<input type="hidden" id="applnSequenceField" name="applnSequenceField" value="app_seq_no" />
					<input type="hidden" id="page_no" name="page_no" value="0" />
					
					<script>
						document.onlineAppForm.orgId.value='1936';
						document.onlineAppForm.formId.value='76621';
						if(''=='Y' )
						{
						   
						}	
					</script>
					<input name="LoggedUser" id="LoggedUser" type="hidden" value="" />
					<input name="username" id="username" type="hidden" value="" />

							
							
					<script>
					if(document.getElementById('isAutoCloseWindow')!=null) $('#isAutoCloseWindow').val('');
					else
						{
						
						var isAutoCloseWindow=document.createElement("INPUT");
						isAutoCloseWindow.setAttribute("type","hidden");
						isAutoCloseWindow.setAttribute("id","isAutoCloseWindow");
						isAutoCloseWindow.setAttribute("name","isAutoCloseWindow");
						isAutoCloseWindow.setAttribute("value",'');
						document.onlineAppForm.append(isAutoCloseWindow);
						}
					if(document.getElementById('isNewListingTab')!=null) $('#isNewListingTab').val('N');
					else
					{
						var isNewListingTab=document.createElement("INPUT");
						isNewListingTab.setAttribute("type","hidden");
						isNewListingTab.setAttribute("id","isNewListingTab");
						isNewListingTab.setAttribute("name","isNewListingTab");
						isNewListingTab.setAttribute("value",'N');
						document.onlineAppForm.append(isNewListingTab);
					}
					if(document.getElementById('isSameFormOnSubmit')!=null) $('#isSameFormOnSubmit').val('');
					else
					{
						var isSameFormOnSubmit=document.createElement("INPUT");
						isSameFormOnSubmit.setAttribute("type","hidden");
						isSameFormOnSubmit.setAttribute("id","isSameFormOnSubmit");
						isSameFormOnSubmit.setAttribute("name","isSameFormOnSubmit");
						isSameFormOnSubmit.setAttribute("value",'');
						document.onlineAppForm.append(isSameFormOnSubmit);
					}
					if(document.getElementById('isNewFormOnSubmit')!=null) $('#isNewFormOnSubmit').val('');
					else
					{
						var isNewFormOnSubmit=document.createElement("INPUT");
						isNewFormOnSubmit.setAttribute("type","hidden");
						isNewFormOnSubmit.setAttribute("id","isNewFormOnSubmit");
						isNewFormOnSubmit.setAttribute("name","isNewFormOnSubmit");
						isNewFormOnSubmit.setAttribute("value",'');
						document.onlineAppForm.append(isNewFormOnSubmit);
					}
					if(document.getElementById('NewListingTab')!=null) $('#NewListingTab').val('');
					else
					{
						var NewListingTab=document.createElement("INPUT");
						NewListingTab.setAttribute("type","hidden");
						NewListingTab.setAttribute("id","NewListingTab");
						NewListingTab.setAttribute("name","NewListingTab");
						NewListingTab.setAttribute("value",'');
						document.onlineAppForm.append(NewListingTab);
					}
					if(document.getElementById('NewFormOnSubmit')!=null) $('#NewFormOnSubmit').val('');
					else
					{
						var NewFormOnSubmit=document.createElement("INPUT");
						NewFormOnSubmit.setAttribute("type","hidden");
						NewFormOnSubmit.setAttribute("id","NewFormOnSubmit");
						NewFormOnSubmit.setAttribute("name","NewFormOnSubmit");
						NewFormOnSubmit.setAttribute("value",'');
						document.onlineAppForm.append(NewFormOnSubmit);
					}
					</script>
		 <div id="popupContact" class="popupContact" style="display:none">
		 <a id="popupContactClose" onclick="disablePopup()">x</a>
		<table width="100%"><tr><td class="sectionheading">Search</td></tr></table>
          <div id="populateLovContent"></div>
		  <div id="populateTableContent"></div>
          <input type="hidden" id="lovValue" name="lovValue" value=""/>
          <input type="hidden" id="lovClicked" name="lovClicked" value=""/>
	      </div>
		 
		 
<div class="shadow"  style="overflow-y: scroll;"> </div>
<div class="popup" style="display:none;" id="defineSequencePopup">
<div class="pop_head">
    <div style="float:left;font-size: 14px;"> PREVIEW </div>
    <a href="#nogo" class="pop_minimize_preview" title="Resize" style="float:right;"></a>
    <a href="javascript:fnClosePopupPreview();" class="pop_close" title="Close" style="float:right;"></a> 
    </div>
    <div class="pop_body" style="height:475px;">
   <iframe width="100%" height="100%" style="border:0;" id="frame2" name ="frame2" src="">
	</iframe>	
	</div>
  <div class="popupBtnPanel" ><table width="70%" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td width="44%"></td><td><a class="button blue-btn warningGroup popCancelBtn" href="javascript:fnClosePopupPreview();"><span>Ok</span></a></td></tr></tbody></table></div>
</div>
<div id="backgroundPopup" class="backgroundPopup"></div>
		</form>

<!-- image cropping code starts -->
<script>
$( "body" ).on('click', '.edit-appname-btn', function() {
   // code here
   //alert('me');
	$(this).parents('.crop-table').find('.image-container').show();
 var preString = $(this).parents('.crop-table').find('.image-container').attr('id');

					$(this).parents('.crop-table').find('.cropper').cropper({
						aspectRatio: 1,
						done: function(data) {
							//GET VALUES FROM HERE
							
							$("#"+preString+"_x").val(data.x1);
							$("#"+preString+"_y").val(data.y1);
							$("#"+preString+"_height").val(data.height);
							$("#"+preString+"_width").val(data.width);
						},
						preview: '#'+preString + ' .photo_preview'
					});
			$(window).trigger('resize');
			try{
			popupAlign($('#search-beats-popup').height());
			}catch(e){
				
			}
});
			

$(function() {
	
	jQuery('.file_trigger').on('click',
	function()
	{
		
		jQuery(this).siblings('.file').click();	
	
		var path = jQuery(this).attr('value');
		jQuery(this).siblings('.text-box').val(path);
	});
	
	        jQuery('#search-beats-popup .pop_close, #search-beats-popup .cancel').click(function(){
			
		    var chk=fnChkMandatory();
			if(!chk)
				{
                
                  if (confirm("You haven't uploaded all the mandatory documents,do you still want to close the upload screen?") == true) {
                   jQuery('#search-beats-popup, .shadow').fadeOut('fast');
                  }  

				}else{
                   jQuery('#search-beats-popup, .shadow').fadeOut('fast');
				}
			
			
		});
		
 });
 
 


</script>
<div class="shadow"> </div>

<div id="search-beats-popup" class="popup" style=" display:none;">
  <div class="pop_head">
    <div style="float:left;font-size: 14px;" data-staticKey="Document / Image Upload"> Document / Image Upload </div>
    <a href="#nogo" title="Close" class="pop_close" style="float:right;"></a> </div>
    
  <div id="pop_body">
    </div>
</div>
<div id="pop_bodyNew" style="display:none">
	<div class="modal fade uploadimagepop" tabindex="-1" role="dialog">
  		<div class="modal-dialog upload-modal">
   			 <div class="modal-content">
     			 <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" data-toggle="tooltip" title="Close" ><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" data-staticKey="Document / Image Upload">Document / Image Upload</h4>
      			  </div>
      			  <div class="modal-body clearfix">
     				 <div class="mainblueSubtab clearfix hidden-xs hidden-sm">
      <ul role="tablist" class="list-inline pull-left " id="tabsUL">
      </ul>
      				 </div>
      			  <div class="visible-sm visible-xs clearfix" id="UploadDropdownForMobileOuterDiv"  >
        <div class="tabledropdown pull-right col-sm-4 col-xs-12 padding0"> <div class="form-group" id="tabsDropdownForMobile">
                </div></div>
           </div>
        
					
      
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->


    </div>
    
    
    <div role='dialog' id='captureImageForUpload' class='modal captureImageForUpload fade addNew in' style='z-index: 10050;/* padding-right: 300px;padding-left: 300px; */'>
  <div class='modal-dialog'>
    
<div class='modal-content' style='width: fit-content;/* right: -250px;*/ float: right;right: 25%;'>
    
        <div class='modal-header' style='background-color: #f6f6f6 !important;'>
            
                     <button type='button' class='close' data-dismiss='modal' aria-label='Close' data-toggle='tooltip' title='Close' onclick='javascript:stopvideo("upload");' style='color:black;top: 0px;margin-top: 10px;width: 25px;height: 19px;opacity: 0.8;'><span aria-hidden='true' style=''>x</span></button>
            <div style='text-align: center;padding-bottom: 10px;padding-top: 10px;color: #23b7e5;font-size: 18px;'>Please hit the click button below to capture your photo</div>
        </div>
      
        <div class='modal-body modal-body-default' style='min-height: 100px;'>
            <div style='' class='captureImageSection '>
                
                <div class='videoStream_Upload' id='videoStream_Upload' style='padding-top: 10px;'>
                    <div id='video-container_Upload' style='padding: 10px;background: white;-webkit-box-shadow: 0 1px 10px #D9D9D9;-moz-box-shadow: 0 1px 10px #D9D9D9;-ms-box-shadow: 0 1px 10px #D9D9D9;-o-box-shadow: 0 1px 10px #D9D9D9;box-shadow: 0 1px 10px #D9D9D9;'>
 
                        <video id='camera-stream_Upload' onclick='snapshot(this);' autoplay='' style='padding-left: 0px;padding-right: 0px;max-height: 450px;' width='100%' class=''></video>
                        <video id='camera-streamR_Upload' class='hide' autoplay='' style='padding-left: 0px;padding-right: 0px; max-height: 420px;' width='100%'></video>
                        <canvas id='myCanvas_Upload' class='hide' style='padding-left: 0px;padding-right: 0px;' width='650px' height='500px'></canvas>
                    </div>
                
                </div>
            </div>  
      </div>
      <div class='modal-footer loginopt modal-footer-default' style='background-color: #f6f6f6;margin-left: 0px;margin-top: 0px;padding-top: 5px;padding-bottom: 10px;'>
        <div class='captureImgButton_Upload' id='captureImgButton_Upload' style='text-align: center;'>
            


<a style='cursor:pointer' class='crop_btn' onclick='javascript:captureImg();' data-statickey='Click'>Click</a>
                     
        </div> 
      </div>
    </div>
</div>
</div>

 

 
 
 <div id='alertPop' class='modal fade msgPop alertPop' role='dialog'>
			  <div class='modal-dialog'>
				
				<div class='modal-content' style="/* left: 380px; */ width: fit-content;float: right;right: 35%;">
				  <div class='modal-header'>
					<button type='button' class='close' data-dismiss='modal' data-toggle='tooltip' title='' data-original-title='Close'></button>
					<div class='ico'> ALERT ! ! !</div>
				  </div>
				  <div class='modal-body'>
					<div class='confTxt'></div>
				  </div>
				  <div class='modal-footer'>
					<div class='aligncenterbtn'>
					  <button style='' type='button' class='btn btn-default contiBtn' id='modalConfirm' data-dismiss='modal'>OK</button>
					 </div>
				  </div>
				</div>
			  </div>                                                                                               
		</div>
    
    
    
<input id="cropList" type="hidden" value="" name="cropList">
<input id="imgMandChk" type="hidden" value="" name="imgMandChk">
</body>

<!-- image cropping code ends -->
	</body>

	 	
</html>
<script language='javascript'>
function viewDetails(){
    // document.forms[0].screenName.value = 'Create_Application';  
    document.getElementById('screenName').value =  'Create_Application';   
}
function populateValForWithdrawal(){
if(document.getElementById('strDisplayProfile').value!=null && 
	document.getElementById('strDisplayProfile').value!=""){
		var dateFormat = document.getElementById('dateFormat').value;
		eval(fnDelayFill(dateFormat));
}
}


$('body').on('click','.edit-appname-btn',function(){
    
    var tabActive=$('#tabActive').val();
	
	//$('.image-container').show();
	document.getElementById('image-container').style.display='';
	$('#cropper').html("");
	$('#cropper').append("<img src='' id='target' /><div id='preview-pane'><div class='preview-container'><img id='preview' src=''></div></div>");
	$('#preview').attr('src',($('#'+tabActive+'_previewImg').attr('src')));
	$('#target').attr('src',($('#'+tabActive+'_previewImg').attr('src')));
	//$('.jcrop-keymgr :img').attr('src',($('#'+tabActive+'_previewImg').attr('src')));
		
    // Create variables (in this scope) to hold the API and image size
    var jcrop_api,
        boundx,
        boundy,

        // Grab some information about the preview pane
        $preview = $('#preview-pane'),
        $pcnt = $('#preview-pane .preview-container'),
        $pimg = $('#preview-pane .preview-container img'),

        xsize = $pcnt.width(),
        ysize = $pcnt.height();
    
    
    $('#target').Jcrop({
      onChange: updatePreview,
      onSelect: updatePreview,
      aspectRatio: xsize / ysize
    },function(){
      // Use the API to get the real image size
      var bounds = this.getBounds();
      boundx = bounds[0];
      boundy = bounds[1];
      // Store the API in the jcrop_api variable
      jcrop_api = this;

      // Move the preview into the jcrop container for css positioning
      $preview.appendTo(jcrop_api.ui.holder);
    });



    function updatePreview(c)
    {
		var width='';
		var height='';
		var marginLeft='';
		var marginTop='';
      if (parseInt(c.w) > 0)
      {
        var rx = xsize / c.w;
        var ry = ysize / c.h;

        $pimg.css({
          width: Math.round(rx * boundx) + 'px',
          height: Math.round(ry * boundy) + 'px',
          marginLeft: '-' + Math.round(rx * c.x) + 'px',
          marginTop: '-' + Math.round(ry * c.y) + 'px'
        });
		
		var id=$('#tabActiveId').val();
		$('#crop'+id+'_x').val(c.x);
		$('#crop'+id+'_y').val(c.y);
		$('#crop'+id+'_height').val(c.h);
		$('#crop'+id+'_width').val(c.w);

      }
	  
    };
 });

$('body').on('click','.edit-appname-btn1',function(){
  fncrop($('#tabActiveId').val(),$('#tabActive').val());
});

$(document).ready(function(){
	//alert("entered");
		var img = document.createElement("IMG");
		    img.className = "imgprop";
		    img.src = "/EForms/images/admin/Info_PI.png";

		    $(".gdprtest").append(img);
			 $(".gdprtest").css({'height':'20px'});
			 $(".gdprtest").click(function(){  
				var field_name= $(this).attr('id');
				var split_fieldName=field_name.split("_");
				var field_html_name=split_fieldName[1];
				//alert("field_html_name::"+field_html_name);
				var orgId=document.getElementById('orgId').value;
				var formId=document.getElementById('formId').value;
				//var jsonFilePath="/EForms/configuredXML/"+orgId+"/"+formId+"/PersonDataMapping/PD_"+formId+".json";
				var PDCode="EForms_pd"+formId+"_"+field_html_name;
				var usecaseCode="EForms_"+formId;
			/*$.ajax({ 
			         type: "GET",
			         url: jsonFilePath,
			         dataType: "text",
			         success: function(result)
			         {
			        	// alert("result "+result);
			        	 var JSONObject=JSON.parse(result);
			        	 for(x in JSONObject)
			        		 {
			        		if(field_html_name==x)
			        				 {	        			    			
			        			PDCode=JSONObject[x];
			        			// alert("PDCode=" +PDCode);
			        			 showFieldLevelPurposeData(orgId,formId,PDCode);
			        			 break;
			        				}	        		
			        		 }	        	
			         },
			         error: function(x, e)
			         {
			              alert(x.readyState + " "+ x.status +" "+ e.msg);   
			         }
				 }); */
				 if(document.getElementById("isFormMultilingualRequired").value != null && document.getElementById("isFormMultilingualRequired").value == 'Y')
					{
						 var lanname = 'English';
						 if(document.getElementById('multilingualLanguageSelected').value != null && document.getElementById('multilingualLanguageSelected').value !='')
						 {	lanname  = document.getElementById('multilingualLanguageSelected').value ; }
						 showFieldLevelPurposeDataML(orgId,formId,PDCode,lanname);					 
					}
					 else
					 {
						 showFieldLevelPurposeData(orgId,formId,PDCode);
					}
		        });
	});
</script>

