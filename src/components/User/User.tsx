// PROP
import { UserProps } from '../../types/User';
// ICON
import { MdLocationPin } from 'react-icons/md';

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className='bg-gray-700 mt-3 flex p-7 px-14 rounded-b-md justify-between gap-10 '>
      <img
        className='rounded-full border-2 border-white max-w-[180px]'
        src={avatar_url}
        alt={login}
      />
      <div className='flex flex-col justify-around'>
        <h2 className='capitalize font-bold text-white text-xl '>{login}</h2>
        {location && (
          <p className='flex items-center text-white text-xl'>
            <MdLocationPin />
            <span className='ml-1 text-[16px]'>{location}</span>
          </p>
        )}

        <div className=''>
          <div className='flex mt-3'>
            <p className='text-gray-400 font-medium'>Seguidores:</p>
            <p className='ml-1 font-bold text-white'>{followers}</p>
          </div>
          <div className='flex mt-3'>
            <p className='text-gray-400 font-medium'>Seguindo:</p>
            <p className='ml-1 font-bold text-white'>{following}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
