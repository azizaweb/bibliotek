 function generateQRCode() {
      const container = document.getElementById('qrcode');
      container.innerHTML = ""; // очищаем старый QR-код
      const text = document.getElementById("text").value;

      if (text.trim() === "") {
        alert("Iltimos, matn yoki URL kiriting.");
        return;
      }

      new QRCode(container, {
        text: text,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    }
