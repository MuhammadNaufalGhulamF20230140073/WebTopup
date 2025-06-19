<?php
include "koneksi.php";
$no_hp = $_POST['no_hp'];
$password = $_POST['password'];

$q = "SELECT * FROM users WHERE no_hp='$no_hp'";
$res = mysqli_query($conn, $q);
$user = mysqli_fetch_assoc($res);

if ($user && password_verify($password, $user['password'])) {
    echo json_encode([
        "success" => true,
        "role" => $user['role']
    ]);
} else {
    echo json_encode([
        "success" => false
    ]);
}
?>
