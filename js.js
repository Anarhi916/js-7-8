
let conteiner = document.querySelector('.conteiner');
let inform = document.querySelector('.inform');
let error = document.querySelector('.error');


conteiner.addEventListener('mouseover', info);

function info(e){
  removeError();      
  if(e.target.localName == 'img'){
    if(!e.target.getAttribute('alt')){
      showError();
      e.target.style.border = '2px solid red';
      
    }
    else{
      inform.textContent = 'Адресс изображения: ' + e.target.currentSrc + ' Атрибут alt: ' + e.target.getAttribute('alt');
  }
}
  if(e.target.localName == 'a'){
    if(!e.target.getAttribute('target') || !e.target.getAttribute('title')){
      showError();
    }
    else{
    inform.textContent = 'Адресс ссылки: ' + e.target.getAttribute('href') + ' Атрибут title: ' + e.target.getAttribute('title') + ' Атрибут target: ' + e.target.getAttribute('target');
  }
  }
}

conteiner.addEventListener('mouseleave', infoRemove);

function infoRemove(){  
   inform.textContent = '';
  }

  function showError(){
    error.style.color = 'red';
    inform.textContent = '';
    error.textContent = 'Отсутсвует один или несколько атрибутов';
  }
  function removeError(){   
    error.textContent = '';
  }