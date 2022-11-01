import type { NextPage } from 'next'
import Image from 'next/image'
import CasasBahiaImg from '../assets/images/CasasBahia.svg'
import MagazineImg from '../assets/images/Magalu.svg'
import AmericanasImg from '../assets/images/Americanas.svg'
import PontoFrioImg from '../assets/images/PontoFrio.svg'
import ExtraImg from '../assets/images/Extra.svg'
import NavBar from '../components/NavBar'
import PhoneImg from '../assets/images/phone.png'
import { Divider } from 'react-daisyui'
import HeartLikeIg from '../assets/images/HeartLikeIg.png'
import CardLojas from '../components/CardLojas'
import GirlBuyPhone from '../assets/images/girlbuyphone.png'
import Arrow1 from '../assets/images/arrow1.png'
import Arrow2 from '../assets/images/arrow2.png'
import Arrow3 from '../assets/images/arrow3.png'
import Arrow4 from '../assets/images/arrow4.png'
import Arrow5 from '../assets/images/arrow5.png'
import Arrow6 from '../assets/images/arrow6.png'
import JuninhoBuyPhone from '../assets/images/juninho.png'
import Juninho2BuyPhone from '../assets/images/juninho2.png'
import Juninho2CartPhone from '../assets/images/juninho2cart.png'
import Juninho3Post from '../assets/images/juninho3post.png'
import Girl2BuyPhone from '../assets/images/girl2.png'
import Juninho2AirPlane from '../assets/images/juninho2airplane.png'
import ShildPng from '../assets/images/shield.png'
import WhatsappImg from '../assets/images/whatsapp.png'
import { Carousel } from 'react-responsive-carousel'
import { CardDepoiments } from '../components/CardDepoiment'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import AnaImg from '../assets/images/anabrisa.jpg'
import AccordionComponent from '../components/AccordionComponent'
import styles from '../styles/styles.module.scss'

