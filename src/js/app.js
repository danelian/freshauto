document.addEventListener('DOMContentLoaded', function(){

  // ------------------- BURGER MENU ---------------------
  const body = document.querySelector('body'),
        burgerMenu = document.querySelector('#burger-menu'),
        burgerOpen = document.querySelector('#burger-open'),
        burgerClose = document.querySelector('#burger-close'),
        burgerLinks = document.querySelectorAll('.header__menu>li>a, .header__bar a');
  burgerOpen.addEventListener('click', () => {
    burgerMenu.classList.add('show');
    body.classList.add('dis-scroll');
  })
  burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('show');
    body.classList.remove('dis-scroll')
  })
  burgerLinks.forEach(n => n.addEventListener('click', () => {
    burgerMenu.classList.remove('show');
    body.classList.remove('dis-scroll')
  }))
  document.addEventListener('click', (event) => {
    if (!event.target.matches("#burger-menu, #burger-open, #burger-open img")) {
      burgerMenu.classList.remove('show');
      body.classList.remove('dis-scroll')
    }
  })


  $(".js-select2").select2({
    dropdownPosition: 'below',
    closeOnSelect: true,
    language: {
      noResults: function () {
        return "Ничего не найдено";
      },
    }
  });
  $("#select-marka").select2({
    placeholder: "Марка"
  });
  $("#select-model").select2({
    placeholder: "Модель"
  });
  $('.js-select2').one('select2:open', function(e) {
    $('input.select2-search__field').prop('placeholder', "Поиск");
  });

})
