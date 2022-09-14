import "./App.css";
import { Greeting } from "./components/Greeting";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    firstName: "Ramy",
    lastName: "Marghany",
  };

  const personList = [
    { firstName: "Thomas", lastName: "Muller" },
    { firstName: "Frank", lastName: "Ribery" },
  ];
  return (
    <div className="App">
      <Greeting name={"Ramy"} messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} />
    </div>
  );
}

export default App;
