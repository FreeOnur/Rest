function incrementNumber() {
    const number = parseInt(document.getElementById('incrementNumber').value);

    fetch('https://localhost:7058/numbers/increment', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(number)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('incrementResult').textContent = `Erhöhte Zahl: ${data}`;
        })
        .catch(error => {
            console.error('Fehler beim Increment:', error);
        });
}

function calculateSum() {
    const zahlA = parseInt(document.getElementById('zahlA').value);
    const zahlB = parseInt(document.getElementById('zahlB').value);

    const sumData = {
        ZahlA: zahlA,
        ZahlB: zahlB
    };

    fetch('https://localhost:7058/numbers/Sum', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sumData)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('sumResult').textContent = `Summe: ${data}`;
        })
        .catch(error => {
            console.error('Fehler beim Berechnen der Summe:', error);
        });
}