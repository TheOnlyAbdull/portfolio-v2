import Experience from "./component/Experience"
import Footer from "./component/Footer"
import Header from "./component/header"
import Hero from "./component/Hero"
import Skills from "./component/Skills"

function App() {
  return (
    <div className="bg-neutral-900 font-plex text-gray-200">
      <Header/>
      <Hero/>
      <Experience/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App
