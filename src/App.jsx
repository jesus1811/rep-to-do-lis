import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./contexts/DataContext";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
