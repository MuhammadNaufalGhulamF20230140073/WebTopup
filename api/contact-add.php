<?php
include "koneksi.php";

$individu  = $_POST['individu'] ?? '';
$tipe      = $_POST['tipe'] ?? '';
$nama      = $_POST['nama'] ?? '';
$whatsapp  = $_POST['whatsapp'] ?? '';
$deskripsi = $_POST['deskripsi'] ?? '';

if (!$individu || !$tipe || !$nama || !$whatsapp || !$deskripsi) {
    echo json_encode(['success' => false, 'message' => 'Semua field harus diisi!']);
    exit;
}

$q = mysqli_query($conn, "INSERT INTO pertanyaan (individu, tipe, nama, whatsapp, deskripsi) VALUES ('$individu', '$tipe', '$nama', '$whatsapp', '$deskripsi')");

if ($q) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Gagal menyimpan ke database']);
}
?>
