import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  //runs after render then updates render
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }
  //produces output
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading..</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} | {item.email}
              </li>
            ))}
            ;
          </ul>
        </div>
      );
    }

    return <div className="App"></div>;
  }
}

export default App;
