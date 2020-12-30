import { useState } from "react";

const Home = () => {
  const onClick = (e) => {
    setName("Azhar");
    setPerson({ city: e.target.innerHTML });
  };

  const [name, setName] = useState("Sohaib");
  const [person, setPerson] = useState({ city: "Lahore" });
  return (
    <div className="home">
      <h1 className="home-h1">Homepage</h1>
      <p>
        My name is {name} and I live in {person.city}
      </p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default Home;
