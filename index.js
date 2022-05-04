import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

//const cep_in = '';
//const link = 'https://cep.awesomeapi.com.br/json/'+cep_in

document.addEventListener('keypress', function(e){
  if(e.key == 'Enter'){
    consulta_cep();
  }
}, false);

function consulta_cep() {
  if (document.getElementById("cep_in").value!='') {
      const cep_in = document.getElementById("cep_in").value;
      const link = 'https://cep.awesomeapi.com.br/json/'+cep_in

    fetch(link).then(resposta => {
      return resposta.json()
    }).then(corpo => {
      if (corpo.address) {
        document.getElementById("cep").innerHTML = corpo.address;
      } else document.getElementById("cep").innerHTML = 'Não encontrado';
    })
  }
}

root.render(
      <>     
        <section>
          <header>
            <img src="map.png" alt="cep" className='imagem'/>
          </header>
          <div>
            CEP: <input type='number' id='cep_in' data-mask="00/00/0000" />
          </div>
          <button onClick={()=>consulta_cep()}>Consultar</button>
          <h1>Logradouro:<br /> <span id="cep"></span></h1>
        </section>
        <br /><br /><br /><br />
      </>
    );