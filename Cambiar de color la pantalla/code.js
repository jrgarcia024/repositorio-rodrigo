onEvent("Button1", "click", function( ) {
  timedLoop(100, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255),0.5));
  });
});
onEvent("music", "click", function( ) {
  playSound("assets/Mi-Burrito-Sabanero--Juana--Mundo-Canticuentos.mp3", false);
});
onEvent("text_input1", "input", function( ) {
  setProperty("screen1", "image", "https://i.pinimg.com/736x/1a/4c/1b/1a4c1bd764983269a0699a9a9c211fb5.jpg");
});
