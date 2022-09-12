import './styles/style.css'
import Bruxismo from "./images/ortodontis.jpg"
import Smile from "./images/estetica.jpg"
import Clinico from "./images/clinico-geral.jpg"
import Doctor from "./images/tratamentos.jpg"
import Micro from "./images/ezgif-3-97f2a37c0c.gif"
import Initial from "./images/daniel-salcius-hGSzNiBwnRg-unsplash.jpg"
import Doctors from "./images/omar-lopez-1qfy-jDc_jo-unsplash.jpg"
import Sorriso from "./images/sorriso.png"
import Logo from "./images/Logo_1.png"

import Aos from 'aos'
import 'aos/dist/aos.css'

import { Facebook } from "./components/facebook/index"
import { Map } from "./components/map/index"
import { Menssage } from "./components/mensage/index"



function App() {

  Aos.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  });
  return (
    <div className="App">
      <div id='container'>
        <main className='containers'>

          <section className='intro'>
            <div className="intro_color">
              <div className='lab'>
                <img src={Sorriso} alt="lab" className='img' />
              </div>

              <div className="mude">
                <div className='logo'>
                  <img src={Logo} alt="studio Frasca" className='logo-st' />

                </div>

                <div className='between'>
                  <p className='highlight_text'>A vida é melhor quando você <span className='span'>sorri!</span></p>
                  <button className='mark0'>Agende sua consulta</button>
                </div>
              </div>
            </div>
          </section>

          <section className='sequence'>

            <div className="new_div">
              <div className='itens' data-aos="fade-up">
                <img src={Smile} alt="sorriso" className='imgs_sequence' />

                <div className='aling'>
                  <h2 className='h2'>Estética</h2>
                  <p className='text'>Aqui você encontra nossos tratamentos estéticos que vão lhe garantir um sorriso mais bonito, brilhante e com muita autoestima.</p>
                </div>
              </div>



              <div className='itens' data-aos="fade-up">
                <img src={Bruxismo} alt="sorriso" className='imgs_sequence' />

                <div className='aling'>
                  <h2 className='h2'>Ortodontia</h2>
                  <p className='text'>Encontre tratamentos ortodônticos que vão proporcionar uma mastigação adequada e um sorriso mais alinhado.</p>
                </div>
              </div>
            </div>


            <div className="new_div">
              <div className='itens' data-aos="fade-up">
                <img src={Clinico} alt="sorriso" className='imgs_sequence' />

                <div className='aling'>
                  <h2 className='h2'>Clínico Geral</h2>
                  <p className='text'>Descubra o que nossos tratamentos de limpeza, restauração e muito mais podem fazer pelo seu sorriso.</p>
                </div>
              </div>

              <div className='itens' data-aos="fade-up">
                <img src={Doctor} alt="sorriso" className='imgs_sequence' />

                <div className='aling'>
                  <h2 className='h2'>Outros tratamentos</h2>
                  <p className='text'>Encontre aqui os nossos melhores tratamentos odontológicos para você sorrir sem dor e sem receio.</p>
                </div>
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

          <section className='third-900'>

            <div className="third-900_color">

              <div className='organization'>
                <img src={Micro} alt="dental microscope " className='micro' />


                <div className="boxi"></div>
                <h1 className='h1 color_reference this'>Aqui no Studio Frasca, o seu sorriso está nas melhores mãos!</h1>
                <p className='text position_t p_this'>Dentistas qualificados, materiais certificados e esterilização que segue as normas de biossegurança. </p>
              </div>
              <button className='mark other_b'>Marque um horário</button>
              <button className='sms'>Ou mande um SMS.</button>
            </div>
          </section>

          <section className='fourth'>
            <div className="fourth-color">

              <div className='organization_sc'>
                <h1 className='h1 left'>Onde tudo começou</h1>

                <div className='box'></div>
                <p className='text color position' data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine">Dentistas qualificados, materiais certificados e esterilização que segue as normas de biossegurança.</p>
              </div>


              <img src={Initial} alt="primórdios" className='img0_top' data-aos="zoom-in" />


              <div className='organization_sc'>
                <h1 className='h1 left'>Quem somos</h1>
                <div className='box1'></div>
                <p className='text color position padding'
                  data-aos="fade-right"
                  data-aos-offset="300">Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de<span className='span'> denguis</span>. Hoje eu só queria comer uma pizza de hot roll.</p>
              </div>
              <img src={Doctors} alt="crianças" className='img0' />
            </div>
          </section>

        </main>

        <footer className='footer'>
          <div className="footer_color">
            <div className='footermob'>
              <div className='options'>
                <Menssage />
                <a href="tel:+551140028922" className='link'>(55) 11 4002-8922.</a>

              </div>
              <div className='options'>
                <Facebook />

                <a href="https://Facebook.com" className='link'>Studio_Frasca</a>


              </div>
              <div className='options last'>
                <Map />
                <a href="https://goo.gl/maps/LkUpvZZbiZnPtVrW6" className='link'>Via Quintilio Varo, 46.</a>

              </div>

              <iframe className='iframe' title="Map for reference" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.7804853013427!2d12.560927489698706!3d41.854551461975745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132589da1fa79689%3A0xf59010298a6ec69c!2sFrasca%20Dr.%20Stefano!5e0!3m2!1spt-BR!2sbr!4v1658683870597!5m2!1spt-BR!2sbr" />

              <h3 className='h3'>Studio Frasca, 2022</h3>
              <h3 className='h3 last_h3'>Freelancer</h3>
            </div>

            <div className='footer900'>


              <div className="org900">
                <div className="links">
                  <div className='options'>
                    <Menssage />
                    <a href="tel:+551140028922" className='link'>(55) 11 4002-8922.</a>

                  </div>
                  <div className='options'>
                    <Facebook />

                    <a href="https://Facebook.com" className='link'>Studio_Frasca</a>


                  </div>
                  <div className='options last'>
                    <Map />
                    <a href="https://goo.gl/maps/LkUpvZZbiZnPtVrW6" className='link'>Via Quintilio Varo, 46.</a>
                  </div>
                </div>
                <div className="studio">
                  <h3 className='h3'>Studio Frasca, 2022</h3>
                  <h3 className='h3 last_h3'>Freelancer</h3>
                </div>
              </div>
              <iframe className='iframe' title="Map for reference" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.7804853013427!2d12.560927489698706!3d41.854551461975745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132589da1fa79689%3A0xf59010298a6ec69c!2sFrasca%20Dr.%20Stefano!5e0!3m2!1spt-BR!2sbr!4v1658683870597!5m2!1spt-BR!2sbr" />

            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
