<?php
include "koneksi.php";
$nama = $_POST['nama'];
$harga = $_POST['harga'];
$sql = "INSERT INTO produk (nama, harga) VALUES ('$nama', $harga)";
$res = mysqli_query($conn, $sql);
echo json_encode(['success' => $res]);
?>
