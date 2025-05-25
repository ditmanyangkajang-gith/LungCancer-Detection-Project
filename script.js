// script.js

document.addEventListener('DOMContentLoaded', () => {
    const imageUpload = document.getElementById('imageUpload');
    const previewImage = document.getElementById('previewImage');
    const detectButton = document.getElementById('detectButton');
    const resultText = document.getElementById('resultText');
    const resultImage = document.getElementById('resultImage');

    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImage.src = e.target.result;
                previewImage.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            previewImage.src = '#';
            previewImage.style.display = 'none';
        }
    });

    detectButton.addEventListener('click', () => {
        const file = imageUpload.files[0];
        if (!file) {
            resultText.textContent = 'Please upload an image.';
            return;
        }

        resultText.textContent = 'Detecting...';
        // Simulate a detection process (replace with your actual detection logic)
        setTimeout(() => {

            const isCancer = Math.random() > 0.5; // Simulate cancer detection.
            if (isCancer) {
                resultText.textContent = 'Possible Lung Cancer Detected.';
                resultText.style.color = "red";
                resultImage.src = "cancer_image.png"; //place holder for a cancer image.
                resultImage.style.display = "block";
            } else {
                resultText.textContent = 'No Lung Cancer Detected.';
                resultText.style.color = "green";
                resultImage.src = "no_cancer_image.png"; //placeholder for a no cancer image.
                resultImage.style.display = "block";
            }
        }, 2000); // Simulate 2-second detection time
    });
});