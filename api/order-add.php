<?php
include "koneksi.php";
$riot_id = $_POST['riot_id'];
$produk_id = $_POST['produk_id'];
$sql = "INSERT INTO pesanan (riot_id, produk_id) VALUES ('$riot_id', $produk_id)";
$res = mysqli_query($conn, $sql);
echo json_encode(['success' => $res]);
?>
