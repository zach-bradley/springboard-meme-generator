const form = document.querySelector('#memeForm');
const image = document.querySelector('#image');
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');
const container = document.querySelector('#memeContainer');
const list = document.querySelector('#memeList');

const handleSubmit = function(e) {
  e.preventDefault();
  let imageUrl = image.value || "https://i.imgflip.com/4t0m5.jpg";
  let top = topText.value || "Wow";
  let bottom = bottomText.value || "Such empty";
  let template = `
    <div class="meme"> 
      <div class="delete">Delete?</div>
      <img src="${imageUrl}" alt="meme picture">
      <p class="top">${top}</p>
      <p class="bottom">${bottom}</p>
    </div>
  `
  list.insertAdjacentHTML('beforeend', template);
}
form.addEventListener('submit', handleSubmit);
container.addEventListener('click', function(e){
  if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
})

