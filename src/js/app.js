//= ../libs/jquery/dist/jquery.min.js
//= ../libs/slick-carousel/slick/slick.min.js

//open and close modal fuction
function toggleModal(id) {
  if (id.style.display != 'none') { // check for exist 'display = none'
    id.style.opacity = '0' // first we play animation - from 1 opacity to 0 with transition
    setTimeout(() => {
      id.style.display = 'none' // with timeout change display to none, for animation
    }, 300)
  } else { // if 'display = flex' , modal already open
    id.style.display = 'flex' // change 'display'
    setTimeout(() => {
      id.style.opacity = '1' //change opacity to 1 with delay, that give block change display, which garanted correct work for animation
    }, 100)
  }
}

window.onload = function () {

  let page = document.querySelector('.page'); // get body.page
  if (page) { //check for exist
    page.style.opacity = 1; // smooth fade in all page when all DOM loaded
  }

  let mainSlider = $('#mainSlider'); //get slider element by id
  if (mainSlider) { // check for exist
    mainSlider.slick({ //inicilization slick slider for this element
      prevArrow: $('.arrows-wrapper .arrow-prev'), // change arrow for custom
      nextArrow: $('.arrows-wrapper .arrow-next'), // change arrow for custom
      dots: true,
      customPaging: function (slider, i) {
        return '<div class="slider-dot"></div>';
      },
    })
  }
  let newsSlider = $('#newsSlider');
  if (newsSlider) {
    newsSlider.slick({
      prevArrow: $('.arrows-wrapper .arrow-prev'), // change arrow for custom
      nextArrow: $('.arrows-wrapper .arrow-next'), // change arrow for custom
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      customPaging: function (slider, i) {
        return '<div class="slider-dot"></div>';
      },
    })
  }
  // work with modal
  let modalBtn = document.querySelectorAll('.modal-btn'); // get buttons to open modal
  if (modalBtn) { //check for exits
    for (let i of modalBtn) {
      i.querySelector('a').addEventListener('click', function (e) {
        e.preventDefault();
      })
      let modalCls = document.querySelector('#modalCls'); // get close button which is inside the modal
      let modalFeedBack = document.querySelector('#feedback'); // get modal wrapper
      modalFeedBack.style.display = 'none';
      modalFeedBack.style.opacity = '0';

      i.addEventListener('click', function (e) { // add click function for open button
        e.preventDefault(); // disable default link relocate function
        toggleModal(modalFeedBack); // init function for modal wrapper
      })

      modalCls.addEventListener('click', function (e) { // add click function for close button
        e.preventDefault(); // disable default link relocate function
        toggleModal(modalFeedBack); // init function for modal wrapper
      })
    }
  }

}
