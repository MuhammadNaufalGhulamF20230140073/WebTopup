<?php
include "koneksi.php";

// JOIN ke produk agar nama produk muncul di list pesanan
$q = mysqli_query($conn, "SELECT pesanan.*, produk.nama AS nama_produk, produk.harga FROM pesanan JOIN produk ON pesanan.produk_id = produk.id ORDER BY pesanan.id DESC");
$data = [];
while ($row = mysqli_fetch_assoc($q)) $data[] = $row;

header('Content-Type: application/json');
echo json_encode($data);
?>
