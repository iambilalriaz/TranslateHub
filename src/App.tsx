import Card from './components/Card';
import Navbar from './components/Navbar';
import Particle from './components/Particles';

const App = () => {
  return (
    <div className='relative h-screen bg-gradient'>
      <Particle />
      <div>
        <Navbar />
        <div className='grid place-items-center h-screen'>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
