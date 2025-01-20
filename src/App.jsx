import { useEffect, useState } from "react"
import { Header, HeroSection, About, Skills, Projects, Experience, Contact, Footer} from "./Components"
import { ThemeContextProvider } from "./context/themeContext"
import { Toaster } from 'react-hot-toast';

function App() {

  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("theme") || "light"
  });

  const changeTheme = (selectedTheme) => {
    setThemeMode(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  }
  
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeContextProvider value={{themeMode, changeTheme}}>

      <Toaster position="top-right" />

      <Header />
      <main>
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />

    </ThemeContextProvider>
  )
}

export default App
