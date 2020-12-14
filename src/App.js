import './App.css';

const date = new Date().toLocaleTimeString();

function App(props) {
  return (
    <div className='div'>
      <div className='app'>
        <div className='dFlex'>
          <img src={props.proPic} className='proPicStyle' />
          <p className='divInline'>
            <a className='linkStyle' href={props.proLink} target="_blank">{props.name}</a>
            <span className='dateStyle'>{date}</span>
          </p>
        </div>
        <br />
        <img src={props.post} className='postStyle' />
        <div>
          <button className='likeBtn'>Like</button>
          <button className='shareBtn'>Share</button>
        </div>
      </div>
    </div>
  );
}

export default App;