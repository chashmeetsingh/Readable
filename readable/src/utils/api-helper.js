import {create} from 'apisauce'

const api = create({
    baseURL: 'http://localhost:5001',
    headers: {
        'Authorization': 'something'
    }
})

export function loadCategories() {
    return api.get('/categories')
}

export function createPost(data) {
    return api.post('/posts', data)
}

export function fetchAllPosts() {
    return api.get('/posts')
}