/* Your JS here. */
const header = document.getElementById("header-main");
const max = 60;

function scroll() {
  let scroll = window.ScrollY || document.documentElement.scrollTop;
  let newHeight = max - Math.min(20, scroll/5);

  document.documentElement.style.cssText = `--header-height: ${newHeight}px;
                                             --header-font: ${newHeight/1.7}px;`;
}


const carousel = document.getElementById("image-c");
function rightNav() {
  carousel.scrollLeft += carousel.offsetWidth;
  console.log("Pressed Right");
}

function leftNav() {
  carousel.scrollLeft -= carousel.offsetWidth;
  console.log("Pressed Left");
}


window.addEventListener('scroll', scroll);

const leftButton = document.getElementById("left-nav");
const rightButton = document.getElementById("right-nav");

leftButton.addEventListener('click', leftNav);
rightButton.addEventListener('click', rightNav);

const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openModal.addEventListener('click', () => {
    modal.showModal(); // Opens the dialog as a modal
});

closeModal.addEventListener('click', () => {
    modal.close(); // Closes the dialog
});
