import { useEffect, useState } from 'react';
import { Route, Routes, useLocation  } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';

import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';

// Start
import ECommerce from './pages/Dashboard/ECommerce';
import Documents from './pages/Documents/Documents';
import AddInternalDoc from './pages/Documents/Internal/AddInternalDoc';

import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
//import '@aws-amplify/ui-react/styles.css';
import { getCurrentUser } from 'aws-amplify/auth';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  // useEffect(() => {
  //   checkAuthStatus();
  // }, []);

  // const checkAuthStatus = async () => {
  //   try {
  //     await getCurrentUser();
  //     setIsAuthenticated(true);
  //   } catch (error) {
  //     setIsAuthenticated(false);
  //   }
  //   setLoading(false);
  // };



  return (
    <>
      <Authenticator>
        {/* Wrap your entire app with Authenticator */}
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          {/* Dashboard */}
          
          <Route
            index
            element={
              <>
                <PageTitle title="Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                {/* {isAuthenticated ? <ECommerce /> : <SignIn/>} */}
                <ECommerce />
                
              </>
            }
          />

          {/* Docs */}
          <Route
            path="/documents"
            element={
              <>
                <PageTitle title="Documents | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Documents />
              </>
            }
          />
          <Route
            path="/documents/internal/add"
            element={
              <>
                <PageTitle title="Add Internal Doc | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <AddInternalDoc />
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Profile />
              </>
            }
          />
          <Route
            path="/forms/form-elements"
            element={
              <>
                <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormElements />
              </>
            }
          />

          {/* Annuaire */}
          <Route
            path="/forms/form-layout"
            element={
              <>
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormLayout />
              </>
            }
          />

          {/* Autres Pages */}
          <Route
            path="/tables"
            element={
              <>
                <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Tables />
              </>
            }
          />

          <Route
            path="/settings"
            element={
              <>
                <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Settings />
              </>
            }
          />
          <Route
            path="/chart"
            element={
              <>
                <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Chart />
              </>
            }
          />
          <Route
            path="/ui/alerts"
            element={
              <>
                <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Alerts />
              </>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <>
                <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Buttons />
              </>
            }
          />


          <Route
            path="/auth/signin"
            element={
              <>
                <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <SignIn />
              </>
            }
          />
          <Route
            path="/auth/signup"
            element={
              <>
                <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <SignUp />
              </>
            }
          />


        </Routes>
      )}
      </Authenticator>
    </>
  );
}

export default App;
