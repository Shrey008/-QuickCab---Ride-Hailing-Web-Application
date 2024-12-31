import { createContext, useState, useContext } from 'react';

// Create the context
export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  // Define state variables
  const [captain, setCaptain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to update captain data
  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  // Provide values to the context
  const value = {
    captain,
    setCaptain,
    isLoading,
    setIsLoading,
    error,
    setError,
    updateCaptain,
  };

  // Return the provider
  return (
    <CaptainDataContext.Provider value={value}>
      {children}
    </CaptainDataContext.Provider>
  );
};

// Create a custom hook for easier access to the context
//export const useCaptainContext = () => useContext(CaptainDataContext);

export default CaptainContext;
