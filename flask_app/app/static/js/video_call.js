
const openbulbbtn = document.querySelector('#open-bulb-modal');
const closebulbbtn = document.querySelector('#close-bulb-modal');

const closechoicebtn = document.querySelector('#close-choice-modal');

const openchartbtn = document.querySelector('#open-chart-modal');
const closechartbtn = document.querySelector('#close-chart-modal');

const openslidebarbtn = document.querySelector('#open-slidebar-modal');
const closeslidebarbtn = document.querySelector('#close-slidebar-modal');

const dialog_bulb = document.querySelector('#bulb');
const dialog_choice = document.querySelector('#choice');
const dialog_chart = document.querySelector('#chart');
const dialog_slidebar = document.querySelector('#slidebar');

openbulbbtn.addEventListener('click', () => dialog_bulb.showModal());
closebulbbtn.addEventListener('click', () => dialog_bulb.close());

closechoicebtn.addEventListener('click', () => dialog_choice.close());

openchartbtn.addEventListener('click', () => dialog_chart.showModal());
closechartbtn.addEventListener('click', () => dialog_chart.close());

openslidebarbtn.addEventListener('click', () => dialog_slidebar.showModal());
closeslidebarbtn.addEventListener('click', () => dialog_slidebar.close());

dialog_slidebar.addEventListener('click', (event) => {
    if (event.target === dialog_slidebar) {
      dialog_slidebar.close();
    }
  });

// Get all the choice buttons
const choices = document.querySelectorAll('.choices');

// Add an event listener to each choice button
choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    // Remove the class from all the buttons
    choices.forEach((otherChoice) => {
      otherChoice.classList.remove('green', 'red');
    });

    // Get the data-choice attribute value
    const choiceNumber = choice.getAttribute('data-choice');

    // Update the dialog content based on the selected choice
    if (choiceNumber === '1') {
      dialog_choice.querySelector('.h4').textContent = 'Your answer is incorrect';
      dialog_choice.querySelector('.des').textContent = 'Explanation: Fog computing containes servers and intelligence that allow data from sensors to be preprocessed and available for immediate use and sent into the cloud for more in-depth analysis';
    } else if (choiceNumber === '2') {
      dialog_choice.querySelector('.h4').textContent = 'Your answer is correct';
      dialog_choice.querySelector('.des').textContent = 'Explanation: Fog computing containes servers and intelligence that allow data from sensors to be preprocessed and available for immediate use and sent into the cloud for more in-depth analysis';
    } else if (choiceNumber === '3') {
      dialog_choice.querySelector('.h4').textContent = 'Your answer is incorrect';
      dialog_choice.querySelector('.des').textContent = 'Explanation: Fog computing containes servers and intelligence that allow data from sensors to be preprocessed and available for immediate use and sent into the cloud for more in-depth analysis';
    } else if (choiceNumber === '4') {
      dialog_choice.querySelector('.h4').textContent = 'Your answer is incorrect';
      dialog_choice.querySelector('.des').textContent = 'Explanation: Fog computing containes servers and intelligence that allow data from sensors to be preprocessed and available for immediate use and sent into the cloud for more in-depth analysis';
    }

    if (choiceNumber === '2') {
        choice.classList.add('green');
      } else {
        choice.classList.add('red');
      }
    
    // Show the dialog
    dialog_choice.showModal();
  });
});

//share-screen js
const shareScreenButton = document.querySelector('#sharescreen');

shareScreenButton.addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        mediaSource: 'screen'
      }
    });

    // Create a new video element to display the shared screen
    const video = document.getElementById("shared-screen-video");
    video.srcObject = stream;
    video.play();

    // Display the modal
    modal.style.display = "block";

    // Add a button to stop sharing the screen
    const stopSharingButton = document.createElement('button');
    stopSharingButton.textContent = 'Stop Sharing';
    stopSharingButton.addEventListener('click', () => {
      stream.getTracks().forEach(track => track.stop());
      video.srcObject = null;
      modal.style.display = "none";
      stopSharingButton.remove();
    });
    modal.querySelector(".modal-content").appendChild(stopSharingButton);
  } catch (error) {
    if (error.name === 'NotAllowedError') {
      alert('Screen sharing permission denied. Please allow screen sharing in your browser settings.');
    } else if (error.name === 'NotFoundError') {
      alert('No screen found. Please make sure you have a screen to share.');
    } else {
      console.error('Error sharing screen:', error);
      alert('An error occurred while sharing the screen. Please try again later.');
    }
  }
});

//chatbox js
const openchatbtn = document.querySelector('#open-chat-modal');
const closechatbtn = document.querySelector('#close-chat-modal');
const newText = document.querySelector('#newText');
const text = document.querySelector('#text');

const dialog_chat = document.querySelector('#chat');

openchatbtn.addEventListener('click', () => dialog_chat.showModal());
closechatbtn.addEventListener('click', () => dialog_chat.close());

function addText(){
    if(newText.value !== ""){
        text.value += text.value ? "\n" + newText.value :  newText.value;
        newText.value = ""
    }
}

//4button-1 and 4button-2
const microphoneIcon = document.getElementById('microphoneIcon');
const videoIcon = document.getElementById('videoIcon');

// Initialize variables to track the state of the microphone and video
let microphoneOn = false;
let videoOn = false;
let stream;

// Add event listeners to the buttons
microphoneIcon.addEventListener('click', async () => {
  // Toggle the microphone on and off
  microphoneOn = !microphoneOn;
  if (microphoneOn) {
    // Code to turn the microphone on
    console.log('Microphone turned on');
    microphoneIcon.innerHTML = '<i class="fa-solid fa-microphone-slash fa-3x"></i>';
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log('Microphone access granted');
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  } else {
    // Code to turn the microphone off
    console.log('Microphone turned off');
    microphoneIcon.innerHTML = '<i class="fa-solid fa-microphone fa-3x"></i>';
    if (stream) {
      stream.getAudioTracks().forEach(track => track.stop());
      stream = null;
    }
  }
});

videoIcon.addEventListener('click', async () => {
  // Toggle the video on and off
  videoOn = !videoOn;
  if (videoOn) {
    // Code to turn the video on
    console.log('Video turned on');
    videoIcon.innerHTML = '<i class="fa-solid fa-video-slash fa-3x"></i>';
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log('Video access granted');
      const video = document.getElementById('video');
      video.srcObject = stream;
      video.play();
    } catch (error) {
      console.error('Error accessing video:', error);
    }
  } else {
    // Code to turn the video off
    console.log('Video turned off');
    videoIcon.innerHTML = '<i class="fa-solid fa-video fa-3x"></i>';
    if (stream) {
      stream.getVideoTracks().forEach(track => track.stop());
      stream = null;
      const video = document.getElementById('video');
      video.srcObject = null;
      video.pause();
    }
  }
});

//4button-3
document.getElementById("colorToggleButton").addEventListener("click", function () {
    const currentColor = window.getComputedStyle(this).backgroundColor;
    if (currentColor === "rgb(242, 193, 78)") {
        this.style.backgroundColor = ""; // Reset to default
    } else {
        this.style.backgroundColor = "rgb(242, 193, 78)"; // Apply the custom color
    }
});


    window.location.href = ""; // Change this to your target page
}
