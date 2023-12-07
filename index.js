const featuredContainer = document.getElementById('founders-container');
const featuredNavList = document.getElementsByClassName('founder-nav');
const featuredImages = featuredContainer.querySelectorAll('.founder');
const dotArray = Array.from(featuredNavList);
const arrowR = document.getElementById('arrow-R');
const arrowL = document.getElementById('arrow-L');

let featuredIndex = 0;

featuredImages[featuredIndex].classList.add('active');
dotArray[featuredIndex].classList.add('active');


//if mouse is not on the featured section, then continue the interval

function showNextImage() {
  featuredImages[featuredIndex].classList.remove('active');
  dotArray[featuredIndex].classList.remove('active');
  featuredIndex++;
  featuredIndex %= featuredImages.length;
  dotArray[featuredIndex].classList.add('active');
  featuredImages[featuredIndex].classList.add('active');
}

function showPreviousImage() {
    featuredImages[featuredIndex].classList.remove('active');
    dotArray[featuredIndex].classList.remove('active');
    
    featuredIndex--;
    if (featuredIndex < 0) {
        featuredIndex = featuredImages.length - 1;
    }
    dotArray[featuredIndex].classList.add('active');
    featuredImages[featuredIndex].classList.add('active');
  }

function getDotIndex(dot) {    
    return dotArray.indexOf(dot);
}
  
  dotArray.forEach((dot) => {
    dot.addEventListener('click', () => {
        featuredImages[featuredIndex].classList.remove('active');
        dotArray[featuredIndex].classList.remove('active');

        
      const clickedIndex = getDotIndex(dot);
      featuredIndex = clickedIndex;
      featuredImages[featuredIndex].classList.add('active');
      dotArray[featuredIndex].classList.add('active');
    });
  });

  arrowR.addEventListener('click', () => {
    showNextImage();
  });

  arrowL.addEventListener('click', () => {
    showPreviousImage();
  });

  arrowR.addEventListener('mouseenter', () => {
    clearInterval(featuredInterval);
  });

  arrowR.addEventListener('mouseleave', () => {
    featuredInterval = setInterval(showNextImage, 3000);
  });

  arrowL.addEventListener('mouseenter', () => {
    clearInterval(featuredInterval);
  });

  arrowL.addEventListener('mouseleave', () => {
    featuredInterval = setInterval(showNextImage, 3000);
  });

let featuredInterval = setInterval(showNextImage, 3000);

featuredContainer.addEventListener('mouseenter', () => {
    clearInterval(featuredInterval);
});

featuredContainer.addEventListener('mouseleave', () => {
    featuredInterval = setInterval(showNextImage, 3000);
});