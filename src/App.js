import { Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/authLayout';
// import MainLayout from './layouts/mainLayout';
import Home from './pages/Home';
import NotFound from "./pages/404/NotFound";
import ProtectedRoute from './utils/routes/ProtectedRoute';
import routes from './utils/routes/routes';
import Login from './pages/admin/authentication/login';
import LossDocument from './pages/forms/LossDocument';
import Evidence from './pages/forms/Evidence';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<AuthLayout><Home /></AuthLayout>} />
      <Route path="/doc/:reference" element={<LossDocument />} />
      <Route path="/evidence/:reference" element={<Evidence />} />
      <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
      {/* {routes.map((route, index)=>{
        return(
          <Route key={index} path={route.path} element={<MainLayout>{<route.component/>}</MainLayout>} />
        )
      })} */}
     
     
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRoute>
                  <route.component />
                </ProtectedRoute>
              }
            />
          ))}
      
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
