function generateMeme(img, topText, bottomText, topTextSize, bottomTextSize) {
  // Code here
  const canvas = document.getElementById('meme-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0); // 0, 0 are our X and Y coordinates
  // Text style: white with black borders
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.textAlign = 'center';
  let fontSize = canvas.width * topTextSize; //Font Size will change based on our input sliders
ctx.font = `${fontSize}px Impact`; // We'll be using Impact font, which is used by most memes
ctx.lineWidth = fontSize / 20; // lineWidth will be the outline of our text, and we're setting it to be 20th of our fontSize here.
// Draw top text
ctx.textBaseline = 'top'; // textBaseline property specifies the current text baseline used when drawing text.
topText.split('\n').forEach((t, i) => {
  ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width); // fillText takes 3 arguments: first is our text, second and third arguments are our X and Y coordinates of the point at which to begin drawing the text.
  ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width); // Arguments are same as fillText but strokeText draws outlines on our text.
});
// Bottom text font size
  fontSize = canvas.width * bottomTextSize;
  ctx.font = `${fontSize}px Impact`;
  ctx.lineWidth = fontSize / 20;

  // Draw bottom text
  ctx.textBaseline = 'bottom';
  bottomText.split('\n').reverse().forEach((t, i) => { // .reverse() because it's drawing the bottom text from the bottom up
    ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
  });
} // End of our generateMeme() function

window.addEventListener('DOMContentLoaded', () => {
  //Code here
  const topTextInput = document.getElementById('top-text');
const bottomTextInput = document.getElementById('bottom-text');
const topTextSizeInput = document.getElementById('top-text-size-input');
const bottomTextSizeInput = document.getElementById('bottom-text-size-input');
const imageInput = document.getElementById('image-input');
const generateBtn = document.getElementById('generate-btn');

topTextInput.value = 'Top\nValue';
bottomTextInput.value = 'Bottom\nValue';

generateBtn.addEventListener('click', () => {
  // Code here
  const reader = new FileReader();
reader.readAsDataURL(imageInput.files[0])
reader.onload = () => {
  const img = new Image();
  img.src = reader.result;
  img.onload = () => {
    generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);
  };
};

});
});