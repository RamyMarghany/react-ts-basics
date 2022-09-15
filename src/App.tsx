import "./App.css";
import { UserContextProvider } from "./components/context/User/UserContext";
import { User } from "./components/context/User/User";
import { Greeting } from "./components/Greeting";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Parent } from "./components/Parent";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Counter } from "./components/reducer/Counter";
import { LoggedIn } from "./components/state/LoggedIn";

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
      <h2>General TypeScript</h2>
      <Greeting name={"Ramy"} messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <Parent>
        <PersonList names={personList} />
      </Parent>
      <Input value="" handleChange={(event) => console.log(event)} />
      <br />
      <br />
      <Button
        clickHandler={(event, id) => {
          console.log("Clicked", event, id);
        }}
        styles={{ background: "red", border: "none", padding: "1rem 3rem" }}
      />
      <br />
      <br />
      <hr />
      <LoggedIn />
      <br />
      <hr />
      <br />
      <Counter />
      <br />
      <hr />
      <br />
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
