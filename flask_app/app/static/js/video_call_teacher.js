

const closechoicebtn = document.querySelector('#close-choice-modal');

const openchartbtn = document.querySelector('#open-chart-modal');
const closechartbtn = document.querySelector('#close-chart-modal');

const openslidebarbtn = document.querySelector('#open-slidebar-modal');
const closeslidebarbtn = document.querySelector('#close-slidebar-modal');

const openquizbtn = document.querySelector('#open-quiz-modal');
const closequizbtn = document.querySelector('#close-quiz-modal');

const openpollbtn = document.querySelector('#open-poll-modal');
const closepollbtn = document.querySelector('#close-poll-modal');

const openrespondbtn = document.querySelector('.open-respond-modal');
const closerespondbtn = document.querySelector('#close-respond-modal');

const opencanvasbtn = document.querySelector('#open-canvas-modal');
const closecanvasbtn = document.querySelector('#close-canvas-modal');

const openattendancebtn = document.querySelector('#open-attendance-modal');
const closeattendancebtn = document.querySelector('#close-attendance-modal');

const openbreakoutbtn = document.querySelector('#open-breakout-modal');
const closebreakoutbtn = document.querySelector('#close-breakout-modal');

const opengeneratebtn = document.querySelector('#open-generate-modal');
const closegeneratebtn = document.querySelector('#close-generate-modal');

const openapplybtn = document.querySelector('#open-apply-modal');
const closeapplybtn = document.querySelector('#close-apply-modal');

const openassignautobtn = document.querySelector('#open-assign-auto-modal');
const closeassignautobtn = document.querySelector('#close-assign-auto-modal');

const openassignmanualbtn = document.querySelector('#open-assign-manual-modal');
const closeassignmanualbtn = document.querySelector('#close-assign-manual-modal');

const opentickbtn = document.querySelector('#open-tick-modal');
const closetickbtn = document.querySelector('#close-tick-modal');

const dialog_choice = document.querySelector('#choice');
const dialog_chart = document.querySelector('#chart');
const dialog_quiz = document.querySelector('#popquiz');
const dialog_slidebar = document.querySelector('#slidebar');
const dialog_poll = document.querySelector('#poll');
const dialog_respond = document.querySelector('#respond');
const dialog_canvas = document.querySelector('#canvas');
const dialog_attendance = document.querySelector('#attendance');
const dialog_breakout = document.querySelector('#breakout');
const dialog_generate = document.querySelector('#generate');
const dialog_apply = document.querySelector('#apply');
const dialog_assignauto = document.querySelector('#assign-auto');
const dialog_assignmanual = document.querySelector('#assign-manual');
const dialog_tick = document.querySelector('#tick');

closechoicebtn.addEventListener('click', () => dialog_choice.close());

openchartbtn.addEventListener('click', () => dialog_chart.showModal());
closechartbtn.addEventListener('click', () => dialog_chart.close());

openslidebarbtn.addEventListener('click', () => dialog_slidebar.showModal());
closeslidebarbtn.addEventListener('click', () => dialog_slidebar.close());

openquizbtn.addEventListener('click', () => dialog_quiz.showModal());
closequizbtn.addEventListener('click', () => dialog_quiz.close());

openpollbtn.addEventListener('click', () => dialog_poll.showModal());
closepollbtn.addEventListener('click', () => dialog_poll.close());

openrespondbtn.addEventListener('click', () => dialog_respond.showModal());
closerespondbtn.addEventListener('click', () => dialog_respond.close());

opencanvasbtn.addEventListener('click', () => dialog_canvas.showModal());
closecanvasbtn.addEventListener('click', () => dialog_canvas.close());

openattendancebtn.addEventListener('click', () => dialog_attendance.showModal());
closeattendancebtn.addEventListener('click', () => dialog_attendance.close());

openbreakoutbtn.addEventListener('click', () => dialog_breakout.showModal());
closebreakoutbtn.addEventListener('click', () => dialog_breakout.close());

openapplybtn.addEventListener('click', () => dialog_apply.showModal());
closeapplybtn.addEventListener('click', () => dialog_apply.close());

// Open generate modal
document.querySelectorAll('.generate-btn').forEach(button => {
  button.addEventListener('click', () => {
      dialog_generate.showModal();
  });
});
closegeneratebtn.addEventListener('click', () => dialog_generate.close())

document.querySelectorAll('.open-assign-auto-modal').forEach(button => {
  button.addEventListener('click', () => {
    dialog_assignauto.showModal();
  });
});
closeassignautobtn.addEventListener('click', () => dialog_assignauto.close());

