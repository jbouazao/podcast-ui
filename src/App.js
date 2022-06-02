import './App.css';
import Layout from './Layout/Layout'
import HeaderPage from './components/HeaderPage/HeaderPage'
import About from './components/About/About';
import SliderExperiences from './components/SliderExperiences/SliderExperiences';
import Benefits from './components/Benefits/Benefits';
import Episodes from './components/Episodes/Episodes';
import Sponsor from './components/Sponsor/Sponsor';

function App() {
  return (
		<Layout>
			<HeaderPage/>
			<About />
			<SliderExperiences />
			<Benefits />
			<Episodes />
			<Sponsor />
		</Layout>
  );
}

export default App;
