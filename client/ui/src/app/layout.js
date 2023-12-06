import { Inter } from 'next/font/google'
import { NotesProvider } from "../providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// TODO - add favicon
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
      />
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      <title>Notes</title>
    </head>
      <body className={inter.className}>
        <NotesProvider>
          {children}
        </NotesProvider>,
      </body>
    </html>
  )
}
