import './App.css';
import Layout from './Layout/Layout'
import HeaderPage from './components/HeaderPage/HeaderPage'
import About from './components/About/About';
import SliderExperiences from './components/SliderExperiences/SliderExperiences';

function App() {
  return (
		<Layout>
			<HeaderPage/>
			<About />
			<SliderExperiences />
		</Layout>
  );
}

export default App;
