<?php
include "koneksi.php";
$no_hp = $_POST['no_hp'] ?? '';
$password = $_POST['password'] ?? '';
$q = mysqli_query($conn, "SELECT * FROM users WHERE no_hp='$no_hp'");
$user = mysqli_fetch_assoc($q);

if ($user && password_verify($password, $user['password'])) {
    echo json_encode([
        "success" => true,
        "role" => $user['role'],
        "user_id" => $user['id'] // <-- tambahkan
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Nomor HP atau password salah!"
    ]);
}
?>
