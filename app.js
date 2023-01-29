let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let qrMsg = document.getElementById("qrMsg");

function generateQR(){
    if(qrText.value == ""){
        qrMsg.textContent = 'Kindly input Text or URL to get QR code'; 
        qrText.classList.add('error');
        setTimeout(()=> {
            qrText.classList.remove('error')
        }, 1000)     
    } else {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrMsg.textContent = "";
        imgBox.classList.add("show-img");
    }
}