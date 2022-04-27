import React, { useEffect } from 'react'
import EmployeeData from './components/EmployeeData';
import app from './Util/firebase';
import FormData from './components/FormData'
import './styles.css'

function App() {

  useEffect(() => {
    const db = app.database().ref("Employee-data")
    db.on("value", (snapshot) => {
      console.log(snapshot.val());
    })
  }, []);
  return (
    <div className="App">
      <FormData />
      <EmployeeData />
    </div>
  );
}

export default App;
