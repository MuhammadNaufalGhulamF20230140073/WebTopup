<?php
include "../koneksi.php";

$no_hp = $_POST['hp'];
$password = $_POST['password'];
$role = "user"; // default user

if (!$no_hp || !$password) {
    echo json_encode(["success" => false, "message" => "Semua field harus diisi."]);
    exit;
}

// Cek apakah nomor sudah ada
$q = mysqli_query($conn, "SELECT * FROM users WHERE no_hp='$no_hp'");
if (mysqli_num_rows($q) > 0) {
    echo json_encode(["success" => false, "message" => "Nomor HP sudah terdaftar!"]);
    exit;
}

// Hash password
$hash = password_hash($password, PASSWORD_DEFAULT);

// Insert user baru
$insert = mysqli_query($conn, "INSERT INTO users (no_hp, password, role) VALUES ('$no_hp', '$hash', '$role')");

if ($insert) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Gagal register, coba lagi."]);
}
?>
