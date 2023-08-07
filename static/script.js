document.getElementById('sentimentForm').onsubmit = function(event) {
    event.preventDefault();
    const textInput = document.getElementById('textInput').value;
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `text=${encodeURIComponent(textInput)}`
    })
    .then(response => response.json())
    .then(data => {
        const predictionDiv = document.getElementById('prediction');
        predictionDiv.innerHTML = data.prediction === 1 ? 'Its a Spam' : 'Not a Spam message';

        // Change UI color based on the prediction result
        const chatContainer = document.getElementById('chatContainer');
        chatContainer.style.border = data.prediction === 1 ? '20px solid #f44336' : '2px solid #4caf50';
    })
    .catch(error => console.error('Error:', error));
};
