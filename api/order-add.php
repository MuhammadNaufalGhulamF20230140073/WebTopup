<?php
include "koneksi.php";
$user_id = $_POST['user_id'];
$produk_id = $_POST['produk_id'];
$riot_id = $_POST['riot_id'];

if (!$user_id || !$produk_id || !$riot_id) {
    echo json_encode(["success" => false, "message" => "Data tidak lengkap"]);
    exit;
}

$insert = mysqli_query($conn, "INSERT INTO pesanan (user_id, produk_id, riot_id) VALUES ('$user_id', '$produk_id', '$riot_id')");

if ($insert) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Gagal menyimpan pesanan"]);
}
?>
