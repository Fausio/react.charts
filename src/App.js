
import './App.css';
import SimplePieChart from './SimplePieChart'


function App() {



  const MyStyle = {

    center: { "text-align": "center" },
    table: {
      "width": "100%"
    }
  }


  return (
    <div className="App">

      <br />


      <table style={MyStyle.table}>
        <tr >

          <td colSpan={2}> <b style={MyStyle.center}>Chars for react   </b></td>

        </tr>
        <tr >

          <td colSpan={2}><hr /></td>

        </tr>
        <tr >

          <td colSpan={2}> Using: recharts.org </td>

        </tr>
        <tr >

          <td colSpan={2}>John</td>

        </tr>

        <tr >

          <td colSpan={2}><hr /></td>

        </tr>
        <tr >

          <td colSpan={2}>
            <SimplePieChart />
          </td>

        </tr>
      </table>




    </div>
  );
}

export default App;
