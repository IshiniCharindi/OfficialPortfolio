// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import PortfolioLayout from "./Components/HeaderComponent/PortfolioLayout.jsx";
import Toast from "./Components/Toast.jsx";
import LoadingSpinner from './Components/LoadingSpinner.jsx';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust time as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoading && <LoadingSpinner />}

            {/* Your toast implementation needs state management */}
            {/* {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: '' })}
        />
      )} */}

            {!isLoading && <PortfolioLayout />}
        </div>
    );
}

export default App;