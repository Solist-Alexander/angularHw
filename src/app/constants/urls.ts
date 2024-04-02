const baseURL = 'https://jsonplaceholder.typicode.com'

const users = `${baseURL}/users`
const posts = `/posts`
const urls = {
  users: {
    base: users,
    postsByIdUser:(id:number) => `${users}/${id}${posts}`
}
}

export {
  urls
}
