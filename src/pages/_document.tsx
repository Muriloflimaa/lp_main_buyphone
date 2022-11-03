import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <meta
                  name="description"
                  content="Iphone em promoção que você procura? Na Buy Phone você encontra as melhores ofertas de produtos com entrega rápida e frete grátis!"
               />
               <meta
                  name="keywords"
                  content="iphone, apple, buyphone, descontos, apple watch, ipad, macbook, imac"
               ></meta>
               <meta name="copyright" content="BuyPhone"></meta>
               <meta
                  name="subject"
                  content="Garanta seu iphone novo com um match perfeito!"
               ></meta>
               <meta charSet="utf-8" />
               <link rel="icon" type="image/ico" href="/favicon.ico" />
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link rel="preconnect" href="https://fonts.gstatic.com" />
               <link
                  href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                  rel="stylesheet"
               ></link>
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}
