import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IDCARD from "./components/IDCARD";
import FORM from "./Form";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
        <Route exact path="/" render={(props) => <FORM/>}/>
        <Route exact path="/id-card" render={(props) => <IDCARD/>}/>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;

const iDCARDData = {
    issuerName: "Issuer Name",
    userimage: "/img/rectangle-2@2x.png",
    country: "IND",
    id: "456712340098",
    idd: "83492087",
    can: "364928370223",
    name: "SIDDHANT GUPTA",
    dob: "20 / 09 / 1994",
    gender: "M",
    birth: "NEW DELHI, INDIA"
};

