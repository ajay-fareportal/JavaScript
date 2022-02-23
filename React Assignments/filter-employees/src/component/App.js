import EmployeeList from "./EmployeeListUsingClass";
import Header from "./Header";
import AddEmployee from "./AddEmployee";
import employees from "../data/employeesData";


function App() {
  return (
    <div className="container">
      <Header/>
      {/* <SearchBar/> */}
      <AddEmployee/>
      {/* <EmployeeList
        employees = {employees}
      /> */}
    </div>
  );
}

export default App;
