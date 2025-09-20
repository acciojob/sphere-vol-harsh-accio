function volume_sphere(event) {
    event.preventDefault(); // stop form from refreshing

    const radius = document.querySelector('#radius').value;
    let volume = (4/3) * Math.PI * (radius ** 3);

    volume = volume.toFixed(4);
    document.querySelector('#volume').value = volume;
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};