import { useState } from 'react';
import './App.css';
import Tag from './components/Tag';

function App() {
  const [tags, setTags] = useState({});
  const [textBoxVisible, showTextBox] = useState(false);
  const [input, setInput] = useState('');

  const [clickedCoords, setClickCoords] = useState({ top: 0, left: 0 });

  const handleClick = (e) => {
    console.log({ e: e });
    setInput('');

    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; //y position within the element.
    console.log('Left? : ' + x + ' ; Top? : ' + y + '.');

    setClickCoords({ top: y, left: x });
    showTextBox(true);
  };

  const submitText = (e) => {
    e.preventDefault();
    console.log({ e });

    setTags({
      ...tags,
      [`${clickedCoords.top}_${clickedCoords.left}`]: input,
    });
    showTextBox(false);
    setInput('');
  };

  console.log({ tags });

  return (
    <div className="App flex flex-col align-center">
      <h2 className="text-3xl font-bold underline">Hello Uber!</h2>

      <div className="w-96 h-96 flex-row mt-10 relative">
        <img
          className="w-96 h-96"
          src="https://picsum.photos/400"
          alt=""
          onClickCapture={handleClick}
        />
        <form
          style={{
            visible: false,
            display: textBoxVisible ? 'flex' : 'none',
            border: '1px solid #ccc',
            position: 'absolute',
            top: clickedCoords.top,
            left: clickedCoords.left,
          }}
          onSubmit={submitText}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            // className="mt-10"
          />
        </form>

        {Object.keys(tags).map((tag) => (
          <Tag
            text={tags[tag]}
            top={tag.split('_')[0]}
            left={tag.split('_')[1]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
