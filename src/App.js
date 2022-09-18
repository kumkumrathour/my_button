import AddValue from './component/AddValue';

import './App.css';

function App() {
  const AddVal =[
    {
      id:'e1',
      amount : '0'
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h2>welcome to this webside </h2>
        <AddValue amount= {AddVal[0].amount}/>
       </header>
    </div>
  );
}

export default App;
