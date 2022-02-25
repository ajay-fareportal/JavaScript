import Header from "./Header";
import EmployeeList from "./EmployeeListUsingClassUsingAPI";
// import AddEmployee from "./AddEmployee";
import employees from "../data/employeesData";
import Counter from "./Hooks/CurrentTimeUsingHooks";
import AddEmployeeUsingHooks from "./Hooks/AddEmployeeUsingHooks";
import SinglePageCrudApp from "../singlePageApplication/SinglePageCrudApp";
import MainComponent from '../singlePageApplication/MainComponent'
import EmployeesListData from "../singlePageApplication/EmployeesListData";



function App() {
  const apiUri = 'https://localhost:5001/Employee/employees';
  return (
    <div className="container">
      {/* <Header /> */}
      {/* <SearchBar/> */}
      {/* <Counter/> */}
      <EmployeeList
        employees = {apiUri}
      />
      {/* <MainComponent></MainComponent> */}
      {/* <SinglePageCrudApp
          apiUri = {apiUri}
      /> */}
    </div>
  );
}

export default App;
