const mahasiswaNim = '2002001003';
const updateData = {
    nama: 'Haerin',
    gender: 'P',
    prodi: 'SI',
    alamat: 'Gombong'
};

fetch (`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));