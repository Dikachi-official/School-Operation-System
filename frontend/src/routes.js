import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./views/Login";
import Signup from "./views/Signup";
import Profile from "./views/Profile";
import AssignmentList from "./views/AssignmentList";
import AssignmentDetail from "./views/AssignmentDetail";
import AssignmentCreate from "./views/AssignmentCreate";

const BaseRouter = () => (
  <Hoc>
    <Route exact path="/" component={AssignmentList} />
    <Route exact path="/create/" component={AssignmentCreate} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/signup/" component={Signup} />
    <Route exact path="/assignments/:id" component={AssignmentDetail} />
    <Route exact path="/profile/:id" component={Profile} />
  </Hoc>
);

export default BaseRouter;
