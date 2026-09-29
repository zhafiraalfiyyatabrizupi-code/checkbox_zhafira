// bismillah lahaulla tugas terkendali no error
// Mengambil elemen input, daftar tugas, dan tombol
const inputTask = document.getElementById('inputTask');
const listContainer = document.getElementById('listContainer');
const tombol = document.getElementById('tombol');

// Mengambil elemen statistik tugas
const totalTask = document.getElementById('totalTask');
const completedTask = document.getElementById('completedTask');
const pendingTask = document.getElementById('pendingTask');

// FUNGSI MENAMBAHKAN TUGAS
tombol.onclick = function() {

// Validasi jika input kosong
    if (inputTask.value === '') {

        alert('Kamu belum memasukkan to do list!');

    } else {

// Membuat elemen li baru
    let li = document.createElement('li');

// Memasukkan teks tugas ke dalam li
    li.textContent = inputTask.value;

// Menambahkan li ke dalam daftar tugas
    listContainer.append(li);

// Membuat tombol hapus
    let span = document.createElement('span');

// Menampilkan simbol X
    span.textContent = '\u00d7';

// Menambahkan tombol hapus ke dalam li
    li.append(span);

// Mengosongkan input setelah tugas ditambahkan
    inputTask.value = '';
}

// Menyimpan perubahan ke localStorage
    saveData();

// Memperbarui statistik tugas
    updateStats();
};

// MENAMBAHKAN TUGAS DENGAN TOMBOL ENTER
inputTask.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        tombol.click();
    }
});

// EVENT PADA DAFTAR TUGAS
listContainer.addEventListener('click', function(e) {

// Jika yang diklik adalah tugas (LI)
    if (e.target.tagName === 'LI') {

// Menandai tugas selesai atau belum selesai
    e.target.classList.toggle('done');
}

// Jika yang diklik adalah tombol X (SPAN)
    else if (e.target.tagName === 'SPAN') {

// Menghapus tugas menggunakan remove()
    e.target.parentElement.remove();
}

// Menyimpan perubahan
    saveData();

// Memperbarui statistik
    updateStats();
});

// FUNGSI MENYIMPAN DATA
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// FUNGSI MENAMPILKAN DATA
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

// FUNGSI MEMPERBARUI STATISTIK
function updateStats() {

// Menghitung seluruh tugas
    let total = listContainer.children.length;

// Menghitung tugas yang sudah selesai
    let selesai = listContainer.querySelectorAll('.done').length;

// Menghitung tugas yang belum selesai
    let belumSelesai = total - selesai;

// Menampilkan hasil statistik
    totalTask.textContent = total;
    completedTask.textContent = selesai;
    pendingTask.textContent = belumSelesai;
}

// Menampilkan tugas yang tersimpan
showTask();

// Memperbarui statistik saat halaman dibuka
updateStats();