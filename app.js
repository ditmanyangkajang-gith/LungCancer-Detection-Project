// script.js

document.addEventListener('DOMContentLoaded', () => {
  // ... (previous code) ...

  detectButton.addEventListener('click', () => {
      const file = imageUpload.files[0];
      if (!file) {
          resultText.textContent = 'Please upload an image.';
          return;
      }

      resultText.textContent = 'Detecting...';

      const formData = new FormData();
      formData.append('image', file);

      fetch('/detect', { // Make sure the backend is running on the same host or adjust the URL
          method: 'POST',
          body: formData,
      })
      .then(response => response.json())
      .then(data => {
          if (data.error) {
              resultText.textContent = `Error: ${data.error}`;
              resultText.style.color = "red";
              resultImage.style.display = 'none';
          } else {
              resultText.textContent = `${data.result}. Probability: ${data.cancer_probability}`;
              if(data.result.includes("Cancer")){
                  resultText.style.color = "red";
                  resultImage.src = "cancer_image.png";
              } else {
                  resultText.style.color = "green";
                  resultImage.src = "no_cancer_image.png";
              }
              resultImage.style.display = 'block';
          }
      })
      .catch(error => {
          resultText.textContent = `Network error: ${error}`;
          resultText.style.color = "red";
          resultImage.style.display = 'none';
      });
  });
});