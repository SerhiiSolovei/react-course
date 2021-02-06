import React, { useContext } from 'react';

const MyContext = React.createContext();

const UseContext = () => {
  return (
    <MyContext.Provider value="How are you?">
      <Child />
    </MyContext.Provider>
  );
};

const Child = () => {
  const value = useContext(MyContext);

  return <p style={{marginTop:'50px', marginBottom:'50px'}}>{value}</p>
};

export default UseContext;
