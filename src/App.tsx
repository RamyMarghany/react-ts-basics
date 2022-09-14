import "./App.css";
import { Greeting } from "./components/Greeting";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Parent } from "./components/Parent";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
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
      <Parent>
        <PersonList names={personList} />
      </Parent>
      <Button
        clickHandler={(event, id) => {
          console.log("Clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
