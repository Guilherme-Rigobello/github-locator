// TYPE OF PROP
type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};
// REACT
import { useState, KeyboardEvent } from 'react';
// ICON
import { FaSearch } from 'react-icons/fa';
import { TiUserAdd } from 'react-icons/ti';

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState('');

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      loadUser(userName);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center gap-10 bg-gray-700 px-20 py-10 rounded-t-md'>
      <h2 className='text-white flex items-center font-semibold text-xl'>
        <span className='me-2 text-4xl'>
          <TiUserAdd />
        </span>
        Digite um Usuário
      </h2>
      <div className='text-white'>
        <p className='text-gray-400 font-medium text-sm'>
          Veja seu avatar, nome, localização e mais...
        </p>
      </div>
      <div className='flex gap-1'>
        <input
          className='py-3 px-6 rounded-l-[30px] text-sm text-gray-700'
          type='text'
          placeholder='Usuário...'
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className='px-4 bg-white rounded-r-[30px] text-md text-gray-400 hover:text-black transition-all duration-200'
          onClick={() => loadUser(userName)}
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
