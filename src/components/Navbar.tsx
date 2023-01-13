import logo from '../assets/translate.svg';
const Navbar = () => {
  return (
    <div className='fixed flex items-center px-4 w-full bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg'>
      <img loading='lazy' alt='' src={logo} width={50} />
      <p className='text-white text-lg font-semibold'>Translate Hub</p>
    </div>
  );
};

export default Navbar;
