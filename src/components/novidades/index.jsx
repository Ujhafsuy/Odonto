import Novidadeimg from "../../images/novi.jpeg"

import "../novidades/style.css"

function Novidade() {
  return (
    <div className='itens' data-aos="fade-up">
      <div className="novidades">Novidades</div>
      <img src={Novidadeimg} alt="sorriso" className='imgs_sequence img-tam' />

      <div className='aling'>

        <h2 className='h2'>Expo Wedding 2022</h2>
        <p className='text'>Estaremos nesta edição de 2022 da Expo wedding, venha visitar nosso stand conferir os pacotes para o melhor momento das suas vidas.</p>
      </div>
    </div>
  )
}

export { Novidade }