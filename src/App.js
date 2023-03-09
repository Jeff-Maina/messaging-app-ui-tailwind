import "./App.css";
import Chatbox from "./components/chatBox";
import ContactInfo from "./components/contactinfo";
import Contacts from "./components/contacts";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <div className="header-section">
       <Navbar />
      </div>
      <div className="body-section">
        <Contacts />
        <Chatbox />
        <ContactInfo />
      </div>
    </div>
  );
}

export default App;
