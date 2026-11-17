// =================================
// Royal Dashboard
// Ratulia Delfira Purba - SI-3E
// =================================

// 1. Menu sidebar kalau diklik jadi ngeblok
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (!href || !href.startsWith('#')) {
            return;
        }

        const tujuan = document.querySelector(href);

        if (tujuan) {
            e.preventDefault();

            // Hapus blok biru dari semua menu
            document.querySelectorAll('.nav-link').forEach(l => {
                l.classList.remove('active');
            });

            // Kasih blok biru ke menu yang diklik
            this.classList.add('active');

            // Scroll ke bagian yang diklik
            tujuan.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Biar card tujuannya ikut ngeblok biru
            // Seolah nunjukin "inilah dokumennya"
            document.querySelectorAll('.card').forEach(c => {
                c.classList.remove('highlight');
            });
            tujuan.classList.add('highlight');
        }
    });
});

// 2. Tombol lihat dokumen
function lihatDokumen(nama) {
    alert(
        'Membuka ' + nama +
        '\n\nHalo Ratulia Delfira Purba SI-3E, dokumen ini berhasil dibuka!'
    );
}

// 3. Search
const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('input', function (e) {
        const kata = e.target.value.toLowerCase();

        document.querySelectorAll('.card, .welcome').forEach(el => {
            const isi = el.innerText.toLowerCase();

            if (isi.includes(kata)) {
                el.style.display = '';
            } else {
                el.style.display = 'none';
            }
        });
    });
}

console.log('Dashboard Ratulia Delfira Purba SI-3E berhasil dimuat');