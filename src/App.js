import './App.css';
import Video from './Components/Video';

function App() {
  return (
    <div className="App">
      <h1>Full Stack MERN Tik Tok Clone</h1>
      <Video />

      {/* app container */}
        {/* videos */}

      <div className="app_videos">
        <Video />
        <Video />
      </div>

        {/* 
        <Video />
        <Video />
        <Video />
        <Video />
        */}


    </div>
  );
}

export default App;
