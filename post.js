const newMahasiswaData = {
    nim: '2002003004',
    nama: 'Erine',
    gender: 'P',
    prodi: 'TE',
    alamat: 'Jl.Raya'
};

fetch (`http://localhost:3000/mahasiswa`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMahasiswaData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
