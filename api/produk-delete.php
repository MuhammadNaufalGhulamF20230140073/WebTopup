<?php
include "koneksi.php";
$id = $_POST['id'];
$sql = "DELETE FROM produk WHERE id=$id";
$res = mysqli_query($conn, $sql);
echo json_encode(['success' => $res]);
?>
