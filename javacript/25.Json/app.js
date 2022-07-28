let texto="Hola jeferson Guillen como estas";
const hablar=(texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto);