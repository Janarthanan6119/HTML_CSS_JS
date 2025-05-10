let generatedOTP = "";
let generatedCaptcha = "";

function generateOTP() {
  generatedOTP = Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit OTP
  document.getElementById("otpDisplay").textContent = `Your OTP: ${generatedOTP}`;
  document.getElementById("result").textContent = "";
  generateCaptcha();
}

function generateCaptcha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  generatedCaptcha = "";
  for (let i = 0; i < 6; i++) {
    generatedCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("captchaText").textContent = generatedCaptcha;
}

function verifyOTP() {
  const userOTP = document.getElementById("userInput").value;
  const userCaptcha = document.getElementById("captchaInput").value;

  if (userCaptcha !== generatedCaptcha) {
    document.getElementById("result").textContent = "❌ Incorrect CAPTCHA.";
    document.getElementById("result").style.color = "red";
    return;
  }

  if (userOTP === generatedOTP) {
    document.getElementById("result").textContent = "✅ OTP Verification Done!";
    document.getElementById("result").style.color = "green";
    document.getElementById("userInput").value = "";
    document.getElementById("captchaInput").value = "";
  } else {
    document.getElementById("result").textContent = "❌ Incorrect OTP. Try Again.";
    document.getElementById("result").style.color = "red";
  }
}
