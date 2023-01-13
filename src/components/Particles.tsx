import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import { particles } from '../utils/tsParticles';
import { Engine } from 'tsparticles-engine';
const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className='absolute top-0 left-0 right-0 bottom-0 hidden md:block'
      id='tsparticles'
      init={particlesInit}
      options={particles}
    />
  );
};
export default Particle;
