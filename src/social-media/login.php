<?php
include 'connection.php';
$data=json_decode(file_get_contents("php://input"));
$email=$data->email;
$password= sha1(trim($data->password));
$rdata=array();
$sql="SELECT * FROM `users` WHERE email='$email' and password='$password'";
$result=$db->query($sql);
if($result->num_rows >0){
    while($r=$result->fetch_assoc()){
        $rdata=$r;
    }


echo json_encode(
    array(
        "message"=>"successfully Login",
        "jwt" => $rdata['remember_token'],
        "expiredAt" => date("Y-m-d H:i:s",strtotime('+24 hours')),
        "datas" =>json_encode($rdata)
    ));
}else{
    echo json_encode(array("message"=>"Login Failed"));
}