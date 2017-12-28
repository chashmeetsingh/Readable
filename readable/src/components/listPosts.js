import React, { Component } from 'react'
import { Panel, PanelGroup, Button, Glyphicon, Label, Badge } from 'react-bootstrap'
import '../index.css'

import * as APIHelper from '../utils/api-helper'
import TimeAgo from 'react-timeago'

class ListPosts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        this.fetchAllPosts();
    }

    fetchAllPosts() {
        APIHelper.fetchAllPosts().then((response) => {
            this.setState({posts: response.data});
        })
    }

    sortByName() {
        this.setState({ posts: this.posts.sort((a, b) => a.title > b.title) })
    }

    render() {
        return (
            <PanelGroup>
                {this.state.posts.map((post, id) =>
                    <Panel key={id} header={post.title} bsStyle="info">
                        <div>
                            {post.body}
                        </div>
                        <div>
                            <Button bsStyle='success' bsSize='xsmall'><Glyphicon glyph="glyphicon glyphicon-triangle-top"/></Button>&nbsp;
                            <Badge bsSize='large'>{post.voteScore} </Badge>&nbsp;
                            <Button bsStyle='danger' bsSize='xsmall'><Glyphicon glyph="glyphicon glyphicon-triangle-bottom"/></Button>
                        </div>
                        <div>
                            <Label bsStyle="info">{post.category}</Label>&nbsp;
                            <Label bsStyle="warning">{post.author}</Label>&nbsp;
                            <Label><TimeAgo date={post.timestamp} /></Label>
                        </div>
                    </Panel>
                )}
            </PanelGroup>
        );
    };
}

export default ListPosts;
