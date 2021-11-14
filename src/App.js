import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    // fetch('https://api.poap.xyz/actions/scan/0x486843aD8adb101584FCcE56E88a09e6f25D16d1') // Merkle
    fetch('https://api.poap.xyz/actions/scan/orrell.eth')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {

    let { isLoaded, items } = this.state;
    console.log(items);
    if (!isLoaded) {
      return <div>Loading ...</div>
    }
    else {
      return (
        <div className="App">

            {items.map(item => (
                <img src={item.event.image_url} width="200" height="200"/>
            ))};
        </div>
      )
    }
  }

}

export default App;
