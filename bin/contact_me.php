<?php

// check if fields passed are empty
if(empty($_POST['name'])  		||
   empty($_POST['phone']) 		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = $_POST['name'];
$phone = $_POST['phone'];
$email_address = $_POST['email'];
$message = $_POST['message'];

// create email body and send it	
$to = 'sales@bncsoft.com'; // PUT YOUR EMAIL ADDRESS HERE
$email_subject = "[홈페이지 문의사항] - $name"; // EDIT THE EMAIL SUBJECT LINE HERE
$encoded_subject = iconv('utf-8','euc-kr',$email_subject);
$email_body = "아래와 같이 홈페이지로부터 문의사항이 접수되었습니다.\n\n"."문의사항:\n\nName: $name\n\nPhone: $phone\n\nEmail: $email_address\n\nMessage:\n$message";
$encoded_body = iconv('utf-8','euc-kr',$email_body);
$headers = "From: sales@bncsoft.com\n";
$headers .= "Reply-To: $email_address";	



mail($to,$encoded_subject,$encoded_body,$headers);
return true;	
		
?>