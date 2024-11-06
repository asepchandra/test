let currentPhotoIndex = 0;
const totalPhotos = 12;
const photos = [
    'https://raw.githubusercontent.com/asepchandra/foto-niki/refs/heads/main/github2/IMG-20241106-WA0123.jpg',
    'https://raw.githubusercontent.com/asepchandra/foto-niki/refs/heads/main/github2/IMG-20241106-WA0124.jpg',
    'https://raw.githubusercontent.com/asepchandra/niki2/refs/heads/main/github2/IMG-20241106-WA0125.jpg',
    'https://raw.githubusercontent.com/asepchandra/foto-niki/refs/heads/main/github2/IMG-20241106-WA0126.jpg',
    'https://raw.githubusercontent.com/asepchandra/foto-niki/refs/heads/main/github2/IMG-20241106-WA0127.jpg',
    'https://raw.githubusercontent.com/asepchandra/foto-niki/refs/heads/main/github2/IMG-20241106-WA0128.jpg',
    'https://raw.githubusercontent.com/asepchandra/foto-niki/refs/heads/main/github2/IMG-20241106-WA0130.jpg',
    'https://raw.githubusercontent.com/asepchandra/foto-niki/refs/heads/main/github2/IMG-20241106-WA0129.jpg',
    'https://raw.githubusercontent.com/asepchandra/part-2/refs/heads/main/WhatsApp%20Image%202024-11-07%20at%2001.37.08_55be40a5.jpg',
    'https://raw.githubusercontent.com/asepchandra/foto-niki/refs/heads/main/github2/IMG-20241106-WA0133.jpg',
    'https://raw.githubusercontent.com/asepchandra/foto-niki/refs/heads/main/github2/IMG-20241106-WA0132.jpg',
    'https://raw.githubusercontent.com/asepchandra/foto-niki/refs/heads/main/github2/IMG-20241106-WA0134.jpg'
];

function changePhoto(direction) {
    currentPhotoIndex += direction;

    if (currentPhotoIndex < 0) {
        currentPhotoIndex = totalPhotos - 1; // Kembali ke foto terakhir
    } else if (currentPhotoIndex >= totalPhotos) {
        currentPhotoIndex = 0; // Kembali ke foto pertama
    }

    document.getElementById('photo').src = photos[currentPhotoIndex];
    document.getElementById('pageNum').innerText = (currentPhotoIndex + 1) + ' / ' + totalPhotos;
}

// Set foto awal
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('photo').src = photos[currentPhotoIndex];
    document.getElementById('pageNum').innerText = (currentPhotoIndex + 1) + ' / ' + totalPhotos;
});