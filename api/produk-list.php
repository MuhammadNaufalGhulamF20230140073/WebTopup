<?php
include "koneksi.php";
$res = mysqli_query($conn, "SELECT * FROM produk ORDER BY id ASC");
$data = [];
while ($row = mysqli_fetch_assoc($res)) $data[] = $row;
header('Content-Type: application/json');
echo json_encode($data);
?>


