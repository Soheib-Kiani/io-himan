/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
// #React
import { useContext, useEffect, useState } from 'react';
// #Context
import AuthContext from '../context/AuthContext';
// #Page
import Welcome from '../pages/welcome';
import Packages from '../pages/packages';
import Whyio from '../pages/whyio';


export default function Home({ data }) {
  // const { username } = useContext(AuthContext);
  // console.log('username',username)
  const [state, setState] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setState(data);
    };
    getData();
  }, []);


  return (
    <div className="">

      {/* <Register /> */}
      {/* <div className="h-16 w-full bg-gray-500 flex justify-around text-2xl">
        {username ? (
          <>
            <span className="h-16 w-16 bg-red-500">{username.first_name}</span>
          </>
        ) : (
          <>
            <Link href="/auth/login">
              <a className="">login</a>
            </Link>
            <Link href="/auth/register">
              <a className="">register</a>
            </Link>
          </>
        )}

        <Link href={'/auth/sms'}>Sms</Link>
      </div> */}
      <Welcome />
      <div className='grid grid-cols-1 md:grid-cols-3'>
      {state.length === 0 ? (
        <div>Loading</div>
      ) : (
        state.map((element) => (
          <Packages product={element} key={element.title}></Packages>
        ))
      )}
      </div>
     
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://127.0.0.1:8000/toturials/get_all_toturial');
  const data = await res.json();
  return { props: { data } };
}
