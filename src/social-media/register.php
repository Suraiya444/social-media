<?php
include 'connection.php';
$data = json_decode(file_get_contents("php://input"));

if($data){
    $full_name=$data->full_name;
    $user_name=$data->user_name;
    $email=$data->email;
    $password=sha1($data->password);
    $token=time().rand(111,999).md5($email);

    $sql="INSERT into `users` set  full_name='$full_name', user_name='$user_name', email='$email', password='$password',remember_token='$token'";
    $result=$db->query($sql);
    if($result)
        echo json_encode(array("message" => "Successful register."));
else
echo json_encode(array("message" => "Register failed."));
}