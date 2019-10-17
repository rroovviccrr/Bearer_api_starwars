import * as React from "react";
import bearer from "@bearer/js";

const bearerClient = bearer('pk_production_ab40aef8d87e5e6c6ec622582999246ce723cd1ba652f92bd9');
const starwars = bearerClient.integration("starwars");



class App extends React.Component

{
  constructor(props) {
    super(props);
    this.state = {
      data: []
   }

  }

  fetch = () => {
    starwars
      .auth(this.props.authId)
      .get("/starships")
      .then(({ data }) => {
        this.setState({ data: JSON.stringify(data) });
      });
  };

  UNSAFE_componentWillMount() {
    this.fetch();
  }

  render() {
     return <pre>{this.state.data}</pre>;
   }
 }



export default App;
