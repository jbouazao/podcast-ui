import './App.css';
import Layout from './Layout/Layout'
import HeaderPage from './components/HeaderPage/HeaderPage'
import About from './components/About/About';
import SliderExperiences from './components/SliderExperiences/SliderExperiences';
import Benefits from './components/Benefits/Benefits';

function App() {
  return (
		<Layout>
			<HeaderPage/>
			<About />
			<SliderExperiences />
			<Benefits />
		</Layout>
  );
}

export default App;
