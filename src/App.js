import './App.css';
import Filler from './components/Filler';
import Footer from './components/Footer';
import Header from './components/Header';
import Byline from './components/Byline';
import Headline from './components/Headline';
import Spacer from './components/Spacer';
import BabylonExperience from './components/BabylonExperience';

function App() {
  return (
    <div className="App">
      <Header />
      <Headline />
      <Byline text="Firm yet flexible pseudo-rigid watch band clasps with embedded rare earth magnets, ending forever the need for clasp geometry." textPosition="left" />
      <Byline text="Custom-machined screens for a near-frictionless surface with subatomic smoothness." textPosition="right" />
      <Byline text="Quantum metamaterial construction bends gravity waves for levitation in all virtual exhibitions and certain breezes." textPosition="left" />
      <BabylonExperience />
      <Spacer height={100} />
      <Footer />
    </div>
  );
}

export default App;
