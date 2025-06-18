// Ambil data produk dari database (API)
function renderProducts() {
    fetch('api/produk-list.php')
        .then(res => res.json())
        .then(products => {
            const tbody = document.getElementById("productTableBody");
            tbody.innerHTML = "";
            products.forEach(prod => {
                tbody.innerHTML += `
          <tr>
            <td class="border px-4 py-2">${prod.nama}</td>
            <td class="border px-4 py-2">Rp ${parseInt(prod.harga).toLocaleString()}</td>
            <td class="border px-4 py-2 flex gap-2">
              <button onclick="editProduct(${prod.id}, '${prod.nama}', ${prod.harga})" class="bg-yellow-500 hover:bg-yellow-600 text-white px-2 rounded">Edit</button>
              <button onclick="deleteProduct(${prod.id})" class="bg-red-600 hover:bg-red-700 text-white px-2 rounded">Hapus</button>
            </td>
          </tr>
        `;
            });
        });
}

// Tambah produk
document.getElementById("addProductForm").onsubmit = function(e) {
    e.preventDefault();
    const nama = document.getElementById("productName").value.trim();
    const harga = document.getElementById("productPrice").value.trim();
    if (nama && harga && !isNaN(harga)) {
        fetch('api/produk-add.php', {
                method: "POST",
                body: new URLSearchParams({ nama, harga })
            }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    renderProducts();
                    this.reset();
                } else {
                    alert("Gagal tambah produk!");
                }
            });
    }
};

// Hapus produk
window.deleteProduct = function(id) {
    if (confirm("Yakin ingin menghapus produk?")) {
        fetch('api/produk-delete.php', {
                method: "POST",
                body: new URLSearchParams({ id })
            }).then(res => res.json())
            .then(data => {
                if (data.success) renderProducts();
                else alert("Gagal hapus produk!");
            });
    }
}

// Edit produk
window.editProduct = function(id, namaLama, hargaLama) {
    const nama = prompt("Edit Nama Produk:", namaLama);
    if (nama === null) return;
    const harga = prompt("Edit Harga Produk:", hargaLama);
    if (harga === null) return;
    if (nama.trim() && !isNaN(parseInt(harga))) {
        fetch('api/produk-edit.php', {
                method: "POST",
                body: new URLSearchParams({ id, nama, harga })
            }).then(res => res.json())
            .then(data => {
                if (data.success) renderProducts();
                else alert("Gagal edit produk!");
            });
    }
}

renderProducts();