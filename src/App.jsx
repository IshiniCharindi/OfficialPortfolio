import './App.css'
import PortfolioLayout from "./Components/HeaderComponent/PortfolioLayout.jsx";
import toast from "./Components/Toast.jsx";
import Toast from "./Components/Toast.jsx";

function App() {

  return (
    <div>
        {toast.show && (
            <Toast
                message={toast.message}
                type={toast.type}
                onClose={() => setToast({ show: false, message: '', type: '' })}
            />
        )}
        <PortfolioLayout/>
    </div>


  )
}

export default App
