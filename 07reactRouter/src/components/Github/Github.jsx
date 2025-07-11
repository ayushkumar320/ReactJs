import React, { useEffect } from 'react'

function Github() {

  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/ayushkumar320')
      .then(response => response.json())
      .then(data =>{ 
        console.log(data);
        setData(data)
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="m-4 bg-gray-700 text-white p-4 text-3xl flex items-center justify-between">
  <div>
    <p>Github username: {data.login}</p>
    <p className="text-xl mt-2">Bio: {data.bio}</p>
    <p className="text-xl mt-2">Location: {data.location}</p>
    <p className="text-xl mt-2"><a href="https://github.com/ayushkumar320" target="_blank">Clik Here to visit github</a></p>
  </div>
  <img src={data.avatar_url} alt="GitHub Avatar" className="w-124 h-124 rounded-full object-cover" />
</div>

  )
}

export default Github