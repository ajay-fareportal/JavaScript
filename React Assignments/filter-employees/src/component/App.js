import EmployeeList from "./EmployeeListUsingClass";
import Header from "./Header";
import SearchBar from "./SearchBar";
import employees from "../data/employeesData";

function App() {
  return (
    <div className="container">
      <Header/>
      <SearchBar/>
      <EmployeeList
        employees = {employees}
      />
    </div>
  );
}

export default App;
