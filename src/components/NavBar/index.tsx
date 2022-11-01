import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import LogoImg from '../../assets/images/logolight.webp'
import LogoActiveImg from '../../assets/images/logolight.webp'

interface navBarProps {
   navbar?: boolean
}

export default function NavBar({ navbar }: navBarProps) {
   const [openDrawer, setOpenDrawer] = useState(false)

   const toggleDrawer = () => {
      setOpenDrawer((prevState) => !prevState)
   }

   return (
      <>
         <div className="fixed z-20 w-full">
            <div className="glass">
               <div
                  className={
                     'navbar transition-all duration-300 ' +
                     (navbar
                        ? 'bg-[#212b36] text-white'
                        : 'bg-primary text-base-100')
                  }
               >
                  <div className="max-w-7xl mx-auto w-full px-4">
                     <div className="flex-1">
                        <div
                           className={
                              'w-28 h-auto transition-all duration-300 text-center mt-2 '
                           }
                        >
                           {navbar ? (
                              <a>
                                 <Image
                                    src={LogoActiveImg}
                                    alt="logo"
                                    className="object-contain"
                                 />
                              </a>
                           ) : (
                              <a>
                                 <Image
                                    src={LogoImg}
                                    alt="logo"
                                    className="object-contain"
                                 />
                              </a>
                           )}
                        </div>
                     </div>

                     <div className="flex-none hidden md:flex">
                        {/* para desktop */}
                        <div className="text-sm text-base-100 flex gap-10">
                           <button>
                              <a className="font-medium">Como funciona</a>
                           </button>

                           <button>
                              <a className="font-medium">Diferenciais</a>
                           </button>

                           <button>
                              <a className="font-medium">Depoimentos</a>
                           </button>

                           <button>
                              <a className="font-medium">Contato</a>
                           </button>

                           <button>
                              <a className="font-medium">Blog</a>
                           </button>

                           <button className="btn bg-base-100 normal-case rounded-xl transition-all duration-300 text-primary">
                              Ir para loja
                           </button>
                        </div>
                     </div>
                     <button className="block md:hidden" onClick={toggleDrawer}>
                        <svg
                           className={
                              'swap-off fill-current ' +
                              (navbar ? 'text-white' : 'text-[#212b36]')
                           }
                           xmlns="http://www.w3.org/2000/svg"
                           width="32"
                           height="32"
                           viewBox="0 0 512 512"
                        >
                           <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>
                     </button>
                     {/* para mobile */}
                  </div>
               </div>
            </div>
         </div>

         {/* drawer/para/mobile */}
         <Drawer
            open={openDrawer}
            onClose={toggleDrawer}
            direction="top"
            duration={400}
            className={
               'w-auto h-auto ' +
               (navbar ? 'bg-[#212b36] text-white' : 'bg-white text-[#212b36]')
            }
         >
            <ul className="flex flex-col max-w-md mx-auto text-lg py-10">
               <button
                  className={
                     'p-2 ' + (navbar ? 'text-white' : 'text-[#212b36]')
                  }
                  onClick={toggleDrawer}
               >
                  <a className="font-medium">Entenda melhor</a>
               </button>

               <button
                  className={
                     'p-2 ' + (navbar ? 'text-white' : 'text-[#212b36]')
                  }
                  onClick={toggleDrawer}
               >
                  <a className="font-medium">Como funciona</a>
               </button>

               <button
                  className={
                     'p-2 ' + (navbar ? 'text-white' : 'text-[#212b36]')
                  }
                  onClick={toggleDrawer}
               >
                  <a className="font-medium">Depoimentos</a>
               </button>

               <button
                  className={
                     'p-2 ' + (navbar ? 'text-white' : 'text-[#212b36]')
                  }
                  onClick={toggleDrawer}
               >
                  <a className="font-medium">Dúvidas</a>
               </button>

               <button
                  className={
                     'p-2 ' + (navbar ? 'text-white' : 'text-[#212b36]')
                  }
                  onClick={toggleDrawer}
               >
                  <a className="font-medium">Quem somos</a>
               </button>

               <button className="btn btn-error py-1 rounded-xl transition-all duration-300 text-white">
                  <a>Cadastrar</a>
               </button>
            </ul>
         </Drawer>
      </>
   )
}
