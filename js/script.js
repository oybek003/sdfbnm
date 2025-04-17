document.getElementById('generateBtn')
addEventListener('click', function () {
    const text = document.getElementById('text').value.trim();
    const qrColor = document.getElementById('qrColor').value;
    const bgColor = document.getElementById('bgColor').value;
  
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = "";
  
    new QRCode(qrContainer, {
      text: text,
      width: 200,
      height: 200,
      colorDark: qrColor,
      colorLight: bgColor,
      correctLevel: QRCode.CorrectLevel.H
    });
  });
  