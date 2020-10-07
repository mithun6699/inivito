import React from 'react';

import Header from './common/Header';
import CoursesPage from './CoursesPage';
import { Route, Switch, Redirect } from 'react-router-dom';

import ManageCoursePage from './ManageCoursePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />

      <Switch>
        <Route path="/clinic" component={CoursesPage} />

        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Redirect from="/about-page" to="about" />
      </Switch>
    </div>
  );
}

export default App;
