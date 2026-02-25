import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Marquee } from './components/sections/Marquee'
import { Work } from './components/sections/Work'
import { Services } from './components/sections/Services'
import { About } from './components/sections/About'
import { Testimonials } from './components/sections/Testimonials'
import { Contact } from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
