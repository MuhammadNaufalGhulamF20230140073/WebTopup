const hp = document.getElementById('hp').value.trim();
const password = document.getElementById('password').value.trim();

fetch('api/register.php', {
        method: 'POST',
        body: new URLSearchParams({
            hp, // <-- harus 'hp'
            password // <-- harus 'password'
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert('Register berhasil!');
            window.location.href = "login.html";
        } else {
            alert(data.message || "Gagal register!");
        }
    });