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

  $('.count').each(function () { //for each element with class 'count' set animation
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 3000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

  let burgerBtn = document.querySelector('.burger-btn');
  if (burgerBtn) {
    burgerBtn.addEventListener('click', function () {
      this.classList.toggle('opened');
      this.parentNode.querySelector('.burger-wrapper').classList.toggle('menu-opened');
    })
  }

  //mobile adaptive for navigation in header
  let headerWr = document.querySelector('.header-row');
  if (headerWr) {

    let langSel = headerWr.querySelector('.custom-select');

    let burgerWr = document.createElement('div');
    burgerWr.classList.add('burger-wrapper');


    if (window.outerWidth <= 900) {
      headerWr.appendChild(langSel);
      langSel.classList.add('select-mobile');
      headerWr.appendChild(burgerWr);
      burgerWr.appendChild(headerWr.querySelector('.header-nav .navigation'));
    }

    window.addEventListener('resize', function () {
      if (window.outerWidth <= 900) {
        if (langSel.parentNode.classList.contains('navigation')) {
          headerWr.appendChild(langSel);
          langSel.classList.add('select-mobile');
          headerWr.appendChild(burgerWr);
          burgerWr.appendChild(headerWr.querySelector('.header-nav .navigation'));
        }
      } else {
        if (!langSel.parentNode.classList.contains('navigation')) {
          langSel.classList.remove('select-mobile');
          headerWr.querySelector('.navigation').appendChild(langSel);
          headerWr.querySelector('.header-nav').appendChild(burgerWr.querySelector('.navigation'));
          headerWr.removeChild(burgerWr);
        }
      }
    })

  }


  let page = document.querySelector('.page'); // get body.page
  if (page) { //check for exist
    page.style.opacity = 1; // smooth fade in all page when all DOM loaded
  }

  let mainSlider = $('#mainSlider'); //get slider element by id
  if (mainSlider) { // check for exist
    mainSlider.slick({ //initialization slick slider for this element
      prevArrow: $('.arrows-wrapper .arrow-prev'), // change arrow for custom
      nextArrow: $('.arrows-wrapper .arrow-next'), // change arrow for custom
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
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
      responsive: [{
        breakpoint: 901,
        settings: {
          slidesToShow: 1,
        }
      }]
    })
  }
  // work with modal
  let modalBtn = document.querySelectorAll('.modal-btn'); // get buttons to open modal

  if (!(modalBtn === undefined || modalBtn.length == 0)) { //check for exits
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
  } else {
    let modalFeedBack = document.querySelector('#feedback'); // get modal wrapper
    if (modalFeedBack) {
      modalFeedBack.style.display = 'none';
      modalFeedBack.style.opacity = '0';
    }
  }
  // CUSTOM SELECT
  var x, i, j, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            let inp = this.parentElement.parentElement.querySelector('form input');
            inp.value = this.innerHTML;
            // console.log(this.innerHTML);
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("clicked-select");
    });
  }

  let region = document.querySelectorAll('.region');
  if (!(region === undefined || region.length == 0)) {
    for (let i of region) {
      i.onmouseenter = function (e) {
        let info = document.querySelector('.region-info');
        info.style.display = 'block';
        info.querySelector('.region-name').innerHTML = i.getAttribute('name')
      }
      i.onmouseleave = function (e) {
        let info = document.querySelector('.region-info');
        info.style.display = 'none';
      }
      window.onmousemove = function (e) {
        var x = e.clientX,
          y = e.clientY;
        let info = document.querySelector('.region-info');
        info.style.top = (y - 30) + 'px';
        info.style.left = (x + 20) + 'px';
      };
    }
  }


  let tabsBtns = document.querySelectorAll('.col-tab');
  if (!(tabsBtns === undefined || tabsBtns.length == 0)) {

    let tabs = document.querySelectorAll('.tab');

    for (let i of tabsBtns) {
      if (i.classList.contains('active-tab')) {
        let tabsWrapper = i.parentNode.parentNode.querySelector('.tabs-wrapper');
        let activeTab = tabsWrapper.querySelector('.tab-' + i.getAttribute('id'));
        hideTabs(tabs);
        activeTab.style.display = 'block';

        let categories = activeTab.querySelectorAll('.col');
        for (let j of categories) {
          j.addEventListener('click', function () {
            let categId = this.getAttribute('id').replace('-categ', '');
            let thisTab = this.parentNode.parentNode.parentNode.querySelector('.tab-' + categId);
            let btn = document.querySelector('#' + categId);
            hideTabs(tabs);
            removeActive(tabsBtns);
            btn.classList.add('active-tab');
            thisTab.style.display = 'block';
          })
        }
      }

      i.addEventListener('click', function () {
        let tabsWrapper = i.parentNode.parentNode.querySelector('.tabs-wrapper');
        let activeTab = tabsWrapper.querySelector('.tab-' + i.getAttribute('id'));
        hideTabs(tabs);
        removeActive(tabsBtns);
        i.classList.add('active-tab');
        activeTab.style.display = 'block';
      })

    }

    let tabLists = document.querySelectorAll('ul.items');
    for (let k of tabLists) {
      let items = k.querySelectorAll('.item');
      for (let [i, v] of items.entries()) {
        let tabContent = v.parentNode.parentNode.parentNode.querySelector('.col-content');
        let tabItems = tabContent.querySelectorAll('.content-block');
        hideTabs(tabItems);
        tabItems[0].style.display = 'flex';

        v.addEventListener('click', () => {
          hideTabs(tabItems);
          removeActiveItem(items);
          v.classList.add('active-item');
          tabItems[i].style.display = 'flex';
        })
      }
    }
  }

  let cv = document.querySelector('.vacancy-form');

  if (cv) {
    let input = cv.querySelector('.input-file');
    input.addEventListener('change', function () {
      let file = this.files[0].name;
      this.parentNode.querySelector('.file-name span').innerHTML = file;
      this.parentNode.querySelector('.file-btn').classList.remove('show');
      this.parentNode.querySelector('.send-btn').classList.add('show');
    })
  }
}

function removeActiveItem(mass) {
  for (let i of mass) {
    i.classList.remove('active-item');
  }
}

function removeActive(mass) {
  for (let i of mass) {
    i.classList.remove('active-tab');
  }
}

function hideTabs(mass) {
  for (let v of mass) {
    v.style.display = 'none';
  }
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("clicked-select");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
