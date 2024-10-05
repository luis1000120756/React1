import './App.css';
import Header from './componentes/header.js';
import Nav from './componentes/nav.js';
import './componentes/nav.css'
import Section from './componentes/section.js'
import Footer from './componentes/footer.js'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header />
      <Section/>
      <Footer/>
      
    </div>
  );
}

export default App;
