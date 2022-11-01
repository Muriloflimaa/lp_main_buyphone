import Image, { StaticImageData } from 'next/image'

interface CardProps {
   image: string | StaticImageData
   title: string
   paragraph: string
}

const CardCompare = ({ image, title, paragraph }: CardProps) => {
   return (
      <div className="card bg-base-100 shadow-xl py-3 flex-row md:flex-col duration-300 transition-all md:hover:scale-105">
         <figure>
            <Image src={image} quality={100} alt="Imagem" />
         </figure>
         <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{paragraph}</p>
         </div>
      </div>
   )
}

export default CardCompare