const Home: NextPage = () => {
   return (
      <>
         <NavBar />
         <div className="bg-primary">
            <div className="w-full pt-32 pb-20 mx-auto max-w-6xl px-4">
               <div className="w-full flex flex-col-reverse md:flex-row justify-between">
                  <div className="flex flex-col text-base-100 ">
                     <div className="text-center md:text-start">
                        <h1 className="text-base-100/20 uppercase text-5xl lg:text-8xl font-bold lg:absolute lg:leading-3">
                           pague menos
                        </h1>
                        <h2 className="uppercase tracking-widest text-xl font-semibold lg:mt-6 ">
                           VEJA COMO COMPRAR IPHONES PAGANDO MUITO MAIS BARATO!
                        </h2>
                     </div>
                     <Divider className="bg-base-100/20 divider h-[1px]" />
                     <span className="font-normal lg:text-2xl text-center lg:text-start">
                        Conosco, você encontra toda linha de iPhones, com o
                        melhor preço do mercado, 100% nacionais fornecido pelas
                        maiores lojas do Brasil!
                     </span>
                  </div>

                  <div className="h-auto w-full flex justify-center">
                     <div className="bg-base-100/20 w-72 h-72 lg:w-96 lg:h-96 flex justify-center items-center relative rounded-[100%]">
                        <div className="w-40 lg:w-60 h-auto absolute lg:right-9 lg:top-0 z-10">
                           <Image
                              src={PhoneImg}
                              quality={100}
                              alt="Imagem de Dinheiro"
                           />
                        </div>
                        <div
                           className={
                              'w-40 h-auto absolute -top-20 right-4 ' +
                              styles.object2
                           }
                        >
                           <Image
                              src={HeartLikeIg}
                              quality={100}
                              alt="Coração Instagram"
                           />
                        </div>
                        <div
                           className={
                              'w-20 h-auto absolute left-0 lg:ml-[24%] bottom-0 mb-[40%] ' +
                              styles.object1
                           }
                        >
                           <Image
                              src={HeartLikeIg}
                              quality={100}
                              alt="Coração Instagram"
                           />
                        </div>
                        <div
                           className={
                              'w-8 h-8 bg-[#EB0045] rounded-[100%] shadow-md shadow-black/30 absolute left-0 lg:ml-[30%] ml-[20%] bottom-0 mb-[30%] ' +
                              styles.object1
                           }
                        />
                        <div
                           className={
                              'w-12 h-12 bg-[#EB0045] rounded-[100%] shadow-md shadow-black/30 absolute right-12 bottom-0 top-0 mt-[30%] ' +
                              styles.object2
                           }
                        />
                        <div
                           className={
                              'w-28 h-28 bg-[#EB0045] rounded-[100%] shadow-md shadow-black/30 absolute left-10 bottom-0 top-0 ' +
                              styles.object1
                           }
                        />
                        <div
                           className={
                              'w-20 h-20 bg-base-100/10 rounded-[100%] shadow-md shadow-black/30 absolute -left-10 bottom-0 top-0 mt-[50%] ' +
                              styles.object3
                           }
                        />
                        <div
                           className={
                              'w-20 h-20 md:w-32 md:h-32 bg-base-100/10 rounded-[100%] shadow-md shadow-black/30 absolute -right-3 lg:-right-16 bottom-10 ' +
                              styles.object4
                           }
                        />
                     </div>
                  </div>
               </div>

               <div className="mx-auto pt-14 flex flex-col gap-4 items-center justify-between lg:flex-row lg:gap-0">
                  <CardLojas image={CasasBahiaImg} width={150} />
                  <CardLojas image={MagazineImg} width={120} />
                  <CardLojas image={AmericanasImg} width={150} />
                  <CardLojas image={PontoFrioImg} width={150} />
                  <CardLojas image={ExtraImg} width={120} />
               </div>
            </div>
         </div>
         <div className="bg-base-200">
            <div className="flex mx-auto max-w-6xl px-4 py-20 flex-col relative">
               <div className="text-center flex flex-col items-center">
                  <h1 className="text-primary/20 uppercase text-5xl md:text-8xl font-bold md:absolute md:leading-3">
                     ENTENDA
                  </h1>
                  <h2 className="text-primary uppercase tracking-widest text-xl font-semibold md:mt-6">
                     ASSISTA AO VÍDEO E ENTENDA MELHOR!
                  </h2>
                  <div className="bg-primary/20 w-20 h-[5px] rounded-3xl mt-4"></div>
               </div>

               <div className="flex justify-center w-2/3 mx-auto mt-11">
                  <div className="w-full flex justify-center">
                     <div className="w-full h-auto relative flex">
                        <div className="relative w-full h-full pb-[56.25%]">
                           <iframe
                              className="absolute w-full h-full flex border-none rounded-3xl shadow-black/40 shadow-md m-0"
                              placeholder="blur"
                              loading="lazy"
                              src="https://www.youtube.com/embed/FrYS9Hj_yEk"
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                           ></iframe>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="w-32 h-auto absolute -left-14 bottom-14 hidden md:block">
                  <div className="w-32 h-32 -rotate-[40deg] border-[5px] border-base-100 rounded-3xl absolute ml-14 mt-2 "></div>
                  <div className="w-32 h-32 -rotate-[40deg] border-[5px] border-base-100 rounded-3xl"></div>
               </div>
            </div>
         </div>
         <div className="bg-primary relative py-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center relative pt-10 md:pt-20 px-4">
               <div className="text-center flex flex-col items-center">
                  <h1 className="text-base-100/20 uppercase text-5xl md:text-8xl font-bold md:absolute md:leading-3">
                     Conheça
                  </h1>
                  <h2 className="text-base-100 md:w-2/3 uppercase tracking-widest text-xl font-semibold md:mt-6">
                     TODAS AS ETAPAS DO NOSSO MODELO DE VENDAS INOVADOR
                  </h2>
               </div>

               <div className="flex flex-col md:flex-row justify-around relative w-full text-base-100">
                  <div className="absolute hidden md:flex w-full justify-center -bottom-32">
                     <Image src={Arrow1} alt="Arrow1" />
                  </div>
                  <div className="flex flex-col items-center">
                     <Image src={GirlBuyPhone} alt="GirlBuyPhone" />

                     <div className="flex flex-col">
                        <h1 className="font-semibold text-xl">•Pedido</h1>
                        <h2>
                           O cliente realiza o pedido do produto em nosso site.
                        </h2>
                     </div>
                  </div>
                  <div className="flex flex-col items-center relative">
                     <div className="flex w-full justify-center md:hidden">
                        <Image src={Arrow2} alt="Arrow2" />
                     </div>

                     <Image
                        src={JuninhoBuyPhone}
                        quality={100}
                        alt="JuninhoBuyPhone"
                     />

                     <div className="flex flex-col">
                        <h1 className="font-semibold text-xl">•Pedido</h1>
                        <h2>
                           O cliente realiza o pedido do produto em nosso site.
                        </h2>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row justify-end w-full relative md:mt-14 z-10 text-base-100">
                  <div className="md:absolute flex w-full justify-center md:justify-end md:-top-10 md:-left-36">
                     <Image src={Arrow2} alt="Arrow 2" />
                  </div>
                  <div className="absolute hidden md:flex w-full justify-center bottom-16 mb-4 right-40">
                     <Image src={Arrow3} alt="Arrow3" />
                  </div>
                  <div className="flex flex-col md:absolute md:left-0 items-center md:pt-48 text-primary">
                     <Image
                        src={Juninho2CartPhone}
                        quality={100}
                        alt="Juninho2CartPhone"
                     />

                     <div className="flex flex-col text-base-100 md:text-primary">
                        <h1 className="font-semibold text-xl">•Pedido</h1>
                        <h2>
                           O cliente realiza o pedido do produto em nosso site.
                        </h2>
                     </div>
                  </div>

                  <div className="flex flex-col items-center max-w-md mx-auto md:mx-0 text-base-100 md:pt-8 md:mr-48">
                     <div className="flex w-full justify-center md:hidden">
                        <Image src={Arrow2} alt="Arrow2" />
                     </div>

                     <Image
                        src={Juninho2BuyPhone}
                        quality={100}
                        alt="Juninho2BuyPhone"
                        width={240}
                        height={300}
                     />

                     <div className="flex flex-col">
                        <h1 className="font-semibold text-xl">•Match</h1>
                        <h2>
                           Nosso associado reserva o pedido em poucos minutos
                           após a notificação.
                        </h2>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-base-100 w-full h-auto md:-mt-24 pb-4">
            <div className="max-w-6xl mx-auto w-full flex flex-col relative px-4">
               <div className="hidden md:flex w-full absolute justify-start -ml-10 mt-36">
                  <Image src={Arrow4} alt="Arrow3" />
               </div>
               <div className="hidden md:flex w-full absolute justify-center -ml-28 mt-[25%]">
                  <Image src={Arrow5} alt="Arrow3" />
               </div>

               <div className="flex flex-col md:flex-row items-center md:mt-16 justify-around">
                  <div className="flex w-full justify-center md:hidden">
                     <Image src={Arrow2} alt="Arrow2" />
                  </div>
                  <div className="flex flex-col md:ml-10 md:items-start items-center max-w-md mx-auto text-primary">
                     <Image
                        src={Juninho3Post}
                        quality={100}
                        alt="Juninho2CartPhone"
                     />

                     <div className="flex flex-col">
                        <h1 className="font-semibold text-xl">•Logística</h1>
                        <h2>
                           Nossa equipe recebe o produto para conferência e
                           despacha para o endereço de nosso cliente.
                        </h2>
                     </div>
                  </div>
                  <div className="hidden md:flex justify-center w-full absolute bottom-28 mr-24">
                     <Image src={Arrow6} alt="Arrow3" />
                  </div>
                  <div className="flex w-full justify-center md:hidden">
                     <Image src={Arrow2} alt="Arrow2" />
                  </div>
                  <div className="flex flex-col gap-8">
                     <div className="flex flex-col md:items-start items-center max-w-md mx-auto text-primary">
                        <Image
                           src={Girl2BuyPhone}
                           quality={100}
                           alt="Girl2BuyPhone"
                        />

                        <div className="flex flex-col">
                           <h1 className="font-semibold text-xl">
                              •Recebimento
                           </h1>
                           <h2>
                              O cliente recebe nosso produto em um prazo médio
                              de 10 dias após a confirmação do pagamento.
                           </h2>
                        </div>
                     </div>

                     <div className="flex flex-col md:items-start items-center max-w-md mx-auto text-primary">
                        <div className="flex w-full justify-center md:hidden">
                           <Image src={Arrow2} alt="Arrow2" />
                        </div>
                        <Image
                           src={Juninho2AirPlane}
                           quality={100}
                           alt="Juninho2AirPlane"
                        />

                        <div className="flex flex-col">
                           <h1 className="font-semibold text-xl">
                              •Ganho de milhas
                           </h1>
                           <h2>
                              Nosso associado recebe as milhas ou pontos ganhos
                              com a compra e pode usar como quiser.
                           </h2>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-base-200 w-full">
            <div className="max-w-6xl mx-auto pt-10 md:py-24 px-4 flex flex-col">
               <div className="text-center flex flex-col items-center">
                  <h1 className="text-primary/20 uppercase text-5xl md:text-8xl font-bold md:absolute md:leading-3">
                     COMPARE
                  </h1>
                  <h2 className="text-primary md:w-1/3 uppercase tracking-widest text-xl font-semibold md:mt-6">
                     ENTENDA nossos diferencias e faça a sua melhor escolha
                  </h2>
               </div>
               <div className="grid grids-cols-1 md:grid-cols-4 gap-8 py-24 md:p-0">
                  <div className="card bg-base-100 shadow-xl p-5">
                     <figure>
                        <Image src={ShildPng} quality={100} alt="ShildPng" />
                     </figure>
                     <div className="card-body">
                        <h2 className="card-title">Segurança</h2>
                        <p>
                           Garantimos a segurança nas transações entre usuários
                           e privacidade de dados entre todos os envolvidos.
                        </p>
                     </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl p-5">
                     <figure>
                        <Image src={ShildPng} quality={100} alt="ShildPng" />
                     </figure>
                     <div className="card-body">
                        <h2 className="card-title">Segurança</h2>
                        <p>
                           Garantimos a segurança nas transações entre usuários
                           e privacidade de dados entre todos os envolvidos.
                        </p>
                     </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl p-5">
                     <figure>
                        <Image src={ShildPng} quality={100} alt="ShildPng" />
                     </figure>
                     <div className="card-body">
                        <h2 className="card-title">Segurança</h2>
                        <p>
                           Garantimos a segurança nas transações entre usuários
                           e privacidade de dados entre todos os envolvidos.
                        </p>
                     </div>
                  </div>
                  <div className="card bg-base-100 shadow-xl p-5">
                     <figure>
                        <Image src={ShildPng} quality={100} alt="ShildPng" />
                     </figure>
                     <div className="card-body">
                        <h2 className="card-title">Segurança</h2>
                        <p>
                           Garantimos a segurança nas transações entre usuários
                           e privacidade de dados entre todos os envolvidos.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-primary w-full">
            <div className="max-w-6xl mx-auto px-4 w-full flex flex-col py-16">
               <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex justify-start max-w-lg">
                     <div className="flex flex-col items-center text-center md:text-start md:items-start gap-4">
                        <h1 className="text-3xl text-base-100">
                           Compre pelo Whatsapp
                           <br /> Tire suas duvidas juntamente com o nosso
                           consultor.
                        </h1>
                        <button className="btn btn-success text-base-100 w-60">
                           Clique aqui
                        </button>
                     </div>
                  </div>
                  <div className="flex w-64 mt-10 justify-end md:-mt-32">
                     <Image src={WhatsappImg} quality={100} alt="WhatsappImg" />
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-base-100 w-full">
            <div className="max-w-6xl mx-auto px-4 w-full pt-16 pb-10">
               <div className="text-center flex flex-col items-center">
                  <h1 className="text-primary/20 uppercase text-5xl md:text-8xl font-bold md:absolute md:leading-3">
                     Depoimentos
                  </h1>
                  <h2 className="text-primary uppercase tracking-widest text-xl font-semibold md:mt-6">
                     de alguns de nossos clientes
                  </h2>
               </div>
               <Carousel
                  infiniteLoop
                  autoPlay
                  interval={5000}
                  showIndicators={false}
                  swipeable={false}
                  showStatus={false}
                  showThumbs={false}
                  className="max-w-6xl mx-auto"
                  renderArrowPrev={(onClickHandler, hasPrev, label) =>
                     hasPrev && (
                        <button
                           type="button"
                           onClick={onClickHandler}
                           title={label}
                           className="btn btn-circle border-transparent text-black bg-base-100 shadow-md shadow-black/40 absolute z-10 top-[40%] left-4"
                        >
                           ❮
                        </button>
                     )
                  }
                  renderArrowNext={(onClickHandler, hasNext, label) =>
                     hasNext && (
                        <button
                           type="button"
                           onClick={onClickHandler}
                           title={label}
                           className="btn btn-circle border-transparent text-black bg-base-100 shadow-md shadow-black/40 absolute z-10 top-[40%] right-4"
                        >
                           ❯
                        </button>
                     )
                  }
               >
                  <CardDepoiments
                     name="Anna Brisa"
                     instagram="www.instagram.com/annabrisaa"
                     linkVideo="https://www.youtube.com/embed/pMftaexP7RY?autoplay=0&controls=0&showinfo=0&playlist=pMftaexP7RY"
                     image={AnaImg}
                     profissional="Digital influencer"
                     depoiment="Foi uma experiência muito boa de compra!"
                  />
                  <CardDepoiments
                     name="Brendha Crizel"
                     instagram="www.instagram.com/brendhacrizel/"
                     linkVideo="https://www.youtube.com/embed/VswfBYbeWFU?autoplay=0&controls=0&showinfo=0&playlist=VswfBYbeWFU"
                     image={AnaImg}
                     profissional="Criador(a) de conteúdo digital"
                     depoiment="A BuyPhone tem o melhor preço do mercado e você pode escolher como quer pagar"
                  />
                  <CardDepoiments
                     name="Bárbara Brunca"
                     instagram="www.instagram.com/barbarabrunca/"
                     linkVideo="https://www.youtube.com/embed/OhEwSZSrRUY?autoplay=0&controls=0&showinfo=0&playlist=OhEwSZSrRUY"
                     image={AnaImg}
                     profissional="Criador(a) de conteúdo digital"
                     depoiment="É uma nova forma muito legal, de comprar produtos da apple!"
                  />
               </Carousel>
            </div>
         </div>
         <div className="bg-primary w-full">
            <div className="max-w-6xl mx-auto flex flex-col px-4 pt-24 relative">
               <div className="text-center flex flex-col items-center">
                  <h1 className="text-base-100/20 uppercase text-5xl md:text-8xl font-bold md:absolute md:leading-3">
                     Dúvidas frequentes
                  </h1>
                  <h2 className="text-base-100 uppercase tracking-widest text-xl font-semibold md:mt-6">
                     Dúvidas frequentes
                  </h2>
               </div>
               <div className="w-32 h-auto absolute -left-24 top-10 hidden md:block ">
                  <div className="w-32 h-32 -rotate-[40deg] border-[5px] border-base-100 rounded-3xl absolute ml-14 mt-2 "></div>
                  <div className="w-32 h-32 -rotate-[40deg] border-[5px] border-base-100 rounded-3xl"></div>
               </div>
               <AccordionComponent
                  data={[
                     {
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        paragraph:
                           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                     },
                     {
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        paragraph:
                           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                     },
                     {
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        paragraph:
                           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                     },
                     {
                        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        paragraph:
                           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                     },
                  ]}
               />
            </div>
         </div>
      </>
   )
}

export default Home
