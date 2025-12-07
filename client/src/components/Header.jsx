import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0'>
      <img
        src={assets.header_img}
        alt='Header Image'
        className='w-36 h-36 rounded-full mb-6'
      />
      <h1 className='text-3xl font-bold text-gray-800'>
        Welcome to Our Application{' '}
        <img
          className='w-8 aspect-square'
          src={assets.hand_wave}
          alt='Hand Wave emoji'
        />
      </h1>
    </div>
  );
};

export default Header;
