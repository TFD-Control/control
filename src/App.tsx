import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

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

import { Authenticator, View } from '@aws-amplify/ui-react';
//import '@aws-amplify/ui-react/styles.css';
import { getCurrentUser } from 'aws-amplify/auth';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  //const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      await getCurrentUser();
      setIsLoggedIn(true);
      console.log(true);
    } catch (error) {
      setIsLoggedIn(false);
      console.log(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  return (
    <>
      {/* <Authenticator></Authenticator> */}

      {/* <Authenticator.Provider> */}

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
                {isLoggedIn ? <ECommerce /> : <Navigate to="auth/signIn" />}

              </>
            }
          />

          <Route
            path="/dashboard"
            element={
              <>
                <PageTitle title="Documents | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                {isLoggedIn ? <ECommerce /> : <Navigate to="/" />}
              </>
            }
          />

          {/* Docs */}
          <Route
            path="/documents"
            element={
              <>
                <PageTitle title="Documents | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                {/* <Documents /> */}
                {/* {isLoggedIn === null ? null : isLoggedIn ? <ECommerce /> : <Documents />} */}
                {isLoggedIn ? <Documents /> : <Navigate to="auth/signIn" />}
              </>
            }
          />
          <Route
            path="/documents/internal/add"
            element={
              <>
                <PageTitle title="Add Internal Doc | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                {/* <AddInternalDoc /> */}
                {isLoggedIn ? <AddInternalDoc /> : <Navigate to="auth/signIn" />}
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                {/* <Profile /> */}
                {/* {isLoggedIn === null ? null : isLoggedIn ? <ECommerce /> : <Profile />} */}
                {isLoggedIn ? <Profile /> : <Navigate to="auth/signIn" />}
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
            path="/auth/signin"
            element={
              <>
                <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                {/* {isLoggedIn === null ? null : isLoggedIn ? <SignIn /> : <Navigate to="/" />} */}
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

      {/* </Authenticator.Provider> */}


    </>
  );
}

export default App;
