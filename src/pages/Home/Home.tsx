// USER PROP
import { UserProps } from '../../types/User';
import User from '../../components/User/User';
import Error from '../../components/Error/Error';
// REACT
import { useState } from 'react';
// ICON
import Search from '../../components/SearchCard/Search';

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    setError(false);

    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };
    setUser(userData);

    if (res.status === 404) {
      setError(true);
      return;
    }
  };
  return (
    <div>
      <Search loadUser={loadUser} />
      {user && !error && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
