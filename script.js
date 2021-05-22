const inicio = getElementById('inicioa');

  inicio = addEventListener('click');


function irInicio (){
  event.preventDefault();
  window.scroll ({
    top: 0,
    behavior: "smooth"
  });

}


  const sobre = getElementById('sobrea');

  sobre = addEventListener('click');


function irSobre (){
  event.preventDefault();
  window.scroll ({
    top: 800,
    behavior: "smooth"
  });

} 

const comprar = getElementById('comprara');

  comprar = addEventListener('click');


function irComprar (){
  event.preventDefault();
  window.scroll ({
    top: 1600,
    behavior: "smooth"
  });

}


const faq = getElementById('faqa');

  faq = addEventListener('click');


function irFaq (){
  event.preventDefault();
  window.scroll ({
    top: 0,
    behavior: "smooth"
  });

}

const contato = getElementById('contatoa');

  contato = addEventListener('click');


function irContato (){
  event.preventDefault();
  window.scroll ({
    top: 0,
    behavior: "smooth"
  });

}

function selecionar(serviço) {
  
  if (serviço == 'fpsboost')
  {
    fpsboost.style.display = 'inline';
    attdrivers.style.display = 'none';
    ultraboost.style.display = 'none';
    fpsvalor.style.display = 'inline';
    ultravalor.style.display = 'none';
    attvalor.style.display = 'none';
  }
  if (serviço == 'attdrivers')
  {
    fpsboost.style.display = 'none';
    attdrivers.style.display = 'inline';
    ultraboost.style.display = 'none';
    attvalor.style.display = 'inline';
    fpsvalor.style.display = 'none';
    ultravalor.style.display = 'none';
  }
  if (serviço == 'ultraboost')
  {
    fpsboost.style.display = 'none';
    attdrivers.style.display = 'none';
    ultraboost.style.display = 'inline';
    ultravalor.style.display = 'inline';
    fpsvalor.style.display = 'none';
    attvalor.style.display = 'none';
  }
}

function emailEnviado() {
  const email = document.getElementById('email');

  if (email.value != '')
    alert('Email com as instruções de pagamento enviado com sucesso para ' + email.value);
  else
   alert('Parece que você não digitou nenhum email, tente novamente.');


}