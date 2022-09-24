import './App.css';
import User1 from "./users/user1/User1";
import User2 from "./users/user2/User2";

function App() {
  const user = {
    name: "Anna",
    age: 19
  }
    const message = () => {
        alert("Hello World!")
    }
        return (
      <>
        <User1 info={user}/>
        <br/>
        <User2 info={user}/>
          <button onClick={message}> Press me to print a message! </button>
      </>
  );
}

export default App;
