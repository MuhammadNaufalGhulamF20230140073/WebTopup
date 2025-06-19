<?php
include "koneksi.php";
$q = mysqli_query($conn, "SELECT * FROM pertanyaan ORDER BY tgl_kirim DESC");
$data = [];
while($d = mysqli_fetch_assoc($q)) $data[] = $d;
header('Content-Type: application/json');
echo json_encode($data);
?>
