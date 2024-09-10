import './App.css'
import Banner from './components/banner/Banner'
import Blog from './components/blog/Blog'
import Client from './components/client/Client'
import Header from './components/header/Header'
import Midil from './components/midil/Midil'
import Portfolio from './components/portfolio/Portfolio'
import Reaume from './components/resume/Resume'
import Service from './components/service/Service'
import  Work  from './components/work/Work'
import  Stay from './components/stay/Stay'

function App() {
  

  return (
    <>
      <Header/>
      <Banner/>
      <Service/>
      <Work/>
      <Midil/>
      <Reaume/>
      <Portfolio/>
      <Client/>
      <Blog/>
      <Stay/>

    </>
  )
}

export default App
