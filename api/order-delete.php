<?php
include "koneksi.php";
$id = $_POST['id'] ?? '';
if ($id) {
    $del = mysqli_query($conn, "DELETE FROM pesanan WHERE id='$id'");
    echo json_encode(["success" => $del ? true : false]);
} else {
    echo json_encode(["success" => false]);
}
?>
