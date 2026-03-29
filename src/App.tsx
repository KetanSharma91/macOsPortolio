import gsap from "gsap";
import { Draggable } from "gsap/all";

import { Dock, Home, Navbar, Welcome, MobileApps } from "./components"
import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Gallery } from "./windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Home />
      <MobileApps />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Gallery />
    </main>
  )
}

export default App
