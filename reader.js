
const voice = speechSynthesis.getVoices().filter((voice)=>voice.lang.includes('pt-br'))[0];
console.log(speechSynthesis.getVoices().filter((voice)=>voice.lang.includes('pt-br'))[1]);


function play(){
    const text = document.getElementById('read').innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    console.log(voice);
    speechSynthesis.speak(utterance);
}