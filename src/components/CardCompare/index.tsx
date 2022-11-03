import Image, { StaticImageData } from 'next/image'

interface CardProps {
   image: string | StaticImageData
   title: string
   paragraph: string
}

const CardCompare = ({ image, title, paragraph }: CardProps) => {
   return (
      <div className="card bg-base-100 md:hover:bg-gradient-to-r from-sky-500 md:hover:to-indigo-500 md:hover:text-base-100 file:cursor-pointer shadow-xl py-3 flex-row md:flex-col duration-300 transition-all md:hover:scale-105">
         <figure className="max-w-[150px] mx-auto max-h-32 pt-10">
            <Image src={image} quality={100} alt="Imagem" />
         </figure>
         <div className="card-body mt-6">
            <h2 className="card-title text-base">{title}</h2>
            <p className="text-xs">{paragraph}</p>
         </div>
      </div>
   )
}

export default CardCompare
