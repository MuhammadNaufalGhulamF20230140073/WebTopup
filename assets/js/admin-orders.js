function renderOrders() {
    fetch('api/order-list.php')
        .then(res => res.json())
        .then(orders => {
            const tbody = document.getElementById("orderTableBody");
            tbody.innerHTML = "";
            orders.forEach(order => {
                tbody.innerHTML += `
                    <tr>
                        <td class="border px-4 py-2">${order.riot_id}</td>
                        <td class="border px-4 py-2">${order.nama_produk}</td>
                        <td class="border px-4 py-2">Rp ${parseInt(order.harga).toLocaleString()}</td>
                        <td class="border px-4 py-2">${order.tgl_pesan}</td>
                        <td class="border px-4 py-2">
                            <button onclick="deleteOrder(${order.id})" class="bg-red-600 hover:bg-red-700 text-white px-2 rounded">Hapus</button>
                        </td>
                    </tr>
                `;
            });
        });
}

window.deleteOrder = function(id) {
    if (confirm("Yakin ingin menghapus pesanan ini?")) {
        fetch('api/order-delete.php', {
                method: "POST",
                body: new URLSearchParams({ id })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) renderOrders();
                else alert("Gagal hapus pesanan!");
            });
    }
}

renderOrders();