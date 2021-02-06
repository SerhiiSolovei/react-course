import React, { useState, useContext, useEffect } from 'react';

const UseEffect = () => {
  const [ value, setValue ] = useState(0);
  const [ visible, setVisible ] = useState(true);

  if (visible) {
    return (
      <div>
        <button
          onClick={() => setValue((value) => value + 1)}>+</button>
        <button
          onClick={() => setVisible(false)}>hide</button>
        <Notification />
        {/* <ClassCounter value={value}/> */}
        <HookCounter value={value}/>
      </div>
    );
  } else {
    return <button
      onClick={() => setVisible(true)}>show</button>
  }
};

const Notification = () => {

  const [ visible, setVisible ] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {setVisible(false)}, 1500)

    return () => {clearTimeout(timeout)}
  }, []);

  return (
    <div style={{paddingTop: '10px', fontSize: '20px'}}>
      { visible && <p>Hello</p>}
    </div>)
};

const HookCounter = ({ value }) => {

  useEffect(()=> {
    console.log('mount')

    return () => console.log('unMount')// like a componentWillUnmount()

  }, []); // like a componentDidMount()

  useEffect(()=> console.log('update')); // like a componentDidUpdate()

  return <p> {value} </p>
};

class ClassCounter extends React.Component {
  componentDidMount() {
    console.log('class: mount');
  };

  componentDidUpdate(props) {
    console.log('class: update');
  };

  componentWillUnmount() {
    console.log('class: unmount');
  };

  render() {
    return <p>{this.props.value}</p>
  };
};

export default UseEffect;
