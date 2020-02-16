import React from "react";
// import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Variants, Summary, Packs, Sidebar, Topbar, Thanks, Reservation } from "./components";
import PropType from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";



import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";

const browserHistory = createBrowserHistory();

const Routes = props => {
  return (
    <div className="wrapper">
      <Topbar />
      <Sidebar />
      <div className="main">
        <div className="content">
          <Router history={browserHistory}>
            <Switch>
              <Route exact path="/" component={() => <Variants {...props} />} />
              <Route exact path="/packs" component={() => <Packs {...props} />} />
              <Route exact path="/reservation" component={() => <Reservation {...props} />} />
              <Route path="/summary" component={() => <Summary {...props} />} />
              <Route path="/thanks" component={() => <Thanks {...props} />} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

Routes.propTypes = {
  store: PropType.object.isRequired
};

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({ dispatch });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Routes);
