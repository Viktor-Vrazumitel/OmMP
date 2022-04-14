import style from "./AudioStream.module.css";

function AudioStream() {
  let body, num, array, width, context, logo, myElements, analyser, src, height;

  num = 256;
  array = new Uint8Array(num * 2);
  width = 4.8;

  function goStream() {
    if (context) return
    body = document.querySelector("#newid");

    body.querySelector("#btn44").remove(); // 

    for (let i = 0; i < num; i++) {
      logo = document.createElement("div");
      logo.className = "logo";
      logo.style.background = "#8212eb";
      logo.style.minWidth = width + "px";
      body.appendChild(logo);
    }

    myElements = document.getElementsByClassName("logo");
    context = new AudioContext();//
    analyser = context.createAnalyser();

    let displayMediaOptions = {
      video: {
        cursor: "always",
      },
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100,
      },
    };

    navigator.mediaDevices
      .getDisplayMedia(displayMediaOptions)
      .then((stream) => {
        // console.log(stream, stream.getAudioTracks());
        src = context.createMediaStreamSource(stream);
        console.log(stream);
        src.connect(analyser);
        loop();
      })
      .catch((error) => {
        alert(error + "\r\n Отклонено. Страница будет не обновлена!");
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

  }
//
  return (
    <div id="newid" className={style.musicBox}>
      <canvas id="canvas1"></canvas>
      <button className={style.musicBtn} onClick={() => goStream()} id="btn44">
        Начать трансляцию
      </button>
    </div>
  );
}

export default AudioStream;
