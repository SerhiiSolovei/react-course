import React, {useState} from 'react';

const UseState = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
  );
};

const HookSwitcher = () => {

  const [ color, setColor] = useState('white');
  const [ fontSize, setFontSize ] = useState(14);

  return (
    <div style={{backgroundColor: color, fontSize: `${fontSize}px`}}>
      <button
        onClick={()=> setColor('gray')}>
        Dark
      </button>
      <button
        onClick={()=> setColor('white')}>
        Light
      </button>
      <button
        onClick={()=> setFontSize((fontSize) => fontSize + 1)}>
        +
      </button>
      <button
        onClick={()=> setFontSize((fontSize) => fontSize - 1)}>
        -
      </button>
      <div style={{paddingTop: '10px'}}>Hello World</div>
    </div>
  );
};

export default UseState;
