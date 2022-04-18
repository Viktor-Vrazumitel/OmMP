import style from "./AudioStream.module.css";

function AudioStream() {
  let body,
    num,
    array,
    width,
    context,
    logo,
    myElements,
    analyser,
    src,
    height,
    stream,
    micStream,
    srcMic;

  num = 256;
  array = new Uint8Array(num * 2);
  width = 4.8;

  async function goStream() {
    if (context) return;
    body = document.querySelector("#newid");

    body.querySelector("#btn44").remove();

    for (let i = 0; i < num; i++) {
      logo = document.createElement("div");
      logo.className = "logo";
      logo.style.background = "#8212eb";
      logo.style.minWidth = width + "px";
      body.appendChild(logo);
    }

    myElements = document.getElementsByClassName("logo");
    context = new AudioContext();
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

    micStream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    });
    srcMic = context.createMediaStreamSource(micStream);
    srcMic.connect(analyser);

    stream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);

    src = context.createMediaStreamSource(stream);
    src.connect(analyser);
    loop();



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

  function offOnMic() {
    micStream.getTracks().find((track) => track.kind === "audio");
    if (micStream.enabled) {
      micStream.enabled = false;
      context.suspend();
    } else {
      micStream.enabled = true;
      context.resume();
    }
  }

  return (
    <div id="newid" className={style.musicBox}>
      <canvas id="canvas1"></canvas>
      <button className={style.musicBtn} onClick={() => goStream()} id="btn44">
        Начать трансляцию
      </button>
      <div onClick={() => offOnMic()} className={`material-icons ${style.mic}`}>
        mic
      </div>
    </div>
  );
}

export default AudioStream;
