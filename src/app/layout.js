import Chakra from '../component/chakra'
import './globals.css'

export default function RootLayout({children}) {
  return (
    <html lang="fr">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="./favicon.ico" />
        <link rel="shortcut icon" href="./favicon.ico" />
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
        <link rel="apple-touch-icon" href="./favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Quick start for next13 app fodler with chakra ui"
        />
        <meta
          property="og:description"
          content="Quick start for next13 app fodler with chakra ui"
        />
        <meta property="og:type" content="website" />
        <meta property="business:contact_data:locality" content="Lyon" />
        <meta property="business:contact_data:country_name" content="France" />
        <meta property="business:contact_data:email" content="mail@gmail.com" />
      </head>
      <body>
        <Chakra>{children}</Chakra>
      </body>
    </html>
  )
}
