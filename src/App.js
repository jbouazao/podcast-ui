import './App.css';
import Layout from './Layout/Layout'
import HeaderPage from './components/HeaderPage/HeaderPage'
import About from './components/About/About';

function App() {
  return (
		<Layout>
			<HeaderPage/>
			<About />
		</Layout>
  );
}

export default App;
