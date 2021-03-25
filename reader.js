
const voice = speechSynthesis.getVoices().filter((voice) => voice.lang.includes("pt-BR"))[0];

function play(){
    const frase = document.getElementById('read').innerText;
    const utterance = new SpeechSynthesisUtterance(frase);
    utterance.voice = voice;
    speechSynthesis.speak(utterance);
}

function stop(){
    speechSynthesis.stop(utterance);
}