import './App.css';

function App() {
  return (
    <div className="App">
      
      <>Calculator Application</>
      <br/><br/>

        <label>First Input :&nbsp; 
          <input type='text' name='firstInput'/>
        </label>
      <br/><br/>

        <label>Second Input :&nbsp;
          <input type='text' name='secondInput'/>
        </label>
      <br/><br/>

        <button> + </button> &nbsp; &nbsp;
        <button> - </button> &nbsp; &nbsp;
        <button> * </button> &nbsp; &nbsp;
        <button> / </button>
      <br/><br/>

        <label>Results : &nbsp;
          <input type='text' name='results'/>
        </label>

    </div>
  );
}

export default App;
