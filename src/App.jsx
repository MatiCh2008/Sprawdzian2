
import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [sekcje, setSekcje] = useState([
    'Piłka nożna',
    'Szachy',
    'Robotyka',
    'Pływanie'
  ]);

  const [imieINazwisko, setImieINazwisko] = useState();
  const [numerSekcji, setNumerSekcji] = useState();
  
  const onImieINazwiskoChange = (event) => {
    setImieINazwisko(event.target.value);
  }

  const onNumerSekcjiChange = (event) => {
    setNumerSekcji(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(imieINazwisko);
    if (sekcje[numerSekcji - 1]){
      console.log(sekcje[numerSekcji - 1]);
    }
    else {
      console.log("Nieprawidłowy numer sekcji")
    }
  }

  return (
    <div>
      <h2>Liczba sekcji: {sekcje.length}</h2>
      <ol>
        {sekcje.map(sekcja => (<li key={sekcja}>{sekcja}</li>))}
      </ol>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="imieNazwisko" className="form-label">Imię i nazwisko:</label>
          <input type="text" className="form-control" id="imieNazwisko" onChange={onImieINazwiskoChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="numerSekcji" className="form-label">Numer sekcji:</label>
          <input type="number" className="form-control" id="numerSekcji" onChange={onNumerSekcjiChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Zapisz</button>
      </form>
    </div>
  )
}

export default App
