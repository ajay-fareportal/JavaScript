import Header from "./Header";
import EmployeeList from "./EmployeeListUsingHooks";
// import AddEmployee from "./AddEmployee";
import employees from "../data/employeesData";
import Counter from "./Hooks/Counter";
import AddEmployeeUsingHooks from "./Hooks/AddEmployeeUsingHooks";


function App() {
  const apiUri = 'https://localhost:5001/Employee/employees';
  return (
    <div className="container">
      <Header />
      {/* <SearchBar/> */}
      {/* <Counter/> */}
      {/* <EmployeeList
        employees = {apiUri}
      /> */}
      <AddEmployeeUsingHooks />
    </div>
  );
}

export default App;
