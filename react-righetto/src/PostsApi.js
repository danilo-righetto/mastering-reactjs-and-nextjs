import { Component } from 'react';

class PostsApi extends Component {
  state = {
    counter: 0,
    posts: []
  };

  componentDidMount() {
    console.log('componentDidMount On');
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((posts, index) => {
      return { ...posts, cover: photosJson[index].url }
    });

    this.setState({ posts: postsAndPhotos });

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(posts => this.setState({ posts }));
  }

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <div className="post">
              <img src={post.cover} alt={post.title} />
              <div key={post.id} className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  };
}

export default PostsApi;