const textArray = ['Hi!','Hello!','Namaste!', 'నమస్కారం!', 'வணக்கம்!','ನಮಸ್ಕಾರ!'];
const dynamicTextElement = document.getElementById('hello');
const cursorElement = document.getElementById('typedText');

let currentIndex = 0;
let currentCharIndex = 0;

function typeText() {
    dynamicTextElement.textContent = textArray[currentIndex].slice(0, currentCharIndex);
    currentCharIndex++;
    if (currentCharIndex <= textArray[currentIndex].length) {
        setTimeout(typeText, 100); // Typing speed (adjust as needed)
    } else {
        currentIndex = (currentIndex + 1) % textArray.length;
        currentCharIndex = 0;
        setTimeout(typeText, 2000); // Delay before typing next string
    }
}

setTimeout(typeText, 1000); // Initial delay before typing starts


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var iconBtn = document.getElementById("icon-button1"); // For icon button which is fixed at bottom

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
iconBtn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function sendEmail(){
  Email.send({
    SecureToken: "b005cf8b-839f-40c6-a3de-18ca101b48f5",
  
    To : '19kb1a0483@nbkrist.org',
    From : document.getElementById("email-con").value,
    Subject : "New message from Portfolio",
    Body : "Name: " + document.getElementById("name-con").value + "<br> Email: " + document.getElementById("email-con").value + "<br> Ph No.: " + document.getElementById("phone-con").value + "<br> Message: " + document.getElementById("message").value 
  }).then(
    message => alert("Message Sent Successfully!")
  );
}
