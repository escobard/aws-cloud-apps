import Image from 'next/image'

import Landing from "../pages/Home";

import { Header, Footer } from "../components";

export default function Home() {
  return (
      <>
        <Header/>
        <Landing />
        <Footer/>
      </>
  )
}
