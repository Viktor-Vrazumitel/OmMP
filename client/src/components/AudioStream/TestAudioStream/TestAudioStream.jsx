const container = document.getElementById("container");
const canvas = document.getElementById("canvas1"); // холст отрисовки (по умолчанию типа 150х150)
const file = document.getElementById("fileupload");

canvas.width = window.innerWidth; // тут и на 9 мы делаем холст за весь экран
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d"); // движок отрисовки (есть и др)
let audioSource;
let analyser;
let audioContext;
let captureStream;
async function startCapture() {
  const displayMediaOptions = {
    video: {
      cursor: "always",
    },
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      sampleRate: 44100,
    },
  };
  audioContext = new AudioContext();
//   console.log(audioContext);
  // if (audioContext) return;
  captureStream = await navigator.mediaDevices.getDisplayMedia(
    displayMediaOptions
  );

  console.log(captureStream.getAudioTracks());

  analyser = audioContext.createAnalyser();
  try {
    audioSource = audioContext.createMediaStreamSource(captureStream);
  } catch (error) {
    console.log(error.message);
  }
  await audioSource.connect(analyser);
  analyser.connect(audioContext.destination); // узел вывода звука на устройство по умолчанию
  analyser.fftSize = 2048; // кол-во сэмплов (и столбиков) (32, 64, 128, 256 и тд)
  const bufferLength = analyser.frequencyBinCount; // всегда равно половине fftSize, ИЛИ просто к-во полосок в эффекте
  const dataArray = new Uint8Array(bufferLength); // конвертим данные из буфера в нужный формат и сэйвим

  const barWidth = canvas.width / 2.5 / bufferLength; // ширина полосы в визуализаторе
  let barHeight; // высота переменной, тк всегда меняется
  let x;

  function animate() {
    // запускаем цикл анимации (тут вся отрисовка)
    x = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // очищаем экран от старой анимации (00-корды начала и корды конца)
    analyser.getByteFrequencyData(dataArray); // передаем данные о частоте (0-255) в зависимости от этого меняется высота столбика анимации
    drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray);
    requestAnimationFrame(animate);
  }
  animate();
}

file.addEventListener("click", startCapture);

function drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray) {
  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 2.5; // приравниваю высоту столбика 8bit числу из arr (+1 сделает статик круг)
    ctx.save(); // точка сохранения
    ctx.translate(canvas.width / 2, canvas.height / 2); // точка вращения(?)
    ctx.rotate((i * Math.PI * 2.2) / bufferLength); // тут мы вращаем (чем больше, тем сильнее заворот)

    // // =======Один вид покраса===================

    const red = i + barHeight / 35;
    const green = barHeight / (i - 25);
    const blue = barHeight + 50;
    ctx.fillRect(0, 0, barWidth, 20); // типа корды центра, можем сделать дыру в середине
    ctx.fillStyle = "rgb(" + red + ", " + green + ", " + blue + ")";
    ctx.fillRect(0, 0, barWidth, barHeight); // высота и ширина звуковой панели
    x += barWidth; // позволяет расположить столбцы рядом
    ctx.restore(); // обновляем холст
  }
}