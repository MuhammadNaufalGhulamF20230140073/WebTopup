<?php
include "koneksi.php";
$id = $_POST['id'];
$nama = $_POST['nama'];
$harga = $_POST['harga'];
$sql = "UPDATE produk SET nama='$nama', harga=$harga WHERE id=$id";
$res = mysqli_query($conn, $sql);
echo json_encode(['success' => $res]);
?>
