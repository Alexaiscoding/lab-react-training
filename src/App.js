import './App.css';
import IdCard from "./Component/IdCard.jsx";
import Greetings from './Components/Greetings';

function App () {
  return (
<div className="App">
{/* iteration 1 */}     
 
    <h1>IdCard</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

{/* iteration 2 */}

<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>
<h2>Iteration 3</h2>
<Random min={1} max={6}/>
<Random min={1} max={100}/>



      </div>
  );
}
export default App;