openassignmanualbtn.addEventListener('click', () => dialog_assignmanual.showModal());
closeassignmanualbtn.addEventListener('click', () => dialog_assignmanual.close());

document.querySelectorAll('.open-tick-modal').forEach(button => {
  button.addEventListener('click', () => {
      dialog_tick.showModal();
  });
});
closetickbtn.addEventListener('click', () => dialog_tick.close());

//poll
let options = document.querySelectorAll("label");
for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", () => {
    //removing active class from all items before adding active
    //class to clicked item
    for (let k = 0; k < options.length; k++) {
      options[k].classList.remove("active");
    }
    //adding active class to clicked item
    options[i].classList.add("active");
    for (let j = 0; j < options.length; j++) {
      options[j].classList.add("activeAll");
    }
  });
}

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

//canvas
const canvas = document.querySelector("canvas"),
    toolBtns = document.querySelectorAll(".tool"),
    fillColor = document.querySelector("#fill-color"), // Corrected ID
    sizeSlider = document.querySelector("#size-slider"),
    colorBtns = document.querySelectorAll(".colors .option"), // Corrected selector
    colorPicker = document.querySelector("#color-picker"),
    clearCanvas = document.querySelector(".clear-canvas"),
    saveImg = document.querySelector(".save-img"),
    ctx = canvas.getContext("2d");

let prevMouseX, prevMouseY, snapshot,
    isDrawing = false,
    selectedTool = "brush",
    brushWidth = 5,
    selectedColor = "#000";

// Set canvas background
const setCanvasBackground = () => {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

// Initialize canvas size and background
window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth; // Set width based on the canvas element's width
    canvas.height = canvas.offsetHeight; // Set height based on the canvas element's height
    setCanvasBackground();
});

// Draw rectangle
const drawRect = (e) => {
    if (fillColor.checked) {
        ctx.fillRect(prevMouseX, prevMouseY, e.offsetX - prevMouseX, e.offsetY - prevMouseY);
    } else {
        ctx.strokeRect(prevMouseX, prevMouseY, e.offsetX - prevMouseX, e.offsetY - prevMouseY);
    }
};

// Draw circle
const drawCircle = (e) => {
    ctx.beginPath();
    let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2));
    ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
    fillColor.checked ? ctx.fill() : ctx.stroke();
};

// Draw triangle
const drawTriangle = (e) => {
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
    ctx.closePath();
    fillColor.checked ? ctx.fill() : ctx.stroke();
};

// Start drawing
const startDraw = (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX;
    prevMouseY = e.offsetY;
    ctx.beginPath();
    ctx.lineWidth = brushWidth; // Corrected variable name
    ctx.strokeStyle = selectedColor;
    ctx.fillStyle = selectedColor;
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
};

// Drawing logic
const drawing = (e) => {
    if (!isDrawing) return; // Corrected condition
    ctx.putImageData(snapshot, 0, 0);
    ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
    ctx.lineWidth = brushWidth; // Ensure brush width is set
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    if (selectedTool === "rectangle") {
        drawRect(e);
    } else if (selectedTool === "circle") {
        drawCircle(e);
    } else if (selectedTool === "triangle") {
        drawTriangle(e);
    }
};

// Tool button event listeners
toolBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".options .active").classList.remove("active");
        btn.classList.add("active");
        selectedTool = btn.id;
    });
});

// Size slider event listener
sizeSlider.addEventListener("change", () => {
    brushWidth = sizeSlider.value; // Update brush width based on slider value
});

// Color picker event listener
colorPicker.addEventListener("change", () => {
    selectedColor = colorPicker.value; // Update selected color based on color picker
});

// Clear canvas button event listener
clearCanvas.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCanvasBackground(); // Reset background
});

// Save image button event listener
saveImg.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "canvas-image.png";
    link.href = canvas.toDataURL();
    link.click();
});

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => {
    isDrawing = false; // Stop drawing when the mouse is released
});
canvas.addEventListener("mouseleave", () => {
    isDrawing = false; // Stop drawing if the mouse leaves the canvas
});

// Set initial background when the canvas is loaded
setCanvasBackground();

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

//4button-4


document.getElementById("open-recording-modal").addEventListener("click", function () {
  const currentColor = window.getComputedStyle(this).backgroundColor;
  if (currentColor === "rgb(242, 193, 78)") {
      this.style.backgroundColor = ""; // Reset to default
  } else {
      this.style.backgroundColor = "rgb(242, 193, 78)"; // Apply the custom color
  }
});
