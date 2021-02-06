import React, { useContext } from 'react';

const MyContext = React.createContext();

const UseContext = () => {
  return (
    <MyContext.Provider value="Hello World!!!">
      <Child />
    </MyContext.Provider>
  );
};

const Child = () => {
  const value = useContext(MyContext);

  return <p>{value}</p>
};

export default UseContext;
