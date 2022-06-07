import { Component } from 'react';

class Posts extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'O titulo 1',
        body: 'O body 1'
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'O body 2'
      },
      {
        id: 3,
        title: 'O titulo 3',
        body: 'O body 3'
      },
      {
        id: 4,
        title: 'O titulo 4',
        body: 'O body 4'
      }
    ]
  };

  timeOutUpdate = null;

  componentDidMount() {
    console.log('Oi');
    this.handleTimeOut();
  }

  componentDidUpdate() {
    this.handleTimeOut();
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutUpdate);
  }

  handleTimeOut = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'O titulo 1 novo';
    this.timeOutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 5000);
  }

  render() {
    const { posts, counter } = this.state;
    return (
      <div className="App">
        <h1>Contador: {counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    )
  };
}

export default Posts;