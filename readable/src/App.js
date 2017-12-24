import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/navbar'
import ListPosts from './components/listPosts'
import CreatePost from './components/createPost'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <div className='container'>
          <CreatePost/>
          <ListPosts/>
        </div>
      </div>
    );
  }

}

export default App;
