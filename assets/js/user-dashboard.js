// Dummy data transaksi user (nanti bisa fetch dari backend/API)
const histories = [
    { date: "2025-06-15", product: "Valorant Points 420", amount: 1, status: "Sukses" },
    { date: "2025-06-10", product: "Valorant Points 125", amount: 2, status: "Sukses" },
    { date: "2025-05-29", product: "Valorant Points 600", amount: 1, status: "Pending" }
];

// Render history ke tabel
function renderHistory() {
    const tbody = document.getElementById("historyTableBody");
    tbody.innerHTML = "";
    histories.forEach(h => {
        tbody.innerHTML += `
      <tr>
        <td class="border px-4 py-2">${h.date}</td>
        <td class="border px-4 py-2">${h.product}</td>
        <td class="border px-4 py-2">${h.amount}</td>
        <td class="border px-4 py-2">
          <span class="${h.status === 'Sukses' ? 'text-green-600' : 'text-yellow-600'}">${h.status}</span>
        </td>
      </tr>
    `;
    });
}

renderHistory();