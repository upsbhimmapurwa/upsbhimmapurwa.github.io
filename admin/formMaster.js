
var gblDispProf='';
$(document).ready(function(){	
	/*added Captcha  for login*/
	if($('#loginCaptchaHolder').length){
		 init_captcha_login();
	   }
	setCookiesOnLogin();
	var requestBy=getParameterByName("RequestBy");
	var ChannelID=getParameterByName("ChannelID");
	var formId=getParameterByName("FormID");
	var ProfileID=getParameterByName("ProfileID");
	if(requestBy!=null && requestBy!="" && ChannelID!=null && ChannelID!="" && formId!=null && formId!="" && ProfileID!=null && ProfileID!="")
		{/*
		$.ajax({
			url:"/EForms/MarketPlaceServlet",
			dataType:"text",
		    async: false,
			data:
				{
				subAction:"setsessionvalues",
				param:"RequestBy-!!-ion-!!-"+requestBy+"&ChannelID-!!-ion-!!-"+ChannelID+"&FormID-!!-ion-!!-"+formId+"&ProfileID-!!-ion-!!-"+ProfileID
				},
		success:function(result)
		{
			
		}
		});
		
		*/
		if(document.getElementById('RequestBy')==null && document.getElementById('ChannelID')==null && document.getElementById('FormID')==null && document.getElementById('ProfileID')==null)
		{var input1=document.createElement("INPUT");
		input1.setAttribute("type","hidden");
		input1.setAttribute("id","RequestBy");
		input1.setAttribute("name","RequestBy");
		input1.setAttribute("value",requestBy);
		document.onlineAppForm.append(input1);
		var input2=document.createElement("INPUT");
		input2.setAttribute("type","hidden");
		input2.setAttribute("id","ChannelID");
		input2.setAttribute("name","ChannelID");
		input2.setAttribute("value",ChannelID);
		document.onlineAppForm.append(input2);
		var input3=document.createElement("INPUT");
		input3.setAttribute("type","hidden");
		input3.setAttribute("id","FormID");
		input3.setAttribute("name","FormID");
		input3.setAttribute("value",formId);
		document.onlineAppForm.append(input3);
		var input4=document.createElement("INPUT");
		input4.setAttribute("type","hidden");
		input4.setAttribute("id","ProfileID");
		input4.setAttribute("name","ProfileID");
		input4.setAttribute("value",ProfileID);
		document.onlineAppForm.append(input4);
		}
		}
	
});
$(document).ready(function(){
	var subAction = getParameterByName("subActionListing");
	
	if(subAction!=null && subAction!="" && subAction == 'getKeyData'){
		var parentForm = getParameterByName("formId");
		var applnSequenceField = getParameterByName("applnSequenceField");
		var app_seq_no=getParameterByName("app_seq_no");
		var checksum = getParameterByName("checksum");
		var tabListForm = getParameterByName("tabListForm");
		var formId = document.getElementById("formId").value;
		var orgId = document.getElementById("orgId").value;
		//alert(app_seq_no);
		document.getElementById('parentAppSeqNo').value=app_seq_no;
		document.getElementById('listingTabId').value=tabListForm;
	var datArry={};
	datArry[applnSequenceField] = app_seq_no;
	datArry['parentForm'] = parentForm;
datArry['checksum'] = checksum;
	datArry['subAction'] = subAction;
	datArry['orgId'] = orgId;
	datArry['formId'] = formId;
	datArry['tabListForm'] = tabListForm;
		//alert(app_seq_no);
		//alert("id"+document.getElementById('parentAppSeqNo').value);
		$.ajax({url:"/EForms/FormListServlet",dataType:"text",data:datArry/*{parentForm:parentForm,app_seq_no:app_seq_no,checksum:checksum,subAction:subAction,orgId:orgId,formId:formId,tabListForm:tabListForm}*/,success:function(result){
		 gblDispProf = result;
		 var dateFormat = "";
		 if(document.getElementById('dateFormat')!=null){
		 	dateFormat = document.getElementById('dateFormat').value;
		 }
		 var i=0;  
		 for(i=1;i<=10;i++){
		 	if(document.getElementById("lov"+i)!=null){
		 		$("#lov"+i).hide();
		 		$("#lov"+i).removeAttr("onclick");
		 	}
		 } 
		//$("form").append("<input type='hidden' id='eicuListing' name='eicuListing' value='true'><input type='hidden' id='ListingParentFormId' name='ListingParentFormId' value='"+formId+"'>");
		
				$("#eicuListing").val('true');
			
		 setTimeout("fnCallOpenEditMode('"+dateFormat+"')", 5000); 
    	}});
	}
});

 $(function() {
 	jQuery('a.i_agree_text').click(function(e)
						{
						e.preventDefault();
						if($(this).siblings("input[name='acceptanceCHK']").attr("checked"))
						{
							$(this).siblings("input[name='acceptanceCHK']").removeAttr("checked");
						}else
						{
							$(this).siblings("input[name='acceptanceCHK']").attr("checked","checked");
						}

					});
 });

function fnCallOpenEditMode(dateFormat){
	openEditMode(gblDispProf,dateFormat); 
}

function cscConnect(orgId, formId, paymentGatewayType,additionalParams) {
//	var additionalParams = '{ "instanceId": "1", "param1": "p1value", "param2": "p2value", "param3": "p3value" }';
	//alert("Entered in cscConnect::");
	if(additionalParams==undefined)
		additionalParams="";
	window.open("/EForms/jsp/CSCConnect.jsp?org_id="+orgId +"&order_form_id="+formId +"&paymentGatewayType="+paymentGatewayType+"&additionalParams="+additionalParams,"_self");
}


$(function(){
				jQuery('.find').click(function(e){
													jQuery('.overlayBG').css("display","block");
													jQuery('.popup').css({'display':'block','position':'absolute','top':'0px'});
													var parent_div=jQuery('#inner_div').parent().parent().find('#main_sub').append(jQuery('.popup'));
													align_popup();
													//alert(parent_div);
												});
				jQuery('.remove_popup').click(function(e){
										  	jQuery("#popup").css("display","none");
											jQuery('.overlayBG').css("display","none");
										  	});
			});

    var selectionExists=false; 
     
  function align_popup(){
	var window_height=jQuery(window).height() ;
													var window_width=jQuery(window).width() ;
													var popup_height=jQuery('.popup_div').height() ;
													var popup_width=jQuery('.popup_div').width() ;
													var marginTop=(window_height- popup_height)/2;
													
													var marginLeft=(window_width-popup_width)/2;
													jQuery('#popup').css({marginLeft: marginLeft  + 'px',marginTop: +marginTop  + 'px'});
	}
// Update form inputs  
function updateForm(crop) {  
    $('input#x').val(crop.selectionX);  
    $('input#y').val(crop.selectionY);  
    $('input#w').val(crop.selectionWidth);  
    $('input#h').val(crop.selectionHeight);  
  
    selectionExists = crop.selectionExists();  

}

// Validate form data  
function validateForm() {  
	 if (selectionExists)  
    {
    eval(callCropServlet());
    return true;
    }
    else
    {
  alert('Please make a selection first!');  
  return false;
    }  
}

/////vishal///added///ends


/*

function browserAlert(){

var browser=navigator.appCodeName;
var userAgent=navigator.userAgent;

if (browser=='Mozilla')
{
  var a=userAgent.indexOf('Firefox/');
  if(userAgent.indexOf('MSIE')!=-1)
  {
    var ie=userAgent.indexOf('MSIE')
    var initial=parseInt(ie)+5;
    var version=userAgent.substr(initial,3);
    if(parseFloat(version).toFixed(2)<7.0)
    window.location.href="/EForms/jsp/BrowserCheck.jsp?browser=IE";
    //alert("Kindly use Internet Explorer(version 7 and above) or Mozilla Firefox(version 3.6 and above).");
  }
  else if(userAgent.indexOf('Firefox/')!=-1)
  {
  var a=userAgent.indexOf('Firefox/');
  var initial=parseInt(a)+8;
  var version=userAgent.substr(initial,3);
  if(parseFloat(version).toFixed(2)<3.6)
  window.location.href="/EForms/jsp/BrowserCheck.jsp?browser=FF";
  //alert("Kindly use Internet Explorer(version 7 and above) or Mozilla Firefox(version 3.6 and above).");
  }
   else if(userAgent.indexOf('Chrome/')!=-1)
  {
  var a=userAgent.indexOf('Chrome/');
  var initial=parseInt(a)+7;
  var version=userAgent.substr(initial,3);
  if(parseFloat(version).toFixed(2)<7.0)
  window.location.href="/EForms/jsp/BrowserCheck.jsp?browser=CHROME";
  //alert("Kindly use Internet Explorer(version 7 and above) or Mozilla Firefox(version 3.6 and above).");
  }
  else
  {
  window.location.href="/EForms/jsp/BrowserCheck.jsp";
  }
}
else
{
window.location.href="/EForms/jsp/BrowserCheck.jsp";
}

} */
function fnGetXMLHttpObject(){
	var http_req = null;	   
	if (window.XMLHttpRequest){ // Mozilla, Safari,...
		http_req = new XMLHttpRequest();
		//http_req.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
		if (http_req.overrideMimeType)
		{
			http_req.overrideMimeType('text/plain;charset=UTF-8');
		}
		return http_req;
	}else if (window.ActiveXObject){ // IE		           
		try {
			http_req = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			try {
				http_req = new ActiveXObject("Microsoft.XMLHTTP");
			} 
			catch(e){}
		}
		return http_req;
	}
	
	return http_req;
}

function fnRetrieveMasterData(){
	fnNewRetrieveMasterData('N','');
	
	
}

function fnNewRetrieveMasterData(dynamicReq,dataLang)
{
	if(typeof window.fnRetrieveMasterDataCustomBeforeAjaxCall == 'function') {
		fnRetrieveMasterDataCustomBeforeAjaxCall();
	   }
	
	var http_request=fnGetXMLHttpObject();
	
	//var orgID=document.onlineAppForm.orgId.value;
	//var formID=document.onlineAppForm.formId.value;
	
	var orgID = document.getElementById('orgId').value;
	var formID = document.getElementById('formId').value;
	var parameters=orgID+","+formID;
	//alert("parameters:"+parameters);
	if(document.getElementById('Submit')!=null){
		document.getElementById('Submit').removeAttribute("disabled");
	}
	var xmlDoc;
	if(dynamicReq=='N'){
	var xmlFilePath="/EForms/configuredXML/"+orgID+"/"+formID+"/MasterXML_"+formID+".xml";
	xmlDoc=htmlData(xmlFilePath);
	if(xmlDoc!=null && xmlDoc.getElementsByTagName("MASTERTABLE").length>0){
		fnPopulateMasterData(http_request,xmlDoc);
	}else{
		if(http_request!=null){
			var pValidationServlet = ""; 
			pValidationServlet = "/EForms/MasterServlet"; 
		   
    		http_request.open('POST',pValidationServlet,true);       
			http_request.onreadystatechange = function() { fnPopulateMasterData(http_request); }; 	 	                    
			http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
			http_request.send("OrgFormParams="+parameters);
		}
	}
	}else{
		if(http_request!=null){
			var pValidationServlet = ""; 
			pValidationServlet = "/EForms/MasterServlet"; 
		   
    		http_request.open('POST',pValidationServlet,true);       
			http_request.onreadystatechange = function() { fnPopulateMasterData(http_request); }; 	 	                    
			http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
			http_request.send("OrgFormParams="+parameters);
		}
	}
	
}


function fnRetrieveMetaDataMaster(){
	if(typeof window.fnRetrieveMetaDataMasterCustomFunctionBeforeAjaxRequest == 'function') {
		fnRetrieveMetaDataMasterCustomFunctionBeforeAjaxRequest();
	   }
	var http_request=fnGetXMLHttpObject();
	
	//var orgID=document.onlineAppForm.orgId.value;
	//var formID=document.onlineAppForm.formId.value;
	
	var orgID = document.getElementById('orgId').value;
	var formID = document.getElementById('formId').value;
	var parameters=orgID+","+formID;
	//alert("parameters:"+parameters);
	if(document.getElementById('Submit')!=null){
		document.getElementById('Submit').removeAttribute("disabled");
	}
	var xmlFilePath="/EForms/configuredXML/"+orgID+"/"+formID+"/MasterXML_"+formID+".xml";
	var xmlDoc=htmlData(xmlFilePath);
	if(xmlDoc!=null && xmlDoc.getElementsByTagName("MASTERTABLE").length>0){
		fnPopulateMasterData(http_request,xmlDoc);
	}else{
		if(http_request!=null){
			var pValidationServlet = ""; 
			pValidationServlet = "/EForms/PopulateMasters"; 
		   
    		http_request.open('POST',pValidationServlet,true);       
			http_request.onreadystatechange = function() { fnPopulateMasterData(http_request); }; 	 	                    
			http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
			http_request.send("OrgFormParams="+parameters);
		}
	}
	
}











function htmlData(xmlFilePath) {
 	var xmlDoc;
	if(xmlFilePath!="" && xmlFilePath.indexOf('/ionstore/bin/pub/EForms/configuredXML/')>-1){
		xmlFilePath=xmlFilePath.replace("/ionstore/bin/pub/EForms/configuredXML/","/EForms/configuredXML/");
	}
  if (window.XMLHttpRequest)
    {
    xmlDoc=new window.XMLHttpRequest();
    xmlDoc.open("GET",xmlFilePath,false);
    xmlDoc.async=false;
     xmlDoc.send();
     return xmlDoc.responseXML;
   }
   else if (ActiveXObject("Microsoft.XMLDOM"))
   {
   xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async=false;
   xmlDoc.load(xmlFilePath);
   return xmlDoc;
   }
}

function fnPopulateMasterData(http_request, responseDoc){
	//var responseDoc;
	//alert(xmlDoc)
	
	if(http_request.readyState == 4){
		if (http_request.status == 200){
			if(http_request.responseText != null){
				responseDoc= http_request.responseXML;
				if(responseDoc == null){
					var parser = new DOMParser();
					responseDoc = parser.parseFromString(http_request.responseText, "application/xml");
					}
			}
		}
	}
	if(responseDoc!=null){
            	
				if(typeof window.fnPopulateMasterDataCustomPopulation=='function'){
					fnPopulateMasterDataCustomPopulation(http_request,responseDoc);
				}
				else{
            	var docs = responseDoc.getElementsByTagName("MASTERTABLE");
				var noOfDocuments=docs.length;
	
				var tableName = new Array();
				var fieldhtmlname=new Array();
				if(noOfDocuments > 0){					 
					for(count=0;count<noOfDocuments;count++){		//loop document
			
						tableName[count] = docs[count].getAttribute("tablename");
						//alert("tableName: "+tableName[count]);
						
						if((tableName[count]!="")||(tableName[count]!=null)){
							fieldhtmlname[count]=docs[count].getAttribute("fieldhtmlname");
							//alert("fieldhtmlname: "+fieldhtmlname[count]);
							var fieldHTMLCount=fieldhtmlname[count].split(",");
							//alert(fieldHTMLCount.length);
				
							for(var j=0;j<fieldHTMLCount.length;j++){
					
								fieldName=fieldHTMLCount[j];
								var i = 1;	
					
								if(document.getElementById(fieldName)!=null){		
									if(document.getElementById(fieldName).tagName=="SELECT"){
										var siteCode = new Array();
    									var siteName = new Array();
    						
										var docRows=docs[count].getElementsByTagName("ROW");
										var siteList = document.getElementById(fieldName);
					
										for(rowCount=0;rowCount<docRows.length;rowCount++){  //loop field
								
											var docFields=docRows[rowCount].getElementsByTagName("FIELD");
						
											for(fieldCount=0;fieldCount<docFields.length;fieldCount++){
												siteCode[fieldCount] = docFields[fieldCount].getAttribute("fieldname");
												siteName[fieldCount] = docFields[fieldCount].firstChild.nodeValue;
												siteName[fieldCount+1] = docFields[fieldCount+1].firstChild.nodeValue;
												siteList.options[i] = new Option(siteName[fieldCount+1],siteName[fieldCount]);
												fieldCount=fieldCount+1;
												i++;
											}
										}
									}else if(document.getElementById(fieldName).tagName=="SPAN"){
										var hdnField=fieldName+"Hdn";
										var depField=hdnField+"Dep";
										var radioHidden=fieldName.substring(0,(fieldName.length)-5);
										//alert("html field name: "+radioHidden);
										//alert(document.getElementById(hdnField).type);
										if(document.getElementById(hdnField).type=="hidden"){
											var hdnValue=document.getElementById(hdnField).value;
											if(hdnValue=="radio"){
												var siteCode = new Array();
    											var siteName = new Array();
												var docRows=docs[count].getElementsByTagName("ROW");
												var siteList = document.getElementById(fieldName);
									
												var htmlElement="";
												for(rowCount=0;rowCount<docRows.length;rowCount++){  //loop field
										
													htmlElement=htmlElement+"<input type='radio' value='";
													//var htmlElement=document.createElement("input");
													//htmlElement.setAttribute('type','radio');
													var docFields=docRows[rowCount].getElementsByTagName("FIELD");
																			
													for(fieldCount=0;fieldCount<docFields.length;fieldCount++){
														if(fieldCount==0){
														siteName[fieldCount] = docFields[fieldCount].firstChild.nodeValue;
														//htmlElement.setAttribute('value',siteName[fieldCount]);
														htmlElement=htmlElement+siteName[fieldCount]+"' id='";
														}else if(fieldCount>0){
															siteCode[fieldCount] = docFields[fieldCount].getAttribute("fieldname");
															siteName[fieldCount] = docFields[fieldCount].firstChild.nodeValue;
															//var htmlElementId=siteCode[fieldCount]+"_Rad"+fieldCount;
															//htmlElement.setAttribute('id',htmlElementId);
															//htmlElement.setAttribute('name',htmlElementId);
													
															htmlElement=htmlElement+siteCode[fieldCount]+"_Rad"+(rowCount+1)+"' name='"+siteCode[fieldCount]+"' onclick=fnCheckRadio(this,'"+radioHidden+"',this.name)";
															if(document.getElementById(depField)!=null){
																	htmlElement=htmlElement+";"+document.getElementById(depField).value;
																	htmlElement=htmlElement+">";
															}
															else{
																htmlElement=htmlElement+">";
															}
														}
													}
													htmlElement=htmlElement+siteName[1]+" ";
										
													//alert(htmlElement);
													//alert("dghsghdf");
													//siteList.appendChild(htmlElement);
													//siteList.appendChild();
								
													//siteList.innerHTML=siteName[1];										
												}
												//alert(htmlElement);
												siteList.innerHTML=htmlElement;
											}
										}
									}
			  					}
							}
						}
					}				   		
				}
				}
			if(typeof window.fnFWMethodCallAfterPopulateMasterData == 'function') {
					fnFWMethodCallAfterPopulateMasterData();
				   } 
			
			}
  		
}

function fnRetrieveSiteMasterData(){
	if(typeof window.fnRetrieveSiteMasterDataBeforeAjaxCall == 'function') {
		fnRetrieveSiteMasterDataBeforeAjaxCall();
	   }
	var http_request=fnGetXMLHttpObject();
	
	//var orgID=document.onlineAppForm.orgId.value;
	//var formID=document.onlineAppForm.formId.value;
	
	var orgID = document.getElementById('orgId').value;
	var formID = document.getElementById('formId').value;
	
	//var siteMasterFieldName=document.onlineAppForm.siteMasterFieldName.value;
	var siteMasterFieldName = document.getElementById('siteMasterFieldName').value;
	var parameters=orgID+","+formID+","+siteMasterFieldName+",formLoad";
	
	if(siteMasterFieldName!=""){
	//alert("parameters:"+parameters);
	
		if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/SiteMasterServlet";
		   
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnPopulateSiteMasterData(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("OrgFormParams="+parameters);
		}
	}	
}
function fnRetrieveSiteMasterDataWithVacancies(){
	if(typeof window.fnRetrieveSiteMasterDataWithVacanciesBeforeFWAjaxCall == 'function') {
		fnRetrieveSiteMasterDataWithVacanciesBeforeFWAjaxCall();
	   }
	var http_request=fnGetXMLHttpObject();
	
	//var orgID=document.onlineAppForm.orgId.value;
	//var formID=document.onlineAppForm.formId.value;
	
	var orgID = document.getElementById('orgId').value;
	var formID = document.getElementById('formId').value;
	
	//var siteMasterFieldName=document.onlineAppForm.siteMasterFieldName.value;
	var siteMasterFieldName = document.getElementById('siteMasterFieldName').value;
	var parameters=orgID+","+formID+","+siteMasterFieldName+",formLoad";
	
	if(siteMasterFieldName!=""){
	//alert("parameters:"+parameters);
	
		if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/SiteMasterServlet";
		   
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnPopulateSiteMasterData(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("OrgFormParams="+parameters+"&AllFlag=N");
		}
	}	
}
function fnPopulateSiteMasterData(http_request){
	if (http_request.readyState == 4){ 
		 
          if (http_request.status == 200) {
          
               if(http_request.responseText != null)
                {  
            	   if(typeof window.fnPopulateSiteMasterDataCustomPopulation == 'function') {
            		   fnPopulateSiteMasterDataCustomPopulation(http_request);
            		   }
            	   else{
                	var siteList = document.getElementById(document.getElementById("siteMasterFieldName").value);
                	if(document.getElementById(document.getElementById("siteMasterFieldName").value)!=null && document.getElementById(document.getElementById("siteMasterFieldName").value).tagName=="SELECT" ){
                	var i = 1;
                	children = siteList.childNodes.length;
					for(var count=0;count<children;count++)
					{
						siteList.removeChild(siteList.childNodes[0]);
					}
                     
                     siteList.style.display="block";
                 	 siteList.options[0] = new Option('---Select---','0');
                	 var siteCode = new Array();
                	 var siteName = new Array();           	 
                	 var responseDoc= http_request.responseXML;	
                	 if(responseDoc == null){
     					var parser = new DOMParser();
     					responseDoc = parser.parseFromString(http_request.responseText, "application/xml");
     					}
					 var docs = responseDoc.getElementsByTagName("ROW");
					 var noOfDocuments = docs.length;
					 var previousGroup = '';
					 var currentGroup = '';
					 var checkBoxString = '';
					 if(document.getElementById('adminFlag').value == "Y" && document.getElementById('userSiteIds')!=null && document.getElementById('userSiteIds').value!="" ){
					 	var userSiteNames = (document.getElementById('userSiteNames').value).split("|");
					  	var userSiteIds = (document.getElementById('userSiteIds').value).split(",");
					 	for(var siteCount=0;siteCount<userSiteIds.length;siteCount++){
					 		siteList.options[siteCount+1] = new Option(userSiteNames[siteCount],trim(userSiteIds[siteCount]));	
					 	}
					 }
					 else{
					 	if(noOfDocuments > 0){					 
						for(count=0;count<noOfDocuments;count++)		//loop document
			 	    	{	
			 		  		fields = docs[count].getElementsByTagName("FIELD");
			 	      	 	siteCode[count] = docs[count].getAttribute("entity_id");
				   			for(fieldCount=0;fieldCount<fields.length;fieldCount++)  //loop field
							{	
								// siteCode[count] = fields[fieldCount].getAttribute("Code");									
								siteName[count] = fields[fieldCount].firstChild.nodeValue;
								siteName[count] = replace(siteName[count]);
								siteList.options[i] = new Option(siteName[count],siteCode[count]);	
								i++;															
				   			}
				   		}			   		
				   	}	
				   }
				   }
				}
                }
		}
	}
	if(typeof window.fnFWCustomAfterPopulateSiteMasterData == 'function') {
		fnFWCustomAfterPopulateSiteMasterData();
	   }
}


//Direct vacancy

function fnRetrieveDirectVacancies(vacancyElementId){
	//if(typeof window.fnRetrieveSiteMasterDataWithVacanciesBeforeFWAjaxCall == 'function') {
	//	fnRetrieveSiteMasterDataWithVacanciesBeforeFWAjaxCall();
	//   }
	var http_request=fnGetXMLHttpObject();
	
	//var orgID=document.onlineAppForm.orgId.value;
	//var formID=document.onlineAppForm.formId.value;
	
	var orgID = document.getElementById('orgId').value;
	var formID = document.getElementById('formId').value;
	
	//var siteMasterFieldName=document.onlineAppForm.siteMasterFieldName.value;
	//var siteMasterFieldName = document.getElementById('siteMasterFieldName').value;
	var parameters=orgID+","+formID+","+vacancyElementId+",directVacancy";
	
	//if(siteMasterFieldName!=""){
	//alert("parameters:"+parameters);
	
		if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/SiteMasterServlet";
		   
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnPopulateDirectVacancyData(http_request,vacancyElementId); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("OrgFormParams="+parameters+"&AllFlag=N");
		//}
	}	
}
function fnPopulateDirectVacancyData(http_request,vacancyElementId){
	if (http_request.readyState == 4){ 
		 
          if (http_request.status == 200) {
          
               if(http_request.responseText != null)
                {  
            	  // if(typeof window.fnPopulateSiteMasterDataCustomPopulation == 'function') {
            		//   fnPopulateSiteMasterDataCustomPopulation(http_request);
            		//   }
            	  // else{
                	var siteListVacancy = document.getElementById(vacancyElementId);
                	if(document.getElementById(vacancyElementId)!=null && document.getElementById(vacancyElementId).tagName=="SELECT" ){
                	var i = 1;
                	children = siteListVacancy.childNodes.length;
					for(var count=0;count<children;count++)
					{
						siteListVacancy.removeChild(siteListVacancy.childNodes[0]);
					}
                     
                     siteListVacancy.style.display="block";
                 	 siteListVacancy.options[0] = new Option('---Select---','0');
                	 var siteCode = new Array();
                	 var siteName = new Array();           	 
                	 var responseDoc= http_request.responseXML;	
                	 if(responseDoc == null){
     					var parser = new DOMParser();
     					responseDoc = parser.parseFromString(http_request.responseText, "application/xml");
     					}
					 var docs = responseDoc.getElementsByTagName("ROW");
					 var noOfDocuments = docs.length;
					 var previousGroup = '';
					 var currentGroup = '';
					 var checkBoxString = '';
/*					 if(document.getElementById('adminFlag').value == "Y" && document.getElementById('userSiteIds')!=null && document.getElementById('userSiteIds').value!="" ){
					 	var userSiteNames = (document.getElementById('userSiteNames').value).split("|");
					  	var userSiteIds = (document.getElementById('userSiteIds').value).split(",");
					 	for(var siteCount=0;siteCount<userSiteIds.length;siteCount++){
					 		siteListVacancy.options[siteCount+1] = new Option(userSiteNames[siteCount],trim(userSiteIds[siteCount]));	
					 	}
					 }
					 else{
*/					 	if(noOfDocuments > 0){					 
						for(count=0;count<noOfDocuments;count++)		//loop document
			 	    	{	
			 		  		fields = docs[count].getElementsByTagName("FIELD");
			 	      	 	siteCode[count] = docs[count].getAttribute("entity_id");
				   			for(fieldCount=0;fieldCount<fields.length;fieldCount++)  //loop field
							{	
								// siteCode[count] = fields[fieldCount].getAttribute("Code");									
								siteName[count] = fields[fieldCount].firstChild.nodeValue;
								siteName[count] = replace(siteName[count]);
								siteListVacancy.options[i] = new Option(siteName[count],siteCode[count]);	
								i++;															
				   			}
				   		}			   		
				   	}	
//				   }
				 //  }
				}
                }
		}
	}
	if(typeof window.fnFWCustomAfterPopulateSiteMasterData == 'function') {
		fnFWCustomAfterPopulateSiteMasterData();
	   }
}










function validateCaptcha(subAction,button_id){

	var isAdmin=document.getElementById('adminFlag').value;
	//var isAdminEdit=document.getElementById("isAdminEdit").value;

	if(isAdmin=='Y'){
		 document.onlineAppForm.encoding = "multipart/form-data";
	     document.getElementById("subAction").value=subAction;
	     document.onlineAppForm.acceptCharset='UTF-8';
	     document.onlineAppForm.action = "/EForms/onlineApplicationAction.do";
	     document.onlineAppForm.submit();
	 }
	else{
	
   recaptcha_challenge_field = document.getElementById('recaptcha_challenge_field').value;
	recaptcha_response_field = document.getElementById('recaptcha_response_field').value;
	if (recaptcha_response_field == '') {
      alert("Please enter the Captcha.");
      return false;
    }else{
    	var http_request=fnGetXMLHttpObject();
    	if(http_request!=null){
	       document.getElementById(button_id).setAttribute("disabled","disabled"); 
	    	//var url="http://localhost:8080/EForms/jsp/getCaptcha.jsp?recaptcha_challenge_field="+recaptcha_challenge_field+"&recaptcha_response_field="+recaptcha_response_field;
			var pValidationServlet ="/EForms/GetCaptchaServlet?recaptcha_challenge_field="+recaptcha_challenge_field+"&recaptcha_response_field="+recaptcha_response_field; 
		   
    		http_request.open('POST',pValidationServlet,true);       
			http_request.onreadystatechange = function() { handleCaptchaResponse(http_request,subAction,button_id); }; 	 	                    
			http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
			http_request.send();
		}
    } 
	}
  
}

function handleCaptchaResponse(http_request,subAction,button_id){

var ERRORStr = new Array();
var responseError='';	
var fields;	
var flag='';
 var check="";
 
if (http_request.readyState == 4){
		if (http_request.status == 200) {
			if(http_request.responseText != null){
				//alert("http_request.responseText:::   "+http_request.responseText);
				check=http_request.responseText;
							
				if(check.indexOf('valid')!=-1)
				{	document.onlineAppForm.encoding = "multipart/form-data";
			         document.getElementById("subAction").value=subAction;
			         document.onlineAppForm.acceptCharset='UTF-8';
			         document.onlineAppForm.action = "/EForms/onlineApplicationAction.do";
			         document.onlineAppForm.submit();
				}
				else
				{
				  alert("Please enter correct text shown in image");
				  Recaptcha.reload ();
				  document.getElementById(button_id).removeAttribute("disabled");
				  return false;
				}
								
								
			}
		}
		
 }
		}


function validateIonCaptcha(subAction,button_id){
	
	var isAdmin=document.getElementById('adminFlag').value;
	var isListing=$("#eicuListing").val();
	
	//alert("isAdmin=:" +isAdmin);
	//var isAdminEdit=document.getElementById("isAdminEdit").value;
	//alert("isAdminEdit=:" +isAdminEdit);
	if(isAdmin=='Y' || isListing=='true'){
	//alert("isAdmin=:" +isAdmin);
	//var isAdminEdit=document.getElementById("isAdminEdit").value;
	//alert("isAdminEdit=:" +isAdminEdit);
	
	     document.onlineAppForm.encoding = "application/x-www-form-urlencoded";
         document.getElementById("subAction").value=subAction;
	     document.onlineAppForm.acceptCharset='UTF-8';
         document.onlineAppForm.action = "/EForms/onlineApplicationAction.do";
		 document.onlineAppForm.submit();
	 }
	 else{ 
		 //alert("With captcha");
    var a=document.getElementById('captchaService_imageKey').value;
    var b=document.getElementById('captchaService_answer').value;
   

   var parameter="captchaService_imageKey="+a+"&captchaService_answer="+b+"&appId=30";
	
    if (b == '') {
      alert("Please enter the Captcha.");
      return false;
    }else{
    	var http_request=fnGetXMLHttpObject();
    	if(http_request!=null){

           var pValidationServlet = "";
           	pValidationServlet = "/EForms/IonCaptchaValidation"; 

    	http_request.open('POST',pValidationServlet,true);  
		
		http_request.onreadystatechange = function() {  handleCaptchaResponseForIonCaptcha(http_request,subAction,button_id); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send(parameter);
		}
    }     
}
}

function handleCaptchaResponseForIonCaptcha(http_request,subAction,button_id){
//alert("In handleCaptchaResponseForIonCaptcha 2");
var ERRORStr = new Array();
var responseError='';	
var fields;	
var flag='';
 var check="";
	if (http_request.readyState == 4){
		if (http_request.status == 200) {
			if(http_request.responseText != null){
				//alert("http_request.responseText:::   "+http_request.responseText);
				check=http_request.responseText;
							
				if(check.indexOf('Valid')!=-1)
				{	document.onlineAppForm.encoding = "application/x-www-form-urlencoded";
			         document.getElementById("subAction").value=subAction;
				     document.onlineAppForm.acceptCharset='UTF-8';
			         document.onlineAppForm.action = "/EForms/onlineApplicationAction.do";
					 document.onlineAppForm.submit();
				}
				else
				{
				  alert("Please enter correct text shown in image");
				  document.getElementById('captchaService_answer').value='';
				  init_captcha();
				  document.getElementById(button_id).removeAttribute("disabled");
				  return false;
				}
								
								
			}
		}
		}
		}
	
				
function fnGetDependentData(tableName,masterValue,selectFields,whereFields,fieldRemoveDataHTMLName,fieldHTMLName){
	if(typeof window.fnGetDependentDataCustomBeforeAjaxCall == 'function') {
		fnGetDependentDataCustomBeforeAjaxCall(tableName,masterValue,selectFields,whereFields,fieldRemoveDataHTMLName,fieldHTMLName);
	   }
	var http_request=fnGetXMLHttpObject();
	//var orgid=document.onlineAppForm.orgId.value;
	var orgid=document.getElementById('orgId').value;
	var formId = document.getElementById('formId').value
	var parameters = "Common"+","+tableName+","+masterValue+","+selectFields+","+whereFields+","+orgid+","+fieldHTMLName+","+formId;
	if(http_request!=null){
		var pValidationServlet = "";
		pValidationServlet = "/EForms/DependentServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnPopulateDependentData(http_request,fieldRemoveDataHTMLName,fieldHTMLName); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("para="+parameters);
	}
}

function fnGetDependentDataGlobal(elemt,tableName,fieldRemoveDataHTMLName,fieldHTMLName){
	if(typeof window.fnGetDependentDataGlobalCustomBeforeAjaxCall == 'function') {
		fnGetDependentDataGlobalCustomBeforeAjaxCall(elemt,tableName,fieldRemoveDataHTMLName,fieldHTMLName);
	   }
	var http_request=fnGetXMLHttpObject();
	//var orgid=document.onlineAppForm.orgId.value;
	var orgid=document.getElementById('orgId').value;
	var masterValue = elemt.value;
	var parameters = "Global"+","+tableName+","+masterValue+","+orgid+","+fieldHTMLName;
	if(http_request!=null){
	
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/DependentServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnPopulateDependentData(http_request,fieldRemoveDataHTMLName,fieldHTMLName); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("para="+parameters);
	}
}

function fnGetDependentDataBasedOnOrgForm(tableName,masterValue,selectFields,whereFields,fieldRemoveDataHTMLName,fieldHTMLName){
	//alert("tableName:"+tableName+"value:"+masterValue+"selectFields: "+selectFields+"whereFields: "+whereFields);
	if(typeof window.fnGetDependentDataBasedOnOrgFormDataCustomBeforeAjaxCall == 'function') {
		fnGetDependentDataBasedOnOrgFormCustomBeforeAjaxCall(tableName,masterValue,selectFields,whereFields,fieldRemoveDataHTMLName,fieldHTMLName);
	   }
	var http_request=fnGetXMLHttpObject();
	
//	var orgid=document.onlineAppForm.orgId.value;
//	var formid=document.onlineAppForm.formId.value;
	var orgid=document.getElementById('orgId').value;
	var formid=document.getElementById('formId').value;
	//alert("orgid:"+orgid+" formid:"+formid);
	var parameters = "OrgForm"+","+tableName+","+masterValue+","+selectFields+","+whereFields+","+orgid+","+formid+","+fieldHTMLName;
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/DependentServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnPopulateDependentData(http_request,fieldRemoveDataHTMLName,fieldHTMLName); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("para="+parameters);
	}
}

function fnGetSecureDependentDataBasedOnOrgForm(tableName,masterValue,selectFields,whereFields,fieldRemoveDataHTMLName,fieldHTMLName){
	//alert("tableName:"+tableName+"value:"+masterValue+"selectFields: "+selectFields+"whereFields: "+whereFields);
	if(typeof window.fnGetSecureDependentDataBasedOnOrgFormCustomBeforeAjaxCall == 'function') {
		fnGetSecureDependentDataBasedOnOrgFormCustomBeforeAjaxCall(tableName,masterValue,selectFields,whereFields,fieldRemoveDataHTMLName,fieldHTMLName);
	   }
	var http_request=fnGetXMLHttpObject();
	
//	var orgid=document.onlineAppForm.orgId.value;
//	var formid=document.onlineAppForm.formId.value;
	var orgid=document.getElementById('orgId').value;
	var formid=document.getElementById('formId').value;
	//alert("orgid:"+orgid+" formid:"+formid);
	var parameters = "OrgForm"+","+tableName+","+masterValue+","+selectFields+","+whereFields+","+orgid+","+formid+","+fieldHTMLName;
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/SecureDependentServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnPopulateDependentData(http_request,fieldRemoveDataHTMLName,fieldHTMLName); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("para="+parameters);
	}
}

function fnPopulateDependentData(http_request,fieldRemoveDataHTMLName,fieldHTMLName){
	if(http_request.readyState == 4){
		if (http_request.status == 200){
			if(http_request.responseText != null){
				if(typeof window.fnPopulateDependentDataCustomBeforePopulate == 'function') {
					fnPopulateDependentDataCustomBeforePopulate(http_request,fieldRemoveDataHTMLName,fieldHTMLName);
				   }
				else{
            	var fieldRemoveHTMLCount=fieldRemoveDataHTMLName.split(",");			
				for(var k=0;k<fieldRemoveHTMLCount.length;k++){
					fieldRemoveName=fieldRemoveHTMLCount[k];
					if(document.getElementById(fieldRemoveName)!=null){
						if(document.getElementById(fieldRemoveName).tagName=="SELECT"){
							var siteRemoveList = document.getElementById(fieldRemoveName);
							removeChildren = siteRemoveList.childNodes.length;
							for(var countRemove=0;countRemove<removeChildren;countRemove++)
							{
								siteRemoveList.removeChild(siteRemoveList.childNodes[0]);
								//alert(siteList.childNodes[count]);
							}
						}	
					}
				}
				
				var fieldHTMLCount=fieldHTMLName.split(",");
								
				for(var j=0;j<fieldHTMLCount.length;j++){
					fieldName=fieldHTMLCount[j];
					
					if(document.getElementById(fieldName)!=null){
										
						if(document.getElementById(fieldName).tagName=="SELECT"){
							var siteList = document.getElementById(fieldName);
							var fieldOtherName="txt"+fieldName;
						
							document.getElementById(fieldName).style.display="block";
							document.getElementById(fieldOtherName).style.display="none";
                 	 		siteList.options[0] = new Option('---Select---','0');
                 	 	
							var siteCode = new Array();
                			var siteName = new Array();
                			var i=1;
                			var responseDoc= http_request.responseXML;	
                			if(responseDoc == null){
            					var parser = new DOMParser();
            					responseDoc = parser.parseFromString(http_request.responseText, "application/xml");
            					}
                			var htmlName = responseDoc.getElementsByTagName("RESPONSE");
							var fieldCheck=htmlName[0].getAttribute("fieldhtmlname"); 
							var docs = responseDoc.getElementsByTagName("ROW");
							var noOfDocuments = docs.length;
							
							if(fieldCheck==fieldName){
								if(noOfDocuments > 0){					 
									for(count=0;count<noOfDocuments;count++)		//loop document
				 	    			{	
				 						var docFields=docs[count].getElementsByTagName("FIELD");
				 						
				 						for(fieldCount=0;fieldCount<docFields.length;fieldCount++){
											siteCode[fieldCount] = docFields[fieldCount].getAttribute("fieldname");
											siteName[fieldCount] = docFields[fieldCount].firstChild.nodeValue;
											siteName[fieldCount+1] = docFields[fieldCount+1].firstChild.nodeValue;
											siteList.options[i] = new Option(siteName[fieldCount+1],siteName[fieldCount]);
											fieldCount=fieldCount+1;
											i++;
										}
					   				}				   		
								}
								else{
									document.getElementById(fieldOtherName).style.display="block";
									document.getElementById(fieldName).style.display="none";
								}
							}
							else{
								//alert("Create a Textbox here");
								document.getElementById(fieldOtherName).style.display="block";
								document.getElementById(fieldName).style.display="none";
							}
						}
						else if(document.getElementById(fieldName).tagName=="SPAN"){
							var siteList = document.getElementById(fieldName);
							var siteCode = new Array();
                			var siteName = new Array();
							var hdnField=fieldName+"Hdn";
							var responseDoc= http_request.responseXML;
							if(responseDoc == null){
            					var parser = new DOMParser();
            					responseDoc = parser.parseFromString(http_request.responseText, "application/xml");
            					}
							var htmlName = responseDoc.getElementsByTagName("RESPONSE");
							var fieldCheck=htmlName[0].getAttribute("fieldhtmlname"); 
							var docs = responseDoc.getElementsByTagName("ROW");
							var noOfDocuments = docs.length;
							if(document.getElementById(hdnField).type=="hidden"){
								var hdnValue=document.getElementById(hdnField).value;
								var htmlElement="";
								if(hdnValue=="checkbox"){
									for(count=0;count<noOfDocuments;count++)		//loop document
				 	    			{
				 	    					htmlElement=htmlElement+"<input type='checkbox' value='";
											var docFields=docs[count].getElementsByTagName("FIELD");
										
											for(fieldCount=0;fieldCount<docFields.length;fieldCount++){
												if(fieldCount==0){
													siteName[fieldCount] = docFields[fieldCount].firstChild.nodeValue;
													htmlElement=htmlElement+siteName[fieldCount]+"' id='";
												}
												else if(fieldCount>0){
													siteCode[fieldCount] = docFields[fieldCount].getAttribute("fieldname");
													siteName[fieldCount] = docFields[fieldCount].firstChild.nodeValue;
													htmlElement=htmlElement+siteCode[fieldCount]+"_Chk"+(count+1)+"' name='"+fieldCheck+"' >";
												}
											}
										
											htmlElement=htmlElement+siteName[1]+" ";
										
				 	    			}
									
									siteList.innerHTML=htmlElement;
								}
							}
						}
					}
				}
           }
		   
		   if(typeof window.fnPopulateDependentDataCustomAfterPopulate == 'function') {
		fnPopulateDependentDataCustomAfterPopulate();
	   }
		}
		} 
	}
	
}

/**************************************common functions**********************************************/
function getPermanentAddress(id){
	document.getElementById('permAddressCheck').value=id.value;
	switch(id.value){
		case 'Y':	
		document.getElementById('txtPerAddress1').value=document.getElementById('txtAddress1').value;
		document.getElementById('txtPerMobileAreaCode').value=document.getElementById('txtMobileAreaCode').value;
		document.getElementById('txtPerMobileNo').value=document.getElementById('txtMobileNo').value;
		document.getElementById('txtPerAddress2').value=document.getElementById('txtAddress2').value;
		document.getElementById('txtPerContactNoAreaCode').value=document.getElementById('txtContactNoAreaCode').value;
		document.getElementById('txtPerContactNoSTDCode').value=document.getElementById('txtContactNoSTDCode').value;
		document.getElementById('txtPerContactNo').value=document.getElementById('txtContactNo').value;
		document.getElementById('txtPerCity').value=document.getElementById('txtCity').value;
		document.getElementById('txtPerEmail').value=document.getElementById('txtEmail').value;
	    document.getElementById('txtPerConfirmEmail').value=document.getElementById('txtEmail').value;
		//alert("country"+document.getElementById('txtCountry').value);
		document.getElementById('txtPerCountry').value=document.getElementById('txtCountry').value;
		//alert("percountry"+document.getElementById('txtPerCountry').value);
		if(document.getElementById('State').style.display=='block'){
			
			document.getElementById('PerState').style.display='block';
			document.getElementById('txtPerState').style.display='none';
			
			var fieldCountryValue=document.getElementById('txtPerCountry').value;
			fnGetDependentData('app_statecode_master',fieldCountryValue,'entity_id@state_name','country_id','PerState,PerDistrict','PerState,PerDistrict');
			var selectedStateValue=document.getElementById('State').value;
			setTimeout("fnSelectValue('PerState','"+selectedStateValue+"')",2000);
			
		}
		else if(document.getElementById('txtState').style.display=='block'){
			document.getElementById('PerState').style.display='none';
			document.getElementById('txtPerState').style.display='block';
			
			document.getElementById('txtPerState').value=document.getElementById('txtState').value;			
		}
		
		if(document.getElementById('District').style.display=='block'){
			
			document.getElementById('PerDistrict').style.display='block';
			document.getElementById('txtPerDistrict').style.display='none';
			
			var fieldStateValue=document.getElementById('State').value;
			fnGetDependentData('app_district_master',fieldStateValue,'entity_id@district_name','state_id','PerDistrict','PerDistrict');
			var selectedDistrictValue=document.getElementById('District').value;
			//alert(selectedDistrictValue);
			setTimeout("fnSelectValue('PerDistrict','"+selectedDistrictValue+"')",2000);
			
		}
		else if(document.getElementById('txtDistrict').style.display=='block'){
			document.getElementById('PerDistrict').style.display='none';
			document.getElementById('txtPerDistrict').style.display='block';
			
			document.getElementById('txtPerDistrict').value=document.getElementById('txtDistrict').value;			
		}
			
		
		document.getElementById('txtPerAltEmail').value=document.getElementById('txtAltEmail').value;
		document.getElementById('txtPerPincode').value=document.getElementById('txtPincode').value;
		
				break;
		
		case 'N':		
		
				document.getElementById('txtPerAddress1').value = "";
				document.getElementById('txtPerMobileAreaCode').value = "";
				document.getElementById('txtPerMobileNo').value = "";
				document.getElementById('txtPerAddress2').value = "";
				document.getElementById('txtPerContactNoAreaCode').value = "";
				document.getElementById('txtPerContactNoSTDCode').value = "";
				document.getElementById('txtPerContactNo').value = "";
				document.getElementById('txtPerCity').value = "";
				document.getElementById('txtPerEmail').value = "";
				document.getElementById('txtPerCountry').value = "";
				
				if(document.getElementById('PerState').style.display=='block'){
					document.getElementById('PerState').value = "0";
				}
				else if(document.getElementById('txtPerState').style.display=='block'){
					document.getElementById('txtPerState').value = "";
				}
				
				if(document.getElementById('PerDistrict').style.display=='block'){
					document.getElementById('PerDistrict').value = "0";
				}
				else if(document.getElementById('txtPerDistrict').style.display=='block'){
					document.getElementById('txtPerDistrict').value = "";
				}
				
				document.getElementById('txtPerConfirmEmail').value = "";
				document.getElementById('txtPerAltEmail').value = "";
				document.getElementById('txtPerPincode').value = "";
			
		break;
	}
	
}

function fnSelectValue(otherFieldName,selectValue){
	//alert("otherFieldName:"+otherFieldName+" selectValue:"+selectValue);
	document.getElementById(otherFieldName).value=selectValue;
}





function fnCheckRadio(elemt,hiddenField,elementName){
	//alert("name:"+elemt.name+" hiddenField:"+hiddenField);
	document.getElementById(hiddenField).value=elemt.value;
	for(var i=0;i<document.getElementsByName(elementName).length;i++){
		if(document.getElementsByName(elementName)[i].id == elemt.id){
			document.getElementsByName(elementName)[i].checked=true;
		}
		else{
			document.getElementsByName(elementName)[i].checked=false;
		}
	}
	//alert("value:"+document.getElementById(hiddenField).value);
}

function fnGotoWithdrawalForm(wFormId){
	document.loginForm.method="POST";
	document.loginForm.action="/EForms/loginAction.do?subAction=ViewWDrawalLoginPage&wFormId="+wFormId;
	document.loginForm.submit();
}

function fnStatus(){
	document.onlineAppForm.method="POST";
	document.onlineAppForm.action="/EForms/loginAction.do?subAction=ViewStatus";
	document.onlineAppForm.submit();
}

function fnInstructionPopUp(formNumber){
	window.open("/EForms/html/"+formNumber+"/instruction_popup.html","instruction","status=yes,height=400,width=800,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,top=100; left=100; ");
}

function fnFormFillInstPopUp(formNumber){
	window.open("/EForms/html/"+formNumber+"/instructions_HowToFill.html","instruction","status=yes,height=400,width=900,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,top=100; left=100; ");
}

function onlyAlpha_forName(key,e){
	if (navigator.appName =="Microsoft Internet Explorer"){
		var oKey = event.keyCode;
		
		if((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 32) || (oKey == 46) || (oKey == 39))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	else{
		var oKey = e.charCode;
		
		if((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 0) || (oKey == 32) || (oKey == 46) || (oKey == 39))
		{
			return true;
		}
		else
		{return false;
		}
	}
	
	
}
function onlyAlphaNumericWithoutScriptCharactersExceptAnd (fieldValue) {
	  var flag = true;
    if(fieldValue != undefined){
	  for (var i = 0; i < fieldValue.length; ++i) {
	    var oKey = fieldValue.charCodeAt(i);

	    if (oKey!= 62 && oKey!= 60  ) 
	    {
	      flag = true;
	    } else {
	      flag = false;
	      break;
	    }

	  }
}
	  return flag;
	}
function onlyAlphaNumForAddress(key,e){
if (navigator.appName =="Microsoft Internet Explorer"){
	var oKey = event.keyCode;
	if(oKey==35 || oKey==47 || oKey==45)
	{
                return true;
	}
	

	
	else if((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 32) || (oKey == 46) || (oKey == 39) || (oKey >= 48 && oKey <= 57))
	{
		return true;
	}
	else
	{return false;
		//alert ('Only Alphanumeric in this field.');
	}
}else{

	var oKey = e.charCode;
	
	if(oKey==35 || oKey==47 || oKey==45)
	{
                return true;
	}
	else if((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 0) || (oKey == 32) || (oKey == 46) || (oKey == 39) || (oKey >= 48 && oKey <= 57))
	{
		return true;
	}
	else
	{return false;
		
	}
}
	
	
}

function isNumber(key,event){
 	var keyCode;
	var isIE;

	if(navigator.appName == "Microsoft Internet Explorer" || navigator.appName == "Netscape"){  
		keyCode = event.keyCode;
		
		isIE = 1;
		if(navigator.appName == "Netscape"){
		    keyCode = event.charCode;		   
			isIE = 0;
		}
	}else{
		keyCode = event.charCode;
		isIE = 0;
	}
		  
			if(isIE == 1 ){
			if(!((keyCode >= 48 && keyCode <= 57) ))
			{
			return false;
				}
			}
			else{
			if(!((keyCode >= 48 && keyCode <= 57) || keyCode == 0))
			{
			
				event.preventDefault();								
			}
						
	  }
}

function onlyAlphaNumeric(key,e){
if (navigator.appName =="Microsoft Internet Explorer"){
	var oKey = event.keyCode;
	
	

	
	if((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 32) || (oKey == 46) || (oKey == 39) || (oKey >= 48 && oKey <= 57))
	{
		return true;
	}
	else
	{return false;
		//alert ('Only Alphanumeric in this field.');
	}
}else{

	var oKey = e.charCode;
	
	
	if((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 0) || (oKey == 32) || (oKey == 46) || (oKey == 39) || (oKey >= 48 && oKey <= 57))
	{
		return true;
	}
	else
	{
		return false;
	}
}
	
	}

// only allowed 0-9 a-z A-Z and /
function onlyAlphaNumericForDate(key,event){
 	var oKey;
	var isIE;
		
	if(navigator.appName == "Microsoft Internet Explorer" || navigator.appName == "Netscape"){
 
		oKey = event.keyCode;
		
		isIE = 1;
		
		if(navigator.appName == "Netscape"){
		    oKey = event.charCode;		   
			isIE = 0;
		}
		
	}
	
	else{
		oKey = event.charCode;
		
		isIE = 0;
	}
		  
	if(isIE == 1 ){
		if(!((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey >= 47 && oKey <= 57) ))
		{
			event.returnValue = false;
		}
	}
	else{
			if(!((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 0) || (oKey >= 47 && oKey <= 57)))
			{
				event.preventDefault();								
			}
		}
}

function onlyEmail(key,e){
	if (navigator.appName =="Microsoft Internet Explorer"){
	var oKey = event.keyCode;
		
	if(oKey == 45 || oKey == 46 || oKey == 95 || (oKey > 47 && oKey <58) || (oKey >= 64 && oKey < 91) || (oKey > 96 && oKey < 123))
	{
		return true;
	}
	else
	{
		
	}}else{
	
	var oKey = e.charCode;

	
	if(oKey == 45 || oKey == 46 || oKey == 95 || (oKey > 47 && oKey <58) || (oKey >= 64 && oKey < 91) || (oKey > 96 && oKey < 123 || oKey==0))
	{
		return true;
	}
	else
	{
		return false;//alert ('Only Alphanumeric in this field.');
	}
	
	
	
	
	}
	
	
}

function validateEmail(addr,db) {

if (addr == '') return true;
var invalidChars = '\/\'\\ ";:?!()[]\{\}^|<>#$!~`^';
for (i=0; i<invalidChars.length; i++) {
   if (addr.indexOf(invalidChars.charAt(i),0) > -1) {
      if (db) alert('email address contains invalid characters');
      return false;
   }
}
for (i=0; i<addr.length; i++) {
   if (addr.charCodeAt(i)>127) {
      if (db) alert("email address contains non ascii characters.");
      return false;
   }
}

var atPos = addr.indexOf('@',0);
if (atPos == -1) {
   if (db) alert('email address must contain an @');
   return false;
}
if (atPos == 0) {
   if (db) alert('email address must not start with @');
   return false;
}
if (addr.indexOf('@', atPos + 1) > - 1) {
   if (db) alert('email address must contain only one @');
   return false;
}
if (addr.indexOf('.', atPos) == -1) {
   if (db) alert('email address must contain a period in the domain name');
   return false;
}
if (addr.indexOf('@.',0) != -1) {
   if (db) alert('period must not immediately follow @ in email address');
   return false;
}
if (addr.indexOf('.@',0) != -1){
   if (db) alert('period must not immediately precede @ in email address');
   return false;
}
if (addr.indexOf('..',0) != -1) {
   if (db) alert('two periods must not be adjacent in email address');
   return false;
}
var suffix = addr.substring(addr.lastIndexOf('.')+1);
if (suffix.length != 2 && suffix != 'com' && suffix != 'net' && suffix != 'org' && suffix != 'edu' && suffix != 'int' && suffix != 'mil' && suffix != 'gov' & suffix != 'arpa' && suffix != 'biz' && suffix != 'aero' && suffix != 'name' && suffix != 'coop' && suffix != 'info' && suffix != 'pro' && suffix != 'museum'
 && suffix != 'COM' && suffix != 'NET' && suffix != 'ORG' && suffix != 'EDU' && suffix != 'INT' && suffix != 'MIL' && suffix != 'GOV' & suffix != 'ARPA' && suffix != 'BIZ' && suffix != 'AERO' && suffix != 'NAME' && suffix != 'COOP' && suffix != 'INFO' && suffix != 'PRO' && suffix != 'MUSUEM') {
   if (db) alert('invalid primary domain in email address');
   return false;
}
return true;
}

function isfloatNumber(key,event) {
 	var keyCode;
	var isIE;

	if(navigator.appName == "Microsoft Internet Explorer" || navigator.appName == "Netscape"){  
		keyCode = event.keyCode;
		
		isIE = 1;
		if(navigator.appName == "Netscape"){
		    keyCode = event.charCode;		   
			isIE = 0;
		}
	}else{
		keyCode = event.charCode;
		isIE = 0;
	}
		  
			if(isIE == 1 ){
			if(!((keyCode >= 48 && keyCode <= 57) || keyCode==46))
			{
			event.returnValue = false;
				}
			}
			else{
			if(!((keyCode >= 48 && keyCode <= 57) || keyCode == 0 || keyCode==46))
			{
			
				event.preventDefault();								
			}
						
	  }
}

function onlyAlphaNumWithSChar(key,e){

if (navigator.appName =="Microsoft Internet Explorer"){
	var oKey = event.keyCode;
	
	

	if((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 32)  || (oKey >= 44 && oKey <= 57))
	{
		return true;
	}
	else
	{
		return false;
	}
}else{

	var oKey = e.charCode;
	
	
	if((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 0) || (oKey == 32)  || (oKey >= 44 && oKey <= 57))
	{
		return true;
	}
	else
	{
		return false;		
	}
}	
}
function validateFileUpload(mandFieldsList){
	var mandFields=new Array();
	mandFields=mandFieldsList.split(",");
	var fileNames=new Array();
	var fileNamesString=document.getElementById("txtFileName").value;
	fileNames=fileNamesString.split("||");
	var validationFlag="";
	if(mandFields.length>fileNames.length){
			validationFlag="False";
			alert("Please upload mandatory files..");
			return false;
		}
	for(i=0;i<mandFields.length;i++){
		var count=0;
		for(j=0;j<fileNames.length;j++){
				if(mandFields[i]==fileNames[j]){
						count++;	
					}			
			}
		if(count==0){
					validationFlag="False";
					alert("Please upload mandatory files..");
					return false;
				}
	}
	validationFlag="True";
	return true;
}
function showdatetimepicker(fieldid) {
//alert("fieldid: "+fieldid);
    jQuery("#" + fieldid).datepicker({
      yearRange: '1900:2100'});
	
	document.getElementById(fieldid).focus();
}

function showdatetimepickerddmmyyyy(fieldid) {
//alert("fieldid: "+fieldid);datepicker({ dateFormat: 'dd-mm-yy' });
    jQuery("#" + fieldid).datepicker({yearRange: '1900:2100',dateFormat: 'dd/mm/yy'});
	
	document.getElementById(fieldid).focus();
}

function calltimepicker(fieldid,anchorid){
alert("fieldid:::"+fieldid+"*********anchorid:::"+anchorid);
	 jQuery("#" + anchorid).clockpick({ 
	 valuefield: fieldid , starthour:0 , endhour:23 ,
	 useBgiframe: true }); 
}

function setUserDetails(){
	document.getElementById('app_seq_no').value=window.opener.document.getElementById('app_seq_no').value;
    document.getElementById('adminFlag').value=window.opener.document.getElementById('adminFlag').value;
}
function photoCheck(){
	if(document.getElementById("photoStatus").value=="Y"){
			window.opener.document.getElementById("txtPhotoPath").value=document.getElementById('photoPath').value;
			window.opener.document.getElementById("txtSignaturePath").value=document.getElementById('signPath').value;
			window.opener.document.getElementById("txtThumbpath").value=document.getElementById('thumbPath').value;
			window.opener.document.getElementById("txtParentSignpath").value=document.getElementById('pSignPath').value;
		}
		else if(document.getElementById("photoStatus").value=="N"){
			window.opener.document.getElementById("txtPhotopath_hidden").value="";
		}
}

function uploadPhotos(){

	if(typeof window.uploadPhotos1 == 'function') {
		uploadPhotos1()
	
}
  var orgId = document.getElementById("orgId").value;
  var formId = document.getElementById("formId").value;
  var fieldName=document.getElementById("fieldName").value;
  var fieldNameArray = fieldName.split("||");
  var fieldDisplayName=document.getElementById("fieldDisplayName").value;
  var displayNameArr= fieldDisplayName.split("||");
  var sizeList=document.getElementById("sizeList").value;
  var sizeListArr= sizeList.split("||");
  var cropReq=document.getElementById("CropRequired").value;
  var cropReqArray= cropReq.split("||");
  for(var i=0;i<cropReqArray.length-1;i++)
  {
  	if(cropReqArray[i]=="" || cropReqArray[i]=="null")
		 {
		 cropReqArray[i]="N";
		 }
  }
 
  document.getElementById("fieldDisplayName1").value=  document.getElementById("fieldDisplayName").value;
  
  
  
  var mandatoryList= document.getElementById("mandatoryList").value;
  var manList = mandatoryList.split("||");
  var numberOfMand=0;
	for(var i=0;i<manList.length-1;i++)
{
if(manList[i]=="Y")
{
	numberOfMand++;
}
}
 var isModified = false;
 var successFlag= document.getElementById("successFlag").value;
  var manUpload="";
   for(var i = 0; i < fieldNameArray.length-1; i++)
	 	{
	 		if(document.getElementById("cropid_"+fieldNameArray[i])!=null && document.getElementById("cropid_"+fieldNameArray[i])!=undefined)
    			{
			   if(document.getElementById("cropid_"+fieldNameArray[i]).style.display!="none")
			   {
				   	alert("Please crop "+displayNameArr[i]+" or upload a new one");
			         return false;
			   }
			   }
			    if(document.getElementById(fieldNameArray[i]).value=='' && manList[i]=='mandatory' && document.getElementById(fieldNameArray[i]).style.display!="none")
		      {  
				alert("Please Upload "+displayNameArr[i]);
			         return false;
		      }
			   else if(!document.getElementById(fieldNameArray[i]).value=='' )
			      {  
				   	isModified	= true;
				   	//break;
			      }
	       
	 	}
	var srcBlank=0;
 	  if(!isModified && (successFlag=="Y" || successFlag=="null" || successFlag==null))
	   {
	   	alert("Please select atleast one file to upload.")
	   	   return false;
	   }
	else if( !isModified && successFlag=="N")
	{
	 for(i = 0; i < fieldNameArray.length-1; i++)
	 	{
	 if(document.getElementById("preview_"+fieldNameArray[i])!=null && document.getElementById("preview_"+fieldNameArray[i])!=undefined)	{
	 	var imageSRC=document.getElementById("preview_"+fieldNameArray[i]).src;
	 	}
	 	 if(document.getElementById("pdf_"+fieldNameArray[i])!=null && document.getElementById("pdf_"+fieldNameArray[i])!=undefined)	{
	 	var imagePDF=document.getElementById("pdf_"+fieldNameArray[i]).href;
	 	}	 	
	if(imageSRC.indexOf("/Online/")>0 || imagePDF.indexOf("/Online/")>0)
			      {  
				   	
				   	srcBlank++;
			      }
	
	}
	if(srcBlank==0)
	{
			alert("Please select atleast one file to upload.")
	   	   return false;
	}
	}
	var allFiles="";
  for(var i=0;i<fieldNameArray.length-1;i++)
  {
  	var fileName=document.getElementById(fieldNameArray[i]).value;  	
  	fileName=fileName.substring(fileName.lastIndexOf("/")+1);
  	if(allFiles.indexOf(fileName)>0)
  	{
  		alert("File name can not be same for two files.");
         return false;
  	}
  	else{
  	allFiles=allFiles+"||"+fileName;
  	}
  }
  var uploadFileName=document.getElementById("uploadFileName").value;
  var uploadFilePath=document.getElementById("uploadFilePath").value;
  var uploadFilePathArray=uploadFilePath.split("||");var fileNames="";
 for(var i=0;i<uploadFilePathArray.length;i++)
  {
    var path=uploadFilePathArray[i];
    var lastInd=path.lastIndexOf("/");
	var fileName=path.substring(lastInd+1,path.length);
    fileNames=fileNames+"||"+fileName;
  }
   for(var i=0;i<fieldNameArray.length-1;i++)
  {
  	var fileName=document.getElementById(fieldNameArray[i]).value;  	
  	fileName=fileName.substring(fileName.lastIndexOf("/")+1);
  	if(fileNames.indexOf(fileName)>0)
  	{
  		alert("File being uploaded for "+displayNameArr[i]+" has already been uploaded for other field.Please upload diffrent file.");
         return false;
  	}
  	
  }
  var valueList="";
	for(i = 0; i < fieldNameArray.length-1; i++){
	if(document.getElementById(fieldNameArray[i]).value!=""){
		 valueList=valueList+document.getElementById(fieldNameArray[i]).value+"||";
		 }
	}
	var fieldName_temp="";
	
	var fieldDisplay_temp="";
	var typeList=document.getElementById("typeList").value;
	var typeListArray=typeList.split(",");
	var typeListTemp="";
	var sizeList_Temp="";
	var cropList_Temp="";
	for(i = 0; i < fieldNameArray.length-1; i++){
	  if(document.getElementById(fieldNameArray[i]).value!='')
	  {
	 	 fieldName_temp=fieldName_temp+fieldNameArray[i]+'||';
		 fieldDisplay_temp=fieldDisplay_temp+displayNameArr[i]+'||';
		 typeListTemp=typeListTemp+typeListArray[i]+',';
		 sizeList_Temp=sizeList_Temp+sizeListArr[i]+'||';
		 cropList_Temp=cropList_Temp+cropReqArray[i]+'||';
		}
	}
	if(fieldName_temp=="" && typeListTemp==""){
		for(i = 0; i < fieldNameArray.length-1; i++){
	      if(document.getElementById("preview_"+fieldNameArray[i]).src.indexOf("/Online/0/")>0 || document.getElementById("pdf_"+fieldNameArray[i]).href.indexOf("/Online/0/")>0)
	       {
	 	    fieldName_temp=fieldName_temp+fieldNameArray[i]+'||';
		    fieldDisplay_temp=fieldDisplay_temp+displayNameArr[i]+'||';
		    typeListTemp=typeListTemp+typeListArray[i]+',';
		    sizeList_Temp=sizeList_Temp+sizeListArr[i]+'||';
		    cropList_Temp=cropList_Temp+cropReqArray[i]+'||';
		   }
	}
	
	}
	document.getElementById('fieldName').value=fieldName_temp;
	document.getElementById('typeList').value=typeListTemp;
	document.getElementById('fieldDisplayName').value=fieldDisplay_temp;
	document.getElementById('CropRequired').value=cropList_Temp;
	document.getElementById('sizeList').value=sizeList_Temp;
	var imgChkSum = "";
	
	if(window.opener.document.getElementById('imgChkSum')!=null){
		imgChkSum = "?imgChkSum="+window.opener.document.getElementById('imgChkSum').value;
	}
	var popupFieldIdentifier=document.getElementById('popupFieldIdentifier').value;
	$('#loader-indicator').show();
	document.onlineAppForm.encoding = "multipart/form-data";
	document.onlineAppForm.method="POST";
	document.onlineAppForm.action="/EForms/ImageFileUpload"+imgChkSum;
	document.onlineAppForm.submit();
	
}
function hideLoader()
{
	 $('#loader-indicator').hide();
}
function removeNull()
{
	 var AUName=document.getElementById("AUName").value;
     var AUNameArray= AUName.split("||");
     var AUParamName=document.getElementById("AUParamName").value;
     var AUParamNameArray= AUParamName.split("||");
     var AUContentType=document.getElementById("AUContentType").value;
     var AUContentTypeArray= AUContentType.split("||");
     for(var i=0;i<AUNameArray.length;i++)
     {
     	if(AUNameArray[i].indexOf("null")!=-1)
     	{
     		AUNameArray[i]="";
     	}
     	if(AUParamNameArray[i].indexOf("null")!=-1)
     	{
     		AUParamNameArray[i]="";
     	}
     	if(AUContentTypeArray[i].indexOf("null")!=-1)
     	{
     		AUContentTypeArray[i]="";
     	}
     }
     AUName="";AUParamName="";AUContentType="";
     for(var i=0;i<AUNameArray.length;i++)
     {
     	if(AUNameArray[i]!="")
     	{
     		AUName=AUName+AUNameArray[i]+"||";
       	}
       	if(AUParamNameArray[i]!="")
     	{
     		AUParamName=AUParamName+AUParamNameArray[i]+"||";
       	}
       	if(AUContentTypeArray[i]!="")
     	{
     		AUContentType=AUContentType+AUContentTypeArray[i]+"||";
       	}
     }
     document.getElementById("AUName").value=AUName;
     document.getElementById("AUParamName").value=AUParamName;
     document.getElementById("AUContentType").value=AUContentType;
}
function uploadPhotosCrop(){

	if(typeof window.uploadPhotos1 == 'function') {
		uploadPhotos1()
	
}
  var fieldArray=document.getElementById("fieldName").value;
  var mySplitResult = fieldArray.split("||");
  var fieldDisplayName=document.getElementById("fieldDisplayName").value;
  var displayNameArr= fieldDisplayName.split("||");
  var cropReq=document.getElementById("CropRequired").value;
  var cropReqArray= cropReq.split("||");
   var uploadFilePath=document.getElementById("uploadFilePath").value;
  var uploadFilePathArray= uploadFilePath.split("||");
   var uploadFileName=document.getElementById("uploadFileName").value;
  var uploadFileNameArray= uploadFileName.split("||");
  
  var mandatoryList= document.getElementById("mandatoryList").value;
  var manList = mandatoryList.split("||");
   
  var manUpload="";  
  if(document.getElementById("uploadFilePath").value!="" && document.getElementById("uploadFileName").value!="" ){
  for(var i = 0; i < mySplitResult.length-1; i++)
 	{
 	if(mySplitResult[i]!="" && cropReqArray[i]=="Y"){
 	var ele="cropid_"+mySplitResult[i];
	if(document.getElementById(ele).style.display!='none')
      {   alert("Please Crop " +displayNameArr[i]);
         return false;
      }
      }
     }  
   }
  var valueList="";
	for(i = 0; i < mySplitResult.length-1; i++){
		 valueList=valueList+document.getElementById(mySplitResult[i]).value+"||";
	}
	var fieldName_temp="";
	
	var fieldDisplay_temp="";
	var typeList=document.getElementById("typeList").value;
	var typeListArray=typeList.split(",");
	var typeListTemp="";
	for(i = 0; i < uploadFileNameArray.length-1; i++){
	  if(uploadFileNameArray[i]!='' && uploadFilePathArray[i]!='')
	  {
	 	 fieldName_temp=fieldName_temp+mySplitResult[i]+'||';
		 fieldDisplay_temp=fieldDisplay_temp+displayNameArr[i]+'||';
		 typeListTemp=typeListTemp+typeListArray[i]+',';
		}
	}
	var imgChkSum = "";
	
	if(window.opener.document.getElementById('imgChkSum')!=null){
		imgChkSum = "?imgChkSum="+window.opener.document.getElementById('imgChkSum').value;
	}
	document.getElementById('fieldName').value=fieldName_temp;
	document.getElementById('typeList').value=typeListTemp;
	var popupFieldIdentifier=document.getElementById('popupFieldIdentifier').value;
	document.onlineAppForm.encoding = "multipart/form-data";
	document.onlineAppForm.method="POST";
	document.onlineAppForm.action="/EForms/ImageFileUpload"+imgChkSum;
	document.onlineAppForm.submit();
	
}

function openFreshPopUp(fieldName,fieldDisplayName)
{ 
	if(confirm("Are you sure you want to upload new image for "+fieldDisplayName+" ?"))
		{
	var theChild;
	
        if(theChild!=null)
        {
         if(!theChild.closed)
         {
          theChild.close();
         }
        }
        var open = fOpener(window.self)
		if(open)
		{		
  	  var txtFileName=open.getElementById('txtFileName').value;
	  var txtFilePath=open.getElementById('txtFilePath').value;
	  var uploadFileDispName=document.getElementById('uploadFileDispName').value;
	  
	  var txtFileNameArray= txtFileName.split("||");
	  var txtFilePathArray= txtFilePath.split("||");
	  var uploadFileDispNameArray= uploadFileDispName.split("||");
	
	
     var uploadFilePath=document.getElementById("uploadFilePath").value;
     var uploadFilePathArray= uploadFilePath.split("||");
     var uploadFileName=document.getElementById("uploadFileName").value;
     var uploadFileNameArray= uploadFileName.split("||");  
     var srcList=document.getElementById("srcList").value;
     var srcListArray= srcList.split("||");  
     
     
     var fieldNameForDisplayArray= document.getElementById("fieldNameForDisplay").value.split("||");
     
     
     var AUName=document.getElementById("AUName").value;
     var AUNameArray= AUName.split("||");
     var AUParamName=document.getElementById("AUParamName").value;
     var AUParamNameArray= AUParamName.split("||");  
     var AUContentType=document.getElementById("AUContentType").value;
     var AUContentTypeArray= AUContentType.split("||");  
     
     for(var i=0;i<txtFileNameArray.length;i++)
    	 {
    	 if(fieldName==txtFileNameArray[i])
    		 {
    		 	 txtFileNameArray.splice(i,1);
    		 	 txtFilePathArray.splice(i,1);
    		 }
    	 }
    	  txtFileName="";txtFilePath="";
    for(var i=0;i<txtFileNameArray.length;i++)
	 {
		if(txtFileNameArray[i]!=""){
		 txtFileName= txtFileName+txtFileNameArray[i]+"||";
		 txtFilePath= txtFilePath+txtFilePathArray[i]+"||";		
		} 		
	}	 
     for(var i=0;i<uploadFileNameArray.length;i++)
    	 {
    	 if(fieldName==uploadFileNameArray[i])
    		 {
    		 
    		 if(document.getElementById("cropid_"+uploadFileNameArray[i])!=null && document.getElementById("cropid_"+uploadFileNameArray[i])!=undefined)
    		 {
    		 document.getElementById("cropid_"+uploadFileNameArray[i]).style.display="none";
    		 }    		 
    		 if(document.getElementById("pdf_"+uploadFileNameArray[i])!=null && document.getElementById("pdf_"+uploadFileNameArray[i])!=undefined)
    		 {
    		 document.getElementById("pdf_"+uploadFileNameArray[i]).style.display="none";
    		 }
    		 document.getElementById("newUpload_"+uploadFileNameArray[i]).style.display="none";
    		 document.getElementById("uploaded_"+uploadFileNameArray[i]).style.display="none";
    		 document.getElementById(uploadFileNameArray[i]).style.display="block";
    		 uploadFileNameArray.splice(i,1);
    		 uploadFilePathArray.splice(i,1);
    		 AUNameArray.splice(i,1);
    		 AUParamNameArray.splice(i,1);
    		 AUContentTypeArray.splice(i,1);
    		 uploadFileDispNameArray.splice(i,1);
    		 break;
    		 }
    	 }
    	  for(var i=0;i<fieldNameForDisplayArray.length;i++)
    	 {
    	 if(fieldName==fieldNameForDisplayArray[i])
    		 {
     if(document.getElementById("preview_"+fieldNameForDisplayArray[i])!=null && document.getElementById("preview_"+fieldNameForDisplayArray[i])!=undefined)
    		 {
    		  document.getElementById("preview_"+fieldNameForDisplayArray[i]).style.display="block";
    		  document.getElementById("preview_"+fieldNameForDisplayArray[i]).src=srcListArray[i]; 
    		  break;   		
    		 }
    	 }
    	}
     uploadFileName="";uploadFilePath="";AUName="";AUParamName="";AUContentType="";uploadFileDispName="";
     
     for(var i=0;i<uploadFileNameArray.length;i++)
	 {
		if(uploadFileNameArray[i]!=""){
		 uploadFileName= uploadFileName+uploadFileNameArray[i]+"||";
		 uploadFilePath= uploadFilePath+uploadFilePathArray[i]+"||";
		 AUName= AUName+AUNameArray[i]+"||";
		 AUParamName= AUParamName+AUParamNameArray[i]+"||";
		 AUContentType= AUContentType+AUContentTypeArray[i]+"||";
		 uploadFileDispName=uploadFileDispName+uploadFileDispNameArray[i]+"||";
		} 
		
	 }
	document.getElementById('uploadFilePath').value=uploadFilePath;
	document.getElementById('uploadFileName').value=uploadFileName;
	document.getElementById('AUName').value=AUName;
	document.getElementById('AUParamName').value=AUParamName;
	document.getElementById('AUContentType').value=AUContentType;
	document.getElementById('uploadFileDispName').value=uploadFileDispName;
	open.getElementById('txtFileName').value=txtFileName;
	open.getElementById('txtFilePath').value=txtFilePath;
	/*
	document.getElementById("cropResS_tr").style.display="none";
	document.getElementById("cropResF_tr").style.display="none";
	if(document.getElementById("successFlag").value=="Y"){
	document.getElementById("success_upload").style.display="none";
	}
	if(document.getElementById("successFlag").value=="N"){
	document.getElementById("failed_upload").style.display="none"; 
     }
	document.getElementById('uploadFilePath').value="";
	document.getElementById('uploadFileName').value="";
	*/
	}
	}
		else 
		{
		return false;	
		}
   
   }
function openPopUp(id)
{	
	var fieldHtml=document.getElementById('errorFieldName').value;
	var uploadFileName=document.getElementById('uploadFileName').value;
	var uploadFilePath=document.getElementById('uploadFilePath').value;
	var fieldDisplayName=document.getElementById('fieldDisplayName').value;
	var uploadFileNameArray=uploadFileName.split("||");
	var uploadFilePathArray=uploadFilePath.split("||");
	var fieldDisplayNameArray=fieldDisplayName.split("||");
	var fieldName=id.substring(7);
	for(var i=0;i<uploadFileNameArray.length;i++)
	{
		if(fieldName==uploadFileNameArray[i])
		{
			document.getElementById('example').setAttribute('src',uploadFilePathArray[i]);
			document.getElementById('inCropFieldPath').value=uploadFilePathArray[i];
			document.getElementById('inCropFieldName').value=fieldName;
			document.getElementById('inCropFieldDispName').value=fieldDisplayNameArray[i];
			
		}
	}	
	 var window_height=$(window).height()/15;
   		var window_width=$(window).width()/4;
				$('.popup').css({marginLeft: window_width  + 'px',marginTop: +window_height  + 'px'});
				$('.overlayBG').css("display","block");
				$('.popup').css({'display':'block','position':'absolute','top':'0px'});
 				$('div.image-decorator').children().css('margin', '0pt auto');
 				$('.popup').find("#image-crop-overlay").next().remove();
 				$('.popup').find("#image-crop-outline").next().remove();

 				var cnt = $('.popup').find("#image-crop-overlay").parent().contents();
				$('.popup').find("#image-crop-overlay").parent().replaceWith(cnt); 				 				
 				$('.popup').find("#image-crop-overlay").remove();
 				$('.popup').find("#image-crop-outline").remove();
 			
 				
    			    $('img#example').imageCrop({  
    		        overlayOpacity : 0.25,  
					onSelect : updateForm   
		});
 
}
function fnShowFormatPage(formNumber){
	window.open("/EForms/html/"+formNumber+"/format.html");
}

function fnChallanDownload()
			{
				document.onlineAppForm.method="POST";
				document.onlineAppForm.action="/EForms/FileDownload";
				document.onlineAppForm.submit();
			}
var s;


function update(randomnumber){
	var lAJAXInteraction = new AJAXInteraction("/EForms/jsp/getcaptchadata.jsp?randomNumber="+randomnumber, null, true);
	lRequest = lAJAXInteraction.doGet('a=');
	s= lRequest.responseText;		
	document.getElementById('secValidation').value=s;
}
	
function getCountryCode_India(countryId,identity){
	switch(identity){
		case 'Applicant':{
							if(countryId == "1")
							{
								
								document.getElementById('txtMobileAreaCode').value = '91';
							}
							else
							{
								document.getElementById('txtMobileAreaCode').value = '';
							}
			break;	
		}
		case 'Guardian':{	
							if(countryId == "1")
							{
								document.getElementById('txtLocalGContactNoAreaCode').value = '91';
							}
							else
							{
								document.getElementById('txtLocalGContactNoAreaCode').value = '';
							}
			break;	
		}
		case 'Permanent':{	
							if(countryId == '1')
							{
								document.getElementById('txtPerMobileAreaCode').value = '91';
							}
							else
							{
								document.getElementById('txtPerMobileAreaCode').value = '';
							}
			break;	
		}
		
	}

}

function imgUploadNow(id){
	document.getElementById('upload_now').value=id.value;
	document.getElementById('img_tr_hide1').style.display='none';
	document.getElementById('img_tr_hide2').style.display='none';

	if(id.value=='Y'){
		document.getElementById('img_tr_hide2').style.display='';
	
	}
	else{
		document.getElementById('img_tr_hide1').style.display='';
		
	}
}

function fnCheckBoxValue(id,val){
	if(id.checked){
		id.value=val;
	}
	else{
		id.value="";	
	}
}

function fnKeepChecked(id){
	id.checked="checked";
}

function ltrim(str){
	if (str==null){return null;}
	for(var i=0;str.charAt(i)==" ";i++);
	return str.substring(i,str.length);
	}
function rtrim(str){
	if (str==null){return null;}
	for(var i=str.length-1;str.charAt(i)==" ";i--);
	return str.substring(0,i+1);
	}
function trim(str){return ltrim(rtrim(str));}


/*****************************edit functionality***************************************/
function fnStringtoXML(text){
	
	if (window.ActiveXObject){
	   	var doc=new ActiveXObject('Microsoft.XMLDOM');
	       doc.async='false';
	       doc.loadXML(text);
	   }
	   else{
	       var parser=new DOMParser();
	       var doc=parser.parseFromString(text,'text/xml');
	   }
	   
return doc;
}

function replaceCData(str)
{	
	var str1="";	
	while(str.indexOf("&lt;![CDATA[")>0)
	{
	str = str.replace("&lt;![CDATA[", "");
	str=str.replace("]]&gt;", "");	
	
	}
	return str;
}


function openEditMode(displayProfile,dateFormat){
	 displayProfile=replaceCData(displayProfile);

	var responseDoc=fnStringtoXML(displayProfile);  
	var isAdmin=document.getElementById('adminFlag').value;
	var adminType="";
	if($("#adminTypeFW")!=null && $("#adminTypeFW")!=undefined){
		adminType = $("#adminTypeFW").val();
	}
	var docs = responseDoc.getElementsByTagName("FIELD");
	var noOfDocuments=docs.length;
	if(noOfDocuments > 0){					 
		for(count=0;count<noOfDocuments;count++)//loop document
		{
			var dochtmlName=docs[count].getElementsByTagName("HTMLNAME");
			//var dochtmlDisplayName=docs[count].getElementsByTagName("HTMLDISPLAYNAME");
			var dochtmlValue=docs[count].getElementsByTagName("VALUE");
			var dochtmlDataType=docs[count].getElementsByTagName("DATATYPE");
			var dochtmlUpdatableApplicant=docs[count].getElementsByTagName("UPDATABLE_APPLICANT");
			var dochtmlUpdatableAdmin=docs[count].getElementsByTagName("UPDATABLE_ADMIN");
			var dochtmlUpdatableSuperAdmin=docs[count].getElementsByTagName("UPDATABLE_SUPERADMIN");
			var dochtmlMultilingual=docs[count].getElementsByTagName("MULTILINGUAL");
		
			for(var tagCount=0;tagCount<dochtmlName.length;tagCount++){
				var htmlElement=dochtmlName[tagCount].firstChild.nodeValue;
											
				if(document.getElementById(htmlElement)!=null){	
					if(document.getElementById(htmlElement).tagName=="SELECT"){
						if(dochtmlValue[tagCount].firstChild!=null){
							var htmlElementValue=dochtmlValue[tagCount].firstChild.nodeValue;
							for(var i=0;i<document.getElementById(htmlElement).options.length;i++){
								if(document.getElementById(htmlElement).options[i].text==htmlElementValue){
									var updatedValue=document.getElementById(htmlElement).options[i].value;
									document.getElementById(htmlElement).value=updatedValue;
									if(document.getElementById(htmlElement).onclick!=null){
										document.getElementById(htmlElement).onclick();
									}
								}
								else if(document.getElementById(htmlElement).options[i].value==htmlElementValue){
									var updatedValue=document.getElementById(htmlElement).options[i].value;
									document.getElementById(htmlElement).value=updatedValue;
									if(document.getElementById(htmlElement).onclick!=null){
										document.getElementById(htmlElement).onclick();
									}
								}
							}
						}
						if(isAdmin == "Y" && adminType == "1" && dochtmlUpdatableSuperAdmin[tagCount].firstChild.nodeValue == "N"){
								eval(replaceDropDowns(htmlElement));
						}
						else if((isAdmin == "Y" && dochtmlUpdatableAdmin[tagCount].firstChild.nodeValue == "N") || ((isAdmin!='Y' || isAdmin=='null')  && dochtmlUpdatableApplicant[tagCount].firstChild.nodeValue == "N")){

								eval(replaceDropDowns(htmlElement));
							}
					}
					else if(document.getElementById(htmlElement).tagName=="TEXTAREA"){
						//alert("text: "+document.getElementById('txtQualifyingExam_Remarks').value);
						if(dochtmlValue[tagCount].firstChild!=null){
							var htmlElementValue=dochtmlValue[tagCount].firstChild.nodeValue;
							if(dochtmlMultilingual[tagCount].firstChild.nodeValue == "N")
							{	document.getElementById(htmlElement).value=htmlElementValue; }
							else{  $("#"+htmlElement).val($("<div>"+htmlElementValue+"<div>").text());	}
							
							if(isAdmin == "Y" && adminType == "1" && dochtmlUpdatableSuperAdmin[tagCount].firstChild.nodeValue == "N"){
							document.getElementById(htmlElement).setAttribute("readOnly","readOnly");
						}
						else if((isAdmin == "Y" && dochtmlUpdatableAdmin[tagCount].firstChild.nodeValue == "N") || (isAdmin!='Y' && dochtmlUpdatableApplicant[tagCount].firstChild.nodeValue == "N")){
								document.getElementById(htmlElement).setAttribute("readOnly","readOnly");
							}
						}
						
					}
					else if(document.getElementById(htmlElement).tagName=="INPUT"){
						if(document.getElementById(htmlElement).type=="text"){
							if(dochtmlValue[tagCount].firstChild!=null){
								var htmlElementValue=dochtmlValue[tagCount].firstChild.nodeValue;
								//alert("inside input text & htmlElementValue:::"+htmlElementValue);
									if(document.getElementById(htmlElement).id=="txtEmail"){
										document.getElementById(htmlElement).value=htmlElementValue;
										document.getElementById("txtEmail").setAttribute("readonly","readonly");
										if(document.getElementById("txtConfirmEmail")!=null){
											document.getElementById("txtConfirmEmail").value=htmlElementValue;
										}
										if(document.getElementById("permAddressCheck")!=null){
											if(document.getElementById("permAddressCheck").value=='Y'){
												document.getElementById("txtPerConfirmEmail").value=htmlElementValue;
											}
											else if(document.getElementById("permAddressCheck").value=='N'){
												document.getElementById("txtPerConfirmEmail").value=document.getElementById("txtPerEmail").value;
										 }
										}
									}
									else if(document.getElementById(htmlElement).id=="txtPerEmail")
									{
									
									if(document.getElementById("permAddressCheck").value!='Y' && document.getElementById("permAddressCheck").value!=null)
									{
									document.getElementById("txtPerEmail").value=htmlElementValue;
								
									document.getElementById("txtPerConfirmEmail").value=htmlElementValue;
									}
									else
									{
								
									document.getElementById("txtPerEmail").value=htmlElementValue;
									
									document.getElementById("txtPerConfirmEmail").value=htmlElementValue;
									}
									}
									else if((document.getElementById(htmlElement).id=="txtAppName")||(document.getElementById(htmlElement).id=="txtAppFirstName")||(document.getElementById(htmlElement).id=="txtAppMiddleName")||(document.getElementById(htmlElement).id=="txtAppLastName")){
										//document.getElementById(htmlElement).value=htmlElementValue;
							            if(dochtmlMultilingual[tagCount].firstChild.nodeValue == "N")
							            {	document.getElementById(htmlElement).value=htmlElementValue; }
							            else{  $("#"+htmlElement).val($("<div>"+htmlElementValue+"<div>").text()); }
									
										if(isAdmin == "Y" && adminType == "1" && dochtmlUpdatableSuperAdmin[tagCount].firstChild.nodeValue == "Y"){
											document.getElementById(htmlElement).removeAttribute("readOnly");
										}
										else if((isAdmin == "Y" && dochtmlUpdatableAdmin[tagCount].firstChild.nodeValue == "Y")){
														document.getElementById(htmlElement).removeAttribute("readOnly");
													}else{
														document.getElementById(htmlElement).setAttribute("readOnly","readOnly");
										}
										
										
									}
									else if(document.getElementById(htmlElement).id=="txtAppNumber"){
										document.getElementById(htmlElement).value=htmlElementValue;
										document.getElementById(htmlElement).setAttribute("readonly","readonly");
									}
									else if(document.getElementById(htmlElement).id=="txtAppFormNo"){
										document.getElementById(htmlElement).value=htmlElementValue;
									if(	document.getElementById("txtAppFormNo").value!=''){
										document.getElementById(htmlElement).setAttribute("readonly","readonly");
									    document.getElementById("check").style.display = 'none';
									    }
									}	
									else if(document.getElementById(htmlElement).id=="txt_PIN_NO_Cash"){
									//alert("in open edit:"+htmlElementValue);
										document.getElementById("txt_PIN_NO_Cash").value=htmlElementValue;
										document.getElementById("txt_PIN_NO_CashOther").value=htmlElementValue;
									}
									else if(document.getElementById(htmlElement).id=="txtAcademicQualOth")
									{
										//alert(htmlElementValue);
										document.getElementById('SPAOth').style.display = "block";
										document.getElementById('txtAcademicQualOth').value = htmlElementValue;
									}
									else{
										if(dochtmlDataType[tagCount].firstChild!=null){
											var dataType=dochtmlDataType[tagCount].firstChild.nodeValue;
											if(dataType=='date'){
											//var displayname=dochtmlDisplayName[tagCount].firstChild.nodeValue;
											
											var htmlElementValue=dochtmlValue[tagCount].firstChild.nodeValue;
											//alert("date: "+htmlElementValue);
											if(htmlElementValue!='//null' && htmlElementValue!='null' ){
												if(htmlElementValue.indexOf("-")>0)
													{
												 if(dateFormat=='dd/mm/yyyy' /*&& htmlElementValue.indexOf("-")>0*/)
												{
												    //  alert("inside frst loop");  										
														//var appDobY=htmlElementValue.substring(0,4);
	    												//var appDobM=htmlElementValue.substring(5,7);
	    												//var appDobD=htmlElementValue.substring(8,10);
		
														document.getElementById(htmlElement).value = getDatevaluewithFormat(htmlElementValue,'dd/mm/yyyy');
												}
												else if((dateFormat=='mm/dd/yyyy' || dateFormat=='')  /*&&  htmlElementValue.indexOf("-")>0*/ ){
												
													// alert("inside 2nd loop"); 
														//alert("date: "+htmlElementValue);												
														//var appDobY=htmlElementValue.substring(0,4);
	    												//var appDobM=htmlElementValue.substring(5,7);
	    												//var appDobD=htmlElementValue.substring(8,10);
		
														document.getElementById(htmlElement).value = getDatevaluewithFormat(htmlElementValue,'mm/dd/yyyy');
														//alert("date: "+document.getElementById(htmlElement).value);	
														}
											}
												else 
													{
													// alert("inside 3rd loop"); 
													document.getElementById(htmlElement).value =htmlElementValue;
													}
											
												}
											

										if(isAdmin == "Y" && adminType == "1" && dochtmlUpdatableSuperAdmin[tagCount].firstChild.nodeValue == "N"){
											$("#"+htmlElement).next().css("display","none");
										}
										else if((isAdmin == "Y" && dochtmlUpdatableAdmin[tagCount].firstChild.nodeValue == "N") || (isAdmin!='Y' && dochtmlUpdatableApplicant[tagCount].firstChild.nodeValue == "N")){
														$("#"+htmlElement).next().css("display","none");
												}
											}
											else if (dataType=='datetime')
												{

												//var displayname=dochtmlDisplayName[tagCount].firstChild.nodeValue;
												var htmlElementValue=dochtmlValue[tagCount].firstChild.nodeValue;
												//alert("date: "+htmlElementValue);
												if(htmlElementValue!='//null' && htmlElementValue!='null' ){
												if(htmlElementValue.indexOf("-")>0)
													{
												
										 if(dateFormat=='dd/mm/yyyy' /*&& htmlElementValue.indexOf("-")>0*/)
												{
												    //  alert("inside frst loop");  										
														//var appDobY=htmlElementValue.substring(0,4);
	    												//var appDobM=htmlElementValue.substring(5,7);
	    												//var appDobD=htmlElementValue.substring(8,10);
		
														document.getElementById(htmlElement).value = getDatevaluewithFormat(htmlElementValue,'dd/mm/yyyy');
												}
												else if((dateFormat=='mm/dd/yyyy' || dateFormat=='')  /*&&  htmlElementValue.indexOf("-")>0*/ ){
												
													// alert("inside 2nd loop"); 
														//alert("date: "+htmlElementValue);												
														//var appDobY=htmlElementValue.substring(0,4);
	    												//var appDobM=htmlElementValue.substring(5,7);
	    												//var appDobD=htmlElementValue.substring(8,10);
		
														document.getElementById(htmlElement).value = getDatevaluewithFormat(htmlElementValue,'mm/dd/yyyy');
														//alert("date: "+document.getElementById(htmlElement).value);	
														}
											}
												else 
													{
													// alert("inside 3rd loop"); 
													document.getElementById(htmlElement).value =htmlElementValue;
													}
											
												}
												

											if(isAdmin == "Y" && adminType == "1" && dochtmlUpdatableSuperAdmin[tagCount].firstChild.nodeValue == "N"){
												$("#"+htmlElement).next().css("display","none");
											}
											else if((isAdmin == "Y" && dochtmlUpdatableAdmin[tagCount].firstChild.nodeValue == "N") || (isAdmin!='Y' && dochtmlUpdatableApplicant[tagCount].firstChild.nodeValue == "N")){
															$("#"+htmlElement).next().css("display","none");
													}
												
												}
											else{
												var htmlElementValue=dochtmlValue[tagCount].firstChild.nodeValue;
												 if(dochtmlMultilingual[tagCount].firstChild.nodeValue == "N")
							                     {	document.getElementById(htmlElement).value=htmlElementValue; }
							                     else{   $("#"+htmlElement).val($("<div>"+htmlElementValue+"<div>").text());  }
							                 }
										}
									}
							}
							
							if(isAdmin == "Y" && adminType == "1" && dochtmlUpdatableSuperAdmin[tagCount].firstChild.nodeValue == "N"){
											document.getElementById(htmlElement).setAttribute("readOnly","readOnly");
							}
							else if((isAdmin == "Y" && dochtmlUpdatableAdmin[tagCount].firstChild.nodeValue == "N") || (isAdmin!='Y' && dochtmlUpdatableApplicant[tagCount].firstChild.nodeValue == "N")){
									document.getElementById(htmlElement).setAttribute("readOnly","readOnly");
							}
						}
						else if(document.getElementById(htmlElement).type=="radio"){
							if(dochtmlValue[tagCount].firstChild!=null){
								var htmlElementValue=dochtmlValue[tagCount].firstChild.nodeValue;
								document.getElementById(htmlElement).value=htmlElementValue;
								var radioLength=document.getElementsByName(htmlElement).length;
								for(var radioCount=0;radioCount<radioLength;radioCount++){
									if(document.getElementsByName(htmlElement)[radioCount].value==htmlElementValue){
										document.getElementsByName(htmlElement)[radioCount].checked="checked";
										if(document.getElementsByName(htmlElement)[radioCount]!=null){
											document.getElementsByName(htmlElement)[radioCount].onclick();
										}
										if(isAdmin == "Y" && adminType == "1" && dochtmlUpdatableSuperAdmin[tagCount].firstChild.nodeValue == "N"){
											document.getElementById(htmlElement)[radioCount].setAttribute("disabled","disabled");
							}
							else if((isAdmin == "Y" && dochtmlUpdatableAdmin[tagCount].firstChild.nodeValue == "N") || (isAdmin!='Y' && dochtmlUpdatableApplicant[tagCount].firstChild.nodeValue == "N")){
												document.getElementById(htmlElement)[radioCount].setAttribute("disabled","disabled");
										}
									}
								}	
							}							
						}
						else if(document.getElementById(htmlElement).type=="checkbox"){
							if(dochtmlValue[tagCount].firstChild!=null){
								document.getElementById(htmlElement).checked="checked";	
								if(document.getElementById(htmlElement).onclick!=null){
									document.getElementById(htmlElement).onclick();
								}			
								if(isAdmin == "Y" && adminType == "1" && dochtmlUpdatableSuperAdmin[tagCount].firstChild.nodeValue == "N"){
											document.getElementById(htmlElement).setAttribute("disabled","disabled");
							}
							else if((isAdmin == "Y" && dochtmlUpdatableAdmin[tagCount].firstChild.nodeValue == "N") || (isAdmin!='Y' && dochtmlUpdatableApplicant[tagCount].firstChild.nodeValue == "N")){
									document.getElementById(htmlElement).setAttribute("disabled","disabled");
								}					
							}
							else
							{
								document.getElementById(htmlElement).checked=false;	
								if(document.getElementById(htmlElement).onclick!=null){
								}
								if(isAdmin == "Y" && adminType == "1" && dochtmlUpdatableSuperAdmin[tagCount].firstChild.nodeValue == "N"){
											document.getElementById(htmlElement).setAttribute("disabled","disabled");
							}
							else if((isAdmin == "Y" && dochtmlUpdatableAdmin[tagCount].firstChild.nodeValue == "N") || (isAdmin!='Y' && dochtmlUpdatableApplicant[tagCount].firstChild.nodeValue == "N")){
									document.getElementById(htmlElement).setAttribute("disabled","disabled");
								}
							}
						}
						else if(document.getElementById(htmlElement).type=="hidden"){
							var htmlElementValue = "";
							if(dochtmlValue[tagCount].firstChild!=null){
								htmlElementValue=dochtmlValue[tagCount].firstChild.nodeValue;
							}
								//////---------for parent app seq no-------------
								if(htmlElement=="app_seq_no"){
									if(document.getElementById("txtPAppSeqNo")){
										if(document.getElementById("txtPAppSeqNo").value==""){
											document.getElementById("txtPAppSeqNo").value=htmlElementValue;											
											if(document.getElementById("isAdminEdit").value=='N'){
												document.getElementById("app_seq_no").value="";	
											document.getElementById("appSeqNo").value="";	
											document.getElementById("entity_id").value="";	
											document.getElementById("entityId").value="";
											}
											dochtmlValue[tagCount].firstChild.nodeValue="";
										}
									}
								}
								
								if(htmlElementValue!="" && htmlElement=="checksum"){
									htmlElementValue = decodeURIComponent(htmlElementValue);
								}
								
								//////---------for parent app seq no-------------
								if(htmlElement=="wdrawal_sercretKey"){
									if(document.getElementById("wdrawal_sercretKey")){
										if(document.getElementById("wdrawal_sercretKey").value==""){
											document.getElementById("wdrawal_sercretKey").value=htmlElementValue;
										}
									}
								}
								var radElement=htmlElement+"_R";
								var chkElement="chk_"+htmlElement;
								
								if(document.getElementById(radElement)!=null){
									if(document.getElementById(radElement).type=="radio"){
										if(document.getElementById(htmlElement).id=="payment_mode"){
											var radioLength=document.getElementsByName(radElement).length;
												for(var radioCount=0;radioCount<radioLength;radioCount++){
													if(document.getElementsByName(radElement)[radioCount].value==htmlElementValue){
														document.getElementsByName(radElement)[radioCount].checked="checked";
														if(document.getElementsByName(radElement)[radioCount].onclick!=null){
															document.getElementsByName(radElement)[radioCount].onclick();
														}
														
													}
													if(isAdmin == "Y" && adminType == "1" && dochtmlUpdatableSuperAdmin[tagCount].firstChild.nodeValue == "Y"){
														document.getElementsByName(radElement)[radioCount].removeAttribute("disabled");
													}
													else if((isAdmin == "Y" && dochtmlUpdatableAdmin[tagCount].firstChild.nodeValue == "Y")){
														document.getElementsByName(radElement)[radioCount].removeAttribute("disabled");
													}else{
														document.getElementsByName(radElement)[radioCount].disabled="disabled";
													}
												}
												if(document.getElementById("txt_PIN_NO_Cash")!=null){
													//alert("m here1:"+document.getElementById("txt_PIN_NO_Cash").readonly);
													//document.getElementById("txt_PIN_NO_Cash").readonly="readonly";
													document.getElementById("txt_PIN_NO_Cash").setAttribute("readOnly","readOnly");
													//alert("m here2:"+document.getElementById("txt_PIN_NO_Cash").readonly);
												}
												if(document.getElementById("txt_PIN_NO_CashOther")!=null){
													//alert("m other1:"+document.getElementById("txt_PIN_NO_CashOther").readonly);
													//document.getElementById("txt_PIN_NO_CashOther").readonly="readonly";
													document.getElementById("txt_PIN_NO_CashOther").setAttribute("readOnly","readOnly");
													//alert("m other2:"+document.getElementById("txt_PIN_NO_CashOther").readonly);
												}
										}
										else{
											var radioLength=document.getElementsByName(radElement).length;
											//alert("element"+document.getElementById(htmlElement).id+" length:"+radioLength);
												for(var radioCount=0;radioCount<radioLength;radioCount++){
													//alert("valll:"+document.getElementsByName(radElement)[radioCount].value);
													//alert("htmlElementValue"+htmlElementValue);
													if(document.getElementsByName(radElement)[radioCount].value==htmlElementValue){
														
														document.getElementsByName(radElement)[radioCount].checked="checked";
														//alert(document.getElementsByName(radElement)[radioCount].onclick);
														if(document.getElementsByName(radElement)[radioCount].onclick!=null){
															document.getElementsByName(radElement)[radioCount].onclick();
														}
													}
													if(isAdmin == "Y" && adminType == "1" && dochtmlUpdatableSuperAdmin[tagCount].firstChild.nodeValue == "N"){
														document.getElementsByName(radElement)[radioCount].setAttribute("disabled","disabled");
													}
													else if((isAdmin == "Y" && dochtmlUpdatableAdmin[tagCount].firstChild.nodeValue == "N") || (isAdmin!='Y' && dochtmlUpdatableApplicant[tagCount].firstChild.nodeValue == "N")){
														document.getElementsByName(radElement)[radioCount].setAttribute("disabled","disabled");
													}
												}
										}										
									}
								}
								else if(document.getElementById(chkElement)!=null){
									if(document.getElementById(chkElement).type=="checkbox"){
										if(htmlElementValue==document.getElementById(htmlElement).value){
											document.getElementById(chkElement).checked="checked";
										}									
									}
									if(isAdmin == "Y" && adminType == "1" && dochtmlUpdatableSuperAdmin[tagCount].firstChild.nodeValue == "N"){
														document.getElementById(chkElement).setAttribute("disabled","disabled");
													}
													else if((isAdmin == "Y" && dochtmlUpdatableAdmin[tagCount].firstChild.nodeValue == "N") || (isAdmin!='Y' && dochtmlUpdatableApplicant[tagCount].firstChild.nodeValue == "N")){
											document.getElementById(chkElement).setAttribute("disabled","disabled");
									}
								}
								else{
									//alert("element:"+document.getElementById(htmlElement).id+" value:"+htmlElementValue);
									 if(document.getElementById(htmlElement).id=="txtCourses"){
										
										var courses=htmlElementValue.split(",");
										//alert("txtCourses: "+courses);
										for(var z=0;z<courses.length;z++){
											var chbElement="CHB_"+courses[z];
											var radElement=courses[z]+"_R";
											//alert("me: "+courses[z]+" radElement: "+radElement);
											//alert(courses[z]);
											//alert("no such element: "+document.getElementById(radElement).id);
											if(document.getElementById(chbElement)!=null){
												//alert("m chkbox & chbElement:::"+chbElement);
												document.getElementById(chbElement).checked="checked";
												if(document.getElementById(chbElement).onclick!=null){
													document.getElementById(chbElement).onclick();
												}
											}
											if(document.getElementById(radElement)!=null){
												//alert("m radio: "+document.getElementById(radElement).id);
												document.getElementById(radElement).checked="checked";
												if(document.getElementById(radElement).onclick!=null){
													document.getElementById(radElement).onclick();
												}
											}
											if(isAdmin == "Y" && adminType == "1" && dochtmlUpdatableSuperAdmin[tagCount].firstChild.nodeValue == "N"){
														if(document.getElementById(chbElement)!=null){document.getElementById(chbElement).setAttribute("disabled","disabled");}
														if(document.getElementById(radElement)!=null){document.getElementById(radElement).setAttribute("disabled","disabled");}
													}
													else if((isAdmin == "Y" && dochtmlUpdatableAdmin[tagCount].firstChild.nodeValue == "N") || (isAdmin!='Y' && dochtmlUpdatableApplicant[tagCount].firstChild.nodeValue == "N")){
														if(document.getElementById(chbElement)!=null){document.getElementById(chbElement).setAttribute("disabled","disabled");}
														if(document.getElementById(radElement)!=null){document.getElementById(radElement).setAttribute("disabled","disabled");}
												}
										}
									}
									else if(document.getElementById(htmlElement).id=="BTechType"){
										//alert("BTechType");
										var courses=htmlElementValue.split(",");
										for(var z=0;z<courses.length;z++){
											var chbElement="CHB_"+courses[z];
											var radElement=courses[z]+"_R";
											//alert("Courses: "+courses[z]);
											
											
											if(document.getElementById(chbElement)!=null){
												//alert("it's chkbox:"+document.getElementById(chbElement).value);
												document.getElementById(chbElement).checked="checked";
												if(document.getElementById(chbElement).onclick!=null){
													document.getElementById(chbElement).onclick();
												}
											}
											else if(document.getElementById(radElement)!=null){
												//alert("it's radio:"+document.getElementById(radElement).id);
												//alert(document.getElementById(radElement).checked);
												document.getElementById(radElement).checked="checked";
												//alert(document.getElementById(radElement).checked);
												if(document.getElementById(radElement).onclick!=null){
													document.getElementById(radElement).onclick();
												}
											}
											if(isAdmin == "Y" && adminType == "1" && dochtmlUpdatableSuperAdmin[tagCount].firstChild.nodeValue == "N"){
														if(document.getElementById(chbElement)!=null){document.getElementById(chbElement).setAttribute("disabled","disabled");}
														if(document.getElementById(radElement)!=null){document.getElementById(radElement).setAttribute("disabled","disabled");}
													}
													else if((isAdmin == "Y" && dochtmlUpdatableAdmin[tagCount].firstChild.nodeValue == "N") || (isAdmin!='Y' && dochtmlUpdatableApplicant[tagCount].firstChild.nodeValue == "N")){
													if(document.getElementById(chbElement)!=null){document.getElementById(chbElement).setAttribute("disabled","disabled");}
													if(document.getElementById(radElement)!=null){document.getElementById(radElement).setAttribute("disabled","disabled");}
											}
										}
									}
									else if(document.getElementById(htmlElement).id=="txtSpecialAreaOfInterests"){
										//alert("BTechType");
										var courses=htmlElementValue.split(",");
										for(var z=0;z<courses.length;z++){
											var chbElement="CHB_"+courses[z];
											var radElement=courses[z]+"_R";
											//alert("Courses: "+courses[z]);
											
											
											if(document.getElementById(chbElement)!=null){
												//alert("it's chkbox:"+document.getElementById(chbElement).value);
												document.getElementById(chbElement).checked="checked";
												if(document.getElementById(chbElement).onclick!=null){
													document.getElementById(chbElement).onclick();
												}
												
											}
											else if(document.getElementById(radElement)!=null){
												//alert("it's radio:"+document.getElementById(radElement).id);
												//alert(document.getElementById(radElement).checked);
												document.getElementById(radElement).checked="checked";
												//alert(document.getElementById(radElement).checked);
												if(document.getElementById(radElement).onclick!=null){
													document.getElementById(radElement).onclick();
												}
											}
											if(isAdmin == "Y" && adminType == "1" && dochtmlUpdatableSuperAdmin[tagCount].firstChild.nodeValue == "N"){
														if(document.getElementById(chbElement)!=null){document.getElementById(chbElement).setAttribute("disabled","disabled");}
														if(document.getElementById(radElement)!=null){document.getElementById(radElement).setAttribute("disabled","disabled");}
													}
													else if((isAdmin == "Y" && dochtmlUpdatableAdmin[tagCount].firstChild.nodeValue == "N") || (isAdmin!='Y' && dochtmlUpdatableApplicant[tagCount].firstChild.nodeValue == "N")){
													if(document.getElementById(chbElement)!=null){document.getElementById(chbElement).setAttribute("disabled","disabled");}
													if(document.getElementById(radElement)!=null){document.getElementById(radElement).setAttribute("disabled","disabled");}
											}
										}
									}
									else if(document.getElementById(htmlElement).id=="txtFeedBack"){
									var fdbks=htmlElementValue.split("(");
										//alert("value: "+fdbks);
										for(var z=0;z<fdbks.length;z++){
											if(z==(fdbks.length-1)){
												var optTwoVal=fdbks[z].substring(0,((fdbks[z].length)-1));
												//alert("opttwo value  "+optTwoVal);
												//document.getElementById("opttwo").value=optTwoVal;
												document.getElementById('opttwo_div').style.display = "none";
												document.getElementById('txtopttwo_div').style.display = "block";
												document.getElementById('txtopttwo').value=optTwoVal;
											}
											else{
												document.getElementById("optone").value=fdbks[z];
												
											}
										}
									//alert("dropdown value:"+document.getElementById("optone").value);
									var formID1=document.onlineAppForm.formId.value
									if(formID1=="15")
									{
									//alert("for form 15 only");
									if(document.getElementById("optone").value=="Faculty/Trainer"||document.getElementById("optone").value=="Existing Student")
									{
									setoptions();
									}
									}
									}
									else if(document.getElementById(htmlElement).id=='isAdmin'){
										var htmlElementValue=dochtmlValue[tagCount].firstChild.nodeValue;
										if(htmlElementValue == "1")
										{
											document.getElementById("campaigntab").style.display = "block";
										}
									}
									else{
										document.getElementById(htmlElement).value=htmlElementValue;
									}									
								}
							}
					}				
				}
				
				/*image filepath handling*/
				if(dochtmlDataType[tagCount].firstChild!=null){
											var dataType=dochtmlDataType[tagCount].firstChild.nodeValue;
											
											/*added for image type*/
											 if(dataType=='image')
											 {
											// alert("here");
											if(dochtmlValue[tagCount].firstChild!=null)
											{
											var htmlElementValue=dochtmlValue[tagCount].firstChild.nodeValue;
											//alert("htmlElementValue"+htmlElementValue);
											if(htmlElementValue.indexOf(",") > -1)
											{var pathSplit=htmlElementValue.split(",");										
											 
											if(pathSplit[0]!=null && pathSplit[0]!="")
											{
											var tempname =$("#txtFileName").val();
											 if(tempname=="")
												tempname=htmlElement;
											 else
												tempname=tempname+"||"+htmlElement;
												$("#txtFileName").val(tempname);
												
											 var tempvalue =$("#txtFilePath").val();
											 if(tempvalue=="")
												tempvalue=pathSplit[0];
											 else
												tempvalue=tempvalue+"||"+pathSplit[0];
												
											// alert("pathSplit[0]"+pathSplit[0]);
											// alert("tempvalue"+tempvalue);
											 $("#txtFilePath").val(tempvalue);
												
											 var tempFullvalue =$("#txtFilePathEdit").val();
											 
											 if(tempFullvalue=="")
											 { 
												
												tempFullvalue=pathSplit[1];
												
											 }
											 else
												tempFullvalue=tempFullvalue+"||"+pathSplit[1];
												
											 $("#txtFilePathEdit").val(tempFullvalue);
											}
											}
											else
												{
												var tempname =$("#txtFileName").val();
												 if(tempname=="")
													tempname=htmlElement;
												 else
													tempname=tempname+"||"+htmlElement;
													$("#txtFileName").val(tempname);
													
												 var tempvalue =$("#txtFilePath").val();
												 if(tempvalue=="")
													tempvalue=htmlElementValue;
												 else
													tempvalue=tempvalue+"||"+htmlElementValue;
													$("#txtFilePath").val(tempvalue);
													
												 var tempFullvalue =$("#txtFilePathEdit").val();
												 if(tempvalue=="")
													tempFullvalue=htmlElementValue;
												 else
													tempFullvalue=tempFullvalue+"||"+htmlElementValue;
													$("#txtFilePathEdit").val(tempFullvalue);
												}
											
											}
											
											
											 }
											  /*added for image type ends*/
											}
				/*image filepath handling ends*/
				
			}
		}
	}
	
	if(typeof window.doTaskInEdit == 'function') {
	// function exists, so we can now call it
		if(document.getElementById('isAdminEdit').value == "Y"){
			doTaskInEdit()
		}
	
}
	if(typeof window.doTaskAfterListingKeyPopulate == 'function') {
		doTaskAfterListingKeyPopulate()
	}
document.getElementById('strDisplayProfile').value="";
if(typeof window.vacancyNo == 'function') {
vacancyNo();
}
}


function fnDelayFill(dateFormat){
	//var dispProf=document.onlineAppForm.strDisplayProfile.value;
	var dispProf=document.getElementById('strDisplayProfile').value;
	if(dispProf==null || dispProf == '') {
		if(document.getElementById('strDisplayProfile')!=null){
			dispProf = document.getElementById('strDisplayProfile').value;
		}
	}
	setTimeout("openEditMode('"+dispProf+"','"+dateFormat+"')", 5000); 
}

function resetElementsInDiv(div) {
	var elms = document.getElementById(div).getElementsByTagName('*');
	var maxI = elms.length;

	for(var i = 0; i < maxI; i++) {    
	        var elm = elms[i];          
	        if("input" == elm.tagName.toLowerCase()){
	            if (elm.type=="text"||elm.type=="password"||elm.type=="hidden") {    
	                elm.value=elm.defaultValue;        
	            } else if (elm.type=="radio"||elm.type=="checkbox") {
	                elm.checked=elm.defaultChecked;        
	            }       
	        }else if("select" == elm.tagName.toLowerCase() && elm.disabled == false){
	            for (var j=0; j<elm.options.length;j++) {  
	                elm.options[j].selected=elm.options[j].defaultSelected;
	            }                   
	        }else if("textarea" == elm.tagName.toLowerCase()){
	            elm.value=elm.defaultValue;    
	        }
	    } 

}
function fOpener(win)  //function to return object for opener window for PopUp window
{
	var lOpener = '';	
	if(win && win.opener && !win.opener.closed)
	{
		if(win.opener.document)
		{
			lOpener = win.opener.document;
		}
	}
	return lOpener;
}

function getCroppedResult(xcord,ycord,width,height,inCropFieldPath,inCropFieldName,inCropFieldDispName){
	  var fieldName=document.getElementById("fieldName").value;
	  var fieldNameArray = fieldName.split("||");
	  var sizeListArray = document.getElementById("sizeList").value.split("||");
	  var size="";
	  for(var i=0;i<fieldNameArray.length;i++)
		  {
		  	if(inCropFieldName==fieldNameArray[i])
		  		{
		  		size=sizeListArray[i];
		  		break;
		  		}
		  }
	var http_request=fnGetXMLHttpObject();
	//var orgid=document.getElementByName('orgId').value;
	var inCropFPath=encodeURI(inCropFieldPath);
	//var parameters = "xcord="+xcord+"&ycord="+ycord+"&height="+height+"&width="+width+"&inCropFPath"+inCropFPath+"&inCropFieldName"+inCropFieldName+"&size"
	var parameters = "Common"+","+xcord+","+ycord+","+width+","+height+","+inCropFPath+","+inCropFieldName+","+inCropFieldDispName+","+size;
	if(http_request!=null){
		var pValidationServlet = "/EForms/CropImageServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnShowCroppedResult(http_request,inCropFPath,inCropFieldName,inCropFieldDispName,size); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("para="+parameters);
	}
}
function loader(){
	
	document.getElementById('loader-indicator').style.display="";
		
}
function fnShowCroppedResult(http_request,inCropFPath,inCropFieldName,inCropFieldDispName,size){

var jsresponse = new Array();
var responseError='';	
var fields;	
var flag='';
 var check="";
	if (http_request.readyState == 4){
		if (http_request.status == 200) {
			if(http_request.responseText != null)
			{
				eval(hideLoader());
				check=http_request.responseText;
				
				if(check.indexOf("\r\n")>0)
				{
				var message= check.substring(0,check.indexOf("\r\n"));
				}
				else
				{
				message=check;
				}
				
				if(message.indexOf('sizeSuccess')!=-1)
				{	
				
				document.getElementById('preview_'+inCropFieldName).setAttribute('src',inCropFPath+"?date="+new Date());
				var fieldname="cropid_"+inCropFieldName;
				document.getElementById(fieldname).style.display="none";	
				var cropMessage="The required image Cropped successfully.";		
				document.getElementById("example").src="";	
				document.getElementById("popup").style.display="none";
				var cropFieldArray=new Array();
				cropFieldArray=(document.getElementById("fieldName").value).split("||");
				var k=0;
				for(var i=0;i<cropFieldArray.length;i++){
				if(cropFieldArray[i]!="")
				{
				if(document.getElementById("cropid_"+cropFieldArray[i])!=null && document.getElementById("cropid_"+cropFieldArray[i])!=undefined)
    			{
				if (document.getElementById("cropid_"+cropFieldArray[i]).style.display==""){
					k++;
					break;
				}
				}
				}				
				}
				if(k==0)
				{
					cropMessage=cropMessage+" . Kindly press Submit.";
					document.getElementById("failed_upload").style.display="none";
					
				}
				document.getElementById("cropResS_div").innerHTML =cropMessage;
				document.getElementById("cropResS_tr").style.display="";	
				document.getElementById("cropResF_tr").style.display="none";
				}
				else if(message=="sizeFailed")
			{
				var cropMessage="The image "+inCropFieldDispName +" is still greater than " +size +"KB.Please crop again.";
				document.getElementById('preview_'+inCropFieldName).setAttribute('src',inCropFPath+"?date="+new Date());
				document.getElementById("cropResF_div").innerHTML =cropMessage;
				document.getElementById("cropResS_tr").style.display="none";	
				document.getElementById("cropResF_tr").style.display="";	
				document.getElementById("popup").style.display="none";	
			}
				else if(message=="cropedFailed")
				{
					var cropMessage="The image "+inCropFieldDispName +" could not be cropped.Please try again.";
					document.getElementById("cropResF_div").innerHTML =cropMessage;
					document.getElementById("cropResS_tr").style.display="none";	
					document.getElementById("cropResF_tr").style.display="";	
					document.getElementById("popup").style.display="none";	
				}
			}
		}
		}
	var successFlag= document.getElementById("successFlag").value;
	if(successFlag=="Y")
	{
		document.getElementById("success_upload").style.display="none";	
	}
	else if(successFlag=="N")
	{
		document.getElementById("failed_upload").style.display="none";	
	}	
		}
function fnHRMSRetrieveMasterData(){
	
	var http_request=fnGetXMLHttpObject();
	
	var orgID=$("#orgId").val();
	var formID=$("#formId").val();
	var parameters=orgID+","+formID;
	//alert("parameters:"+parameters);
	if(document.getElementById('Submit')!=null){
		document.getElementById('Submit').removeAttribute("disabled");
	}
	
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/HrmsServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnHrmsPopulateHrmsMaster(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("OrgFormParams="+parameters);
	}
	
}


function fnHrmsPopulateHrmsMaster(http_request){
	if(http_request.readyState == 4){
		if (http_request.status == 200){
		var responseDoc;
		if(http_request.responseText != null && http_request.responseText!=""){
					var respnseTxt = http_request.responseText;
					responseDoc = fnStringtoXML(respnseTxt);
				}else if(http_request.responseXML!= null){
					responseDoc= http_request.responseXML;
				}
			if(responseDoc != null){  	
            	var docs = responseDoc.getElementsByTagName("MASTERTABLE");
				var noOfDocuments=docs.length;
	
				var fieldhtmlname=new Array();
				if(noOfDocuments > 0){					 
					for(count=0;count<noOfDocuments;count++){		//loop document
							fieldhtmlname[count]=docs[count].getAttribute("fieldhtmlname");
							var fieldHTMLCount=fieldhtmlname[count].split("@@");
							if(fieldhtmlname[count].indexOf("@@")==-1){
							var fieldHTMLCount=(","+fieldhtmlname[count]).split(",");
							}
							for(var j=1;j<fieldHTMLCount.length;j++){
								fieldName=fieldHTMLCount[j];
								var i = 1;	
					
								if(document.getElementById(fieldName)!=null){		
									if(document.getElementById(fieldName).tagName=="SELECT"){
										var siteCode = new Array();
    									var siteName = new Array();
    						
										var docRows=docs[count].getElementsByTagName("ROW");
										var siteList = document.getElementById(fieldName);
					
										for(rowCount=0;rowCount<docRows.length;rowCount++){  //loop field
								
											var docFields=docRows[rowCount].getElementsByTagName("FIELD");
						
											for(fieldCount=0;fieldCount<docFields.length;fieldCount++){
												siteCode[fieldCount] = docFields[fieldCount].getAttribute("fieldname");
												siteName[fieldCount] = docFields[fieldCount].firstChild.nodeValue;
												siteName[fieldCount+1] = docFields[fieldCount+1].firstChild.nodeValue;
												siteList.options[i] = new Option(siteName[fieldCount+1],siteName[fieldCount]);
												fieldCount=fieldCount+1;
												i++;
											}
										}
									}
			  					}
							}
					}				   		
				}
			}
  		}
	}   
}		
function fnCloseImage1()
{
	document.getElementById("cropResS_tr").style.display="none";	
}		
function fnCloseImagePopUp()
{
	document.getElementById("popup").style.display="none";	
}	
function callAction(){
	
	var orgid=document.getElementById('orgId').value;
	var formid=document.getElementById('formId').value;
	var appid="9518";
	var entityid =document.getElementById('entity_Id').value;
   
	var parameters = "Common"+","+orgid+","+formid+","+appid+","+entityid;
	var http_request=fnGetXMLHttpObject();
	http_request.open('POST',"/EForms/ImageFileUpload",true);       

	http_request.onreadystatechange = function() { backtome(http_request); }; 	 	                    
	http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");           
    http_request.send("subAction=getFilePath&entityid="+entityid+"&formid="+formid+"&orgid="+orgid+"&appid="+appid);
	
}

function backtome(http_request){

		if (http_request.readyState == 4){
		if (http_request.status == 200) {
				if(http_request.responseText != null)
					{
						check=http_request.responseText;
						jsresponse=	check.split(","); 
						if (jsresponse[1]!=null && jsresponse[1]!="" && jsresponse[1]!="failed")
						{
							document.getElementById("txtFileName").value= jsresponse[1];
							document.getElementById("txtFilePath").value= jsresponse[2];
						}
						else
						{
							document.getElementById("txtFileName").value= "";
							document.getElementById("txtFilePath").value= "";
						}
          			  }
            }
}
}

function setfilevalues(uploadFileName,uploadFilePath,successFlag,totFileNo,cropReqString,errorFieldName,uploadFileDispName)
{
	
	eval(removeNull());
	var open = fOpener(window.self)
	var excdImagePos=new Array();;
	var fileNamesArray=new Array();
	var errorFieldNameArray=errorFieldName.split("||");
	var fieldNameArray=(document.getElementById("fieldName").value).split("||");
	var cropReq=new Array();		
	cropReq=cropReqString.split("||"); 
	if(uploadFileName!="null" && uploadFileName!="" && uploadFilePath!="null" && uploadFilePath!="")
	{
	//for(var t=0;t<errorFieldNameArray.length;t++)
	 // {
		for(var p=0;p<fieldNameArray.length;p++)
		 {
			//if(errorFieldNameArray[t]==fieldNameArray[p])
			 //{
				if(cropReq[p]=="Y" && uploadFileName.indexOf(fieldNameArray[p])>-1){
				document.getElementById("cropid_"+fieldNameArray[p]).style.display="";
				document.getElementById("newUpload_"+fieldNameArray[p]).style.display="";				
			    }
			// }
		 }
	 // }
   }
	
	if(open)
	{
	if(open.getElementById("isAdminEdit").value=="Y")
	{
		var existingVal=open.getElementById("txtFileName").value;
		var newValues=document.getElementById("keyString").value;
			if(existingVal.indexOf(newValues)==-1 && open.getElementById("txtFileName").value=="")
			{
				open.getElementById("txtFileName").value=document.getElementById("keyString").value;
				open.getElementById("txtFilePath").value=document.getElementById("valueString").value;
				open.getElementById("txtFileDisplayName").value=document.getElementById("displayString").value;
			}
			else {
				var txtFileNameEdit=open.getElementById("txtFileName").value;var txtFileNameEditArr=txtFileNameEdit.split("||");
				var txtFilePathEdit=open.getElementById("txtFilePath").value;var txtFilePathEditArr=txtFilePathEdit.split("||");
				var txtFileDisplayNameEdit=open.getElementById("txtFileDisplayName").value;var txtFileDisplayNameEditArr=txtFileDisplayNameEdit.split("||");
				
				var keyString =document.getElementById("keyString").value;var valueString=document.getElementById("valueString").value;
				var displayString=document.getElementById("displayString").value; var keyStringArr=keyString.split("||");
				var valueStringArr=valueString.split("||");var displayStringArr=displayString.split("||");
				for(var p=0;p<keyStringArr.length;p++)
				{
					if(keyStringArr[p]!=""){
						for(var q=0;q<txtFileNameEditArr.length;q++)
						{
						if(txtFileNameEditArr[q]!=""){
							if(txtFileNameEditArr[q]==keyStringArr[p])
							{
								txtFilePathEditArr[q]=valueStringArr[p];
								txtFileDisplayNameEditArr[q]=displayStringArr[p];
							}
							}
						}
						}
				}
				var keyFromArr="";var valueFromArr="";var dispFromArr="";
				for(var p=0;p<txtFileNameEditArr.length;p++)
						{
							if(txtFileNameEditArr[p]!=""){
								keyFromArr=keyFromArr+txtFileNameEditArr[p]+"||";
								valueFromArr=valueFromArr+txtFilePathEditArr[p]+"||";
								dispFromArr=dispFromArr+txtFileDisplayNameEditArr[p]+"||";
							}
					}
				open.getElementById("txtFileName").value=keyFromArr;
				open.getElementById("txtFilePath").value=valueFromArr;
				open.getElementById("txtFileDisplayName").value=dispFromArr;
			}
		
	}
	/*if(open.getElementById("imgSeqId").value!="" && open.getElementById("imgSeqId").value!="null")
	{
	document.getElementById("imgSeqId").value=open.getElementById("imgSeqId").value;
	}
	else (document.getElementById("imgSeqId").value!="" && document.getElementById("imgSeqId").value!="null")
	{
	open.getElementById("imgSeqId").value=document.getElementById("imgSeqId").value;
	}*/
	document.getElementById("txtFileName").value=open.getElementById("txtFileName").value;
	document.getElementById("txtFilePath").value=open.getElementById("txtFilePath").value;
	document.getElementById("uploadFileDispName").value=open.getElementById("txtFileDisplayName").value;

	if(document.getElementById("uploadFilePath").value=="" && document.getElementById("uploadFileName").value==""
	&& open.getElementById("txtFileName").value!="" && open.getElementById("txtFilePath").value!="")
	{
	document.getElementById("uploadFilePath").value=open.getElementById("txtFilePath").value;
	document.getElementById("uploadFileName").value=open.getElementById("txtFileName").value;
	document.getElementById("uploadFileDispName").value=open.getElementById("txtFileDisplayName").value;
	}
	if(document.getElementById("txtFileName").value!="" && document.getElementById("txtFilePath").value!=""){	
	var txtFileName=document.getElementById("txtFileName").value;
	var txtFilePath=document.getElementById("txtFilePath").value;
	var txtFileDispNam=document.getElementById("uploadFileDispName").value;

	var txtFileNameArray=txtFileName.split("||");
	var txtFilePathArray=txtFilePath.split("||");
	var txtFileDispNamArray=txtFileDispNam.split("||");
	
	var UploadedfileNameArray=uploadFileName.split("||");
	var UploadedfilePathArray=uploadFilePath.split("||");;
	var uploadFileDispNameArray=uploadFileDispName.split("||");

	for(var i=0;i<UploadedfileNameArray.length;i++)
	{
	var num=0;
	if (UploadedfileNameArray[i]!=""){
	for(var j=0;j<txtFileNameArray.length;j++)
	{
	if (txtFileNameArray[j]!=""){
    if((UploadedfileNameArray[i]==txtFileNameArray[j]))
    {
    	txtFilePathArray[j]=UploadedfilePathArray[i];
		txtFileDispNamArray[j]=uploadFileDispNameArray[i]
    	num++;
    }
    }
    }
    }
    if(num==0)
    {
    if (UploadedfileNameArray[i]!=""){
    txtFileName=txtFileName+UploadedfileNameArray[i]+"||";
    txtFilePath=txtFilePath+UploadedfilePathArray[i]+"||";
    txtFileDispNam=txtFileDispNam+uploadFileDispNameArray[i]+"||";
	successFlag='Y';
    document.getElementById("txtFileName").value=txtFileName;
	document.getElementById("txtFilePath").value=txtFilePath;
	document.getElementById("uploadFileDispName").value=txtFileDispNam;
    }
    } 
    if(num!=0)
    	{
			txtFileName="";successFlag='Y';
			txtFilePath="";txtFileDispNam="";
				for(var k=0;k<txtFileNameArray.length;k++)
					{
					if(txtFileNameArray[k]!="")
					{
   						 txtFileName=txtFileName+txtFileNameArray[k]+"||";
   						 txtFilePath=txtFilePath+txtFilePathArray[k]+"||";
						 txtFileDispNam=txtFileDispNam+txtFileDispNamArray[k]+"||";
   					 }
   					 }
   			 document.getElementById("txtFileName").value=txtFileName;
	         document.getElementById("txtFilePath").value=txtFilePath;	
			 document.getElementById("uploadFileDispName").value=txtFileDispNam;
		}   
	}
	}
	else
	{
	document.getElementById("txtFileName").value=uploadFileName;
	document.getElementById("txtFilePath").value=uploadFilePath;
	document.getElementById("uploadFileDispName").value=uploadFileDispName;
	}
	if(document.getElementById("txtFilePath").value!='')
	{
	var txtFileNameArray1=(document.getElementById("txtFileName").value).split("||");
	var txtFilePathArray1=(document.getElementById("txtFilePath").value).split("||");
	var uploadFileDispName=document.getElementById("uploadFileDispName").value;
	/*if(uploadFileDispName=='null' || uploadFileDispName=="")
	{
		uploadFileDispName=document.getElementById("fieldDisplayName1").value;
	//	document.getElementById("uploadFileDispName").value=document.getElementById("fieldDisplayName1").value;
	}*/
	var txtFileDisplayNameArray1=uploadFileDispName.split("||");
	for(var i=0;i<txtFileNameArray1.length-1;i++)
	{
		if(txtFilePathArray1[i].substring((txtFilePathArray1[i].lastIndexOf("."))+1,txtFilePathArray1[i].length)!="pdf")
		{
		if(document.getElementById('preview_'+txtFileNameArray1[i])!=null && document.getElementById('preview_'+txtFileNameArray1[i])!='undefined'){
		document.getElementById('preview_'+txtFileNameArray1[i]).setAttribute('src',txtFilePathArray1[i]+"?date="+new Date());
		document.getElementById(txtFileNameArray1[i]).style.display="none";
		document.getElementById("newUpload_"+txtFileNameArray1[i]).style.display="";
		if(successFlag !="N"){
		 //open.getElementById("txtPhotopath_hidden").value='Y';
		document.getElementById("uploaded_"+txtFileNameArray1[i]).innerHTML =" "+txtFileDisplayNameArray1[i]+" Uploaded";
		}
		document.getElementById('pdf_'+txtFileNameArray1[i]).style.display="none";
		}
		}
		else
		{
			if(document.getElementById('pdf_'+txtFileNameArray1[i])!=null && document.getElementById('pdf_'+txtFileNameArray1[i])!='undefined'){
			document.getElementById('pdf_'+txtFileNameArray1[i]).style.display="";
			document.getElementById('pdf_'+txtFileNameArray1[i]).setAttribute('href',txtFilePathArray1[i]);
			document.getElementById(txtFileNameArray1[i]).style.display="none";
			document.getElementById("newUpload_"+txtFileNameArray1[i]).style.display="";
			document.getElementById('preview_'+txtFileNameArray1[i]).style.display="none"
			if(successFlag !="N"){
			//open.getElementById("txtPhotopath_hidden").value='Y';
			document.getElementById("uploaded_"+txtFileNameArray1[i]).innerHTML =" "+txtFileDisplayNameArray1[i]+" Uploaded";
			}
		}
		}	
	}
	
	}
	if(successFlag=='Y')
	{
	 	  open.getElementById("txtPhotopath_hidden").value='Y';
	 	  open.getElementById("txtFileName").value=document.getElementById("txtFileName").value;
	      open.getElementById("txtFilePath").value=document.getElementById("txtFilePath").value;
		  open.getElementById("txtFileDisplayName").value=document.getElementById("uploadFileDispName").value;
	}
	if(open.getElementById("txtPhotopath_hidden").value=='Y')
	{
		document.getElementById("returnCount").value="1";
	}
	
	}
	if(typeof window.showImageName == 'function') {
	showImageName(uploadFileName,uploadFilePath);
}
}
function replace(str)
{	
	var str1="";	
	var newstr = str.replace(/<!\[CDATA\[/, str1);
	newstr=newstr.replace(/\]\]>/, str1);	
	//alert("new string: "+newstr);
	return newstr;
}
/************************************************************************************************************/

function saveTabDetails(tabName,validationMethod) {
	if(eval(validationMethod)){
		var http_request=fnGetXMLHttpObject();	
	    var parameters = "tabType="+tabName;
	    var value="";
	    var inputElements = document.getElementsByTagName('input');
	    for(var i=0; i< inputElements.length;i++){
	    	value=inputElements[i].value.replace("&","%30%")
	    	if(value!='' && inputElements[i].type!="radio" && inputElements[i].id!="mailContent"){
	    		parameters = parameters +"&"+inputElements[i].id+"="+value;
	    	}
	    }
	    var selectElements = document.getElementsByTagName('select');
	    for(var j=0; j< selectElements.length;j++){
	    	value=selectElements[j].options[selectElements[j].selectedIndex].value.replace("&","%30%")
	    	if(value!=''){
	    		parameters = parameters +"&"+selectElements[j].id+"="+value;
	    	}
	    }
		var pValidationServlet = "";
		pValidationServlet = "/EForms/SaveTabDataServlet?";
	    http_request.open('POST',pValidationServlet+parameters,true);       
		http_request.onreadystatechange = function() { handleSaveResponse(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");           
	    http_request.send(null);
	}	
}

function handleSaveResponse(http_request){
	var ERRORStr = new Array();
	var responseError='';	
	var fields;	
	var flag='';
		if (http_request.readyState == 4) { 
			if (http_request.status == 200) {
				if(http_request.responseText != null){   
					var responseDoc= http_request.responseXML;	 
					if(responseDoc == null){
    					var parser = new DOMParser();
    					responseDoc = parser.parseFromString(http_request.responseText, "application/xml");
    					}
					var docs = responseDoc.getElementsByTagName("DOCUMENT");
					var noOfDocuments = docs.length; 
					for(count=0;count<noOfDocuments;count++){	
						fields = docs[count].getElementsByTagName("FIELD");
						for(fieldCount=0;fieldCount<fields.length;fieldCount++){
							var fieldName = fields[fieldCount].getAttribute("entityId");
							if(fieldName!=''){
								document.getElementById('entityId').value=fieldName;
							}
							ERRORStr[count] = fields[fieldCount].firstChild.nodeValue;
							ERRORStr[count] = replace(ERRORStr[count]);
							responseError = responseError+'<br/>'+ERRORStr[count];
							document.getElementById('Submit').removeAttribute("disabled");
							alert(ERRORStr[count]);
							return false;
						} 
					}
				} else {
					alert("An error seems to have occurred. Please try again.");
				}				 
			}
		}
	}

function fnForgotPwd(button_id,formId,orgId){

   recaptcha_challenge_field = document.getElementById('recaptcha_challenge_field').value;
	recaptcha_response_field = document.getElementById('recaptcha_response_field').value;
	if (recaptcha_response_field == '') {
      alert("Please enter the Captcha.");
      return false;
    }else{
    	var http_request=fnGetXMLHttpObject();
    	if(http_request!=null){
	       document.getElementById(button_id).setAttribute("disabled","disabled"); 
			var pValidationServlet ="/EForms/GetCaptchaServlet?recaptcha_challenge_field="+recaptcha_challenge_field+"&recaptcha_response_field="+recaptcha_response_field; 
		   
    		http_request.open('POST',pValidationServlet,true);       
			http_request.onreadystatechange = function() { handleCaptchaResponsePwd(http_request,button_id,formId,orgId,'forgotPwd'); }; 	 	                    
			http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
			http_request.send();
		}
    }     
  
}
     
function fnGetPwd(button_id,formId,orgId){

  recaptcha_challenge_field = document.getElementById('recaptcha_challenge_field').value;
	recaptcha_response_field = document.getElementById('recaptcha_response_field').value;
	if (recaptcha_response_field == '') {
      alert("Please enter the Captcha.");
      return false;
    }else{
    	var http_request=fnGetXMLHttpObject();
    	if(http_request!=null){
	       document.getElementById(button_id).setAttribute("disabled","disabled"); 
			var pValidationServlet ="/EForms/GetCaptchaServlet?recaptcha_challenge_field="+recaptcha_challenge_field+"&recaptcha_response_field="+recaptcha_response_field; 
    		http_request.open('POST',pValidationServlet,true);       
			http_request.onreadystatechange = function() { handleCaptchaResponsePwd(http_request,button_id,formId,orgId,'getPwd'); }; 	 	                    
			http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
			http_request.send();
		}
    }     
  
}



function handleCaptchaResponsePwd(http_request,button_id,formId,orgId,type){
	 alert("handleCaptchaResponsePwd.");
var ERRORStr = new Array();
var responseError='';	
var fields;	
var flag='';
 var check="";
	if (http_request.readyState == 4){
		if (http_request.status == 200) {
			if(http_request.responseText != null){
				//alert("http_request.responseText:::   "+http_request.responseText);
				check=http_request.responseText;
							
				if(check.indexOf('valid')!=-1)
				{	 
				     if(type=='forgotPwd')
				     {
				        document.getElementById("myDiv").innerHTML=" ";
                        var app_seq_no=document.getElementById('useridForgotPwd').value;
                         var http_request=fnGetXMLHttpObject();	
			         if(http_request!=null){
			              var pValidationServlet ="ForgotPwd"; 
			              
			              var parameters=app_seq_no+","+formId+","+orgId;
	 	             http_request.open('POST',pValidationServlet,true); 
			         http_request.onreadystatechange = function() { fnPwd(http_request,button_id); }; 	 	  
			         http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			         http_request.send("Params="+parameters);
			         	}
				     }
				     else
				     {
				    // document.getElementById("myDiv1").innerHTML=" ";
                     var app_seq_no=document.getElementById('userid').value;
                     var mobileNo=document.getElementById('useridGetPwd').value;
                      var http_request=fnGetXMLHttpObject();	
			         if(http_request!=null){
			              var pValidationServlet = "/EForms/ForgotPwd";
			              var parameters=app_seq_no+","+formId+","+orgId+","+mobileNo+",getPassword";
	 	             http_request.open('POST',pValidationServlet,true); 
			         http_request.onreadystatechange = function() { fnPwd(http_request,button_id); }; 	 	  
			         http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			         http_request.send("Params="+parameters);
			                  	}
                     }
                    
				}
				else
				{
				   alert("Please enter correct text shown in image");
				  Recaptcha.reload ();
				  document.getElementById(button_id).removeAttribute("disabled");
				  return false;
				}
								
								
			}
		}
		}
}

function init_captcha()
{
	//alert("in init_captcha=:");
	
	var isAdmin= (document.getElementById('adminFlag')==undefined ||  document.getElementById('adminFlag')==null) ? "" : document.getElementById('adminFlag').value;
	var isListing=(document.getElementById('eicuListing')==undefined ||  document.getElementById('eicuListing')==null) ? "" : document.getElementById('eicuListing').value;
	//alert("isAdmin=:" +isAdmin);
	//alert("isListing=:" +isListing);
	//var isAdminEdit=document.getElementById("isAdminEdit").value;
	//alert("isAdminEdit=:" +isAdminEdit);
	if(isAdmin=='Y' || isListing=='true'){
		//alert("in without captcha");
		//alert("isAdmin=:" +isAdmin);
		//alert("isListing=:" +isListing);
}
else {
	//alert("with captcha");
	//alert("NotAdmin=:" +isAdmin);
	//alert("isListing=:" +isListing);
	captchaService.setAppId(30);
	captchaService.createCaptcha("captchaHolder");
}
	
}
function init_captcha_numeric()
{
	captchaService.setAppId(30);
	captchaService.setCaptchaType('numeric');
	captchaService.createCaptcha("captchaHolder");
}
	
function init_captcha_multilingual(language,onlyNumericReq)
{
	if(language!=null&&language!=""&&onlyNumericReq!=null&&onlyNumericReq!="")
	{
		captchaService.setAppId(30);
		
       if(language=="japanese")
	   {
	   captchaService.setCaptchaLanguage('japanese');
	   }
       else
       { captchaService.setCaptchaLanguage('english'); }
       
    if(onlyNumericReq=="Y")
       {
	   captchaService.setCaptchaType('numeric');
       }
    else
    {  captchaService.setCaptchaType('alphanumeric');}
    
    
	captchaService.createCaptcha("captchaHolder");
   }
 	
}
function getNameFromPath(strFilepath) {
    var objRE = new RegExp(/([^\/\\]+)$/);
    var strName = objRE.exec(strFilepath);
 
    if (strName == null) {
        return null;
    }
    else {
        return strName[0];
    }
}
function handleCaptchaResponseForIonCaptcha(http_request,subAction,button_id){
	//alert("handleCaptchaResponsePwd.");
var ERRORStr = new Array();
var responseError='';	
var fields;	
var flag='';
 var check="";
	if (http_request.readyState == 4){
		if (http_request.status == 200) {
			if(http_request.responseText != null){
				//alert("http_request.responseText:::   "+http_request.responseText);
				check=http_request.responseText;
							
				if(check.indexOf('Valid')!=-1)
				{	document.onlineAppForm.encoding = "multipart/form-data";
			         document.getElementById("subAction").value=subAction;
				     document.onlineAppForm.acceptCharset='UTF-8';
			         document.onlineAppForm.action = "/EForms/onlineApplicationAction.do";
					 document.onlineAppForm.submit();
				}
				else
				{
				  alert("Please enter correct text shown in image");
				  document.getElementById('captchaService_answer').value='';
				  init_captcha();
				  document.getElementById(button_id).removeAttribute("disabled");
				  return false;
				}
								
								
			}
		}
		}
		}


/*function fnForgotPwd(formId,orgId){
 document.getElementById("myDiv").innerHTML=" ";
 var app_seq_no=document.getElementById('useridForgotPwd').value;
 var http_request=fnGetXMLHttpObject();	
			if(http_request!=null){
			var pValidationServlet ="ForgotPwd"; 
			var parameters=app_seq_no+","+formId+","+orgId;
	 	    http_request.open('POST',pValidationServlet,true); 
			http_request.onreadystatechange = function() { fnPwd(http_request); }; 	 	  
			http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			http_request.send("Params="+parameters);
		}
}*/
function fnPwd(http_request,button_id){
if (http_request.readyState == 4){
		if (http_request.status == 200) {
			if(http_request.responseText != null){
				check=http_request.responseText;
				document.getElementById("myDiv").innerHTML=http_request.responseText;
				document.getElementById(button_id).removeAttribute("disabled"); 
				clicked="true";
								
			}
		}
	}
}
function fnGPwd(http_request,button_id){
if (http_request.readyState == 4){
		if (http_request.status == 200) {
			if(http_request.responseText != null){
				check=http_request.responseText;
				document.getElementById("myDiv1").innerHTML=http_request.responseText;
				document.getElementById(button_id).removeAttribute("disabled"); 
				clicked="true";
								
			}
		}
	}
}

/*function fnGeneratePdf(identifier){

	var formid = document.getElementById('formId').value;
	var orgid = document.getElementById('orgId').value;
	var applnSequenceField = document.getElementById('applnSequenceField').value;
	var app_seq_no = document.getElementById(applnSequenceField).value;
	var checksum=document.getElementById('checksum').value;
	checksum=encodeURIComponent(checksum);
	var sessChk=document.getElementById('sessChk').value;
	var entityId=document.getElementById('entityId').value;
	var eicuListing="";
	if(document.getElementById('eicuListing')){
		eicuListing=document.getElementById('eicuListing').value;
	}
	var URL =  "/EForms/GeneratePDF?formId="+formid+"&orgId="+orgid+"&appSeqNo=" + app_seq_no + "&subAction=generatePDF&identifier=" + identifier +"&checksum="+checksum+"&entityId="+entityId+"&sessChk="+sessChk+"&eicuListing="+eicuListing;
	window.open(URL,'','toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes');
}*/
function urlappend(){
	var url_string=window.location.href;
	var sub=url_string.split("?");
	var strng=(sub[1]==undefined|| sub[1] == null)?"":sub[1];
	var str="";
	if(strng!= undefined &&  strng!= ""){
	 var arr = strng.split("&");
	 for(var i=0;i<arr.length;i++){
		 var arr1=arr[i].split("=");
		 if(arr1[0]=="orgId" ||arr1[0]=="externalLogin" ||arr1[0]=="externalLoginString" || arr1[0]=="p_orgId_formId_decrypt" ||arr1[0]=="subAction" ||arr1[0]=="formId" ||arr1[0]=="sessChk" ||arr1=="userid" ||arr1[0]=="entityId" ||arr1[0]=="appSeqForValidation" ||arr1[0]=="app_seq_no" ||arr1[0]=="listFormId" ||arr1[0]=="checksum" ||arr1[0]=="applnSequenceField" || arr1[0]=="ERRORMSG"){
			 continue;
		 }
		 else{
			 str=str+"&"+arr[i];
		 }
	 }
	}
	return str;
}
function logout(){
	
	if(typeof window.fnLogoutBeforeLogout == 'function') {
		fnLogoutBeforeLogout();
	}
	var formId = document.getElementById('formId').value;
	var orgId = document.getElementById('orgId').value;
	var app_seq_no = document.getElementById('app_seq_no').value;
	window.history.forward();
	 var str=urlappend();
	 window.location.href="/EForms/loginAction.do?subAction=Logout&orgId="+orgId+"&formId="+formId+str;
	}
function logoutWithFormIdOrgId(Message){
	
	if(typeof window.fnLogoutBeforeLogout == 'function') {
		fnLogoutBeforeLogout();
	}
	var formId = document.getElementById('formId').value;
	var orgId = document.getElementById('orgId').value;
	window.location.href="/EForms/loginAction.do?subAction=Logout&orgId="+orgId+"&formId="+formId+"&Message="+Message;
}
function getQPTBasedOnKeyValues(){
	var http_request=fnGetXMLHttpObject();
	var orgID = document.getElementById('orgId').value;
	var formID = document.getElementById('formId').value;
	var app_seq_no = document.getElementById('app_seq_no').value;
	if(document.getElementById('div_QP')){
		document.getElementById('div_QP').innerHTML = '';
		document.getElementById("div_QP").style.display = "none";
	}if(document.getElementById('div_templatesList')){
		document.getElementById('div_templatesList').innerHTML = '';
		document.getElementById("div_templatesList").style.display = "none";
	}	
	var keyNamesList = document.getElementById('keyNameList').value;
	var keyIDsList = document.getElementById('keyIDsList').value;
	keyNamesList = keyNamesList.substring(0,keyNamesList.length-1);
	keyIDsList = keyIDsList.substring(0,keyIDsList.length-1);
	var keySelIdsList = "";
	var keyNamesArray = keyNamesList.split(",");
	var keyIDsArray = keyIDsList.split(",");
	var keyValuesList = '';
	for (i=0; i< keyNamesArray.length; i++){
		var fieldName = 'txt'+keyNamesArray[i]+'Value';
		if(document.getElementById(fieldName).value==''){
		}else{
			keySelIdsList = keySelIdsList + keyIDsArray[i] + ",";
			keyValuesList = keyValuesList + document.getElementById(fieldName).value + ",";
		}
	}
	keyValuesList = keyValuesList.substring(0,keyValuesList.length-1);
	keySelIdsList = keySelIdsList.substring(0,keySelIdsList.length-1);
	var keySelIdsListArr = keySelIdsList.split(",");
	var keyvaluesArray = keyValuesList.split(",");
	var parameters = orgID+"@@ION@@"+formID+"@@ION@@getQBTemplates@@ION@@"+keySelIdsListArr+"@@ION@@"+keyvaluesArray+"@@ION@@"+app_seq_no;
	
	if(keySelIdsListArr!="" && keyvaluesArray!=""){
		if(http_request!=null){
		document.getElementById('loader_div').style.display='';
		$("#printform").css({
			"opacity": "0.7"
		}); 
		var pValidationServlet = "/EForms/QBServlet";
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnPopulateQPTemplates(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("OrgFormParams="+parameters);
		}
	}
	else{
		alert("Please choose value for a key before submitting.");
		return false;
	}	
}

function fnPopulateQPTemplates(http_request){
	if (http_request.readyState == 4){  
          if (http_request.status == 200) {
               if(http_request.responseText != null)
                {
					document.getElementById('loader_div').style.display='none';
					$("#printform").css({
						"opacity": "1.0"
					});
                	var templateList = http_request.responseText;
                	
                	templateList = templateList.replace(/\&amp;/g,'&');
                	templateList = templateList.replace(/\&quot;/g,'\"');
                	templateList = templateList.replace(/\&apos;/g,'\'');
                	templateList = templateList.replace(/\&#33;/g,'!');
                	templateList = templateList.replace(/\&#35;/g,'#');
                	templateList = templateList.replace(/\&#37;/g,'%');

                	var responseDoc = fnStringtoXML(templateList);
                	//var responseDoc = http_request.responseXML;
            		var docs = responseDoc.getElementsByTagName("template");
					var noOfTemplates = docs.length;
					var tableContent = "";
                	if(noOfTemplates>0){
                		var newDiv = "<table width='100%' cellspacing='0' cellpadding='0' border='0' style='background-color: #eaf4f9;' class='info_table' id='table_templatesList'></table>";
                		$('#div_templatesList').append(newDiv);
                		tableContent = tableContent + "<tr><td>Select Template</td><td><select name='txtTemplate' id='txtTemplate' class='Country_field_required' width='178px'><option value='' selected='selected'>---Select---</option>";
                		for(var i=0; i< noOfTemplates; i++){
                			tableContent = tableContent + "<option value='" + docs.item(i).attributes[0].value + "'>" + docs[i].firstChild.nodeValue + "</option>";
                		}
                		tableContent = tableContent + "</td><td width='65%' colspan='2'>&nbsp;</td></tr><tr id='templateBtn'><td colspan='4'><div><table width='100%'><tr><td width='25%'>&nbsp;</td><td width='50%'>&nbsp;</td><td width='25%'><input type='button' style='cursor:pointer; background: url(images/onlineAppForm/generatePaper.JPG) no-repeat; border: none; height: 28px; width: 110px;' onclick='javascript: getQPLink();' id='showcontent2' class='nexttabbutton' value=''></td></tr></table></div></td></tr><input type='hidden' id='pprTmpltIdentifier' value='Template' name='pprTmpltIdentifier'>";
                	}else if(noOfTemplates==0){
						docs = responseDoc.getElementsByTagName("paper");
						noOfTemplates = docs.length;
						if(noOfTemplates>0){
                		var newDiv = "<table width='100%' cellspacing='0' cellpadding='0' border='0' style='background-color: #eaf4f9;' class='info_table' id='table_templatesList'></table>";
                		$('#div_templatesList').append(newDiv);
                		tableContent = tableContent + "<tr><td>Select Paper</td><td><select name='txtTemplate' id='txtTemplate' class='Country_field_required' width='178px'><option value='' selected='selected'>---Select---</option>";
                		for(var i=0; i< noOfTemplates; i++){
                			tableContent = tableContent + "<option value='" + docs.item(i).attributes[0].value + "'>" + docs[i].firstChild.nodeValue + "</option>";
                		}
                		tableContent = tableContent + "</td><td width='65%' colspan='2'>&nbsp;</td></tr><tr id='templateBtn'><td colspan='4'><div><table width='100%'><tr><td width='25%'>&nbsp;</td><td width='50%'>&nbsp;</td><td width='25%'><input type='button' style='cursor:pointer; background: url(images/onlineAppForm/generatePaper.JPG) no-repeat; border: none; height: 28px; width: 110px;' onclick='javascript: getQPLink();' id='showcontent2' class='nexttabbutton' value=''></td></tr></table></div></td></tr><input type='hidden' id='pprTmpltIdentifier' value='Paper' name='pprTmpltIdentifier'>";
                		}else{
                		var errDoc = responseDoc.getElementsByTagName("ERRORMESSAGE");
						if(errDoc.length!=0){
                			var newDiv = "<table width='100%' cellspacing='0' cellpadding='0' border='0' style='background-color: #eaf4f9;' class='info_table' id='table_templatesList'></table>";
                			$('#div_templatesList').append(newDiv);
                			tableContent = tableContent + "<tr><td>" + errDoc[0].firstChild.nodeValue  + "</td></tr>";
                		}
                		}
					}
					docs = responseDoc.getElementsByTagName("configurationId");
					noOfTemplates = docs.length;
					if(noOfTemplates == 1 && docs[0].firstChild.nodeValue!=null){
						tableContent = tableContent + "<input type='hidden' id='configurationId' value='"+docs[0].firstChild.nodeValue+"' name='configurationId'>";
						//document.getElementById("configurationId").value = docs[0].firstChild.nodeValue;
					}
					$("#table_templatesList").append(tableContent);
                	document.getElementById("div_templatesList").style.display = "";
				}}}}
function getQPLink(){
	if(document.getElementById('div_QP')){
		document.getElementById('div_QP').innerHTML = '';
	}
	if(document.getElementById('txtTemplate').value == ''){
		alert("Please choose one template to generate Question Paper.");
		return false;
	}
	var newDiv = "<table width='100%' cellspacing='0' cellpadding='0' border='0' style='background-color: #eaf4f9;' class='info_table' id='table_QP'><tr><td width='100%'>Please click <a href='#' onclick=\"centerPopup();loadPopup();\"> here </a> to generate Question Paper.</td></tr></table>";
                		$('#div_QP').append(newDiv);
                		//jQuery(".div_QP").removeClass("tabs-hide");
                		//jQuery(".div_QP").addClass("tabs-container");
                		document.getElementById("div_QP").style.display = "";
}
function genarateQP(templateId){
	var formId = document.getElementById('formId').value;
	var orgId = document.getElementById('orgId').value;
	var pprTmpltIdentifier = document.getElementById('pprTmpltIdentifier').value;
	var qpName = document.getElementById('qpName').value;
	var app_seq_no = document.getElementById('app_seq_no').value;
	var pwd = document.getElementById('password').value;
	var configurationId = document.getElementById("configurationId").value;
	var specialChars = "@!#$^*_+:";
	var ntAllwdChars = "%()-=`~{}[]\|;'\",./<>\?&";
	if(qpName==''){
		alert("Please enter the Question Paper Name.");
		validate=false;
		return false;
	}else if(pwd==''){
		alert("Please enter the Password.");
		validate=false;
		return false;
	}else if(pwd.length<6 || pwd.length>10){
		alert("Password should contain minimum 6 and maximum 10 letters.");
		validate=false;
		return false;
	}
	for(i = 0; i < specialChars.length;i++){
		if(pwd.indexOf(specialChars[i])>-1){
			validate=true;
			break;
		}
		else{
			validate = false;
		}
	}
	for(i = 0; i < ntAllwdChars.length;i++){
		if(pwd.indexOf(ntAllwdChars[i])>-1){
			validate=false;
			alert("You can not use "+ntAllwdChars[i]+" character in your password.");
			return false;
		}
		else{
			validate = true;
		}
	}
	if(!validate){
		alert("Password should contain atleast one special character among @!#$^*_+:");
		validate=false;
		return false;
	}
	if(qpName.indexOf("@@")>-1){
		validate=false;
		alert("You can not use @@ character in your Question Paper Name.");
		return false;
	}
	if(pwd.indexOf("@@")>-1){
		validate=false;
		alert("You can not use @@ character in your password.");
		return false;
	}
	/*if (pwd.match(/\d+/g) == null) {
		alert("Password should contain atleast one numeric digit.");
		validate=false;
		return false;
	}if(!/^[a-zA-Z]+$/.test(pwd)){
		alert("Password should contain atleast one character.");
		validate=false;
		return false;
	}*/
	var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;  
	if(pwd.match(passw))   
	{
		validate=true;
	}else{
		alert("Password should contain atleast one number, one upper case letter and one lower case letter.");
		validate=false;
		return false;
	} 
	if(validate){
		disablePopup();
		document.getElementById('loader_div').style.display='';
		$("#printform").css({
			"opacity": "0.7"
		}); 
		var values = orgId + "@@ION@@" + formId + "@@ION@@GENERATEQP@@ION@@" + pprTmpltIdentifier + "@@ION@@" + templateId + "@@ION@@" + qpName + "@@ION@@" + app_seq_no + "@@ION@@" + pwd + "@@ION@@" + configurationId;
		var http_request=fnGetXMLHttpObject();
		if(http_request!=null){
		var pValidationServlet = "/EForms/QBServlet";
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnResponseForQPGen(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("OrgFormParams="+values);
		}
	}
}

function fnResponseForQPGen(http_request){
	if (http_request.readyState == 4){  
          if (http_request.status == 200) {
               if(http_request.responseText != null)
                {
                	document.getElementById('loader_div').style.display='none';
					$("#printform").css({
						"opacity": "1.0"
					});
                	var genQPContnt = http_request.responseText;
					var responseDoc = fnStringtoXML(genQPContnt);
            		var docs = responseDoc.getElementsByTagName("QPLINK");
					var noOfrows = docs.length;
					var tableContent = "";
					if(noOfrows==1){
						if(document.getElementById('noQPtr')){
							document.getElementById('noQPtr').style.display='none';
						}
						genQPContnt = docs[0].firstChild.nodeValue;
						var qpContArr = genQPContnt.split("@@");
						tableContent = tableContent + "<tr><td>Click <a href='#' onclick=\"downloadQP('"+qpContArr[0]+"')\">here</a> to download "+qpContArr[1]+"</td></tr>";
						alert("Question Paper has been generated. You can download it from Previous Paper tab.");
					}
					$("#gen_qp_table").append(tableContent);
					var errDoc = responseDoc.getElementsByTagName("ERRORMESSAGE");
					var errRows = errDoc.length;
					if(errRows==1){
						genQPContnt = errDoc[0].firstChild.nodeValue;
						alert("Question paper could not be generated because: "+genQPContnt+" .");
					}
                }
          }
   	}
}
function downloadQP(qpPath){
	var path = qpPath;
	//path = path.replace(/\$\$/g,'/');
   	var app_seq_no = document.getElementById('app_seq_no_div').innerHTML;
	var checksum=document.getElementById('checksum').value;
	checksum=encodeURIComponent(checksum);
	var entityId=document.getElementById('entityId').value;
    var values = document.getElementById('orgId').value + "@@ION@@" + document.getElementById('formId').value + "@@ION@@DisplayQP@@ION@@" + path +"&appSeqNo=" + app_seq_no + "&checksum="+checksum+"&entityId="+entityId;
	var URL =  "/EForms/QBServlet?OrgFormParams="+values;
	
	window.open(URL,"QuestionPaper","status=yes,height=1,width=1,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no,top=0; left=0; ");

}
function replaceDropDowns(ddElement){
	var txtbox = ddElement + "_txtbox";
	document.getElementById(ddElement).style.display = "none";
	if(document.getElementById(txtbox)==null){
		 var txtboxElmt = "<input type='text' id='"+txtbox+"' name='"+txtbox+"' size='30'";
		 if($("#"+ddElement).attr('class')!=undefined && $("#"+ddElement).attr('class').indexOf("required")!=-1){
		 	txtboxElmt = txtboxElmt + "class='text_field_required'/>"
		 }else{
		 	txtboxElmt = txtboxElmt + "class='text_field'/>"
		 }
		 $(txtboxElmt).insertAfter("#"+ddElement);
		 document.getElementById(ddElement).style.display="none";
		 document.getElementById(txtbox).setAttribute("readOnly","readOnly");
		 document.getElementById(txtbox).style.display = "";
	}else{
		 document.getElementById(ddElement).style.display="none";
		 document.getElementById(txtbox).setAttribute("readOnly","readOnly");
		 document.getElementById(txtbox).style.display = "";
	}
	if(document.getElementById(ddElement).options[document.getElementById(ddElement).selectedIndex].value !="" && document.getElementById(ddElement).options[document.getElementById(ddElement).selectedIndex].value !="0"){
		document.getElementById(txtbox).value=document.getElementById(ddElement).options[document.getElementById(ddElement).selectedIndex].text; 
	}
}

function searchLovResult(lovValueArr)
{

  var formId=document.getElementById('formId').value;
  var orgId=document.getElementById('orgId').value;
  var parentForm=document.getElementById('parentForm').value;
  var pageNo = document.getElementById('pageNo').value;
  var lovClicked = document.getElementById('lovClicked').value
  var param='formId='+formId+'&orgId='+orgId+'&parentForm='+parentForm+'&childFormId='+childFormId+'&pageNo='+pageNo+"&lovClicked="+lovClicked;
  var valueArr=lovValueArr.split(",");
  for(var i=0;i<valueArr.length-1;i++)
   {
     var elementName='lov_'+valueArr[i];
     var temp=document.getElementById(elementName).value;
     param=param+"&"+valueArr[i]+"="+temp;
	 
   }
   var text=document.getElementById('popupContact').innerHTML;
   text=text+'<br/><div>this is result</div>';
   if(pageNo!=null && pageNo!=""){
   		pageNo = pageNo+1;
   }
   var http_request=fnGetXMLHttpObject();
    	if(http_request!=null){

        var pValidationServlet = "/EForms/LOVDataServlet"; 
        if(document.getElementById('actionTaker')!=null && document.getElementById('actionTaker').value!=""){
        	param = param + "&actionTaker=" + document.getElementById('actionTaker').value;
        }
    	http_request.open('POST',pValidationServlet,true);  
		http_request.onreadystatechange = function() {  handleResponseForLOVData(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("Params="+param);

   
}
}

function handleResponseForLOVData(http_request){

var ERRORStr = new Array();
var responseError='';	
var fields;	
var flag='';
var test = "";
 var responseDoc="";
	if (http_request.readyState == 4){
		if (http_request.status == 200) {
			if(http_request.responseText != null){
			    var responseDoc = http_request.responseText;
			    
			    responseDoc = responseDoc.replace(/\&amp;/g,"&");
	            responseDoc = responseDoc.replace(/\&quot;/g,"\"");
	            responseDoc = responseDoc.replace(/\&apos;/g,"\'");
	            responseDoc = responseDoc.replace(/\&#33;/g,"!");
	            responseDoc = responseDoc.replace(/\&#35;/g,"#");
	            responseDoc = responseDoc.replace(/\&#37;/g,"%");
	            	            
			    document.getElementById('populateTableContent').innerHTML=responseDoc;
			}
		}
	}
}

function prevPageNo()
{
  var nos=document.getElementById('pageNo').value;
  if(nos==0){   alert('No Previous Page available'); return false;}
  else
  {
  nos=parseInt(nos)-1;
  document.getElementById('pageNo').value=nos;
  }
  searchLovResult(document.getElementById('lovValue').value);
}

function nextPageNo()
{
  var nos=document.getElementById('pageNo').value;
  document.getElementById('pageNo').value=nos;
  nos=parseInt(nos)+1;
 var Tnos=document.getElementById('totalRecordCount').value;
 Tnos=((Tnos/5)==1 && (Tnos%5)==0?1:((Tnos%5==0)?((Tnos/5)):((Tnos/5)+1)));
  Tnos=parseInt(Tnos);
  if(nos==Tnos){
	alert("No Next Page available"); return false;
  }else{
	document.getElementById('pageNo').value=nos;
	 searchLovResult(document.getElementById('lovValue').value);
  }
}


function firstPageNo()
{
	if(document.getElementById('pageNo').value==0)
	{ }
	else
	{
    document.getElementById('pageNo').value="0";
     searchLovResult(document.getElementById('lovValue').value);
	}
}

function lastPageNo()
{
  var nos=document.getElementById('totalRecordCount').value;
  nos=((nos/5)==1 && (nos%5)==0?1:((nos%5==0)?((nos/5)):((nos/5)+1)));
  nos=parseInt(nos);
  document.getElementById('pageNo').value=nos-1;
  searchLovResult(document.getElementById('lovValue').value);
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function showPwdPolicy(){
	document.getElementById('pwd_policy').style.display = '';
	document.getElementById('okBtn_pwd').style.display = '';
	$("#popupContact").css({
		"height": "335px"
	});
}
function hidePwdPolicy(){
	document.getElementById('pwd_policy').style.display = 'none';
	document.getElementById('okBtn_pwd').style.display = 'none';
	$("#popupContact").css({
		"height": "245px"
	});
}

function fngetNtnltyMaster(){
	var http_request=fnGetXMLHttpObject();
	var orgID=$("#orgId").val();
	var formID=$("#formId").val();
	var parameters=orgID+","+formID;
	if(document.getElementById('Submit')!=null){
		document.getElementById('Submit').removeAttribute("disabled");
	}
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/HrmsNationalityMasterFetchDataServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnHrmsPopulateHrmsMaster(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("OrgFormParams="+parameters);
	}
}
function fnGetCntryMaster(){
	var http_request=fnGetXMLHttpObject();
	var orgID=$("#orgId").val();
	var formID=$("#formId").val();
	var parameters=orgID+","+formID;
	if(document.getElementById('Submit')!=null){
		document.getElementById('Submit').removeAttribute("disabled");
	}
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/HrmsCountryMasterFetchDataServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnHrmsPopulateHrmsMaster(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("OrgFormParams="+parameters);
	}
}
function fnGetMthrTngMaster(){
	var http_request=fnGetXMLHttpObject();
	var orgID=$("#orgId").val();
	var formID=$("#formId").val();
	var parameters=orgID+","+formID;
	if(document.getElementById('Submit')!=null){
		document.getElementById('Submit').removeAttribute("disabled");
	}
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/HrmsMotTngMasterFetchDataServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnHrmsPopulateHrmsMaster(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("OrgFormParams="+parameters);
	}
}
function fnGetQualcodeMaster(){
	var http_request=fnGetXMLHttpObject();
	var orgID=$("#orgId").val();
	var formID=$("#formId").val();
	var parameters=orgID+","+formID;
	if(document.getElementById('Submit')!=null){
		document.getElementById('Submit').removeAttribute("disabled");
	}
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/HrmsQualMasterFetchDataServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnHrmsPopulateHrmsMaster(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("OrgFormParams="+parameters);
	}
}
function fnGetEntryModeMaster(){
	var http_request=fnGetXMLHttpObject();
	var orgID=$("#orgId").val();
	var formID=$("#formId").val();
	var parameters=orgID+","+formID;
	if(document.getElementById('Submit')!=null){
		document.getElementById('Submit').removeAttribute("disabled");
	}
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/HrmsEntryModeMasterFetchDataServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnHrmsPopulateHrmsMaster(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("OrgFormParams="+parameters);
	}
}



function fnGetEntryModeMasterFromSiteId(siteId){
	var http_request=fnGetXMLHttpObject();
	var orgID=$("#orgId").val();
	var formID=$("#formId").val();
	var parameters=orgID+","+formID+","+siteId;
	if(document.getElementById('Submit')!=null){
		document.getElementById('Submit').removeAttribute("disabled");
	}
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/HrmsEntryModeMasterFetchDataServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnHrmsPopulateHrmsMaster(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("OrgFormParams="+parameters);
	}
}


function fnGetLangCodeMaster(){
	var http_request=fnGetXMLHttpObject();
	var orgID=$("#orgId").val();
	var formID=$("#formId").val();
	var parameters=orgID+","+formID;
	if(document.getElementById('Submit')!=null){
		document.getElementById('Submit').removeAttribute("disabled");
	}
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/HrmsLangCodeFetchDataServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnHrmsPopulateHrmsMaster(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("OrgFormParams="+parameters);
	}
}
function fnGetMartlStatusMaster(){
	var http_request=fnGetXMLHttpObject();
	var orgID=$("#orgId").val();
	var formID=$("#formId").val();
	var parameters=orgID+","+formID;
	if(document.getElementById('Submit')!=null){
		document.getElementById('Submit').removeAttribute("disabled");
	}
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/HrmsMaritalStatusMasterFetchDataServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnHrmsPopulateHrmsMaster(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("OrgFormParams="+parameters);
	}
}
function fnGetRelignMaster(){
	var http_request=fnGetXMLHttpObject();
	var orgID=$("#orgId").val();
	var formID=$("#formId").val();
	var parameters=orgID+","+formID;
	if(document.getElementById('Submit')!=null){
		document.getElementById('Submit').removeAttribute("disabled");
	}
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/HrmsReligionMasterFetchDataServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnHrmsPopulateHrmsMaster(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("OrgFormParams="+parameters);
	}
}
function fnGetResCatMaster(){
	var http_request=fnGetXMLHttpObject();
	var orgID=$("#orgId").val();
	var formID=$("#formId").val();
	var parameters=orgID+","+formID;
	if(document.getElementById('Submit')!=null){
		document.getElementById('Submit').removeAttribute("disabled");
	}
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/HrmsResvCatCodeFetchDataServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnHrmsPopulateHrmsMaster(http_request); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("OrgFormParams="+parameters);
	}
}


function fnCheckEFormsAvailability(){
	orgID = document.getElementById('orgId').value;
	formID = document.getElementById('formId').value;
	var xmlFilePath="/EForms/configuredXML/"+orgID+"/"+formID+"/MasterXML_"+formID+".xml";
	var xmlDoc=htmlData(xmlFilePath);
	//alert(xmlDoc);
	//alert(xmlDoc.getElementsByTagName("MASTERTABLE").length);
	if(xmlDoc!=null && xmlDoc.getElementsByTagName("FORMCONFIGURATION").length>0){
		var docs = xmlDoc.getElementsByTagName("FORMCONFIGURATION");
		var noOfDocuments=docs.length;
		if(noOfDocuments > 0){					 
				a=docs[0].getElementsByTagName("EFormStartDate");
				b=docs[0].getElementsByTagName("EFormEndDate");
				alert(a[0]);
				EFormsStartDate = a[0].nodeValue;
				EFormsEndDate = b[0].nodeValue;
				alert($.datepicker.parseDate(EFormsStartDate));
				
		}
	  }
	}

function convertText(data){

var brPref = true;
if(brPref == 1 || brPref == true){
var linebs = '<br>';
}else{
var linebs = '<br />';
}
var jpTag = true;
var jpTagbrTag = true;
var jbrTag = true;
var noBreaks = data;

//var tfEncode = $('#tfEncode:checked').val();
var tfEncode = "yes";
noBreaks = noBreaks.replace(/\r\n/g,"XiLBXZ");
noBreaks = noBreaks.replace(/\n/g,"XiLBXZ");
noBreaks = noBreaks.replace(/\r/g,"XiLBXZ");
var i = noBreaks.length,
aRet = [];
if(tfEncode == "yes"){
var browser=fnGetBrowserType();
if(browser=="Mozila")
{

while (i--) {
var iC = noBreaks [i].charCodeAt();
if (iC == 34  || iC == 38 || (iC ==96) || iC > 127) {
aRet[i] = '&#'+iC+';';
} else {
aRet[i] = noBreaks[i];
}
}
}
noBreaks = aRet.join('');
//Get rid of some odd balls
relq = /\&\#32\;/g;
noBreaks = noBreaks.replace(relq," ");
relq = /\&\#10\;/g;
noBreaks = noBreaks.replace(relq," ");
relq = /\&\#9\;/g;
noBreaks = noBreaks.replace(relq," ");
//make some friendly replacements
var tf1 =new Array("&#169;","&#174;","&#178;","&#179;","&#34;","&#38;","&#8211;","&#8212;","&#8216;","&#8217;","&#8220;","&#8221;","&#8226;","&#8224;","&#8225;","&#8242;","&#8243;","&#8249;","&#8250;","&#8364;","&#8482;","&#732;","&#710;","&#9824;","&#9827;","&#9829;","&#9830;","&#9674;","&#8592;","&#8594;","&#8593;","&#8595;","&#8596;","&#172;","&#161;","&#162;","&#163;","&#164;","&#165;","&#166;","&#167;","&#168;","&#170;","&#171;","&#172;","&#173;","&#175;","&#176;","&#177;","&#180;","&#181;","&#182;","&#183;","&#184;","&#185;","&#186;","&#187;","&#188;","&#189;","&#190;","&#191;","&#192;","&#193;","&#194;","&#195;","&#196;","&#197;","&#198;","&#199;","&#200;","&#201;","&#202;","&#203;","&#204;","&#205;","&#206;","&#207;","&#208;","&#209;","&#210;","&#211;","&#212;","&#213;","&#214;","&#215;","&#216;","&#217;","&#218;","&#219;","&#220;","&#221;","&#222;","&#223;","&#224;","&#225;","&#226;","&#227;","&#228;","&#229;","&#230;","&#231;","&#232;","&#233;","&#234;","&#235;","&#236;","&#237;","&#238;","&#239;","&#240;","&#241;","&#242;","&#243;","&#244;","&#245;","&#246;","&#247;","&#248;","&#249;","&#250;","&#251;","&#252;","&#253;","&#254;","&#255;");
var tf2=new Array("&copy;","&reg;","&sup2;","&sup3;","\"","&amp;","&ndash;","&mdash;","&lsquo;","&rsquo;","&ldquo;","&rdquo;","&bull;","&dagger;","&Dagger;","&prime;","&Prime;","&lsaquo;","&rsaquo;","&euro;","&trade;","&tilde;","&circ;","&spades;","&clubs;","&hearts;","&diams;","&loz;","&larr;","&rarr;","&uarr;","&darr;","&harr;","&not;","&iexcl;","&cent;","&pound;","&curren;","&yen;","&brvbar;","&sect;","&uml;","&ordf;","&laquo;","&not;","&shy;","&macr;","&deg;","&plusmn;","&acute;","&micro;","&para;","&middot;","&cedil;","&sup1;","&ordm;","&raquo;","&frac14;","&frac12;","&frac34;","&iquest;","&Agrave;","&Aacute;","&Acirc;","&Atilde;","&Auml;","&Aring;","&AElig;","&Ccedil;","&Egrave;","&Eacute;","&Ecirc;","&Euml;","&Igrave;","&Iacute;","&Icirc;","&Iuml;","&ETH;","&Ntilde;","&Ograve;","&Oacute;","&Ocirc;","&Otilde;","&Ouml;","&times;","&Oslash;","&Ugrave;","&Uacute;","&Ucirc;","&Uuml;","&Yacute;","&THORN;","&szlig;","&agrave;","&aacute;","&acirc;","&atilde;","&auml;","&aring;","&aelig;","&ccedil;","&egrave;","&eacute;","&ecirc;","&euml;","&igrave;","&iacute;","&icirc;","&iuml;","&eth;","&ntilde;","&ograve;","&oacute;","&ocirc;","&otilde;","&ouml;","&divide;","&oslash;","&ugrave;","&uacute;","&ucirc;","&uuml;","&yacute;","&thorn;","&yuml;");
for (var ii = 0; ii < tf1.length; ii++) {
noBreaks = noBreaks.replace(new RegExp(tf1[ii],"g"),tf2[ii]);
}

}
//relq = /\&amp\;/g;
//oBreaks = noBreaks.replace(relq,'&amp;amp;');
re1 = /\s+/g;
noBreaks = noBreaks.replace(re1," ");
noBreaks = $.trim(noBreaks);
if(jbrTag != 0 || jbrTag != false){
re4 = /XiLBXZXiLBXZ/gi;
noBreaks = noBreaks.replace(re4,linebs+"\r\n"+linebs+"\r\n");
}else{
re4 = /XiLBXZXiLBXZ/gi;
noBreaks = noBreaks.replace(re4,"</p><p>");
}

if(jpTag == 0 || jpTag == false){
re5 = /XiLBXZ/gi;
noBreaks = noBreaks.replace(re5,linebs+"\r\n");
}else{
re5 = /XiLBXZ/gi;
noBreaks = noBreaks.replace(re5," ");
}

if(jbrTag == 0 || jbrTag == false){
noBreaks ='<p>'+noBreaks+'</p>';
}

noBreaks = noBreaks.replace("<p><\/p>","");
noBreaks = noBreaks.replace("\r\n\r\n","");
noBreaks = noBreaks.replace(/<\/p><p>/g,"</p>\r\n\r\n<p>");
noBreaks = noBreaks.replace(new RegExp("<p><br />","g"),"<p>");
noBreaks = noBreaks.replace(new RegExp("<p><br>","g"),"<p>");

return noBreaks;
}	


function fnGetBrowserType(){
	var browserType ="";	   
	if (window.XMLHttpRequest){ // Mozilla, Safari,...
		browserType="Mozila";
	}else if (window.ActiveXObject){ // IE		           
		browserType="IE"
	}
	
	return browserType;
}

function fnHrmsAdminGetDependentData(fieldName,masterValue,whereFields,fieldHTMLName){
   
   	var http_request=fnGetXMLHttpObject();
	var orgid=$("#orgId").val();
	var EntryMode = document.getElementById("EntryMode").value;
	var index=document.getElementById('txtVacancyNo').selectedIndex;
	var VacancyNo=document.getElementById('txtVacancyNo').options[index].text;

	var parameters = orgid+","+fieldName+","+masterValue+","+whereFields+","+EntryMode+","+encodeURIComponent(VacancyNo);
	if(http_request!=null){
		var pValidationServlet = "/EForms/HrmsAdminDependentServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnHrmsAdminPopulateDependentData(http_request,whereFields,fieldHTMLName,masterValue); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");               
		http_request.send("hrmsparam="+parameters);
	}
}
function fnHrmsAdminGetDependentDataWithSite(fieldName,masterValue,whereFields,fieldHTMLName,siteFieldHTMLName,siteFieldDisplayName){
	
	if((document.getElementById(fieldName).value!="") && (document.getElementById(siteFieldHTMLName).value=="0" || document.getElementById(siteFieldHTMLName).value=="")){
		alert("Please select the "+siteFieldDisplayName);
		$("#"+fieldName).val($("#"+fieldName+" option:first-child").val());
		return false;
	}else{
    var siteID=document.getElementById(siteFieldHTMLName).value;
   	var http_request=fnGetXMLHttpObject();
	var orgid=$("#orgId").val();
	var EntryMode = document.getElementById("EntryMode").value;
	var index=document.getElementById(whereFields).selectedIndex;
	var VacancyNo=document.getElementById(whereFields).options[index].text;
	if(EntryMode!=""){
	var parameters = orgid+","+fieldName+","+masterValue+","+whereFields+","+EntryMode+","+encodeURIComponent(VacancyNo);
	if(http_request!=null){
		var pValidationServlet = "/EForms/HrmsAdminDependentServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnHrmsAdminPopulateDependentData(http_request,whereFields,fieldHTMLName,masterValue); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");               
		http_request.send("hrmsparam="+parameters+"&siteID="+siteID);
	}
	}else{
		$("#"+whereFields).html('<option selected="selected" value="0">---Select---</option>');
		$("#"+whereFields).change();
		$("#"+whereFields).click();
	}
	}
}


//populate site based on vacancy
function fnHrmsAdminGetDependentSiteFromVacancy(fieldName,masterValue,whereFields,siteFieldHTMLName,siteFieldDisplayName){
	
	if((document.getElementById(fieldName).value!="") && (document.getElementById(siteFieldHTMLName).value=="0" || document.getElementById(siteFieldHTMLName).value=="")){
		alert("Please select the "+siteFieldDisplayName);
		$("#"+fieldName).val($("#"+fieldName+" option:first-child").val());
		return false;
	}else{
    var siteID=document.getElementById(siteFieldHTMLName).value;
   	var http_request=fnGetXMLHttpObject();
	var orgid=$("#orgId").val();
	//var EntryMode = document.getElementById("EntryMode").value;
	var index=document.getElementById(siteFieldHTMLName).selectedIndex;
	var VacancyNo=document.getElementById(siteFieldHTMLName).options[index].text;
	//if(EntryMode!=""){
	var parameters = orgid+","+fieldName+","+masterValue+","+whereFields+","+EntryMode+","+encodeURIComponent(VacancyNo);
	if(http_request!=null){
		var pValidationServlet = "/EForms/HrmsAdminDependentServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnPopulateDirectVacancyData(http_request,whereFields); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");               
		http_request.send("hrmsparam="+parameters+"&siteID="+siteID);
	//}
	}else{
		$("#"+whereFields).html('<option selected="selected" value="0">---Select---</option>');
		$("#"+whereFields).change();
		$("#"+whereFields).click();
	}
	}
}



function fnHrmsAdminPopulateDependentData(http_request,whereFields,fieldHTMLName,masterValue){
	if(http_request.readyState == 4){
		if (http_request.status == 200){
			if(http_request.responseText != null){
			
			$("#"+whereFields).html('<option selected="selected" value="0">---Select---</option>');
			    document.getElementById(whereFields).style.display="block";
				document.getElementById(fieldHTMLName).style.display="none";
		
        		    	
            	var responseDoc= http_request.responseXML;
            	if(responseDoc == null){
					var parser = new DOMParser();
					responseDoc = parser.parseFromString(http_request.responseText, "application/xml");
					}
            	var docs = responseDoc.getElementsByTagName("MASTERTABLE");
				var noOfDocuments=docs.length;
	
				//var tableName = new Array();
				var fieldhtmlname=new Array();
				if(noOfDocuments > 0){					 
					for(count=0;count<noOfDocuments;count++){		//loop document
			
					//	tableName[count] = docs[count].getAttribute("tablename");
						//alert("tableName: "+tableName[count]);
						
						//if((tableName[count]!="")||(tableName[count]!=null)){
							fieldhtmlname[count]=docs[count].getAttribute("fieldhtmlname");
							//alert("fieldhtmlname: "+fieldhtmlname[count]);
							var fieldHTMLCount=fieldhtmlname[count].split(",");
							//alert(fieldHTMLCount.length);
				
							for(var j=0;j<fieldHTMLCount.length;j++){
					
								fieldName=fieldHTMLCount[j];
								var i = 1;	
					
								if(document.getElementById(fieldName)!=null){		
									if(document.getElementById(fieldName).tagName=="SELECT"){
										var siteCode = new Array();
    									var siteName = new Array();
    						
										var docRows=docs[count].getElementsByTagName("ROW");
										var siteList = document.getElementById(fieldName);
					siteList.options.length=1;
										for(rowCount=0;rowCount<docRows.length;rowCount++){  //loop field
								
											var docFields=docRows[rowCount].getElementsByTagName("FIELD");
						
											for(fieldCount=0;fieldCount<docFields.length;fieldCount++){
												siteCode[fieldCount] = docFields[fieldCount].getAttribute("fieldname");
												siteName[fieldCount] = docFields[fieldCount].firstChild.nodeValue;
												siteName[fieldCount+1] = docFields[fieldCount+1].firstChild.nodeValue;
												siteList.options[i] = new Option(siteName[fieldCount+1],siteName[fieldCount]);
												fieldCount=fieldCount+1;
												i++;
											}
										}
									}else if(document.getElementById(fieldName).tagName=="SPAN"){
										var hdnField=fieldName+"Hdn";
										var depField=hdnField+"Dep";
										var radioHidden=fieldName.substring(0,(fieldName.length)-5);
										//alert("html field name: "+radioHidden);
										//alert(document.getElementById(hdnField).type);
										if(document.getElementById(hdnField).type=="hidden"){
											var hdnValue=document.getElementById(hdnField).value;
											if(hdnValue=="radio"){
												var siteCode = new Array();
    											var siteName = new Array();
												var docRows=docs[count].getElementsByTagName("ROW");
												var siteList = document.getElementById(fieldName);
									
												var htmlElement="";
												for(rowCount=0;rowCount<docRows.length;rowCount++){  //loop field
										
													htmlElement=htmlElement+"<input type='radio' value='";
													//var htmlElement=document.createElement("input");
													//htmlElement.setAttribute('type','radio');
													var docFields=docRows[rowCount].getElementsByTagName("FIELD");
																			
													for(fieldCount=0;fieldCount<docFields.length;fieldCount++){
														if(fieldCount==0){
														siteName[fieldCount] = docFields[fieldCount].firstChild.nodeValue;
														//htmlElement.setAttribute('value',siteName[fieldCount]);
														htmlElement=htmlElement+siteName[fieldCount]+"' id='";
														}else if(fieldCount>0){
															siteCode[fieldCount] = docFields[fieldCount].getAttribute("fieldname");
															siteName[fieldCount] = docFields[fieldCount].firstChild.nodeValue;
															//var htmlElementId=siteCode[fieldCount]+"_Rad"+fieldCount;
															//htmlElement.setAttribute('id',htmlElementId);
															//htmlElement.setAttribute('name',htmlElementId);
													
															htmlElement=htmlElement+siteCode[fieldCount]+"_Rad"+(rowCount+1)+"' name='"+siteCode[fieldCount]+"' onclick=fnCheckRadio(this,'"+radioHidden+"',this.name)";
															if(document.getElementById(depField)!=null){
																	htmlElement=htmlElement+";"+document.getElementById(depField).value;
																	htmlElement=htmlElement+">";
															}
															else{
																htmlElement=htmlElement+">";
															}
														}
													}
													htmlElement=htmlElement+siteName[1]+" ";
										
													//alert(htmlElement);
													//alert("dghsghdf");
													//siteList.appendChild(htmlElement);
													//siteList.appendChild();
								
													//siteList.innerHTML=siteName[1];										
												}
												//alert(htmlElement);
												siteList.innerHTML=htmlElement;
											}
										}
									}
			  					}
							}
						//}
					}				   		
				}
				if(whereFields=="txtVacancyNo"){
				var vacancyDDown=document.getElementById("txtVacancyNo");
				for(i=0;i<vacancyDDown.length;i++){
					if(vacancyDDown.options[i].text==document.getElementById("txtVacancyNoBox").value){
					document.getElementById("txtVacancyNo").value= vacancyDDown.options[i].value;
					document.getElementById("txtVacancyNo").onchange();
					}
				}
				
				}	
				if(whereFields=="txtDesignGrd"){
				var vacancyDDown=document.getElementById("txtDesignGrd");
				for(i=0;i<vacancyDDown.length;i++){
					if(vacancyDDown.options[i].text==document.getElementById("txtDesignGrdBox").value)
					document.getElementById("txtDesignGrd").value= vacancyDDown.options[i].value;
					
				}
				
				}				
			}
			else {
			document.getElementById(whereFields).style.display="none";
				document.getElementById(fieldHTMLName).style.display="block";
		
			
			}
  		}
	}   
} 
function fnShowPreview(){
	var formId = document.getElementById("formId").value;
	var orgId = document.getElementById("orgId").value;
	jQuery('#defineSequencePopup').css({'position':'fixed'});
	jQuery('#defineSequencePopup, .shadow').fadeIn();
	align();
	url="/EForms/configuredHtml/"+orgId+"/"+formId+"/preview.html","Preview","status=yes,height=600,width=800,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=no,top=100; left=100;"
 	
	document.getElementById('frame2').setAttribute("src",url);
	document.getElementById("frame2").style.float="bottom";
	document.getElementById("frame2").style.display="";
	$('#frame2').load(function() {
	$("#frame2").contents().find("#edit_div").hide();
	var parentId="";
	$("#frame2").contents().find("tr[id$=_tr]").hide();
	$("#frame2").contents().find("*[id$=_div]").each(function(e){
		parentId=this.id.split("_div")[0];
		if(document.getElementById(parentId)){
		if(document.getElementById(parentId).tagName=="SELECT"){
		if(document.getElementById(parentId)[document.getElementById(parentId).selectedIndex].value!="" && !(document.getElementById(parentId)[document.getElementById(parentId).selectedIndex].text.indexOf("-Select-")>-1) && !(document.getElementById(parentId)[document.getElementById(parentId).selectedIndex].text.indexOf("-select-")>-1)){
			this.innerHTML=document.getElementById(parentId)[document.getElementById(parentId).selectedIndex].text;
			if(this.innerHTML!="")
			$("#frame2").contents().find("#"+this.id).closest("tr").show();
			else
			$("#frame2").contents().find("#"+this.id).closest("tr").hide();
		}else{
			$("#frame2").contents().find("#"+this.id).closest("tr").hide();
		}
		}else{
			if(document.getElementById(parentId)!= null && document.getElementById(parentId)!=undefined && document.getElementById(parentId).value!=""){
				if(onlyAlphaNumericWithoutScriptCharactersExceptAnd (document.getElementById(parentId).value)){
				this.innerHTML=document.getElementById(parentId).value;}
				$("#frame2").contents().find("#"+this.id).closest("tr").show();
			}else{
			var filledFlag=false;
			$("#frame2").contents().find("#"+this.id).closest("tr").find("*[id$=_div]").each(function(e){
				if(this.innerHTML!=""){
					filledFlag=true;
				}
			});
			if(filledFlag==true){
				$("#frame2").contents().find("#"+this.id).closest("tr").show();
			}else{
				$("#frame2").contents().find("#"+this.id).closest("tr").hide();
			}
			}
		}
		}
		
	});
	var FileName=document.getElementById("txtFileName").value;
	var FilePath=document.getElementById("txtFilePathEdit").value;
	FileNameArr=FileName.split("||");
	FilePathArr=FilePath.split("||");
	for(var i=0;i<FileNameArr.length;i++){
		if(FilePathArr[i].indexOf("/EForms/EFormsServeImage")==-1){
			var d = new Date();
			var n = d.getTime();
			FilePathArr[i]=FilePathArr[i]+"?v="+n;
		}
		var imagePath='<img width="100px" height="100px" src="'+FilePathArr[i]+'" name="app'+FileNameArr[i]+'" id="app'+FileNameArr[i]+'">';
		var imageName="#"+FileNameArr[i]+"_tr";
		$(imageName, $("#frame2").contents()).html(imagePath);
		$(imageName, $("#frame2").contents()).parents("tr").show();
	}
	if(typeof window.fnHideEmptyFields == 'function') {
		try{
		fnHideEmptyFields();
		}catch(e){}
	}
	if(typeof window.fnAfterPreview == 'function') {
		try{fnAfterPreview();}catch(e){}
	}
	});
	$(document).ready(function() {
		$('.pop_minimize_preview').click(function(){
		
		$(this).parent().parent().css('width','998px');
		$(this).parent().parent().css('height','475px');
		$(".popupScrollable").css('height','400px');
		$(".popupScrollable").css('width','998px');
		$(".formDiv").css('height','400px');
			var win_width = $(window).width();
			var win_height = $(window).height();
			
			var pop_width2=$(this).parent().parent().width();
			var pop_height2=$(this).parent().parent().height();
			var pop_top2 = (win_height - pop_height2)/2 ;
			var pop_left2 = (win_width - pop_width2)/2 ;
			
			if(pop_top2<0){
				pop_top2 = 10;
				var popup_out_height=win_height-12;
				var popup_in_height=win_height-40;
				$(this).parent().parent().css('height',popup_out_height+'px');
		        $(".popupScrollable").css('height',popup_in_height+'px');
				$(".pop_body").css('height',popup_in_height+'px');
				$(".formDiv").css('height',popup_in_height+'px');
			}else{
				$(".pop_body").css('height','400px');
			}
		$(this).parent().parent().css({'top':pop_top2+'px','left':pop_left2+'px'});
		$(this).removeClass(' pop_minimize_preview').addClass('pop_expand_preview');
		
		});
		});
	$('.pop_expand_preview').click();
	jQuery('#defineSequencePopup').css({left:'10px'});// to keep the popup at the center of window
	jQuery('#defineSequencePopup').css({top:'10px'});//to keep the popup at the center of window
	$('.pop_body').css({overflow:'hidden'});//to hide the double scroll bars appreaing in candidate side
	
	
}
function align()
{
	var win_width = $(window).width();
	var win_height = $(window).height();
	var pop_width = $('.popup').width();
	var pop_height = $('.popup').height();
	var pop_top = (win_height - pop_height) / 2 ;
	var pop_left = (win_width - pop_width) / 2 ;
	
	$('.popup').css({'top':pop_top+'px','left':pop_left+'px'});
	
}
function fnClosePopupPreview(){
jQuery('#defineSequencePopup, .shadow').fadeOut('fast');
$('.pop_body').CSS({overflow:'auto'});
$("#frame2").attr('src',"");
}

/*method to set cookie on view load*/
function setCookieOnViewLoad(cookieValueForName)
{
	document.cookie="username="+cookieValueForName;
}
/*method to set cookie on view load*/
function fnLogout(Message){
	if(Message==undefined || Message==null){
		Message="";
	}
	 var str=urlappend();
	document.forms[0].method="POST";
	document.forms[0].action="/EForms/loginAction.do?subAction=Logout&Message="+Message+str;
	document.forms[0].submit();
}

function validateChkDuplicate(arrValues)
{
var a="";
var check = false;
	for(i=0;i<arrValues.length;i++){
   		a=a+"-@@ion@@-"+arrValues[i];
  	}

	var http_request=fnGetXMLHttpObject();
	var orgID=document.getElementById("orgId").value;
	var formID=document.getElementById("formId").value;
	if(http_request!=null){
		var pValidationServlet ="/EForms/SecureCheckDuplicate"; 
		http_request.open('POST',pValidationServlet,false); 
		http_request.onreadystatechange = function() { 
			check = validateChkDuplicateResponse(http_request); }; 	 	
		var parameters = orgID + "-@@ion@@-" + formID + a;

		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http_request.send("Params="+parameters);
	}
	return check;
} 

function validateChkDuplicateResponse(http_request){
var check = false;
	if (http_request.readyState == 4){

		if (http_request.status == 200) {
			var i=http_request.responseText;
			if(http_request.responseText!="" || http_request.responseText!=null){
				check=http_request.responseText ;
				if(check=='invalid')
				{
					check = false;
				}
				else
				{
					check = true;

				}		

			}
		}
	}
	return check;
}
function validateChkUniqueOccurence(arrValues)
{
var a="";
var check = false;
	for(i=0;i<arrValues.length;i++){
   		a=a+"-@@ion@@-"+arrValues[i];
  	}

	var http_request=fnGetXMLHttpObject();
	var orgID=document.getElementById("orgId").value;
	var formID=document.getElementById("formId").value;
	if(http_request!=null){
		var pValidationServlet ="/EForms/SecureCheckDuplicate"; 
		http_request.open('POST',pValidationServlet,false); 
		http_request.onreadystatechange = function() { 
			check = validateChkDuplicateResponse(http_request); }; 	 	
		var parameters = orgID + "-@@ion@@-" + formID + a;

		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http_request.send("Params="+parameters+"&appKeyIdentifier=CheckUniqueOccurence");
	}
	return check;
} 

$('.pop_expand_preview').on('click', function(){
	var win_width = $(window).width();
	var win_height = $(window).height();
	$(this).parent().parent().css('height',win_height-20);
	$(this).parent().parent().css('width',win_width-20);
	$(".popupScrollable").css('height',win_height-95);
	$(".popupScrollable").css('width',win_width-20);
	$(".formDiv").css('height',win_height-95);
	$(this).parent().parent().css({'top':'10px','left':'10px'});
	$(this).removeClass('pop_expand_preview').addClass('pop_minimize_preview');
	$(".pop_body").css('height',win_height-95);
	
})
$('.pop_minimize_preview').on('click', function(){
	
	$(this).parent().parent().css('width','998px');
	$(this).parent().parent().css('height','475px');
	$(".popupScrollable").css('height','400px');
	$(".popupScrollable").css('width','998px');
	$(".formDiv").css('height','400px');
		var win_width = $(window).width();
		var win_height = $(window).height();
		
		var pop_width2=$(this).parent().parent().width();
		var pop_height2=$(this).parent().parent().height();
		var pop_top2 = (win_height - pop_height2)/2 ;
		var pop_left2 = (win_width - pop_width2)/2 ;
		
		if(pop_top2<0){
				pop_top2 = 10;
				var popup_out_height=win_height-12;
				var popup_in_height=win_height-40;
				$(this).parent().parent().css('height',popup_out_height+'px');
		        $(".popupScrollable").css('height',popup_in_height+'px');
				$(".pop_body").css('height',popup_in_height+'px');
				$(".formDiv").css('height',popup_in_height+'px');
			}else{
				$(".pop_body").css('height','400px');
			}
	$(this).parent().parent().css({'top':pop_top2+'px','left':pop_left2+'px'});
	$(this).removeClass(' pop_minimize_preview').addClass('pop_expand_preview');
});

function fnEditApplication(){
	//var str=url();
	var orgId = document.getElementById("orgId").value;
	var formId = document.getElementById("formId").value;
	if(typeof window.fnEditApplicationBeforeEdit == 'function') {
		fnEditApplicationBeforeEdit();
	}
	document.loginForm.action="/EForms/editApplication.do";//?orgId="+orgId+"&formId="+formId+str;
	document.loginForm.formId=formId;
	document.loginForm.orgId=orgId;
	document.loginForm.method="POST";
	document.loginForm.submit();
}  
function validateIonCaptchaFrameworkForgot(button_id){

    var a=document.getElementById('captchaService_imageKey').value;
    var b=document.getElementById('captchaService_answer').value;
   var formId=document.getElementsByName('formId')[0].value;
   var orgId=document.getElementsByName('orgId')[0].value;
   var parameter="captchaService_imageKey="+a+"&captchaService_answer="+b+"&appId=30";
	
    if (b == '') {
      alert("Please enter the Captcha.");
      return false;
    }else{
    	var http_request=fnGetXMLHttpObject();
    	if(http_request!=null){

           var pValidationServlet = "";
           	pValidationServlet = "/EForms/IonCaptchaValidation"; 

    	http_request.open('POST',pValidationServlet,true);  
		http_request.onreadystatechange = function() {  handleCaptchaResponseForIonCaptchaFrameworkForgot(http_request,button_id,formId,orgId); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send(parameter);
		}
    }     
  
}

function handleCaptchaResponseForIonCaptchaFrameworkForgot(http_request,button_id,formId,orgId){

var ERRORStr = new Array();
var responseError='';	
var fields;	
var flag='';
 var check="";
	if (http_request.readyState == 4){
		if (http_request.status == 200) {
			if(http_request.responseText != null){
				//alert("http_request.responseText:::   "+http_request.responseText);
				check=http_request.responseText;
							
				if(check.indexOf('Valid')!=-1)
				{	
				        document.getElementById("myDiv").innerHTML=" ";
                        var app_seq_no=document.getElementById('useridForgotPwd').value;
                         var http_request=fnGetXMLHttpObject();	
			         if(http_request!=null){
			              var pValidationServlet ="/EForms/ForgotPwd"; 
			              init_captcha();
			              var parameters=app_seq_no+","+formId+","+orgId;
	 	             http_request.open('POST',pValidationServlet,true); 
			         http_request.onreadystatechange = function() { fnPwd(http_request,button_id); }; 	 	  
			         http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			         http_request.send("Params="+parameters+"&identifier=AdminSendPwd");
			         	}
				}
				else
				{
				  alert("Please enter correct text shown in image");
				  document.getElementById('captchaService_answer').value='';
				  init_captcha();
				  document.getElementById(button_id).removeAttribute("disabled");
				  return false;
				}
								
								
			}
		}
		}
		}
function changePwd()
{
document.loginForm.method="POST";
		document.loginForm.action="loginAction.do?subAction=CandidateChangePassword";
		document.loginForm.submit();
}  

//OneTimePassword functions and variables
var win;
 function fnGenerateOTP(otpMobileNumber,statusShowFunctionName)
{
	if(win==undefined||win.closed)
	{
		var http_request=fnGetXMLHttpObject();
		var orgID = document.getElementById('orgId').value;
		var formID = document.getElementById('formId').value;
		if(otpMobileNumber==""||otpMobileNumber==null)
		{
			alert("Please provide a Mobile Number");
			return false;
		}
		//otpMobileNumber = otpMobileNumberValue;
		var otpAction = "generate";
		var otpText = "dummy";
		var otpEmail = ""; var sendOtpMedia = "SMS";
		var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&statusShowFunctionName="+statusShowFunctionName+"&sendOtpMedia="+sendOtpMedia;
		otpCaptchaIframe(otpCaptchaUrl);
		//window.launchOTPURL("POST",otpCaptchaUrl,"","_blank");
		//window.launchOTPCaptchaurl("POST",otpCaptchaUrl,"","_blank");// for opening in small window popup
//		win = window.open(otpCaptchaUrl,"_blank", "toolbar=no, scrollbars=no, resizable=yes, top=200, left=200, width=370, height=320");
	}
	
}
/*function fnGenerateOTPBOTH(otpMobileNumber,otpEmail,statusShowFunctionName)
{
	if(win==undefined||win.closed)
	{
		var http_request=fnGetXMLHttpObject();
		var orgID = document.getElementById('orgId').value;
		var formID = document.getElementById('formId').value;
		var sendOtpMedia = document.getElementById('sendOtpMedia').value;
		if(sendOtpMedia=="BOTH")
		{
			if(otpMobileNumber==null || otpMobileNumber==""  || otpEmail == null || otpEmail == "" )
			{
				alert("Please provide a Mobile Number and Email ID");
				return false;
			}
			//otpMobileNumber = otpMobileNumberValue;
			var otpAction = "generate";
			var otpText = "dummy";
			var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&statusShowFunctionName="+statusShowFunctionName+"&sendOtpMedia="+sendOtpMedia;
			window.launchOTPURL("POST",otpCaptchaUrl,"","_blank");
		}
		else if(sendOtpMedia=="SMS")
		{
			if(otpMobileNumber==null || otpMobileNumber==""   )
			{
				alert("Please provide a Mobile Number");
				return false;
			}
			//otpMobileNumber = otpMobileNumberValue;
			var otpAction = "generate";
			var otpText = "dummy";
			var otpEmail = "";
			var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&statusShowFunctionName="+statusShowFunctionName+"&sendOtpMedia="+sendOtpMedia;
			window.launchOTPURL("POST",otpCaptchaUrl,"","_blank");
		}
		else if(sendOtpMedia=="EMAIL")
		{
			if(otpEmail == null || otpEmail == "")
			{
				alert("Please provide a Email ID");
				return false;
			}
			//otpMobileNumber = otpMobileNumberValue;
			var otpAction = "generate";
			var otpText = "dummy";
			var otpMobileNumber = "";
			var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&statusShowFunctionName="+statusShowFunctionName+"&sendOtpMedia="+sendOtpMedia;
			window.launchOTPURL("POST",otpCaptchaUrl,"","_blank");
		}
//		win = window.open(otpCaptchaUrl,"_blank", "toolbar=no, scrollbars=no, resizable=yes, top=200, left=200, width=370, height=320");
	}
	
}*/	
launchOTPURL = function(verb, url, data, target) {
	  var form = document.createElement("form");
	  form.action = url;
	  form.method = verb;
	  form.target = target || "_self";
	
	  form.style.display = 'none';
	  document.body.appendChild(form);
	  form.submit();
	};

function fnResendOTP(otpMobileNumber,statusShowFunctionName)
{
	if(win==undefined||win.closed)
	{
		var http_request=fnGetXMLHttpObject();
		var orgID = document.getElementById('orgId').value;
		var formID = document.getElementById('formId').value;
		if(otpMobileNumber==""||otpMobileNumber==null)
		{
			alert("Please provide a Mobile Number");
			return false;
		}
		//otpMobileNumber = otpMobileNumberValue;
		var otpAction = "resend";
		var otpText = "dummy";var otpEmail ="";var sendOtpMedia = "SMS";
		var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&statusShowFunctionName="+statusShowFunctionName+"&sendOtpMedia="+sendOtpMedia;
		otpCaptchaIframe(otpCaptchaUrl);
		//win = window.open(otpCaptchaUrl,"_blank", "toolbar=no, scrollbars=no, resizable=yes, top=200, left=200, width=370, height=320");
		//window.launchOTPCaptchaurl("POST",otpCaptchaUrl,"","_blank");// for opening in small window popup
	}
}

function fnValidateOTP(otpMobileNumber,otpText,statusShowFunctionName)
{
	var http_request=fnGetXMLHttpObject();
	var orgID = document.getElementById('orgId').value;
	var formID = document.getElementById('formId').value;
	var otpEmail = "";
	if(otpMobileNumber==""||otpMobileNumber==null)
	{
		alert("Please provide a Mobile Number");
		return false;
	}
	if(otpText==""||otpText==null)
	{
		alert("Please provide OTP received");
		return false;
	}
	var parameters=formID+","+orgID+","+"validate"+","+otpMobileNumber+","+otpEmail+","+otpText;
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/OTPGenerationAndValidationServlet?"; 
		http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { eval(statusShowFunctionName+'(http_request)'); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("otpParams="+parameters);
	}
}
/*function fnResendOTPBOTH(otpMobileNumber,otpEmail,statusShowFunctionName)
{
	if(win==undefined||win.closed)
	{
		var http_request=fnGetXMLHttpObject();
		var orgID = document.getElementById('orgId').value;
		var formID = document.getElementById('formId').value;
		var sendOtpMedia = document.getElementById('sendOtpMedia').value;
		if(sendOtpMedia=="BOTH")
		{
			if(otpMobileNumber==null || otpMobileNumber==""  || otpEmail == null || otpEmail == "" )
			{
				alert("Please provide a Mobile Number and Email ID");
				return false;
			}
			//otpMobileNumber = otpMobileNumberValue;
			var otpAction = "resend";
			var otpText = "dummy";
			var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&statusShowFunctionName="+statusShowFunctionName+"&sendOtpMedia="+sendOtpMedia;
			win = window.open(otpCaptchaUrl,"_blank", "toolbar=no, scrollbars=no, resizable=yes, top=200, left=200, width=370, height=320");	
		}
		else if(sendOtpMedia=="SMS")
		{
			if(otpMobileNumber==null || otpMobileNumber==""   )
			{
				alert("Please provide a Mobile Number");
				return false;
			}
			var otpAction = "resend";
			var otpText = "dummy";
			var otpEmail = "";
			var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&statusShowFunctionName="+statusShowFunctionName+"&sendOtpMedia="+sendOtpMedia;
			window.launchOTPURL("POST",otpCaptchaUrl,"","_blank");
		}
		else if(sendOtpMedia=="EMAIL")
		{
			if(otpEmail == null || otpEmail == "")
			{
				alert("Please provide a Email ID");
				return false;
			}
			//otpMobileNumber = otpMobileNumberValue;
			var otpAction = "resend";
			var otpText = "dummy";
			var otpMobileNumber = "";
			var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&statusShowFunctionName="+statusShowFunctionName+"&sendOtpMedia="+sendOtpMedia;
			window.launchOTPURL("POST",otpCaptchaUrl,"","_blank");
		}
	}
}*/

/*function fnValidateOTPBOTH(otpMobileNumber,otpEmail,otpText,statusShowFunctionName)
{
	var http_request=fnGetXMLHttpObject();
	var orgID = document.getElementById('orgId').value;
	var formID = document.getElementById('formId').value;
	var sendOtpMedia = document.getElementById('sendOtpMedia').value;
	if(sendOtpMedia=="BOTH")
	{
		if(otpMobileNumber==""||otpMobileNumber==null || otpEmail == null || otpEmail == "")
		{
			alert("Please provide a Mobile Number or Email ID");
			return false;
		}				
	}
	else if(sendOtpMedia=="SMS")
	{
		if(otpMobileNumber==null || otpMobileNumber==""   )
		{
			alert("Please provide a Mobile Number");
			return false;
		}
		otpEmail = "";
	}
	else if(sendOtpMedia=="EMAIL")
	{
		if(otpEmail == null || otpEmail == "")
		{
			alert("Please provide a Email ID");
			return false;
		}
		otpMobileNumber= "";
	}
	if(otpText==""||otpText==null)
	{
		alert("Please provide OTP received");
		return false;
	}
	 var parameters=formID+","+orgID+","+"validate"+","+otpMobileNumber+","+otpEmail+","+otpText;
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/OTPGenerationAndValidationServlet?"; 
		http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { eval(statusShowFunctionName+'(http_request)'); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("otpParams="+parameters);
	}
}*/
function validateOTPCaptcha()
{
	 var a=document.getElementById('captchaService_imageKey').value;
	 var b=document.getElementById('captchaService_answer').value;
	 
	 var parameter="captchaService_imageKey="+a+"&captchaService_answer="+b+"&appId=30";
		
	 if (b == '') 
	 {
	      alert("Please enter the Captcha.");
	      return false;
	 }
	 else
	 {
	    	var http_request=fnGetXMLHttpObject();
	    	if(http_request!=null)
		    {
	
		           var pValidationServlet = "";
		           	pValidationServlet = "/EForms/IonCaptchaValidation?"; 
	
		    	http_request.open('POST',pValidationServlet,true);  
				
				http_request.onreadystatechange = function() {  handleCaptchaResponseForOTPCaptcha(http_request); }; 	 	                    
				http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
				http_request.send(parameter);
			}
	 }     
}



function handleCaptchaResponseForOTPCaptcha(http_request)
{
	var ERRORStr = new Array();
	var responseError='';	
	var fields;	
	var flag='';
	var check="";
	if (http_request.readyState == 4)
	{
		if (http_request.status == 200) 
		{
			if(http_request.responseText != null)
			{
				check=http_request.responseText;
				if(check.indexOf('Valid')!=-1)
				{	
					callOTPAction();
				}
				else
				{
				  alert("Please enter correct text shown in image");
				  document.getElementById('captchaService_answer').value='';
				  captchaService.setAppId(30);
				  captchaService.createCaptcha("captchaHolder");
				  //document.getElementById(button_id).removeAttribute("disabled");
				  return false;
				}
			}
		}
	}
}

/*function callOTPAction()
{
	var http_request=fnGetXMLHttpObject();
	if(sendOtpMedia=="BOTH")
	{
		if(otpMobileNumber==""||otpMobileNumber==null || otpEmail == null || otpEmail == "")
		{
			alert("Please provide a Mobile Number and Email ID");
			return false;
		}				
	}
	else if(sendOtpMedia=="SMS")
	{
		if(otpMobileNumber==null || otpMobileNumber==""   )
		{
			alert("Please provide a Mobile Number");
			return false;
		}
		 otpEmail = "";
	}
	else if(sendOtpMedia=="EMAIL")
	{
		if(otpEmail == null || otpEmail == "")
		{
			alert("Please provide a Email ID");
			return false;
		}
		otpMobileNumber= "";
	}
	 var a=document.getElementById('captchaService_imageKey').value;
	 var b=document.getElementById('captchaService_answer').value;
	var parameters=formID+","+orgID+","+otpAction+","+otpMobileNumber+","+otpEmail+","+"dummy"+"&captchaService_imageKey="+a+"&captchaService_answer="+b+"&appId=30";
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/OTPGenerationAndValidationServlet"; 
		http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() {handleCallOTPAction(http_request);}; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send("otpParams="+parameters);
	}
}*/


function callOTPAction()
{
	var http_request=fnGetXMLHttpObject();
	if(sendOtpMedia=="BOTH")
	{
		if(otpMobileNumber==""||otpMobileNumber==null || otpEmail == null || otpEmail == "")
		{
			alert("Please provide a Mobile Number and Email ID");
			return false;
		}				
	}
	else if(sendOtpMedia=="SMS")
	{
		if(otpMobileNumber==null || otpMobileNumber==""   )
		{
			alert("Please provide a Mobile Number");
			return false;
		}
		 otpEmail = "";
	}
	else if(sendOtpMedia=="EMAIL")
	{
		if(otpEmail == null || otpEmail == "")
		{
			alert("Please provide a Email ID");
			return false;
		}
		otpMobileNumber= "";
	}
	else if(sendOtpMedia=="BothDifferentOTP")
	{
	
	   if(SMSOREmail=='Both')
		  {
			if(otpMobileNumber==null || otpMobileNumber==""  || otpEmail == null || otpEmail == "" )
			{
				alert("Please provide a Mobile Number and Email ID");
				return false;
			}
			}
			else if(SMSOREmail=="Email")
	    	{
			if(otpEmail == null || otpEmail == "")
			{
				alert("Please provide a Email ID");
				return false;
			}
			}
			else if(SMSOREmail=="SMS")
	    	{
			if(otpMobileNumber==null || otpMobileNumber==""   )
			{
				alert("Please provide a Mobile Number");
				return false;
			}
			}
	}
	 var a=document.getElementById('captchaService_imageKey').value;
	 var b=document.getElementById('captchaService_answer').value;
	var parameters=formID+","+orgID+","+otpAction+","+otpMobileNumber+","+otpEmail+","+"dummy"+"&captchaService_imageKey="+a+"&captchaService_answer="+b+"&appId=30";
	if(http_request!=null){
		var pValidationServlet = ""; 
		pValidationServlet = "/EForms/OTPGenerationAndValidationServlet"; 
		http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() {handleCallOTPAction(http_request);}; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 

 if(SMSOREmail!='')
	 http_request.send("SMSOREmail="+SMSOREmail+"&otpParams="+parameters);
 else  	  
		http_request.send("otpParams="+parameters);
	}
}	
function handleCallOTPAction(http_request)
{
	if (http_request.readyState == 4)
	{
		if (http_request.status == 200) 
		{
			if(http_request.responseText != null)
			{

                if(navigator.userAgent.indexOf("Firefox") != -1 )
                { 
                	eval('window.parent.callWindowOpener(statusShowFunctionName,http_request,window)');
                }
                else
                {
                  eval('window.parent.'+statusShowFunctionName+'(http_request)');
                   //window.close();
                  removeIframe();
                 }
			}
		}
	}
}



function  callWindowOpener(statusShowFunctionName,http_request,window)
{
	//window.close();	
	removeIframe();

eval(statusShowFunctionName+'(http_request)');
}

function formMultilingualMetadata()
{

//alert("Entered in formMultilingualMetadata ");
	 var formId=document.getElementsByName('formId')[0].value;
	   var orgId=document.getElementsByName('orgId')[0].value;
	   var language="";
	   if(self==top)
		   	language=$('#multilingualLanguageSelected').val();
	   else if(parent==top)
		    language= window.parent.$('#multilingualLanguageSelected').val(); 
	   else
		   language=$('#multilingualLanguageSelected').val();
	  // alert("language "+language);
	   $('#multilingualDropdownForForm').val(language);
	   if(language == undefined)
		   language = "noLanguage";
	   var parameters=formId+","+orgId+","+language;
	   var valueReturnedForLabelChange="";
	    
	   //alert("formId = "+formId);
	 //   alert("parameters = "+parameters);
	    $.ajax({ 
	  	               type: "POST",
	  	               url: "/EForms/MultilingualFormMetadataServlet",
	  					   async: false,
	  	             data: {
	  	            OrgFormParams: parameters 
	  	            	
	  	            	  },
	  	              
	  	               success: function(returnValue)
	  	               {
	  	            	  
	  	            	  
	  	                
	                      valueReturnedForLabelChange=returnValue;

	  						
	  	               }  
	  	          });
	  	          
	  	    //     alert("valueReturnedForLabelChange = "+valueReturnedForLabelChange);
	  	          
	  	        //  var labelLoadValuesArray = new Array(98);

	    labelValueArray=valueReturnedForLabelChange.split("@all@");
	    for(var i =1; i<labelValueArray.length;i++)
	    {
	    	singleLabelvalue=labelValueArray[i].split("@one@");
	    	if(document.getElementById(singleLabelvalue[0]))
	    	{
				if(singleLabelvalue[1]!=""&&singleLabelvalue[1]!=null&&singleLabelvalue[1].trim()!="")
				{
					document.getElementById(singleLabelvalue[0]).innerHTML =singleLabelvalue[1];
				}
	    	}
	    }
	    
}

function setMultilingualLanguageToSession(language,formId,orgId)
{

  
	   if(language == "")
		   language = "noLanguage";
	   var parameters=formId+","+orgId+","+language;
	   var valueReturnedForLabelChange="";
	   var subAction = "setMultilingualLanguageToSession";
	
	    $.ajax({ 
	  	               type: "POST",
	  	               url: "/EForms/MultilingualFormMetadataServlet",
	  					   async: false,
	  	             data: {
	  	            OrgFormParams: parameters, 
	  	          subAction : subAction	
	  	            	  },
	  	              
	  	               success: function(returnValue)
	  	               {
	  	            	  
	  	            	  
	  	                
	                      valueReturnedForLabelChange=returnValue;

	  						
	  	               }  
	  	          });
	  	          
	  	    //     alert("valueReturnedForLabelChange = "+valueReturnedForLabelChange);
	  	          
	  	        //  var labelLoadValuesArray = new Array(98);

	   
	    
}

function formLangDropDownChange(valueForLang)
{
	 var urlForHtml="";
	 var envLink="DynamicLink";
	 var formid=document.getElementsByName("formId")[0].value;
	 var orgid=document.getElementsByName("orgId")[0].value;
	 var actionTaken=""
	 
	 var envProtocol= window.location.protocol;// for http or https
	var envLocation= window.location.host; // env. name
	var envPathNAme= window.location.pathname; // rest of the url
	
	var envPathArray = new Array();
	envPathArray = envPathNAme.split("/");
	
	for ( var i = 0; i < envPathArray.length; i++)
		{
		if(envPathArray[i] == 'configuredHtml')
			{
			envLink = 'StaticLink';
			}
		
		if(envPathArray[i] == 'loginAction.do'||envPathArray[i]=='login.html')
		{
			actionTaken = 'loginAction';
		}
		
		if(envPathArray[i] == 'onlineApplicationAction.do'||envPathArray[i]=='application.html')
		{
			actionTaken = 'onlineApplicationAction';
		}
		if(envPathArray[i] == 'editApplication.do')
		{
			actionTaken = 'editApplication';
		}
		
		}
	
	
	if(envLink == 'StaticLink')
		{
	
		if(actionTaken == 'onlineApplicationAction')
			{
	 $.ajax({
		    url:  "/EForms/configuredHtml/"+orgid+"/"+formid+"/"+valueForLang+"/application.html",
		    type:'HEAD',
			async : false,
		    error: function()
		    {
		        //file not exists
		    	  urlForHtml= "/EForms/configuredHtml/"+orgid+"/"+formid+"/application.html";
		    },
		    success: function()
		    {
		        //file exists
		    	 urlForHtml= "/EForms/configuredHtml/"+orgid+"/"+formid+"/"+valueForLang+"/application.html";
		    }
		});
			}
		
		if(actionTaken == 'loginAction')
		{
 $.ajax({
	    url: "/EForms/configuredHtml/"+orgid+"/"+formid+"/"+valueForLang+"/login.html",
	    type:'HEAD',
		async : false,
	    error: function()
	    {
	        //file not exists
	    	  urlForHtml= "/EForms/configuredHtml/"+orgid+"/"+formid+"/login.html";
	    },
	    success: function()
	    {
	        //file exists
	    	 urlForHtml= "/EForms/configuredHtml/"+orgid+"/"+formid+"/"+valueForLang+"/login.html";
	    }
	});
		}
		//alert(urlForHtml);
		window.location.pathname = urlForHtml;
	
		}
	
	else
		{
		
		
		if(actionTaken == 'onlineApplicationAction')
			{
		urlForHtml="onlineApplicationAction.do?values="+orgid+"@@"+formid+"&lang="+valueForLang;
			}
		
		if(actionTaken == 'loginAction')
			{
			urlForHtml="loginAction.do?subAction=ViewLoginPage&orgId="+orgid+"&formId="+formid+"&lang="+valueForLang;
			}
		if(actionTaken == 'editApplication')
			{
				var orgId = document.getElementById("orgId").value;
				var formId = document.getElementById("formId").value;
				var sessChkVal = "";
				var sessChkElements = document.getElementsByName("sessChk");
				for(i=0;i<sessChkElements.length;i++)
				{
					if(sessChkElements[i].value!=null&&sessChkElements[i].value!="")
					{
						sessChkVal = sessChkElements[i].value;
					}
				}
				
				for(i=0;i<sessChkElements.length;i++)
				{
					if(sessChkElements[i].value==null||sessChkElements[i].value=="")
					{
						sessChkElements[i].value=sessChkVal;
					}
				}
				
				document.onlineAppForm.action="/EForms/editApplication.do?orgId="+orgId+"&formId="+formId+"&lang="+valueForLang;
				document.onlineAppForm.method="POST";
				document.onlineAppForm.submit();
			}
		//alert(urlForHtml);
		}
		
	 window.open(urlForHtml,"_self");
}

function AlphaNumWithoutCommaChar(key,e){

	if (navigator.appName =="Microsoft Internet Explorer"){
		var oKey = event.keyCode;
		
		

		if((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 32)  || (oKey >= 45 && oKey <= 57))
		{
			return true;
		}
		else
		{
			return false;
		}
	}else{

		var oKey = e.charCode;
		
		
		if((oKey > 64 && oKey < 91) || (oKey > 96 && oKey < 123) || (oKey == 0) || (oKey == 32)  || (oKey >= 45 && oKey <= 57))
		{
			return true;
		}
		else
		{
			return false;		
		}
	}	
	}

/* function printFWWindow(){
var mywindow = window.open('', 'my div', 'height=400,width=600');
mywindow.document.write("<div id='addingContent'></div>");
mywindow.document.getElementById('addingContent').innerHTML = $("#formDiv").html();
	mywindow.document.close();
	mywindow.focus();    
	mywindow.print();
	mywindow.close();
	return true;
} */
var mywindow;
function printFWWindowPost(){
	mywindow = window.open('', 'my div', 'height=400,width=600');
    mywindow.document.write("<div id='addingContent'></div>");
    mywindow.document.getElementById('addingContent').innerHTML = $("#formDiv").html();
	mywindow.document.getElementById('loader-indicator').style.display='block';
	mywindow.document.close();
	mywindow.focus();
	if(mywindow.document.getElementById('addingContent').innerHTML !="" && mywindow.document.getElementById('addingContent').innerHTML !=undefined)  
	return true;
}
function printFWWindow(){
	var checkStatus=eval('printFWWindowPost()');
	setTimeout(function(){ mywindow.document.getElementById('loader-indicator').style.display='none';},1500);
	setTimeout(function(){mywindow.print(); mywindow.close();},2000);
}

function validateEFormsFWIonCaptchaForForgotPWD(button_id){

    var key=document.getElementById('captchaService_imageKey').value;
    var answer=document.getElementById('captchaService_answer').value;
   var formId=document.getElementById("formId").value;
   var orgId=document.getElementById("orgId").value;
    var parameter="captchaService_imageKey="+key+"&captchaService_answer="+answer+"&appId=30";

    if (answer == '') {
      alert("Please enter the Captcha.");
      return false;
    }else{
    	var http_request=fnGetXMLHttpObject();
    	if(http_request!=null){

           var pValidationServlet = "";
           	pValidationServlet = "/EForms/IonCaptchaValidation"; 

    	http_request.open('POST',pValidationServlet,true);  
		http_request.onreadystatechange = function() {  handleEFormsFWResponseForIonCaptchaForgotPWD(http_request,button_id,formId,orgId,key); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
		http_request.send(parameter);
		}
    }     

}

function handleEFormsFWResponseForIonCaptchaForgotPWD(http_request,button_id,formId,orgId,key){
	if(typeof window.handleEFormsCustomResponseForIonCaptchaForgotPWD == 'function'){
		handleEFormsCustomResponseForIonCaptchaForgotPWD(http_request,button_id,formId,orgId,key);
	}
	else{
var ERRORStr = new Array();
var responseError='';	
var fields;	
var flag='';
 var check="";
	if (http_request.readyState == 4){
		if (http_request.status == 200) {
			if(http_request.responseText != null){
				check=http_request.responseText;
				if(check.indexOf('Valid')!=-1)
				{	
				        document.getElementById("myDiv").innerHTML=" ";
                        var app_seq_no=document.getElementById('useridForgotPwd').value;
                        var http_request=fnGetXMLHttpObject();	
						if(http_request!=null){
			            var pValidationServlet ="/EForms/ForgotPwd"; 
			            init_captcha();
			            var parameters=app_seq_no+","+formId+","+orgId+",NA,ForgotPwd";
	 	             http_request.open('POST',pValidationServlet,true); 
			         http_request.onreadystatechange = function() { fnEFormsFWForgotPWD(http_request,button_id); }; 	 	  
			         http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			         http_request.send("Params="+parameters+"&identifier=Submit&captchaService_imageKey="+key);
			         	}
				}
				else
				{
				  alert("Please enter correct text shown in image");
				  document.getElementById('captchaService_answer').value='';
				  init_captcha();
				  document.getElementById(button_id).removeAttribute("disabled");
				  return false;
				}


			}
		}
		}
	}
		} 

function fnEFormsFWForgotPWD(http_request,button_id){
if (http_request.readyState == 4){
		if (http_request.status == 200) {
			if(http_request.responseText != null){
				check=http_request.responseText;
				document.getElementById("myDiv").innerHTML=http_request.responseText;
				if(http_request.responseText=='This is an invalid Application Sequence Number')
				{
					var custom_msg='Please enter a valid User Id';
					document.getElementById("myDiv").innerHTML=custom_msg;
				}
				document.getElementById(button_id).removeAttribute("disabled"); 
				clicked="true";

			}
		}
	}
} 

function printTab(fragment){
	jQuery("body *").css("visibility","hidden");jQuery("body").css("position","static");
	jQuery("#" + fragment+" *").css("visibility","visible");
	jQuery("#"+ fragment).css("position","absolute").css("top","0");
	var id = fragment.split("-")[1];
	jQuery("#print"+id+" *").css("visibility","hidden");
	window.print();
	setTimeout(function(){jQuery("body *").css("visibility","visible");jQuery("body").css("position","relative");jQuery("#"+fragment).css("position","relative").css("top","0");},500);
	}


function getCompletePathIonEye(Url)
{
	
	var orgId=document.getElementById('orgId').value;
	var applnSequenceField = document.getElementById('applnSequenceField').value;
	var app_seq_no = document.getElementById(applnSequenceField).value;
	var sessChk=document.getElementById('sessChk').value;
	var formId=document.getElementById('formId').value;
	
	
	$.ajax({

		type:"POST",
		url:"IONEyeServlet",
		data:{
			orgId:orgId,
			app_seq_no:app_seq_no,				
			sessChk:sessChk,
			Url:Url,
			formId:formId
		      },
			datatype:"text",
			 success: function(result)
			 {
				// window.open(result);
			 
				 			 
				if(result=='ERROR'){
					 var str=urlappend();
                   		window.location.href="/EForms/loginAction.do?subAction=Logout&formId="+parentFormId+"&orgId="+orgID+"&Message=Your Session has been expired.Please login again"+str;
                   		}
				else
					{
					
					window.open(result);
				
					}
		      
			 },
		      error: function(x, e)
              {
                   alert(x.readyState + " "+ x.status +" "+ e.msg);   
              }
           });

	
	}

function multilingualOtherValues()
{
	   var formId=document.getElementsByName('formId')[0].value;
	   var orgId=document.getElementsByName('orgId')[0].value;
	   if(document.getElementById("multilingualLanguageSelected"))
		   var language = $('#multilingualLanguageSelected').val();
	   var http_request = false;	   
			if (window.XMLHttpRequest)
			{ // Mozilla, Safari,...
				http_request = new XMLHttpRequest();
				if (http_request.overrideMimeType)
				{
					http_request.overrideMimeType('text/xml');
				}
			} 
			else if (window.ActiveXObject)
			{ // IE		           
				try {
					http_request = new ActiveXObject("Msxml2.XMLHTTP");
				} 
				catch (e)
				{
					try {
						http_request = new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e) {}
				}
			}
			
			if (!http_request)
			{
				return false;
			}	

			http_request.open('POST','/EForms/MultilingualFormMetadataServlet?subAction=getScreenMultilingualValues&formId='+formId,true);       
			http_request.onreadystatechange = function() { fnPostmultilingualOtherValues(http_request); }; 	 	                    
			http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");           
			http_request.send("orgId="+orgId+"&language="+language);

			
	   
}

function fnPostmultilingualOtherValues(http_request)
{
	if (http_request.readyState == 4){ 
		 
        if (http_request.status == 200) {
			  var keyData = new Array();
			  var responseDoc= http_request.responseXML;
			  if(responseDoc == null){
					var parser = new DOMParser();
					responseDoc = parser.parseFromString(http_request.responseText, "application/xml");
					}
			  var mainDoc = responseDoc.getElementsByTagName("MAINTABLE");
			  
			  
			 
			  
			 var docs = mainDoc[0].getElementsByTagName("Screen");
			 var numberofRows = docs.length
			 if(numberofRows>0){
			 
					
					
					
					for(var count=0;count<numberofRows;count++)			
					{
					var screenName = docs[count].getAttribute("screenName");
					keyData[count] = docs[count].firstChild.nodeValue;
						keyData[count] = replace(keyData[count]);
						console.log(keyData[count]);
					var otherDetails = 	keyData[count];
						if(otherDetails!="")
												{
											if(screenName=="Scrutiny Settings")
											   {
													var idAndValues = otherDetails.split("@ion@");
													for (var i = 0; i < idAndValues.length; i++) 
													{
														var singleLabelvalue = idAndValues[i].split("@@")
														console.log(singleLabelvalue[0]);
														if (document.getElementsByName(singleLabelvalue[0]).length > 0) 
														{
															console.log(singleLabelvalue[1]);
															if (singleLabelvalue[1] != "" && singleLabelvalue[1] != null && singleLabelvalue[1].trim() != "") 
															{
																$( "input[name='"+singleLabelvalue[0]+"']" ).val( singleLabelvalue[1] );
															}
														}
														else if (document.getElementById(singleLabelvalue[0])!= null) 
														{
															console.log(singleLabelvalue[1]);
															if (singleLabelvalue[1] != "" && singleLabelvalue[1] != null && singleLabelvalue[1].trim() != "") 
															{
																document.getElementById(singleLabelvalue[0]).innerHTML = singleLabelvalue[1];
															}
														}
													}
												}
												else
												{
													var idAndValues = otherDetails.split("@ion@");
													for (var i = 0; i < idAndValues.length; i++) 
													{
														var singleLabelvalue = idAndValues[i].split("@@")
														console.log(singleLabelvalue[0]);
														if (document.getElementById(singleLabelvalue[0])!= null) 
														{
															console.log(singleLabelvalue[1]);
															if (singleLabelvalue[1] != "" && singleLabelvalue[1] != null && singleLabelvalue[1].trim() != "") 
															{
																$("span[id='"+singleLabelvalue[0]+"']").html(singleLabelvalue[1]);
															//	document.getElementById(singleLabelvalue[0]).innerHTML = singleLabelvalue[1];
																if($("#"+singleLabelvalue[0]).attr('title') != undefined)
																	{
																	var temp = document.createElement('span');
																	temp.innerHTML = singleLabelvalue[1];
																	titleValue = temp.innerHTML;
																	$("span[id='"+singleLabelvalue[0]+"']").attr('title',titleValue);
																	//$("#"+singleLabelvalue[0]).attr('title',titleValue);
																	}
															}
														}
													}
												}
										}
							
					}
					
					
					
				}
			 
}
}

}

//fieldName= departmentData
function fnHrmsAdminGetDependentDataNewFW(fieldName,masterValue,whereFields,fieldHTMLName,vacancyNoDD){

   	var http_request=fnGetXMLHttpObject();
	var orgid=$("#orgId").val();
	var EntryMode = document.getElementById("EntryMode").value;
	var index=document.getElementById(vacancyNoDD).selectedIndex;
	var VacancyNo=document.getElementById(vacancyNoDD).options[index].text;

	var parameters = orgid+","+fieldName+","+masterValue+","+whereFields+","+EntryMode+","+encodeURIComponent(VacancyNo);
	if(http_request!=null){
		var pValidationServlet = "/EForms/HrmsAdminDependentServlet"; 
    	http_request.open('POST',pValidationServlet,true);       
		http_request.onreadystatechange = function() { fnHrmsAdminPopulateDependentDataNewFW(http_request,whereFields,fieldHTMLName,masterValue); }; 	 	                    
		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");               
		http_request.send("hrmsparam="+parameters+"&reqJobDesc=Y");
	}
} 

function fnHrmsAdminPopulateDependentDataNewFW(http_request,whereFields,fieldHTMLName,masterValue){
	if(http_request.readyState == 4){
		if (http_request.status == 200){
			if(http_request.responseText != null){
				var docCount=2;
			$("#"+whereFields).html('<option selected="selected" value="0">---Select---</option>');
			    document.getElementById(whereFields).style.display="block";
				document.getElementById(fieldHTMLName).style.display="none";


            	var responseDoc= http_request.responseXML;
            	if(responseDoc == null){
					var parser = new DOMParser();
					responseDoc = parser.parseFromString(http_request.responseText, "application/xml");
					}
            	var docs = responseDoc.getElementsByTagName("MASTERTABLE");
				var noOfDocuments=docs.length;

				//var tableName = new Array();
				var fieldhtmlname=new Array();
				if(noOfDocuments > 0){					 
					for(count=0;count<noOfDocuments;count++){		//loop document

					//	tableName[count] = docs[count].getAttribute("tablename");
						//alert("tableName: "+tableName[count]);

						//if((tableName[count]!="")||(tableName[count]!=null)){
							fieldhtmlname[count]=docs[count].getAttribute("fieldhtmlname");
							//alert("fieldhtmlname: "+fieldhtmlname[count]);
							var fieldHTMLCount=fieldhtmlname[count].split(",");
							//alert(fieldHTMLCount.length);

							for(var j=0;j<fieldHTMLCount.length;j++){

								fieldName=fieldHTMLCount[j];
								var i = 1;	

								if(document.getElementById(fieldName)!=null){		
									if(document.getElementById(fieldName).tagName=="SELECT"){
										var siteCode = new Array();
    									var siteName = new Array();

										var docRows=docs[count].getElementsByTagName("ROW");
										var siteList = document.getElementById(fieldName);
					siteList.options.length=1;
										hrmsJobDescArr = new Array();

										for(rowCount=0;rowCount<docRows.length;rowCount++){  //loop field

											var docFields=docRows[rowCount].getElementsByTagName("FIELD");
											docCount=docFields.length;
											for(fieldCount=0;fieldCount<2;fieldCount++){
												siteCode[fieldCount] = docFields[fieldCount].getAttribute("fieldname");
												siteName[fieldCount] = docFields[fieldCount].firstChild.nodeValue;
												siteName[fieldCount+1] = docFields[fieldCount+1].firstChild.nodeValue;
												siteList.options[i] = new Option(siteName[fieldCount+1],siteName[fieldCount]);
												if(docCount==3){
													if(docFields[2].firstChild!=null)
														{
													hrmsJobDescArr[docFields[fieldCount].firstChild.nodeValue]=docFields[2].firstChild.nodeValue;
														}
												}
												fieldCount=fieldCount+1;
												i++;
											}

										}

									}else if(document.getElementById(fieldName).tagName=="SPAN"){
										var hdnField=fieldName+"Hdn";
										var depField=hdnField+"Dep";
										var radioHidden=fieldName.substring(0,(fieldName.length)-5);
										//alert("html field name: "+radioHidden);
										//alert(document.getElementById(hdnField).type);
										if(document.getElementById(hdnField).type=="hidden"){
											var hdnValue=document.getElementById(hdnField).value;
											if(hdnValue=="radio"){
												var siteCode = new Array();
    											var siteName = new Array();
												var docRows=docs[count].getElementsByTagName("ROW");
												var siteList = document.getElementById(fieldName);

												var htmlElement="";
												for(rowCount=0;rowCount<docRows.length;rowCount++){  //loop field

													htmlElement=htmlElement+"<input type='radio' value='";
													//var htmlElement=document.createElement("input");
													//htmlElement.setAttribute('type','radio');
													var docFields=docRows[rowCount].getElementsByTagName("FIELD");
													docCount=docFields.length;
													var upperCount=2;	
													for(fieldCount=0;fieldCount<2;fieldCount++){
														if(fieldCount==0){
														siteName[fieldCount] = docFields[fieldCount].firstChild.nodeValue;
														//htmlElement.setAttribute('value',siteName[fieldCount]);
														htmlElement=htmlElement+siteName[fieldCount]+"' id='";
														}else if(fieldCount>0){
															siteCode[fieldCount] = docFields[fieldCount].getAttribute("fieldname");
															siteName[fieldCount] = docFields[fieldCount].firstChild.nodeValue;
															//var htmlElementId=siteCode[fieldCount]+"_Rad"+fieldCount;
															//htmlElement.setAttribute('id',htmlElementId);
															//htmlElement.setAttribute('name',htmlElementId);

															htmlElement=htmlElement+siteCode[fieldCount]+"_Rad"+(rowCount+1)+"' name='"+siteCode[fieldCount]+"' onclick=fnCheckRadio(this,'"+radioHidden+"',this.name)";
															if(document.getElementById(depField)!=null){
																	htmlElement=htmlElement+";"+document.getElementById(depField).value;
																	htmlElement=htmlElement+">";
															}
															else{
																htmlElement=htmlElement+">";
															}
														}
													}
													htmlElement=htmlElement+siteName[1]+" ";

													//alert(htmlElement);
													//alert("dghsghdf");
													//siteList.appendChild(htmlElement);
													//siteList.appendChild();

													//siteList.innerHTML=siteName[1];										
												}
												//alert(htmlElement);
												siteList.innerHTML=htmlElement;
											}
										}
									}
			  					}
							}
						//}

					}				   		
				}
				if(whereFields=="txtVacancyNo"){
				var vacancyDDown=document.getElementById("txtVacancyNo");
				for(i=0;i<vacancyDDown.length;i++){
					if(vacancyDDown.options[i].text==document.getElementById("txtVacancyNoBox").value){
					document.getElementById("txtVacancyNo").value= vacancyDDown.options[i].value;
					document.getElementById("txtVacancyNo").onchange();
					}
				}

				}	
				if(whereFields=="txtDesignGrd"){
				var vacancyDDown=document.getElementById("txtDesignGrd");
				for(i=0;i<vacancyDDown.length;i++){
					if(vacancyDDown.options[i].text==document.getElementById("txtDesignGrdBox").value)
					document.getElementById("txtDesignGrd").value= vacancyDDown.options[i].value;

				}

				}				
			}
			else {
			document.getElementById(whereFields).style.display="none";
				document.getElementById(fieldHTMLName).style.display="block";


			}
  		}
	}   
}

function fnShowFWJobDesc(val,elmtType){
	var toDisplay = hrmsJobDescArr[val];
	if(elmtType=="input"){
		if(toDisplay!=undefined && toDisplay!="")
			$("#jobDescTxtArea").val(toDisplay);
		else
			$("#jobDescTxtArea").val("Description not available");
	}else{
		if(toDisplay!=undefined && toDisplay!="")
			$("#jobDescTxtArea").html(toDisplay);
		else
			$("#jobDescTxtArea").html("Description not available");
	}
}



function multilingualFormKeyValue(){

	//alert("inside multilingualOnLoadScreen");
	 
	 
	var language=$('#multilingualLanguageSelected').val();
	 if(language!=""){
	 var orgId = document.getElementsByName("orgId")[0].value;
	 var formId = "";
	 try{
	 if(document.copyFormDataForm){
	 formId=document.copyFormDataForm.formId.value;
	 }else if(document.getElementById("formId")){
	 formId=document.getElementById("formId").value;
	 }else{
	 formId=document.getElementsByName("formId")[0].value;
	 }
	 }catch(err){
	 console.log(err.message);
	 }
	 var parameters=formId+","+orgId+","+language;
	 var valueReturnedForLabelChange;
	 var subAction= "formKeyValues";
	  
	 //alert("formId = "+formId);
	 // alert("orgId = "+orgId);
	  $.ajax({ 
		               type: "POST",
		               url: "/EForms/MultilingualLabelLoadServlet",
						   async: false,
		             data: {
		            OrgFormParams: parameters, 
		            subAction:subAction
		            	  },
		              
		               success: function(returnValue)
		               {
		            	  
		            	  
		                
	                    valueReturnedForLabelChange=returnValue;

							
		               }  
		          });
		          
		      //    alert("valueReturnedForLabelChange = "+valueReturnedForLabelChange);
		          
		          

	  var allKeyValues=valueReturnedForLabelChange.split("$$ion$$");
	     
	         
	           
	           for (var i=1;i<allKeyValues.length; i++)
		{

	//alert("inside for loop"+ document.getElementById("1").value);
	        	   var singleKeyValue=allKeyValues[i].split("@@ion@@");
	        	   var value1=singleKeyValue[0];
	        if(document.getElementById(singleKeyValue[0])!= null)
	        	document.getElementById(value1).innerHTML =singleKeyValue[1];
			
			
		}
	 }	
}
	
function multilingualFormStaticValue(screenName){

	
	 var orgId = document.getElementsByName("orgId")[0].value;
	 var formId = "";
	 var multilingualLanguage="noLanguage";
	 try{
	 if(document.copyFormDataForm){
	 formId=document.copyFormDataForm.formId.value;
	 }else if(document.getElementById("formId")){
	 formId=document.getElementById("formId").value;}
	 if(formId='undefined'){
		 formId=document.getElementsByName("formId")[0].value;}
	 else{
	 formId=document.getElementsByName("formId")[0].value;
	 }
	 }catch(err){
	 console.log(err.message);
	 }
	 var parameters=formId+","+orgId+","+screenName;
	 var valueReturnedForLabelChange;
	 var subAction= "staticKeyValues";
	
	 if(self==top){
	 if(document.getElementById("multilingualLanguageSelected")){
		 multilingualLanguage = $('#multilingualLanguageSelected').val();
		 }
	 }
	 else if(parent==top){
	 try{
		 if(parent.document.getElementById("multilingualLanguageSelected")){
			 multilingualLanguage = parent.$('#multilingualLanguageSelected').val();
			 }
	 }
	 catch(err){
	 console.log(err.message);
	 }
	 }
	 
	
	  $.ajax({ 
		            type: "POST",
		            url: "/EForms/MultilingualLabelLoadServlet",
						   async: false,
		            data: {
		            OrgFormParams: parameters, 
		            subAction:subAction,
		            multilingualLanguage:multilingualLanguage
		            	  },
		            dataType: "json",
		               success: function(returnValue){
		            	   if(returnValue!=null){
	                    valueReturnedForLabelChange=returnValue.staticKeyValues;
		            	   }
		               }  
		          });
		          
		    
			     if(valueReturnedForLabelChange!= null)
				 {
			    	 if(Object.keys(valueReturnedForLabelChange).length !=0)
			    	 	{
							  for ( var key in valueReturnedForLabelChange)
							  	{
									if (valueReturnedForLabelChange.hasOwnProperty(key)) 
										{
										    var key1 = key.trim();
								         
										$('[data-staticKey="'+key1+'"]').each(function(){
											var showAttr=$(this).attr('data-staticKeyType');
											
											if(showAttr==undefined)
												$('[data-staticKey="'+key1+'"]').html(valueReturnedForLabelChange[key]);
											if(showAttr=="input")
												$('[data-staticKey="'+key1+'"][data-staticKeyType="'+showAttr+'"]').val(valueReturnedForLabelChange[key]);
											else if(showAttr!=undefined)
												{
												var temp = document.createElement('span');
												temp.innerHTML = valueReturnedForLabelChange[key];
												$('[data-staticKey="'+key1+'"][data-staticKeyType="'+showAttr+'"]').attr(showAttr,temp.innerHTML);
												}
										});
										
										}
												
								}
							  if(screenName == "Listing")
								  {
								  	fnCustomizedListingMultilingual(valueReturnedForLabelChange);
								  }
						}
				 }
}

var staticMultilingualValues;
function multilingualFormStaticValueGlobal(screenName){
	if(screenName!="Subscription")
		multilingualFormStaticValue(screenName);
else{
	if(staticMultilingualValues!=null && Object.keys(staticMultilingualValues).length !=0 )
		{
		setMultilingualGlobalStaticValues();
	
	}
	else{
	 var orgId = document.getElementsByName("orgId")[0].value;
	 var formId = "";
	 try{
	 if(document.copyFormDataForm){
	 formId=document.copyFormDataForm.formId.value;
	 }else if(document.getElementById("formId")){
	 formId=document.getElementById("formId").value;}
	 if(formId='undefined'){
		 formId=document.getElementsByName("formId")[0].value;}
	 else{
	 formId=document.getElementsByName("formId")[0].value;
	 }
	 }catch(err){
	 console.log(err.message);
	 }
	 var parameters=formId+","+orgId+","+screenName;
	 var valueReturnedForLabelChange;
	 var subAction= "staticKeyValues";
	
	  $.ajax({ 
		            type: "POST",
		            url: "/EForms/MultilingualLabelLoadServlet",
						   async: false,
		            data: {
		            OrgFormParams: parameters, 
		            subAction:subAction
		            	  },
		            dataType: "json",
		               success: function(returnValue){
		            	   if(returnValue!=null){
	                    valueReturnedForLabelChange=returnValue.staticKeyValues;
		            	   }
		               }  
		          });
		          
				  if(valueReturnedForLabelChange!= null)
				  {
				  staticMultilingualValues = valueReturnedForLabelChange;
					setMultilingualGlobalStaticValues();
					  
					 
				  }
				  
		    
		}	 
}		
}

function setMultilingualGlobalStaticValues()
{
var valueReturnedForLabelChange = staticMultilingualValues;
if(valueReturnedForLabelChange!= null)
				 {
			    	 if(Object.keys(valueReturnedForLabelChange).length !=0)
			    	 	{
							  for ( var key in valueReturnedForLabelChange)
							  	{
									if (valueReturnedForLabelChange.hasOwnProperty(key)) 
										{
										    var key1 = key.trim();
								         
										$('[data-staticKey="'+key1+'"]').each(function(){
											var showAttr=$(this).attr('data-staticKeyType');
											
											if(showAttr==undefined)
												$('[data-staticKey="'+key1+'"]').html(valueReturnedForLabelChange[key]);
											if(showAttr=="input")
												$('[data-staticKey="'+key1+'"][data-staticKeyType="'+showAttr+'"]').val(valueReturnedForLabelChange[key]);
											else if(showAttr!=undefined)
												{
												var temp = document.createElement('span');
												temp.innerHTML = valueReturnedForLabelChange[key];
												$('[data-staticKey="'+key1+'"][data-staticKeyType="'+showAttr+'"]').attr(showAttr,temp.innerHTML);
												}
										});
										
										}
												
								}
							  
						}
				 }
}

function resetGlobalStaticMultilingualVariable(){
	staticMultilingualValues = "";
}

function fnGetKeyValueJson(groupId){
	if (groupId == "" || groupId == null)
	    groupId = "blank";

	var language = $('#multilingualLanguageSelected').val();
	if(language =="")
		language = "noLanguage";
	
	    var orgId = document.getElementsByName("orgId")[0].value;
	    var formId = "";
	    try {
	        if (document.copyFormDataForm) {
	            formId = document.copyFormDataForm.formId.value;
	        } else if (document.getElementById("formId")) {
	            formId = document.getElementById("formId").value;
	        } else {
	            formId = document.getElementsByName("formId")[0].value;
	        }
	    } catch (err) {
	        console.log(err.message);
	    }
	    var parameters = formId + "," + orgId + "," + language + "," + groupId;
	    var keyValueJson;
	    var subAction = "keyValuesJson";

	    $.ajax({
	        type: "POST",
	        url: "/EForms/MultilingualLabelLoadServlet",
	        async: false,
	        data: {
	            OrgFormParams: parameters,
	            subAction: subAction
	        },
	        dataType: "json",
	        success: function(returnValue) {
	        	if(returnValue!=null){
	            keyValueJson = returnValue.keyValues;
	        	}
	        	  if(keyValueJson!= null)
	        	    {
	        		  if(Object.keys(keyValueJson).length !=0)
	        		 	{
	        			    for (var key in keyValueJson) {
	        		
	        			        if (keyValueJson.hasOwnProperty(key)) {
	        		
	        			            var key1 = key.trim();
	        			            var value = keyValueJson[key]; 

	        					            $('[data-multilingualId="'+key1+'"]').each(function(){
	        									var showAttr=$(this).attr('data-multilingualDisplayType');
	        									
	        									if(showAttr=="html")
	        										$('[data-multilingualId="'+key1+'"][data-multilingualDisplayType="'+showAttr+'"]').html(value);
	        									if(showAttr=="input")
	        										{
	        											var temp = document.createElement('span');
	        											temp.innerHTML = value;
	        											$('[data-multilingualId="'+key1+'"][data-multilingualDisplayType="'+showAttr+'"]').val(temp.innerHTML);
	        										}
	        									if(showAttr!="input" && showAttr!="html")
	        										{
	        											var temp = document.createElement('span');
	        											temp.innerHTML = value;
	        											$('[data-multilingualId="'+key1+'"][data-multilingualDisplayType="'+showAttr+'"]').attr(showAttr,temp.innerHTML);
	        										}
	        					            }); 
	        			        }
	        		
	        			    }
	        		 	}
	        		}
	        },
	        error: function(x, e){
	        	$.toaster({	priority: 'success',title: 'Message',message: x.readyState + " " + x.status + " " + e.msg});
	        },
	        complete: function(){
	        	if (typeof postMultilingaul == 'function')
					postMultilingaul(); 
			}
	    });


}

function fnCustomizedListingMultilingual(valueReturnedForLabelChange)
{
	if(valueReturnedForLabelChange["Upload"]!= null && valueReturnedForLabelChange["Upload"] != "")
		{
			var temp = document.createElement('span');
			temp.innerHTML = valueReturnedForLabelChange["Upload"];
			var titleValue = temp.innerHTML;
			if($('.upload-multilingual').length>0)
			$('.upload-multilingual').attr('title',titleValue);
		}
	
	if(valueReturnedForLabelChange["Download"]!= null && valueReturnedForLabelChange["Download"] != "")
		{
			var temp = document.createElement('span');
			temp.innerHTML = valueReturnedForLabelChange["Download"];
			var titleValue = temp.innerHTML;
			if($('.download-multilingual').length>0)
			$('.download-multilingual').attr('title',titleValue);
		}
		
	if(valueReturnedForLabelChange["Download Blank Template"]!= null && valueReturnedForLabelChange["Download Blank Template"] != "")
		{
			var temp = document.createElement('span');
			temp.innerHTML = valueReturnedForLabelChange["Download Blank Template"];
			var titleValue = temp.innerHTML;
			if($('.blank-multilingual').length>0)
			$('.blank-multilingual').attr('title',titleValue);
		}
		
	if(valueReturnedForLabelChange["Upload expro"]!= null && valueReturnedForLabelChange["Upload expro"] != "")
		{
			var temp = document.createElement('span');
			temp.innerHTML = valueReturnedForLabelChange["Upload expro"];
			var titleValue = temp.innerHTML;
			if($('.upload-expro-multilingual').length>0)
			$('.upload-expro-multilingual').attr('title',titleValue);
		}
		
	if(valueReturnedForLabelChange["Create"]!= null && valueReturnedForLabelChange["Create"] != "")
		{
			var temp = document.createElement('span');
			temp.innerHTML = valueReturnedForLabelChange["Create"];
			var titleValue = temp.innerHTML;
			if($('.create-multilingual').length>0)
			$('.create-multilingual').attr('title',titleValue);
		}
		
	if(valueReturnedForLabelChange["Refresh"]!= null && valueReturnedForLabelChange["Refresh"] != "")
		{
			var temp = document.createElement('span');
			temp.innerHTML = valueReturnedForLabelChange["Refresh"];
			var titleValue = temp.innerHTML;
			if($('.refresh-multilingual').length>0)
			$('.refresh-multilingual').attr('title',titleValue);
		}
}
/*
function fnSaveTabDataFW(tabName,validationMethod,fragmentId) {
	var tabValidation=false; 
	var fieldName = "";
	var fieldValue = "";
	var fieldType = "";
	var http_request=fnGetXMLHttpObject();
	var parameters = "tabType="+tabName;

	var entityId ="";


	tabValidation = eval(validationMethod);
	if(tabValidation){

		var orgId = document.getElementById("OID").value;
		var formId = document.getElementById("FID").value; 
		if(document.onlineAppForm.entityId != null){
		entityId = document.onlineAppForm.entityId.value;
		} else {
		entityId = document.onlineAppForm.entity_Id.value;
		} 
		parameters = parameters + "&orgId="+orgId+"&formId="+formId+"&entityId="+entityId;

		var fragmentData = document.getElementById(fragmentId);
		
		var inputTypes = fragmentData.getElementsByTagName('input');
		for(var i=0;i<inputTypes.length;i++){
			fieldType = inputTypes[i].type;
			fieldName = inputTypes[i].id;
			fieldValue = inputTypes[i].value;
			if(fieldType == "radio"){
				fieldName = fieldName.substring(0,fieldName.lastIndexOf("_R"));
				fieldValue = document.getElementById(fieldName).value;
			}
			parameters = parameters +"&"+fieldName +"="+encodeURIComponent(fieldValue);
		}
		
		var inputTypes = fragmentData.getElementsByTagName('select');
		for(var i=0;i<inputTypes.length;i++){
			var fieldName = inputTypes[i].id;
			var selectedIndex = inputTypes[i].selectedIndex;
			var fieldValue = inputTypes[i].options[selectedIndex].value;
			parameters = parameters +"&"+fieldName +"="+encodeURIComponent(fieldValue);
		}
		var inputTypes = fragmentData.getElementsByTagName('textarea');
		for (var i = 0; i < inputTypes.length; i++) {
			fieldType = inputTypes[i].type;
			fieldName = inputTypes[i].id;
			fieldValue = inputTypes[i].value;
			parameters = parameters + "&" + fieldName + "=" + encodeURIComponent(fieldValue);
		}
		fnCallGetToken(tabName,parameters);
	}
	}

	function fnCallGetToken(tabName,parameters)
	{
	var http_request=fnGetXMLHttpObject();
	parameters=parameters+"&app_seq_no="+document.getElementById("app_seq_no").value;
	var parameterToken=parameters+"&sessChk="+document.getElementById("sessChk").value+"&subAction=GeneratePrimaryToken";
	var saveTabServlet = "/EForms/SecureSaveTabDataServlet";
	http_request.open('POST',saveTabServlet,true); 
	http_request.onreadystatechange = function() { fnGetToken(http_request,tabName,parameters); }; 
	http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	http_request.send(parameterToken);
	}

	function fnGetToken(request,tabName,parameters){
	var idData = new Array;
	var keyData = new Array;
	var xmlField;

	if (request.readyState == 4) {
	if (request.status == 200) {
	if (request.responseText != null) {
	var resXml = request.responseXML;
	var objectXml = resXml.getElementsByTagName("DOCUMENT");
	var xmlLength = objectXml.length;
	for (count = 0; count < xmlLength; count++) {
	xmlField = objectXml[count].getElementsByTagName("FIELD");
	for (fieldCount = 0; fieldCount < xmlField.length; fieldCount++) {
	var attrEntityId= xmlField[fieldCount].getAttribute("entityId");
	if (attrEntityId != "") {
								document.getElementById("entityId").value = attrEntityId;
							}
	idData[count] = xmlField[fieldCount].firstChild.nodeValue;
	idData[count] = replace(idData[count]);
	var attrToken = xmlField[fieldCount].getAttribute("name");
	if(attrToken=="Token")
							{
						
								keyData[count] = xmlField[fieldCount].firstChild.nodeValue;
								keyData[count] = replace(keyData[count]);
								document.getElementById("token").value=keyData[count];
								
								var token=document.getElementById("token").value;
								var sessChk=document.getElementById("sessChk").value;
								if(token!='')
									{
										var http_request1=fnGetXMLHttpObject();
										parameters=parameters+"&token="+token+"&sessChk="+sessChk;
										var saveTabDataServlet = "/EForms/SecureSaveTabDataServlet";
										http_request1.open('POST',saveTabDataServlet,true); 
										http_request1.onreadystatechange = function() { handleSaveTabResponseFW(http_request1,tabName); }; 
										http_request1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
										http_request1.send(parameters);
									}
								else
								{
									alert("Invalid request .Please log out and try again.");
									return false;
								}
									return false;
										
							}

	}
	}
	} else {
	alert("An error seems to have occurred. Please try again.")
	}
	}
	}
	}


	function handleSaveTabResponseFW(http_request,tabName){
		var ERRORStr = new Array();
		var keyData = new Array();
		var responseError='';	
		var errorFlag='';
		var tokenName='';
		var fields;	
		var flag='';
			if (http_request.readyState == 4) { 
				if (http_request.status == 200) {
					if(http_request.responseText != null){   
						var responseDoc= http_request.responseXML;
						if(responseDoc == null){
        					var parser = new DOMParser();
        					responseDoc = parser.parseFromString(http_request.responseText, "application/xml");
        					}
						var docs = responseDoc.getElementsByTagName("DOCUMENT");
						var noOfDocuments = docs.length;
						var saveTabMessage='';
						for(count=0;count<noOfDocuments;count++){	
							fields = docs[count].getElementsByTagName("FIELD");
							for(fieldCount=0;fieldCount<fields.length;fieldCount++){
								var fieldName = fields[fieldCount].getAttribute("entityId");
								//alert(fieldName);
								if(fieldName!=null && fieldName!='' && tokenName!="Token"){
									document.getElementById('entityId').value=fieldName;
									ERRORStr[count] = fields[fieldCount].firstChild.nodeValue;
									ERRORStr[count] = replace(ERRORStr[count]);
									responseError = ERRORStr[count];
								}else if(fieldName=='' && tokenName!="Token")
								{
									ERRORStr[count] = fields[fieldCount].firstChild.nodeValue;
									ERRORStr[count] = replace(ERRORStr[count]);
									responseError = ERRORStr[count];
									errorFlag='Y';
								}
								
									
								
								
								tokenName = fields[fieldCount].getAttribute("name");
								if(tokenName=="Token")
								{
										
									keyData[count] = fields[fieldCount].firstChild.nodeValue;
									keyData[count] = replace(keyData[count]);
									document.getElementById("token").value=keyData[count];
									
								}
								
								
								document.getElementById('Submit').removeAttribute("disabled");
								
								
								
								
								
							} 
							
							if(errorFlag='Y')
								{
								saveTabMessage=getSaveTabMessage(responseError);
								alert(saveTabMessage);
								
								}
								else
								{
								 alert(responseError);
								 return false;
								
								}
							
						}
							} else {
						alert("An error seems to have occurred. Please try again.");
					}				 
				}
			}
			}
			
	function getSaveTabMessage(FWMsg)
	{
	return FWMsg;
	}
*/

function fnSaveTabDataFW(tabName,validationMethod,fragmentId)
{
 
	fnSaveTabDataFWNew(tabName,validationMethod,fragmentId,'Y'); // backward compatibility - for the fnSaveTabDataFW js method by default notification will be sent ,so kept Y 
}

function fnSaveTabDataFWNew(tabName,validationMethod,fragmentId,isNotificationReq) {  // added for handling notifications send based on the requirement
	var tabValidation=false; 
	var fieldName = "";
	var fieldValue = "";
	var fieldType = "";
	var http_request=fnGetXMLHttpObject();
	//var parameters = "tabType="+tabName;
	var parameters = "tabType="+tabName+"&isNotificationReq="+isNotificationReq;
	var entityId ="";


	tabValidation = eval(validationMethod);
	if(tabValidation){

		var orgId = document.getElementById("OID").value;
		var formId = document.getElementById("FID").value; 
		if(document.onlineAppForm.entityId != null){
		entityId = document.onlineAppForm.entityId.value;
		} else {
		entityId = document.onlineAppForm.entity_Id.value;
		} 
		parameters = parameters + "&orgId="+orgId+"&formId="+formId+"&entityId="+entityId;

		var fragmentData = document.getElementById(fragmentId);
		
		var inputTypes = fragmentData.getElementsByTagName('input');
		for(var i=0;i<inputTypes.length;i++){
			fieldType = inputTypes[i].type;
			fieldName = inputTypes[i].id;
			fieldValue = inputTypes[i].value;
			if(fieldType == "radio"){
				fieldName = fieldName.substring(0,fieldName.lastIndexOf("_R"));
				fieldValue = document.getElementById(fieldName).value;
			}
			parameters = parameters +"&"+fieldName +"="+encodeURIComponent(fieldValue);
		}
		
		var inputTypes = fragmentData.getElementsByTagName('select');
		for(var i=0;i<inputTypes.length;i++){
			var fieldName = inputTypes[i].id;
			var selectedIndex = inputTypes[i].selectedIndex;
			var fieldValue = inputTypes[i].options[selectedIndex].value;
			parameters = parameters +"&"+fieldName +"="+encodeURIComponent(fieldValue);
		}
		var inputTypes = fragmentData.getElementsByTagName('textarea');
		for (var i = 0; i < inputTypes.length; i++) {
			fieldType = inputTypes[i].type;
			fieldName = inputTypes[i].id;
			fieldValue = inputTypes[i].value;
			parameters = parameters + "&" + fieldName + "=" + encodeURIComponent(fieldValue);
		}
		fnCallGetToken(tabName,parameters);
	}
	}

	function fnCallGetToken(tabName,parameters)
	{
	var http_request=fnGetXMLHttpObject();
	parameters=parameters+"&app_seq_no="+document.getElementById("app_seq_no").value;
	var parameterToken=parameters+"&sessChk="+document.getElementById("sessChk").value+"&subAction=GeneratePrimaryToken";
	var saveTabServlet = "/EForms/SecureSaveTabDataServlet";
	http_request.open('POST',saveTabServlet,true); 
	http_request.onreadystatechange = function() { fnGetToken(http_request,tabName,parameters); }; 
	http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	http_request.send(parameterToken);
	}

	function fnGetToken(request,tabName,parameters){
	var idData = new Array;
	var keyData = new Array;
	var xmlField;
	var attrToken='' ;
	var token='';

	if (request.readyState == 4) {
	if (request.status == 200) {
	if (request.responseText != null) {
	var resXml = request.responseXML;
	if(resXml==null)
	{
		var parser=new DOMParser();
		resXml=parser.parseFromString(request.responseText,"application/xml")
	}
	var objectXml = resXml.getElementsByTagName("DOCUMENT");
	var xmlLength = objectXml.length;
	for (count = 0; count < xmlLength; count++) {
	xmlField = objectXml[count].getElementsByTagName("FIELD");
	for (fieldCount = 0; fieldCount < xmlField.length; fieldCount++) {
	var attrEntityId= xmlField[fieldCount].getAttribute("entityId");
	if (attrEntityId!=null && attrToken!=null && attrEntityId != "" && attrToken!="Token") {
								document.getElementById("entityId").value = attrEntityId;
								idData[count] = xmlField[fieldCount].firstChild.nodeValue;
								idData[count] = replace(idData[count]);
							}
	
	attrToken = xmlField[fieldCount].getAttribute("name");
	if(attrToken=="Token")
							{
						
								keyData[count] = xmlField[fieldCount].firstChild.nodeValue;
								keyData[count] = replace(keyData[count]);
								var sessChk=document.getElementById("sessChk").value;
								if(keyData[count]!='')
									{
										//if(document.getElementById("token").value==null || document.getElementById("token").value=='')
									if(document.getElementById("token").value != keyData[count])
											document.getElementById("token").value=keyData[count];
										
										var http_request1=fnGetXMLHttpObject();
										token=document.getElementById("token").value;
										parameters=parameters+"&saveTabToken="+token+"&sessChk="+sessChk;
										var saveTabDataServlet = "/EForms/SecureSaveTabDataServlet";
										http_request1.open('POST',saveTabDataServlet,true); 
										http_request1.onreadystatechange = function() { handleSaveTabResponseFW(http_request1,tabName); }; 
										http_request1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
										http_request1.send(parameters);
										
									}
								else
									{
										alert("Invalid request .Please log out and try again.");
										return false;
									}
									
										
							}

	}
	}
	} else {
	alert("An error seems to have occurred. Please try again.")
	}
	}
	}
	}


	function handleSaveTabResponseFW(http_request,tabName){
		var ERRORStr = new Array();
		var keyData = new Array();
		var responseError='';	
		var errorFlag='';
		var tokenName='';
		var application_seq_field='';
		
		var fields;	
		var flag='';
			if (http_request.readyState == 4) { 
				if (http_request.status == 200) {
					if(http_request.responseText != null){   
						var responseDoc= http_request.responseXML;
						if(responseDoc == null){
        					var parser = new DOMParser();
        					responseDoc = parser.parseFromString(http_request.responseText, "application/xml");
        					}
						var docs = responseDoc.getElementsByTagName("DOCUMENT");
						var noOfDocuments = docs.length;
						var saveTabMessage='';
						for(count=0;count<noOfDocuments;count++){	
							fields = docs[count].getElementsByTagName("FIELD");
							for(fieldCount=0;fieldCount<fields.length;fieldCount++){
								var fieldName = fields[fieldCount].getAttribute("entityId");
								//alert(fieldName);
								if(fieldName!=null && fieldName!='' && tokenName!="Token" && application_seq_field!="seqNo"){
									document.getElementById('entityId').value=fieldName;
									ERRORStr[count] = fields[fieldCount].firstChild.nodeValue;
									ERRORStr[count] = replace(ERRORStr[count]);
									responseError = ERRORStr[count];
								}else if(fieldName=='' && tokenName!="Token" && application_seq_field!="seqNo")
								{
									ERRORStr[count] = fields[fieldCount].firstChild.nodeValue;
									ERRORStr[count] = replace(ERRORStr[count]);
									responseError = ERRORStr[count];
									errorFlag='Y';
								}
								
									
								
								
								tokenName = fields[fieldCount].getAttribute("name");
								if(tokenName=="Token")
								{
										
									keyData[count] = fields[fieldCount].firstChild.nodeValue;
									keyData[count] = replace(keyData[count]);
									document.getElementById("token").value=keyData[count];
									
								}
								
								application_seq_field = fields[fieldCount].getAttribute("application_seq_field");
								if(application_seq_field=="seqNo")
								{
										
									keyData[count] = fields[fieldCount].firstChild.nodeValue;
									keyData[count] = replace(keyData[count]);
									document.getElementById("app_seq_no").value=keyData[count];
									
								}
								
								document.getElementById('Submit').removeAttribute("disabled");
								
								
								
								
								
							} 
							
							if(errorFlag=='Y')
								{
								saveTabMessage=getSaveTabMessage(responseError);
								alert(saveTabMessage);
								
								}
								else
								{
								 alert(responseError);
								 return false;
								
								}
							
						}
							} else {
						alert("An error seems to have occurred. Please try again.");
					}				 
				}
			}
			}
		
	function getSaveTabMessage(FWMsg)
	{
	return FWMsg;
	}



	function getKeyJSOnValue(formId,orgId,uimsg1,uiForamount,uiFortxnNo,uiEnd,app_seq_no,amount,txnNo,orderId)
	{
		var value="";
		var msgvalue="";
		if(typeof window.fnGetUICustMsgForPaymentMsg == 'function') {
			value=fnGetUICustMsgForPaymentMsg(app_seq_no,amount,txnNo,orderId);
		   }
		else
			{
	    var groupId="blank";
	     
		var language = $('#multilingualLanguageSelected').val();
		if(language =="" || language == undefined)
			language = "noLanguage";
		var param=formId + "," + orgId + "," + language + "," + groupId;
		  var keyValueJson;
		    var subAction = "keyValuesJson";

		    $.ajax({
		        type: "POST",
		        url: "/EForms/MultilingualLabelLoadServlet",
		        async: false,
		        data: {
		            OrgFormParams: param,
		            subAction: subAction
		        },
		        dataType: "json",
		        success: function(returnValue) {
		        	if(returnValue!=null){
		            keyValueJson = returnValue.keyValues;
		        	}
			    if(keyValueJson!=null)
			    {
			      if(Object.keys(keyValueJson).length !=0)
		        		 	{
		        			    for (var key in keyValueJson) {
		        		
		        			        if (keyValueJson.hasOwnProperty(key)) {
		        		                    
		        			            var key1 = key.trim();
							    
							    if(key1 == 'PaymentMsgPlaceHolder')
							    {
							
							    	 var msgvalue = keyValueJson[key]; 
							    
		        			         msgvalue=msgvalue.replace("app_seq_no",app_seq_no);
							     
		        			             msgvalue=msgvalue.replace("amount_value",amount);
		        			             msgvalue=msgvalue.replace("transactionNo",txnNo);
		        			             msgvalue=msgvalue.replace("orderId",orderId);
		        			             value=value.concat(uimsg1);
							         value=value.concat(msgvalue);
							         value=value.concat(uiEnd);
		        					break; 
							     }
							   /* else
							    	{
							    	  $('[data-multilingualId="'+key1+'"]').each(function(){
	  									var showAttr=$(this).attr('data-multilingualDisplayType');
	  									if(eval("typeof "+key1+" !== 'undefined'"))
	  										eval(key+"='"+value+"'");
	  									if(showAttr=="html")
	  										$('[data-multilingualId="'+key1+'"][data-multilingualDisplayType="'+showAttr+'"]').html(value);
							    	
							    	  });
							    	
							    	
							    	}*/
							    }
			    
			    }
			    }
			    }
			    }
			    });
			}
			   return value; 


	}

	function fngetkeyjosn(formId,orgId,groupId)
	{

		if (groupId == "" || groupId == null)
		    groupId = "blank";

		var language = $('#multilingualLanguageSelected').val();
		if(language =="" || language==undefined)
			language = "noLanguage";
		
		  
		    var parameters = formId + "," + orgId + "," + language + "," + groupId;
		    var keyValueJson;
		    var subAction = "keyValuesJson";

		    $.ajax({
		        type: "POST",
		        url: "/EForms/MultilingualLabelLoadServlet",
		        async: false,
		        data: {
		            OrgFormParams: parameters,
		            subAction: subAction
		        },
		        dataType: "json",
		        success: function(returnValue) {
		        	if(returnValue!=null){
		            keyValueJson = returnValue.keyValues;
		        	}
		        	  if(keyValueJson!= null)
		        	    {
		        		  if(Object.keys(keyValueJson).length !=0)
		        		 	{
		        			    for (var key in keyValueJson) {
		        		
		        			        if (keyValueJson.hasOwnProperty(key)) {
		        		
		        			            var key1 = key.trim();
		        			            var value = keyValueJson[key]; 

		        					            $('[data-multilingualId="'+key1+'"]').each(function(){
		        									var showAttr=$(this).attr('data-multilingualDisplayType');
		        									//if(eval(typeof key1 !== undefined))
		        									//	eval(key+"='"+value+"'");
		        									if(showAttr=="html")
		        										$('[data-multilingualId="'+key1+'"][data-multilingualDisplayType="'+showAttr+'"]').html(value);
		        									if(showAttr=="input")
		        										{
		        											var temp = document.createElement('span');
		        											temp.innerHTML = value;
		        											$('[data-multilingualId="'+key1+'"][data-multilingualDisplayType="'+showAttr+'"]').val(temp.innerHTML);
		        										}
		        									if(showAttr!="input" && showAttr!="html")
		        										{
		        											var temp = document.createElement('span');
		        											temp.innerHTML = value;
		        											$('[data-multilingualId="'+key1+'"][data-multilingualDisplayType="'+showAttr+'"]').attr(showAttr,temp.innerHTML);
		        										}
		        					            }); 
		        			        }
		        		
		        			    }
		        		 	}
		        		}
		        },
		        error: function(x, e){
		        	$.toaster({	priority: 'success',title: 'Message',message: x.readyState + " " + x.status + " " + e.msg});
		        },
		        complete: function(){
		        	if (typeof postMultilingaul == 'function')
						postMultilingaul(); 
				}
		    });


	}
	function setCookiesOnLogin(){
		 resetCookieFW();
		 $.extend({
		     getUrlVars: function(){
		       var vars = [], hash;
		       var hashes = window.location.search.slice(window.location.search.indexOf('?') + 1).split('&');
		       for(var i = 0; i < hashes.length; i++)
		       {
		         hash = hashes[i].split('=');
		         vars.push(hash[0]);
		         vars[hash[0]] = hash[1];
		       }
		       return vars;
		     },
		     getUrlVar: function(name){
		       return $.getUrlVars()[name];
		     }
		   });
		 
			var redirectToOtherSoln = $.getUrlVar('action');
			if(redirectToOtherSoln!=undefined && redirectToOtherSoln=="redirectToLX"){
				var allVars = $.getUrlVars();
				for(var i=0;i<allVars.length;i++){
					document.cookie=allVars[i]+"_iONEForms="+$.getUrlVar(allVars[i])+"; path=/";
				}
			}
	}
	function resetCookieFW(){
		var now = new Date();
	    now.setMonth( now.getMonth() - 1 );
		document.cookie="action_iONEForms= ; expires="+now.toUTCString() +"; path=/";
	}

	function getDatevaluewithFormat(datevalues,format)
	{
		var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		var date = new Date(datevalues);
		var month = date.getMonth();
		if(format=='dd/MMM/yyyy')
		return date.getDate()+"/"+months[month]+"/"+date.getYear();
		/*else if (format == 'dd/mmm/yyyy')
			return date.getDate()+"/"+months[month].toLowerCase()+"/"+date.getYear();
		else if  (format == 'dd/mmm/yyyy TT:MM:SS')
			return date.getDate()+"/"+months[month].toLowerCase()+"/"+date.getYear()+" "+date.getTime()+":"+date.getMinutes()+":"+date.getSeconds();*/
		else if (format == 'dd/MMM/yyyy TT:MM:SS')
			return date.getDate()+"/"+months[month]+"/"+date.getYear()+" "+date.getTime()+":"+date.getMinutes()+":"+date.getSeconds();
		else if (format = 'dd/mm/yyyy')
			return date.getDate()+"/"+month+"/"+date.getYear();
		else if (format = 'mm/dd/yyyy')
			return month+"/"+date.getDate()+"/"+date.getYear();
	}

	function downloadCandidateCsv()
	   {    
	        var orgId=document.getElementById('orgId').value;
		    var formId=document.getElementById('formId').value;
			var appseqno=document.getElementById('app_seq_no').value;
			var entityId=document.getElementById('entityId').value;
			var sessChk=document.getElementById('sessChk').value;
		 if(orgId!=""&&orgId!=null&&formId!=null&&formId!=""&&appseqno!=null&&appseqno!=""&&entityId!=null&&entityId!=""&&sessChk!=null&&sessChk!="")
		     {
			     var http_request=fnGetXMLHttpObject();
				 if(http_request!=null)
				 {
				var pValidationServlet ="GeneralServlet?subAction=downloadCandidateCSV&formId="+formId+"&orgId="+orgId+"&appseqno="+appseqno+"&entityId="+entityId+"&sessChk="+sessChk; 
		    	http_request.open('POST',pValidationServlet,true);  
              http_request.onreadystatechange = function()  {
                                                         if (http_request.readyState==4 && http_request.status==200)
                                                              {
																 
																 
																 if(http_request.responseText=="true")
																      alert('you are not authorized to download');
																	 else
																	 {
																	   var form = document.createElement("form"); //created dummy form for submitting.
                                                                    form.method = "POST";
                                                                    form.action ="/EForms/GeneralServlet?subAction=downloadCandidateCSV&formId="+formId+"&orgId="+orgId+"&appseqno="+appseqno+"&entityId="+entityId+"&sessChk="+sessChk; 
                                                                    document.body.appendChild(form);
                                                                    form.submit();
																  
                                                                   }
                                                             }
                                                           }																
				http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
				http_request.send();
			   }
			 
			 }
					 
	    
	    }
	
	   			
	   

		function fnLogin() {
			
			if (typeof window.fnLoginBeforeLogin == 'function') { fnLoginBeforeLogin(); } 
			 if($('#isFormMultilingualRequired').val()!=null && $('#isFormMultilingualRequired').val() == "Y")
				 {
					multilingualFormStaticValue("Login");
			
				 }
		
			if ($('#userid').val()== '') {
				if(loginalert1!="")
					{
				var temp = document.createElement('span');
				temp.innerHTML = $('#loginalert1').text();
				 //alert("Please Enter " +$('#userid').closest('tr').text().trim()||"UserId");
				alert(temp.innerHTML);
					}
				else
					{
					alert("Please Enter " +$('#userid').closest('tr').text().trim()||"UserId");
					}
				 return false; 
			} else if ($('#confData').val()== '') {
				if(loginalert2!="")
				{
				var temp2 = document.createElement('span');
				temp2.innerHTML = $('#loginalert2').text();
				//alert("Please Enter 'Password'. ");
				alert(temp2.innerHTML);
				}
				else
					{
					alert("Please Enter 'Password'. ");
					}
				return false; 
			} else {
				if ($('#loginCaptchaHolder').length) {
					var key = $('#loginCaptchaHolder #captchaService_imageKey').val();
					var answer = $('#loginCaptchaHolder #captchaService_answer').val(); 
					if (answer == '') {
						if(loginalert3!="")
							{
						var temp3 = document.createElement('span');
						temp3.innerHTML = $('#loginalert3').text();
						alert(temp3.innerHTML);}
						else
						{
						alert("Please enter the Captcha");
						}
						return false; }
					
					
						$.post("/EForms/IonCaptchaValidation",{ "captchaService_imageKey": key, "captchaService_answer": answer, 'appId': 30 })
						.done(function (check) {
							if (check.indexOf('Valid')=== -1) {
								if(loginalert4!="")
									{
									var temp4 = document.createElement('span');
									temp4.innerHTML = $('#loginalert4').text();
										//alert("Please enter correct text shown in image");
									alert(temp3.innerHTML);
									}
								else
									{
									alert("Please enter correct text shown in image");
									}
									init_captcha_login(); 
									return false; 
								}
							setTimeout(loader,1000);
							submitLoginForm();
						});
				}else{
				
					setTimeout(loader,1000);
					submitLoginForm();
				}


			}
		}
		function submitLoginForm(){
			var extrParams="";
			$('#loader-indicator').show();
			var actionUrl = ($('#actionTaker').val() ==undefined || $('#actionTaker').val() == null)?'/EForms/':'',
				 	withdrawalFormId = $('#withdrawalFormId').val(),
					redirectFormId = $('#redirectFormId').val();
			var url_string=urlappend();
			if(url_string!="" || url_string!=null || url_string!= undefined) extrParams="&extraParams="+encodeURIComponent(url_string);
				if ( withdrawalFormId && withdrawalFormId!= "null" && redirectFormId && redirectFormId != "null") {
						document.loginForm.withdrawalFormId.value = withdrawalFormId;
						document.loginForm.redirectFormId.value = redirectFormId; 
						document.loginForm.action = actionUrl+'loginAction.do?subAction=ValidateUserForWDrawal'; 
				} else {
					document.loginForm.action = actionUrl+'loginAction.do?subAction=ValidateUser'+extrParams; 
				}
				document.loginForm.method = "POST"; 
				document.loginForm.submit();
		}
		function init_captcha_login()
		{
			captchaService.setAppId(30);
			//captchaService.setImageKey('user_"<1234');
			captchaService.createCaptcha("loginCaptchaHolder");
			if (!$('#isLoginCaptcha').length)$(document.loginForm).append('<input id="isLoginCaptcha" name="isLoginCaptcha" value="" type="hidden">');
		}
		
		
		
		function fnLoginNew() {
			
		
			if (typeof window.fnLoginBeforeLogin == 'function') { fnLoginBeforeLogin(); } 
			 if($('#isFormMultilingualRequired').val()!=null && $('#isFormMultilingualRequired').val() == "Y")
				 {
					multilingualFormStaticValue("Login");
			
				 }
		
			if ($('#userid').val()== '') {
				if(loginalert1!="")
					{
				var temp = document.createElement('span');
				temp.innerHTML = $('#loginalert1').text();
				 //alert("Please Enter " +$('#userid').closest('tr').text().trim()||"UserId");
				alert(temp.innerHTML);
					}
				else
					{
					alert("Please Enter " +$('#userid').closest('tr').text().trim()||"UserId");
					}
				 return false; 
			} else if ($('#confData').val()== '') {
				if(loginalert2!="")
				{
				var temp2 = document.createElement('span');
				temp2.innerHTML = $('#loginalert2').text();
				//alert("Please Enter 'Password'. ");
				alert(temp2.innerHTML);
				}
				else
					{
					alert("Please Enter 'Password'. ");
					}
				return false; 
			} else {
				if ($('#loginCaptchaHolder').length) {
					var key = $('#loginCaptchaHolder #captchaService_imageKey').val();
					var answer = $('#loginCaptchaHolder #captchaService_answer').val(); 
					if (answer == '') {
						if(loginalert3!="")
							{
						var temp3 = document.createElement('span');
						temp3.innerHTML = $('#loginalert3').text();
						alert(temp3.innerHTML);}
						else
						{
						alert("Please enter the Captcha");
						}
						return false; }
					
					
						$.post("/EForms/IonCaptchaValidation",{ "captchaService_imageKey": key, "captchaService_answer": answer, 'appId': 30 })
						.done(function (check) {
							if (check.indexOf('Valid')=== -1) {
								if(loginalert4!="")
									{
									var temp4 = document.createElement('span');
									temp4.innerHTML = $('#loginalert4').text();
										//alert("Please enter correct text shown in image");
									alert(temp3.innerHTML);
									}
								else
									{
									alert("Please enter correct text shown in image");
									}
									init_captcha_login(); 
									return false; 
								}
							setTimeout(loader,1000);
							submitLoginFormNew();
						});
				}else{
				
					setTimeout(loader,1000);
					submitLoginFormNew();
				}


			}
		}
		
		/*
		function elseCaptchaCheck()
		{
			console.log("elseCaptchaCheck");
			$.post("/EForms/IonCaptchaValidation",{ "captchaService_imageKey": "", "captchaService_answer": "", 'appId': 30 })
			.done(function (check) {
			console.log("captcha else call verify");
			});
		}
		*/
		function submitLoginFormNew(){
			var extrParams="";
			$('#loader-indicator').show();
			var actionUrl = ($('#actionTaker').val() ==undefined || $('#actionTaker').val() == null)?'/EForms/':'',
				 	withdrawalFormId = $('#withdrawalFormId').val(),
					redirectFormId = $('#redirectFormId').val();
			var url_string=urlappend();
			if(url_string!="" || url_string!=null || url_string!= undefined) extrParams="&extraParams="+encodeURIComponent(url_string);
				if ( withdrawalFormId && withdrawalFormId!= "null" && redirectFormId && redirectFormId != "null") {
						document.loginForm.withdrawalFormId.value = withdrawalFormId;
						document.loginForm.redirectFormId.value = redirectFormId; 
						document.loginForm.action = actionUrl+'loginAction.do?subAction=ValidateUserForWDrawal'; 
				} else {
					document.loginForm.action = actionUrl+'loginAction.do?subAction=ValidateUserNew'+extrParams; 
				}
				document.loginForm.method = "POST"; 
				document.loginForm.submit();
		}
		
		launchURLHideReqParam = function(verb, urlwithParam, data, target) 
        {
      	  
        	var form = document.createElement("form");
      	  
      	     form.method = verb;
      	     form.target = target || "_self";
      	     form.style.display = 'none';
      	  
      	   var fields = urlwithParam.split('?');

             	var url = fields[0]+"?";
            	var reqParam = fields[1];
            	
      	      var reqParamArr=reqParam.split("&");
      	      
      	    for (var i = 0; i <= reqParamArr.length-1; i++)
      	    {
      	        var idValue=reqParamArr[i].split("=");
      	      if(idValue[0]!='checksum')
      	      {
      	    	var input = document.createElement("input");
      	        
      	    	input.type = 'hidden';
      	        input.id =idValue[0] ;
      	        input.name = idValue[0];
      	        input.value = idValue[1];
      	        form.appendChild(input);
      	      }
      	    else
      	    	url = url+reqParamArr[i];
      	     
      	   }
      	    
      	  form.action = url;
      	  document.body.appendChild(form);
      	  form.submit();
      	};

		/*function generateOtpFrameworkScreen()
		{
			
				//var http_request=fnGetXMLHttpObject();
				var orgID = document.getElementById('orgId').value;
				var formID = document.getElementById('formId').value;
				var otpEmail = '';
				var otpMobileNumber = '';
				var sendOtpMedia ='';
					var otpAction = "generate";
					var otpText = '';
					var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&otpScreen=OtpScreenReq&sendOtpMedia="+sendOtpMedia;
					window.launchURLHideReqParam("POST",otpCaptchaUrl,"","_self");
		}
    	
		function ValidateOtpFrameworkScreen()
		{
			
			var orgID = document.getElementById('orgId').value;
			var formID = document.getElementById('formId').value;
			var otpText = document.getElementById('txtOTP').value;
			var otpEmail = "";
			var otpMobileNumber= "";
			 
			 var parameters=formID+","+orgID+","+"validate"+","+otpMobileNumber+","+otpEmail+","+otpText;
			 var pValidationServlet = ""; 
				
			  pValidationServlet = "/EForms/OTPGenerationAndValidationServlet?otpScreen=OtpScreenReq"; 
				
			   window.launchURLHideReqParam("POST",pValidationServlet+"&otpParams="+parameters,"","_self");
		}
    	
		function ResendOtpFrameworkScreen()
		  {
			var orgID = document.getElementById('orgId').value;
				var formID = document.getElementById('formId').value;
				var otpAction = "resend";
				var otpText = "dummy";
				var otpMobileNumber = "";
				var otpEmail = "";
				var sendOtpMedia = "";
				var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&otpScreen=OtpScreenReq&sendOtpMedia="+sendOtpMedia;
				window.launchURLHideReqParam("POST",otpCaptchaUrl,"","_self");
			}
		
			
        function validateOTPCaptchaScreenReq()
    	{
    		 var a=document.getElementById('captchaService_imageKey').value;
    		 var b=document.getElementById('captchaService_answer').value;
    		 
    		 var parameter="captchaService_imageKey="+a+"&captchaService_answer="+b+"&appId=30";
    			
    		 if (b == '') 
    		 {
    		      alert("Please enter the Captcha.");
    		      return false;
    		 }
    		 else
    		 {
    		    	var http_request=fnGetXMLHttpObject();
    		    	if(http_request!=null)
    			    {
    		
    			           var pValidationServlet = "";
    			           	pValidationServlet = "/EForms/IonCaptchaValidation?"; 
    		
    			    	http_request.open('POST',pValidationServlet,true);  
    					
    					http_request.onreadystatechange = function() {  handleCaptchaResponseForOTPCaptchaScreenReq(http_request); }; 	 	                    
    					http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
    					http_request.send(parameter);
    				}
    		 }     
    	}

       function handleCaptchaResponseForOTPCaptchaScreenReq(http_request)
    	{
    		var ERRORStr = new Array();
    		var responseError='';	
    		var fields;	
    		var flag='';
    		var check="";
    		if (http_request.readyState == 4)
    		{
    			if (http_request.status == 200) 
    			{
    				if(http_request.responseText != null)
    				{
    					check=http_request.responseText;
    					if(check.indexOf('Valid')!=-1)
    					{	
    						callOTPActionScreenReq1();
    					}
    					else
    					{
    					  alert("Please enter correct text shown in image");
    					  document.getElementById('captchaService_answer').value='';
    					  captchaService.setAppId(30);
    					  captchaService.createCaptcha("captchaHolder");
    					  //document.getElementById(button_id).removeAttribute("disabled");
    					  return false;
    					}
    				}
    			}
    		}
    	}
    	
        function callOTPActionScreenReq1()
    	{
    		otpEmail = "";
    		otpMobileNumber= "";
    		 var a=document.getElementById('captchaService_imageKey').value;
    		 var b=document.getElementById('captchaService_answer').value;
    		 var parameters=formID+","+orgID+","+otpAction+","+otpMobileNumber+","+otpEmail+","+"dummy"+"&captchaService_imageKey="+a+"&captchaService_answer="+b+"&appId=30";
    		
    			var pValidationServlet = ""; 
    			pValidationServlet = "/EForms/OTPGenerationAndValidationServlet?otpScreen=OtpScreenReq"; 
    			window.launchURLHideReqParam("POST",pValidationServlet+"&otpParams="+parameters,"","_self");
    		
    	}		
        
        function validateOTPCaptchaScreenReqSec()
    	{
    		 var a=document.getElementById('captchaService_imageKey').value;
    		 var b=document.getElementById('captchaService_answer').value;
    		 
    		 var parameter="captchaService_imageKey="+a+"&captchaService_answer="+b+"&appId=30";
    			
    		 if (b == '') 
    		 {
    		      alert("Please enter the Captcha.");
    		      return false;
    		 }
    		 else
    		 {
    		    	var http_request=fnGetXMLHttpObject();
    		    	if(http_request!=null)
    			    {
    		
    			           var pValidationServlet = "";
    			           	pValidationServlet = "/EForms/IonCaptchaValidation?"; 
    		
    			    	http_request.open('POST',pValidationServlet,true);  
    					
    					http_request.onreadystatechange = function() { 
    						if (http_request.readyState == 4)
    			    		{
    			    			if (http_request.status == 200) 
    			    			{
    			    				handleCaptchaResponseForOTPCaptchaScreenReqSec(); 
    			    			}
    			    		}
    						}; 	 	                    
    					http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
    					http_request.send(parameter);
    				}
    		 }     
    	}

    	function handleCaptchaResponseForOTPCaptchaScreenReqSec()
    	{
    	    	var otpEmail = '';
    				var otpMobileNumber = '';
    				var a=document.getElementById('captchaService_imageKey').value;
    	    		var b=document.getElementById('captchaService_answer').value;
    				var sendOtpMedia ='';
    				var otpText = '';
    					var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&otpScreen=OtpScreenReq&sendOtpMedia="+sendOtpMedia+"&captchVaidatejsp=Y";
    					window.launchURLHideReqParam("POST",otpCaptchaUrl,"","_self");
    			
    	}

    	
    	function callOTPActionScreenReq(formID,orgID,a,b,otpAction)
    	{
    		otpEmail = "";
    		otpMobileNumber= "";
    		 var parameters=formID+","+orgID+","+otpAction+","+otpMobileNumber+","+otpEmail+","+"dummy"+"&captchaService_imageKey="+a+"&captchaService_answer="+b+"&appId=30";
    		
    			var pValidationServlet = ""; 
    			pValidationServlet = "/EForms/OTPGenerationAndValidationServlet?otpScreen=OtpScreenReq"; 
    			window.launchURLHideReqParam("POST",pValidationServlet+"&otpParams="+parameters,"","_self");
    		
    	}	*/
  
    	/*start Registration OTP Functions */
    	
    	function fnGenerateOTPBOTH(otpMobileNumber,otpEmail,statusShowFunctionName)
    	 {
    	    fnGenerateOTPBOTHNew(otpMobileNumber,otpEmail,statusShowFunctionName,'');
    	 }

    	 function fnGenerateOTPBOTHNew(otpMobileNumber,otpEmail,statusShowFunctionName,SMSOREmail)
    	 {
    	 	if(win==undefined||win.closed)
    	 	{
    	 		var http_request=fnGetXMLHttpObject();
    	 		var orgID = document.getElementById('orgId').value;
    	 		var formID = document.getElementById('formId').value;
    	 		var sendOtpMedia = document.getElementById('sendOtpMedia').value;
    	 		if(sendOtpMedia=="BOTH")
    	 		{
    	 			if(otpMobileNumber==null || otpMobileNumber==""  || otpEmail == null || otpEmail == "" )
    	 			{
    	 				alert("Please provide a Mobile Number and Email ID");
    	 				return false;
    	 			}
    	 			//otpMobileNumber = otpMobileNumberValue;
    	 			var otpAction = "generate";
    	 			var otpText = "dummy";
    	 			var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&statusShowFunctionName="+statusShowFunctionName+"&sendOtpMedia="+sendOtpMedia;
    	 			otpCaptchaIframe(otpCaptchaUrl);
    	 		//	window.launchOTPURL("POST",otpCaptchaUrl,"","_blank");
    	 		//	window.launchOTPCaptchaurl("POST",otpCaptchaUrl,"","_blank");
    	 		//	win = window.open(otpCaptchaUrl,"_blank", "toolbar=no, scrollbars=no, resizable=yes, top=200, left=200, width=500, height=320");	

    	 		}
    	 		else if(sendOtpMedia=="SMS")
    	 		{
    	 			if(otpMobileNumber==null || otpMobileNumber==""   )
    	 			{
    	 				alert("Please provide a Mobile Number");
    	 				return false;
    	 			}
    	 			//otpMobileNumber = otpMobileNumberValue;
    	 			var otpAction = "generate";
    	 			var otpText = "dummy";
    	 			var otpEmail = "";
    	 			var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&statusShowFunctionName="+statusShowFunctionName+"&sendOtpMedia="+sendOtpMedia;
    	 			otpCaptchaIframe(otpCaptchaUrl);
    	 		//	window.launchOTPURL("POST",otpCaptchaUrl,"","_blank");
    	 		//	window.launchOTPCaptchaurl("POST",otpCaptchaUrl,"","_blank");
    	 		//	win = window.open(otpCaptchaUrl,"_blank", "toolbar=no, scrollbars=no, resizable=yes, top=200, left=200, width=500, height=320");	

    	 		}
    	 		else if(sendOtpMedia=="EMAIL")
    	 		{
    	 			if(otpEmail == null || otpEmail == "")
    	 			{
    	 				alert("Please provide a Email ID");
    	 				return false;
    	 			}
    	 			//otpMobileNumber = otpMobileNumberValue;
    	 			var otpAction = "generate";
    	 			var otpText = "dummy";
    	 			var otpMobileNumber = "";
    	 			var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&statusShowFunctionName="+statusShowFunctionName+"&sendOtpMedia="+sendOtpMedia;
    	 			otpCaptchaIframe(otpCaptchaUrl);
    	 		//	window.launchOTPURL("POST",otpCaptchaUrl,"","_blank");
    	 		//	window.launchOTPCaptchaurl("POST",otpCaptchaUrl,"","_blank");
    	 		//	win = window.open(otpCaptchaUrl,"_blank", "toolbar=no, scrollbars=no, resizable=yes, top=200, left=200, width=500, height=320");	

    	 		}
    	 		else if(sendOtpMedia=="BothDifferentOTP")
    	 		{
    	 			if(SMSOREmail=='Both')
    	 			  {
    	 				if(otpMobileNumber==null || otpMobileNumber==""  || otpEmail == null || otpEmail == "" )
    	 				{
    	 					alert("Please provide a Mobile Number and Email ID");
    	 					return false;
    	 				}
    	 				}
    	 				else if(SMSOREmail=="Email")
    	 		    	{
    	 				if(otpEmail == null || otpEmail == "")
    	 				{
    	 					alert("Please provide a Email ID");
    	 					return false;
    	 				}
    	 				}
    	 				else if(SMSOREmail=="SMS")
    	 		    	{
    	 				if(otpMobileNumber==null || otpMobileNumber=="" )
    	 				{
    	 					alert("Please provide a Mobile Number");
    	 					return false;
    	 				}
    	 				}
    	 			
    	 			var otpAction = "generate";
    	 			var otpText = "dummy";
    	 			var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?SMSOREmail="+SMSOREmail+"&formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&statusShowFunctionName="+statusShowFunctionName+"&sendOtpMedia="+sendOtpMedia;
    	 			otpCaptchaIframe(otpCaptchaUrl);
    	 			//window.launchOTPURL("POST",otpCaptchaUrl,"","_blank");
    	 			//window.launchOTPCaptchaurl("POST",otpCaptchaUrl,"","_blank");
    	 			//win = window.open(otpCaptchaUrl,"_blank", "toolbar=no, scrollbars=no, resizable=yes, top=200, left=200, width=500, height=320");
    	 		}
    	 		
//    	 		win = window.open(otpCaptchaUrl,"_blank", "toolbar=no, scrollbars=no, resizable=yes, top=200, left=200, width=370, height=320");
    	 	}
    	 	
    	 }
    	 
    	 function otpCaptchaIframe(otpCaptchaUrl)
        	{       
     	   var form = document.createElement("form");
            form.method = "POST";
        	   form.target = "ifrm" ;
        	   form.style.display = 'none';
 	       var ifrm;
 		   ifrm = document.createElement("iframe");
 		   //ifrm.setAttribute("src",otpCaptchaUrl);
 		   //ifrm.setAttribute("method","POST");
 		   ifrm.setAttribute("id","otp_gen");
 		   ifrm.name = "ifrm";
 		   ifrm.style.width = "100%";
 		   ifrm.style.height = "100%";
 		   
 		   //ifrm.style.zIndex = "99 !important";
 		   document.body.appendChild(ifrm);
 		  		
 		   var fields = otpCaptchaUrl.split('?');

            var url = fields[0]+"?";
            var reqParam = fields[1];
              	
        	   var reqParamArr=reqParam.split("&");
        	      
        	   for (var i = 0; i <= reqParamArr.length-1; i++)
        	   {
        	      var idValue=reqParamArr[i].split("=");
        	      if(idValue[0]!='checksum')
        	      {
        	    	var input = document.createElement("input");
        	        
        	    	input.type = 'hidden';
        	        input.id =idValue[0] ;
        	        input.name = idValue[0];
        	        input.value = idValue[1];
        	        form.appendChild(input);
        	      }
        	    else
        	    	url = url+reqParamArr[i];
        	     
        	   }
        	   form.action = url;
        	   document.body.appendChild(form);
 		   var win_width = $(window).width();
 		   var win_height = $(window).height();
 		   var pop_width = $('#otp_gen').width();
 		   var pop_height = $('#otp_gen').height();
 		   var pop_top = (win_height - pop_height) / 2 ;
 		   var pop_left = (win_width - pop_width) / 2 ;
 		   $('#otp_gen').css({'margin':'auto','left':'0px','top':'0px','position': 'fixed','bottom': '0px','right': '0px','z-index':'99','overflow-x': 'scroll'});
 			
 		   form.submit();
 		   form.remove(); 
 	  			
   	}
    	 
    	 launchOTPCaptchaurl = function(verb, urlwithParam, data, target) 
         {
       	  
         	var form = document.createElement("form");
       	  
       	     form.method = verb;
       	     form.target = "popup" ;
       	     form.style.display = 'none';
       	  
       	   var fields = urlwithParam.split('?');

              	var url = fields[0]+"?";
             	var reqParam = fields[1];
             	
       	      var reqParamArr=reqParam.split("&");
       	      
       	    for (var i = 0; i <= reqParamArr.length-1; i++)
       	    {
       	        var idValue=reqParamArr[i].split("=");
       	      if(idValue[0]!='checksum')
       	      {
       	    	var input = document.createElement("input");
       	        
       	    	input.type = 'hidden';
       	        input.id =idValue[0] ;
       	        input.name = idValue[0];
       	        input.value = idValue[1];
       	        form.appendChild(input);
       	      }
       	    else
       	    	url = url+reqParamArr[i];
       	     
       	   }
       	    
       	  form.action = url;
       	  document.body.appendChild(form);
       //	win = window.open("","popup", "toolbar=no, scrollbars=no, resizable=yes, top=200, left=415, width=500, height=320");	
         
      	win = window.open("","popup", "toolbar=no, scrollbars=no, resizable=yes, top=200, left=300, width=800, height=420");	
        //for new ui
       	if(win)
       	{ form.submit();
       	document.body.removeChild(form);
       	}
       	else
       		alert("Allow popups to work");
       	};

    	
    	 function fnResendOTPBOTH(otpMobileNumber,otpEmail,statusShowFunctionName)
    	 {
    	 fnResendOTPBOTHNew(otpMobileNumber,otpEmail,statusShowFunctionName,'');
    	 }

    	 function fnResendOTPBOTHNew(otpMobileNumber,otpEmail,statusShowFunctionName,SMSOREmail)
    	 {
    	 	if(win==undefined||win.closed)
    	 	{
    	 		var http_request=fnGetXMLHttpObject();
    	 		var orgID = document.getElementById('orgId').value;
    	 		var formID = document.getElementById('formId').value;
    	 		var sendOtpMedia = document.getElementById('sendOtpMedia').value;
    	 		if(sendOtpMedia=="BOTH")
    	 		{
    	 			if(otpMobileNumber==null || otpMobileNumber==""  || otpEmail == null || otpEmail == "" )
    	 			{
    	 				alert("Please provide a Mobile Number and Email ID");
    	 				return false;
    	 			}
    	 			//otpMobileNumber = otpMobileNumberValue;
    	 			var otpAction = "resend";
    	 			var otpText = "dummy";
    	 			var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&statusShowFunctionName="+statusShowFunctionName+"&sendOtpMedia="+sendOtpMedia;
    	 			otpCaptchaIframe(otpCaptchaUrl);
    	 			//win = window.open(otpCaptchaUrl,"_blank", "toolbar=no, scrollbars=no, resizable=yes, top=200, left=200, width=370, height=320");	
    	 			//window.launchOTPCaptchaurl("POST",otpCaptchaUrl,"","_blank");
    	 		}
    	 		else if(sendOtpMedia=="SMS")
    	 		{
    	 			if(otpMobileNumber==null || otpMobileNumber==""   )
    	 			{
    	 				alert("Please provide a Mobile Number");
    	 				return false;
    	 			}
    	 			var otpAction = "resend";
    	 			var otpText = "dummy";
    	 			var otpEmail = "";
    	 			var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&statusShowFunctionName="+statusShowFunctionName+"&sendOtpMedia="+sendOtpMedia;
    	 			otpCaptchaIframe(otpCaptchaUrl);
    	 		//	window.launchOTPURL("POST",otpCaptchaUrl,"","_blank"); 
    	 		//	window.launchOTPCaptchaurl("POST",otpCaptchaUrl,"","_blank");
    	 		}
    	 		else if(sendOtpMedia=="EMAIL")
    	 		{
    	 			if(otpEmail == null || otpEmail == "")
    	 			{
    	 				alert("Please provide a Email ID");
    	 				return false;
    	 			}
    	 			//otpMobileNumber = otpMobileNumberValue;
    	 			var otpAction = "resend";
    	 			var otpText = "dummy";
    	 			var otpMobileNumber = "";
    	 			var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&statusShowFunctionName="+statusShowFunctionName+"&sendOtpMedia="+sendOtpMedia;
    	 			otpCaptchaIframe(otpCaptchaUrl);
    	 			//window.launchOTPURL("POST",otpCaptchaUrl,"","_blank");
    	 			//window.launchOTPCaptchaurl("POST",otpCaptchaUrl,"","_blank");
    	 		}
    	 		if(sendOtpMedia=="BothDifferentOTP")
    	 		{
    	 		  if(SMSOREmail=='Both')
    	 		  {
    	 			if(otpMobileNumber==null || otpMobileNumber==""  || otpEmail == null || otpEmail == "" )
    	 			{
    	 				alert("Please provide a Mobile Number and Email ID");
    	 				return false;
    	 			}
    	 			}
    	 			else if(SMSOREmail=="Email")
    	 	    	{
    	 			if(otpEmail == null || otpEmail == "")
    	 			{
    	 				alert("Please provide a Email ID");
    	 				return false;
    	 			}
    	 			}
    	 			else if(SMSOREmail=="SMS")
    	 	    	{
    	 			if(otpMobileNumber==null || otpMobileNumber==""   )
    	 			{
    	 				alert("Please provide a Mobile Number");
    	 				return false;
    	 			}
    	 			}
    	 			var otpAction = "resend";
    	 			var otpText = "dummy";
    	 			var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?SMSOREmail="+SMSOREmail+"&formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&statusShowFunctionName="+statusShowFunctionName+"&sendOtpMedia="+sendOtpMedia;
    	 			otpCaptchaIframe(otpCaptchaUrl);
    	 			//win = window.open(otpCaptchaUrl,"_blank", "toolbar=no, scrollbars=no, resizable=yes, top=200, left=200, width=370, height=320");	
    	 			//window.launchOTPCaptchaurl("POST",otpCaptchaUrl,"","_blank");
    	 		}
    	 	}
    	 }
    	 
    	 
    	 function fnValidateOTPBOTH(otpMobileNumber,otpEmail,otpText,statusShowFunctionName)
    	 {
    	  
    	  fnValidateOTPBOTHNew(otpMobileNumber,otpEmail,otpText,statusShowFunctionName,'');

    	 }	
    	 		
    	 function fnValidateOTPBOTHNew(otpMobileNumber,otpEmail,otpText,statusShowFunctionName,SMSOREmail)
    	 {
    	 	var http_request=fnGetXMLHttpObject();
    	 	var orgID = document.getElementById('orgId').value;
    	 	var formID = document.getElementById('formId').value;
    	 	var sendOtpMedia = document.getElementById('sendOtpMedia').value;
    	 	if(sendOtpMedia=="BOTH")
    	 	{
    	 		if(otpMobileNumber==""||otpMobileNumber==null || otpEmail == null || otpEmail == "")
    	 		{
    	 			alert("Please provide a Mobile Number or Email ID");
    	 			return false;
    	 		}				
    	 	}
    	 	else if(sendOtpMedia=="SMS")
    	 	{
    	 		if(otpMobileNumber==null || otpMobileNumber==""   )
    	 		{
    	 			alert("Please provide a Mobile Number");
    	 			return false;
    	 		}
    	 		otpEmail = "";
    	 	}
    	 	else if(sendOtpMedia=="EMAIL")
    	 	{
    	 		if(otpEmail == null || otpEmail == "")
    	 		{
    	 			alert("Please provide a Email ID");
    	 			return false;
    	 		}
    	 		otpMobileNumber= "";
    	 	}
    	 	else if(sendOtpMedia=="BothDifferentOTP")
    	 	{
    	 	 if(otpMobileNumber==""||otpMobileNumber==null || otpEmail == null || otpEmail == "")
    	 		{
    	 			alert("Please provide a Mobile Number or Email ID");
    	 			return false;
    	 		}
    	        
    	 	
    	 	 if(otpText==""||otpText==null)
    	 	{
    	 	if(SMSOREmail=='SMS')
    	 		alert("Please provide OTP received on Mobile");
    	 	else if(SMSOREmail=='Email')
    	 	    alert("Please provide OTP received on Email");
    	 		
    	 		return false;
    	 	}
    	 		
    	 	}
    	 	if(sendOtpMedia!="BothDifferentOTP")
    	 	{
    	 	
    	 	 if(otpText==""||otpText==null)
    	 	  {
    	 		alert("Please provide OTP received");
    	 		return false;
    	 	  }		
    	 	
    	 	}
    	 	 var parameters=formID+","+orgID+","+"validate"+","+otpMobileNumber+","+otpEmail+","+otpText;
    	 	if(http_request!=null){
    	 		var pValidationServlet = ""; 
    	 		pValidationServlet = "/EForms/OTPGenerationAndValidationServlet?"; 
    	 		http_request.open('POST',pValidationServlet,true);       
    	 		http_request.onreadystatechange = function() { eval(statusShowFunctionName+'(http_request)'); }; 	 	                    
    	 		http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
    	 if(SMSOREmail!='')	
    	 		http_request.send("SMSOREmail="+SMSOREmail+"&otpParams="+parameters);
    	 else
    	      http_request.send("otpParams="+parameters);
    	 	}
    	 }

    	 
    	 /* End Registration OTP Functions */
    	 
    	 
    	/* start of login OTP functions*/
    	 
    		function generateOtpFrameworkScreen()
    		{
    		  generateOtpFrameworkScreen('');
    		}
    		
    	
    		function generateOtpFrameworkScreen(SMSOREmail)
    		{
    			
    				//var http_request=fnGetXMLHttpObject();
    				var orgID = document.getElementById('orgId').value;
    				var formID = document.getElementById('formId').value;
    				var otpEmail = '';
    				var otpMobileNumber = '';
    				var sendOtpMedia ='';
    					var otpAction = "generate";
    					var otpText = '';
    					var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?SMSOREmail="+SMSOREmail+"&formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&otpScreen=OtpScreenReq&sendOtpMedia="+sendOtpMedia;
    					window.launchURLHideReqParam("POST",otpCaptchaUrl,"","_self");
    		}
        	
    		function ValidateOtpFrameworkScreen()
    		{
    		    ValidateOtpFrameworkScreen('');
    		}
    		
    		function ValidateOtpFrameworkScreen(SMSOREmail)
    		{
    			
    			var orgID = document.getElementById('orgId').value;
    			var formID = document.getElementById('formId').value;
    			var otpText = "";
    			var otpEmail = "";
    			var otpMobileNumber= "";
    			
    			if(SMSOREmail=='SMS')
    				{
    				   otpText = document.getElementById('txtOTPMobile').value;
    				   if(otpText=='')
    					   {
    					     alert("Enter Mobile OTP.");
    					   }
    				}
    			else if(SMSOREmail=='Email')
    				{
    				  otpText = document.getElementById('txtOTPEmail').value;
    				  if(otpText=='')
					   {
					     alert("Enter Email OTP.");
					   }
    				}
    			else
    				{
    				otpText = document.getElementById('txtOTP').value;
    				if(otpText=='')
					   {
					     alert("Enter OTP.");
					   }
    				}
    			if(otpText!='')
    			{
    			 var parameters=formID+","+orgID+","+"validate"+","+otpMobileNumber+","+otpEmail+","+otpText;
    			 var pValidationServlet = ""; 
    				
    			  pValidationServlet = "/EForms/OTPGenerationAndValidationServlet?otpScreen=OtpScreenReq+&SMSOREmail="+SMSOREmail; 
    				
    			   window.launchURLHideReqParam("POST",pValidationServlet+"&otpParams="+parameters,"","_self");
    			}
    			}
    		
        	function ResendOtpFrameworkScreen()
    		{
    		     ResendOtpFrameworkScreen('');
    		 }
        	
    		function ResendOtpFrameworkScreen(SMSOREmail)
    		  {
    			var orgID = document.getElementById('orgId').value;
    				var formID = document.getElementById('formId').value;
    				var otpAction = "resend";
    				var otpText = "dummy";
    				var otpMobileNumber = "";
    				var otpEmail = "";
    				var sendOtpMedia = "";
    				var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?SMSOREmail="+SMSOREmail+"&formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&otpScreen=OtpScreenReq&sendOtpMedia="+sendOtpMedia;
    				window.launchURLHideReqParam("POST",otpCaptchaUrl,"","_self");
    			}
    		
    			
           
            
            function validateOTPCaptchaScreenReqSec()
        	{
        		 var a=document.getElementById('captchaService_imageKey').value;
        		 var b=document.getElementById('captchaService_answer').value;
        		 
        		 var parameter="captchaService_imageKey="+a+"&captchaService_answer="+b+"&appId=30";
        			
        		 if (b == '') 
        		 {
        		      alert("Please enter the Captcha.");
        		      return false;
        		 }
        		 else
        		 {
        		    	var http_request=fnGetXMLHttpObject();
        		    	if(http_request!=null)
        			    {
        		
        			           var pValidationServlet = "";
        			           	pValidationServlet = "/EForms/IonCaptchaValidation?"; 
        		
        			    	http_request.open('POST',pValidationServlet,true);  
        					
        					http_request.onreadystatechange = function() { 
        						if (http_request.readyState == 4)
        			    		{
        			    			if (http_request.status == 200) 
        			    			{
        			    				handleCaptchaResponseForOTPCaptchaScreenReqSec(); 
        			    			}
        			    		}
        						}; 	 	                    
        					http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");               
        					http_request.send(parameter);
        				}
        		 }     
        	}

        	function handleCaptchaResponseForOTPCaptchaScreenReqSec()
        	{
        	    	var otpEmail = '';
        				var otpMobileNumber = '';
        				var a=document.getElementById('captchaService_imageKey').value;
        	    		var b=document.getElementById('captchaService_answer').value;
        				var sendOtpMedia ='';
        				var otpText = '';
        					var otpCaptchaUrl = "/EForms/jsp/otpCaptcha.jsp?SMSOREmail="+SMSOREmail+"&formID="+formID+"&orgID="+orgID+"&otpMobileNumber="+otpMobileNumber+"&otpEmail="+otpEmail+"&otpText="+otpText+"&otpAction="+otpAction+"&otpScreen=OtpScreenReq&sendOtpMedia="+sendOtpMedia+"&captchVaidatejsp=Y";
        					window.launchURLHideReqParam("POST",otpCaptchaUrl,"","_self");
        			
        	}

        	
        	function callOTPActionScreenReq(formID,orgID,a,b,otpAction,SMSOREmail)
        	{
        		otpEmail = "";
        		otpMobileNumber= "";
        		 var parameters=formID+","+orgID+","+otpAction+","+otpMobileNumber+","+otpEmail+","+"dummy"+"&captchaService_imageKey="+a+"&captchaService_answer="+b+"&appId=30";
        		
        			var pValidationServlet = ""; 
        			pValidationServlet = "/EForms/OTPGenerationAndValidationServlet?otpScreen=OtpScreenReq&SMSOREmail="+SMSOREmail; 
        			window.launchURLHideReqParam("POST",pValidationServlet+"&otpParams="+parameters,"","_self");
        		
        	}
        	function removeIframe()
        	{   console.log("entering removeIframe function");
        	    window.parent.document.getElementById("otp_gen");
        	    window.parent.document.getElementById("otp_gen").remove();
        	}
        	
        	/* End of login OTP functions*/
        	

    		function fnLogins() {
    			if (typeof window.fnLoginBeforeLogin == 'function') { fnLoginBeforeLogin(); } 
    			 if($('#isFormMultilingualRequired').val()!=null && $('#isFormMultilingualRequired').val() == "Y")
    				 {
    					multilingualFormStaticValue("Login");
    			
    				 }
    		
    			if ($('#userid').val()== '') {
    				if(loginalert1!="")
    					{
    				var temp = document.createElement('span');
    				temp.innerHTML = $('#loginalert1').text();
    				 //alert("Please Enter " +$('#userid').closest('tr').text().trim()||"UserId");
    				alert(temp.innerHTML);
    					}
    				else
    					{
    					alert("Please Enter " +$('#userid').closest('tr').text().trim()||"UserId");
    					}
    				 return false; 
    			} else if ($('#confData').val()== '') {
    				if(loginalert2!="")
    				{
    				var temp2 = document.createElement('span');
    				temp2.innerHTML = $('#loginalert2').text();
    				//alert("Please Enter 'Password'. ");
    				alert(temp2.innerHTML);
    				}
    				else
    					{
    					alert("Please Enter 'Password'. ");
    					}
    				return false; 
    			} else {
    				if ($('#loginCaptchaHolder').length) {
    					var key = $('#loginCaptchaHolder #captchaService_imageKey').val();
    					var answer = $('#loginCaptchaHolder #captchaService_answer').val(); 
    					if (answer == '') {
    						if(loginalert3!="")
    							{
    						var temp3 = document.createElement('span');
    						temp3.innerHTML = $('#loginalert3').text();
    						alert(temp3.innerHTML);}
    						else
    						{
    						alert("Please enter the Captcha");
    						}
    						return false; }
    					
    					
    						$.post("/EForms/IonCaptchaValidation",{ "captchaService_imageKey": key, "captchaService_answer": answer, 'appId': 30 })
    						.done(function (check) {
    							if (check.indexOf('Valid')=== -1) {
    								if(loginalert4!="")
    									{
    									var temp4 = document.createElement('span');
    									temp4.innerHTML = $('#loginalert4').text();
    										//alert("Please enter correct text shown in image");
    									alert(temp3.innerHTML);
    									}
    								else
    									{
    									alert("Please enter correct text shown in image");
    									}
    									init_captcha_login(); 
    									return false; 
    								}
    							setTimeout(loader,1000);
    							submitLoginForms();
    						});
    				}else{
    					setTimeout(loader,1000);
    					submitLoginForms();
    				}


    			}
    		}
    		function submitLoginForms(){
    			var extrParams="";
    			$('#loader-indicator').show();
    			var actionUrl = ($('#actionTaker').val() ==undefined || $('#actionTaker').val() == null)?'/EForms/':'',
    			withdrawalFormId = $('#withdrawalFormId').val(),
    			redirectFormId = $('#redirectFormId').val();
    			var url_string=urlappend();
    			if(url_string!="" || url_string!=null || url_string!= undefined) extrParams="&extraParams="+encodeURIComponent(url_string);
    			if ( withdrawalFormId && withdrawalFormId!= "null" && redirectFormId && redirectFormId != "null") {
    			document.loginForm.withdrawalFormId.value = withdrawalFormId;
    			document.loginForm.redirectFormId.value = redirectFormId;
    			document.loginForm.action = actionUrl+'loginAction.do?subAction=ValidateUserForWDrawal&frameworkCall=1';
    			} else {
    			document.loginForm.action = actionUrl+'loginAction.do?subAction=ValidateUser&frameworkCall=1'+extrParams;
    			}

    			var pkey=getpubKey();
    			encryptvals(pkey);

    			document.loginForm.method = "POST";
    			document.loginForm.submit();
    			}

    			function encryptvals(pkey)
    			{
    			var userid=$('#userid').val();
    			var password=$('#confData').val();
    			var RSAEncrypt = new JSEncrypt();
    			RSAEncrypt.setPublicKey(pkey);
    			var encrypteduserId = RSAEncrypt.encrypt(userid);
    			$('#userid').val(encrypteduserId);
    			document.getElementById("userid").type="password"
    			alert(encrypteduserId);
    			var encryptedpassword = RSAEncrypt.encrypt(password);
    			$('#confData').val(encrypteduserId);
    			document.getElementById("confData").type="password"
    			alert(encryptedpassword);
    			}
    		
    		
    			function getpubKey()
    			{
    			$.ajax({
    			type: "POST",
    			url: "/EForms/RSAKeyPairGenerator",
    			data: {
    			subAction:"readPubkey",
    			},
    			dataType: "text",
    			success: function(result)
    			{
    			alert(result);
    			},
    			error: function(x, e){
    			alert("error");
    			}
    			});
    			}


        	
        	/* End of login OTP functions*/  
        	
        	function generateRSAKeys()
        	{
        		$.ajax({
    				type: "POST",
    				url: "/EForms/RSAKeyPairGenerator",
					data: {
            	   subAction:"genKeys",
				   },
    				dataType: "text",
    				success: function(result)
    				{
    					alert(result);	
    				},
        			error: function(x, e){
        				alert("error");
        			}
        		});
        		}
        	
        	
        	
        	
  