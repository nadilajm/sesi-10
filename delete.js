const mahasiswaNim = '2002003003';

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
