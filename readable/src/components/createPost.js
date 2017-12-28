import React, { Component } from 'react'
import { Modal, PageHeader, Button, Form, FormGroup, Col, FormControl, Dropdown, Glyphicon, MenuItem } from 'react-bootstrap'
import MdCreate from 'react-icons/lib/md/create'
import '../index.css'

import * as APIHelper from '../utils/api-helper'
import {connect} from 'react-redux'

class CreatePost extends Component {

    state = {
        showModal: false,
        categories: []
    }

    getCategoryList = () => {
        APIHelper.loadCategories().then((response) => {
            this.setState({categories: response.data.categories});
        })
    }

    createPost(data) {
        APIHelper.createPost(data).then((response) => {
            console.log(response.data)
            this.close();
            this.getCategoryList();
        })
    }

    open = () => this.setState({showModal: true})
    close = () => this.setState({showModal: false})

    componentDidMount() {
        this.getCategoryList();
    }

    handleSubmit = (event) => {
        event.preventDefault()

        var data = {
            'id': require('uuid/v4')(),
            'timestamp': Date.now(),
            'title': event.target['title'].value,
            'body': event.target['body'].value,
            'author': event.target['author'].value,
            'category': event.target['category'].value
        }

        this.createPost(data)
    }

    render() {
        return(
            <div>
              <PageHeader>
                Posts
                <Dropdown id="dropdown-custom-1" className='pull-right'>
                  <Dropdown.Toggle>
                    Sort
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="super-colors">
                    <MenuItem eventKey="1">Title</MenuItem>
                    <MenuItem eventKey="2">Time</MenuItem>
                    <MenuItem eventKey="3">Votes</MenuItem>
                  </Dropdown.Menu>
                </Dropdown>
                <Button bsStyle="success" className='pull-right mr10' onClick={this.open} >
                  <MdCreate/>
                </Button>
              </PageHeader>

              <Modal show={this.state.showModal}>
                <Modal.Body>
                  <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="title">
                      <Col sm={12}>
                        <FormControl type="text" placeholder="Title" name='title' />
                      </Col>
                    </FormGroup>
                    <FormGroup controlId="body">
                      <Col sm={12}>
                        <FormControl type="text" placeholder="Body" name='body' />
                      </Col>
                    </FormGroup>
                    <FormGroup controlId="author">
                      <Col sm={12}>
                        <FormControl type="text" placeholder="Author" name='author' />
                      </Col>
                    </FormGroup>
                    <FormGroup controlId="category-select">
                      <Col sm={12}>
                        <FormControl componentClass="select" placeholder="Category" name='category'>
                            {this.state.categories.map(category =>
                                <option value={category.name} key={category.name}>{category.name}</option>
                            )}
                        </FormControl>
                      </Col>
                    </FormGroup>
                    <FormGroup controlId='actions'>
                      <div className='container'>
                        <Button bsStyle="primary" type='submit'>Create Post</Button>&nbsp;
                        <Button onClick={this.close} bsStyle='default'>Close</Button>
                      </div>
                    </FormGroup>
                  </Form>
                </Modal.Body>
              </Modal>
            </div>
        )
    }

}
export default connect()(CreatePost)
