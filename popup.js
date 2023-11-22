document.addEventListener('DOMContentLoaded', function() {
    var copyButton = document.getElementById('copyButton');
    copyButton.addEventListener('click', function() {
      var userInput = document.getElementById('textInput').value;
      if (userInput) {
        copyToClipboard(userInput);
        console.log('Text copied to clipboard: ' + userInput);
      } else {
        console.error('Please enter some text before copying.');
      }
    });
  });
  
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Unable to copy text to clipboard', err);
    }
  }
  