import logo from './logo.svg';
import './App.css';
import AddEmployee from './employees/addemployee';

function App() {
  return (
    <div className="container">
    <AddEmployee/>
    </div>
  );
}
class ArrayNodeComponent extends Component {

  // other code ...
  // like your initialisation of your state
  // and other functions

  addEmptyItem() {
    const { values } = this.state;
    this.setState({
      values: [...values, ""]
    });
  }

  render() {
    return (
      <form id="test">
        {
          /* this is your values map routine, shortened */
          this.props.values.map(function(v, i) { /*...*/ })
        }
        <button onClick={() => this.addEmptyItem()}>Add</button>
      </form>
    );
  }

}


export default App;
