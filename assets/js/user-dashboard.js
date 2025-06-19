// Ambil produk dari API, render, dsb.
// Handler klik "Pesan Sekarang!" juga di sini.

const selectedInfo = document.getElementById("selected-info");
const orderBtn = document.getElementById("order-btn");
let selectedNominal = null;

fetch("api/produk-list.php")
    .then(res => res.json())
    .then(products => {
        const container = document.getElementById("nominal-options");
        container.innerHTML = "";
        products.forEach(prod => {
            const item = document.createElement("div");
            item.setAttribute("tabindex", "0");
            item.className = "nominal-item bg-[#1e367f] rounded-lg py-4 px-5 flex flex-col space-y-1 select-none ring-2 ring-transparent focus:ring-blue-500";
            item.innerHTML = `
        <span class="font-semibold text-white">${prod.nama}</span>
        <span class="text-blue-400 font-semibold text-lg">Rp ${parseInt(prod.harga).toLocaleString()}</span>
        <div class="flex justify-end mt-auto">
          <span class="bg-white text-blue-600 text-xs px-2 py-0.5 rounded-md font-semibold select-none">Pengiriman INSTANT</span>
        </div>
      `;
            item.addEventListener("click", () => {
                document.querySelectorAll(".nominal-item").forEach(i => {
                    i.classList.remove("ring-4", "ring-blue-400", "bg-blue-700");
                });
                item.classList.add("ring-4", "ring-blue-400", "bg-blue-700");
                selectedNominal = { id: prod.id, points: prod.nama, price: prod.harga };
                selectedInfo.textContent = `Produk dipilih: ${prod.nama} - Rp ${parseInt(prod.harga).toLocaleString()}`;
                orderBtn.disabled = false;
            });
            container.appendChild(item);
        });
    });

// Handler tombol pesan
orderBtn.addEventListener("click", function() {
    const riotId = document.getElementById("riot-id").value.trim();
    if (!riotId) {
        alert("Masukkan Riot ID terlebih dahulu!");
        return;
    }
    if (!selectedNominal) {
        alert("Pilih nominal top up terlebih dahulu!");
        return;
    }
    fetch("api/order-add.php", {
            method: "POST",
            body: new URLSearchParams({
                riot_id: riotId,
                produk_id: selectedNominal.id
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                alert("Pesanan berhasil dibuat!");
                // Reset form/selected
                document.getElementById("riot-id").value = "";
                selectedInfo.textContent = "Belum ada item produk yang dipilih.";
                orderBtn.disabled = true;
                document.querySelectorAll(".nominal-item").forEach(i => {
                    i.classList.remove("ring-4", "ring-blue-400", "bg-blue-700");
                });
            } else {
                alert("Pesanan gagal, coba lagi.");
            }
        })
        .catch(() => alert("Gagal menghubungi server!"));
});