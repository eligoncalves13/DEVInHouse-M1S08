import './App.css';
import Post from './components/Post';


function App() {
  return (
    <>
    <Post
      photoUser="https://i.pinimg.com/564x/3a/5e/2e/3a5e2e73b54613088e9eeaa6a920147c.jpg"  
      name="Viola Davis"
      date="5m"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      photoPost="https://i.pinimg.com/564x/11/a5/5a/11a55a964c278eec04d849c5d312bfee.jpg"
      liked="John & 25 others"
    />
    </>
  );
}

export default App;
