import "./App.css";
import React, { useState } from "react";
import ContactList from "./components/ContactList";
// import SelectedContact from "./components/SelectedContact";

const App = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
     {selectedContactId ? ( <div>Selected Contact View</div> ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  )
}

export default App
