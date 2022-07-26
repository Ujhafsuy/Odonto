import './styles/style.css'
import Bruxismo from "./images/ortodontis.jpg"
import Smile from "./images/estetica.jpg"
import Clinico from "./images/clinico-geral.jpg"
import Doctor from "./images/tratamentos.jpg"
import Micro from "./images/ezgif-3-97f2a37c0c.gif"
import Initial from "./images/daniel-salcius-hGSzNiBwnRg-unsplash.jpg"
import Doctors from "./images/omar-lopez-1qfy-jDc_jo-unsplash.jpg"

function App() {
  return (
    <div className="App">
      <div id='container'>
        <main className='containers'>
          <section className='intro'>
            <img src="#" alt="lab" className='lab' />
            <div className='logo'><h2>studio</h2> <h1>FrascA</h1></div>

            <div className='between'>
              <p className='highlight_text'>A vida é melhor quando você <span className='span'>sorri!</span></p>
              <button className='mark'>Agende sua consulta</button>
            </div>
          </section>
          <section className='sequence'>

            <div className='itens'>
              <img src={Smile} alt="sorriso" className='imgs_sequence' />

              <div className='aling'>
                <h2 className='h2'>Estética</h2>
                <p className='text'>Aqui você encontra nossos tratamentos estéticos que vão lhe garantir um sorriso mais bonito, brilhante e com muita autoestima.</p>
              </div>
            </div>


            <div className='itens'>
              <img src={Bruxismo} alt="sorriso" className='imgs_sequence' />

              <div className='aling'>
                <h2 className='h2'>Ortodontia</h2>
                <p className='text'>Encontre tratamentos ortodônticos que vão proporcionar uma mastigação adequada e um sorriso mais alinhado.</p>
              </div>
            </div>

            <div className='itens'>
              <img src={Clinico} alt="sorriso" className='imgs_sequence' />

              <div className='aling'>
                <h2 className='h2'>Clínico Geral</h2>
                <p className='text'>Descubra o que nossos tratamentos de limpeza, restauração e muito mais podem fazer pelo seu sorriso.</p>
              </div>
            </div>

            <div className='itens'>
              <img src={Doctor} alt="sorriso" className='imgs_sequence' />

              <div className='aling'>
                <h2 className='h2'>Outros tratamentos</h2>
                <p className='text'>Encontre aqui os nossos melhores tratamentos odontológicos para você sorrir sem dor e sem receio.</p>
              </div>


            </div>
          </section>
          <section className='third'>

            <div className='organization'>
              <h1 className='h1 color_reference'>Aqui no Studio Frasca, o seu sorriso está nas melhores mãos!</h1>
              <p className='text position_t'>Dentistas qualificados, materiais certificados e esterilização que segue as normas de biossegurança. </p>
            </div>
            <img src={Micro} alt="dental microscope " className='micro' />

            <button className='mark other_b'>Marque um horário</button>
            <button className='sms'>Ou mande um SMS.</button>
          </section>
          <section className='fourth'>


            <div className='organization_sc'>
              <h1 className='h1 left'>Onde tudo começou</h1>

              <div className='box'></div>
              <p className='text color position'>Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis.</p>
            </div>


            <img src={Initial} alt="primórdios" className='img0_top' />


            <div className='organization'>
              <h1 className='h1 left'>Quem somos</h1>
              <div className='box1'></div>
              <p className='text color position padding'>Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de<span className='span'> denguis</span>. Hoje eu só queria comer uma pizza de hot roll.</p>
            </div>
          </section>
          <img src={Doctors} alt="crianças" className='img0 border-img' />

        </main>

        <footer className='footer'>
          <div className='options'>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.4 3.00083H21.6V17.4008H3.804L2.4 18.8048V3.00083ZM2.4 0.60083C1.08 0.60083 0.012 1.68083 0.012 3.00083L0 24.6008L4.8 19.8008H21.6C22.92 19.8008 24 18.7208 24 17.4008V3.00083C24 1.68083 22.92 0.60083 21.6 0.60083H2.4ZM4.8 12.6008H14.4V15.0008H4.8V12.6008ZM4.8 9.00083H19.2V11.4008H4.8V9.00083ZM4.8 5.40083H19.2V7.80083H4.8V5.40083Z" fill="#014149" />
            </svg>

            <a href="tel:+551140028922" className='link'>(55) 11 4002-8922.</a>

          </div>
          <div className='options'>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.7 16.488V16.988H7.2H9.1V24.0389C4.15742 22.747 0.5 18.2444 0.5 12.879C0.5 6.51331 5.65332 1.34888 12 1.34888C18.3467 1.34888 23.5 6.51331 23.5 12.879C23.5 18.6737 19.2406 23.4619 13.7 24.2834V16.988H16.8H17.3V16.488V12.879V12.379H16.8H13.7V10.4729C13.7 10.0862 14.0173 9.76993 14.4 9.76993H16.8H17.3V9.26993V5.66091V5.16091H16.8H13.8C11.2067 5.16091 9.1 7.27467 9.1 9.87143V12.379H7.2H6.7V12.879V16.488Z" fill="#014149" stroke="#014149" />
            </svg>
            <a href="https://Facebook.com" className='link'>Studio_Frasca</a>


          </div>
          <div className='options last'>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.3333 0.097168L23.12 0.137168L16 2.89717L8 0.097168L0.48 2.6305C0.2 2.72383 0 2.96383 0 3.2705V23.4305C0 23.8038 0.293333 24.0972 0.666667 24.0972L0.88 24.0572L8 21.2972L16 24.0972L23.52 21.5638C23.8 21.4705 24 21.2305 24 20.9238V0.763835C24 0.390501 23.7067 0.097168 23.3333 0.097168ZM16 21.4305L8 18.6172V2.76383L16 5.57717V21.4305Z" fill="#014149" />
            </svg>
            <a href="https://goo.gl/maps/LkUpvZZbiZnPtVrW6" className='link'>Via Quintilio Varo, 46.</a>

          </div>

          <iframe className='iframe' title="Map for reference" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.7804853013427!2d12.560927489698706!3d41.854551461975745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132589da1fa79689%3A0xf59010298a6ec69c!2sFrasca%20Dr.%20Stefano!5e0!3m2!1spt-BR!2sbr!4v1658683870597!5m2!1spt-BR!2sbr" />

          <h3 className='h3'>Studio Frasca, 2022</h3>
          <h3 className='h3 last_h3'>Feelancer</h3>
        </footer>
      </div>
    </div>
  );
}

export default App;
