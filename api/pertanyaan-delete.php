<?php
include "koneksi.php";
$id = intval($_POST['id'] ?? 0);

if ($id) {
    $q = mysqli_query($conn, "DELETE FROM pertanyaan WHERE id='$id'");
    if ($q) {
        echo json_encode(['success'=>true]);
    } else {
        echo json_encode(['success'=>false]);
    }
} else {
    echo json_encode(['success'=>false]);
}
?>
