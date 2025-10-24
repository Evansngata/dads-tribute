const form = document.getElementById('tribute-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for sharing your tribute');
    form.reset();
});