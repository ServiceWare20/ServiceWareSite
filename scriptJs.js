const form = document.getElementById('emailForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch('/send-email', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        alert('Email sent successfully');
        form.reset();
    } else {
        alert('Error sending email');
    }
});