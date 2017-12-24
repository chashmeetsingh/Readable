import React, { Component } from 'react'
import { Modal, PageHeader, Button, Form, FormGroup, Col, FormControl } from 'react-bootstrap'
import MdCreate from 'react-icons/lib/md/create'

import {create} from 'apisauce'

class CreatePost extends Component {

  state = {
    showModal: false,
    categories: [
      {
        'name': 'default'
      }
    ]
  }

  getCategoryList() {
    const api = create({
      baseURL: 'http://localhost:5001',
      headers: {
        'Authorization': '123'
      },
      mode: 'cors'
    })

    api.get('/categories')
      .then((response) => {
         this.setState({categories: response.data.categories});
       })
  }

  open = () => this.setState({showModal: true})
  close = () => this.setState({showModal: false})

  componentDidMount() {
    this.getCategoryList();
  }

  render() {
    return(
      <div>
        <PageHeader>
          Posts
          <Button bsStyle="success" className='pull-right' bsSize='large' onClick={this.open}>
            <MdCreate/>
          </Button>
        </PageHeader>

        <Modal show={this.state.showModal}>
          <Modal.Body>
            <Form horizontal>
              <FormGroup controlId="title">
                <Col sm={12}>
                  <FormControl type="text" placeholder="Title" />
                </Col>
              </FormGroup>
              <FormGroup controlId="body">
                <Col sm={12}>
                  <FormControl type="text" placeholder="Body" />
                </Col>
              </FormGroup>
              <FormGroup controlId="author">
                <Col sm={12}>
                  <FormControl type="text" placeholder="Author" />
                </Col>
              </FormGroup>
              <FormGroup controlId="category-select">
                <Col sm={12}>
                  <FormControl componentClass="select" placeholder="Category">
                    {this.state.categories.map(category =>
                      <option value={category.name} key={category.name}>{category.name}</option>
                    )}
                  </FormControl>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button bsStyle="primary">Create Post</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

}
export default CreatePost;
