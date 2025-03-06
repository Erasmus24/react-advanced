import Header from './components/Header';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';
import Alert from './components/Alert';
import { Provider } from './components/ui/provider';
import './App.css';
import LandingSection from './components/LandingSection';

function App() {
  return (
    <Provider>
      <Header />
      <LandingSection/>
      <ProjectsSection />
      <ContactMeSection />
      <Footer/>
      <Alert/>
      
    </Provider>
  );
}

export default App;
