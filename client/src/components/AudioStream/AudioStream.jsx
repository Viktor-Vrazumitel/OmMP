import style from './AudioStream.module.css'



function AudioStream() {

  let body, num, array, width, context, logo, myElements, analyser, src, height;

body = document.querySelector("#mBox");

num = 32;

array = new Uint8Array(num * 2);

width = 10;

window.onclick = function () {
  if (context) return;

  body.querySelector("#click123").remove();

  for (let i = 0; i < num; i++) {
    logo = document.createElement("div");
    logo.className = "logo";
    logo.style.background = "red";
    logo.style.minWidth = width + "px";
    body.appendChild(logo);
  }

  myElements = document.getElementsByClassName("logo");
  context = new AudioContext();
  analyser = context.createAnalyser();


  let displayMediaOptions = {
  video: {
    cursor: "always"
  },
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    sampleRate: 44100
  }
};

navigator.mediaDevices
.getDisplayMedia(displayMediaOptions)
.then((stream) => {
  console.log(stream, stream.getAudioTracks());
  src = context.createMediaStreamSource(stream);
  src.connect(analyser);
  loop();
})
.catch((error) => {
  alert(error + "\r\n Отклонено. Страница будет обновлена!");
  // location.reload();
});
function loop() {
  window.requestAnimationFrame(loop);
  analyser.getByteFrequencyData(array);
  for (let i = 0; i < num; i++) {
    height = array[i + num];
    myElements[i].style.minHeight = height + "px";
    myElements[i].style.opacity = 0.008 * height;
  }
}
};



return ( 
    <div id='mBox' className={style.musicBox}>

      <h1 id='click123'>Click</h1>
    </div>
   );
}

export default AudioStream;
