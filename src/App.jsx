import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";



export default function App(){
  return(
    <div className="w-screen min-h-screen">
        <EmployeeDashboard/>
    </div>
  )
}