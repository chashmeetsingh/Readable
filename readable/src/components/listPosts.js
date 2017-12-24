import React, { Component } from 'react';
import { Panel, PanelGroup } from 'react-bootstrap'
import '../index.css'

import APIHelper from '../utils/api-helper';
import {
  LOAD_CATEGORIES
} from '../actions'
import {create} from 'apisauce'

class ListPosts extends Component {

  state = {
    posts: [{'hello':'hello'}]
  }

  componentDidMount() {
    this.fetchAllPosts();
  }

  fetchAllPosts() {
    const api = create({
      baseURL: 'http://localhost:5001',
      headers: {
        'Authorization': '123'
      },
      mode: 'cors'
    })

    api.get('/posts')
      .then((response) => {
         this.setState({posts: response.data});
       })
  }

  render() {
    return (
      <div id='posts'>
        <PanelGroup>
          {this.state.posts.map((post, id) =>
            <Panel key={id} header={post.title} bsStyle="primary">
              {post.body}
            </Panel>
          )}
        </PanelGroup>
      </div>
    );
  };
}

export default ListPosts;
