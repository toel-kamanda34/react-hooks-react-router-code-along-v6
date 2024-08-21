// UserProfile.js
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
 
function UserProfile() {
 
  const [user, setUser] = useState({}); 
  const params = useParams();
  console.log(params);
  const userId = params.id;
  console.log(params.id)

  useEffect(() =>{
    fetch(`http://localhost:4000/users/${userId}`)
    .then(r => r.json())
    .then(data => {
        setUser(data)
        console.log(data)
    })
    .catch(error => console.error(error))
  }, [userId]);


  if(!user.name){
    return <h1>Loading...</h1>;
  };

  return(
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{user.name}</h1>
      </main>
    </>
  );
};

export default UserProfile;