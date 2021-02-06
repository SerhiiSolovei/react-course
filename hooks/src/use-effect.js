import React, { useState, useEffect, useCallback, useMemo } from 'react';

const UseEffect = () => {
  const [ value, setValue ] = useState(1);
  const [ visible, setVisible ] = useState(true);

  if (visible) {
    return (
      <div>
        <button
          onClick={() => setValue((value) => value + 1)}>+</button>
        <button
          onClick={() => setVisible(false)}>hide</button>
        <PlanetInfo id={value}/>
        {/* <Notification />
        <ClassCounter value={value}/>
        <HookCounter value={value}/> */}
      </div>
    );
  } else {
    return <button
      onClick={() => setVisible(true)}>show</button>
  }
};

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
    .then((res) => res.json())
    .then((data) => data);
}

const useRequest = (request) => {

  const initialState = useMemo(()=> ({
    data: null,
    loading: true,
    error: null
  }), []);

  const [ dataState, setDataState ] = useState(initialState);

  useEffect(()=> {
    setDataState(initialState);
    let cancelled = false;

    request()
      .then(data => !cancelled && setDataState({
        data,
        loading: false,
        error: null
      }))
      .catch(error => !cancelled && setDataState({
        data: null,
        loading: false,
        error
      }))
    return () => cancelled = true
  }, [ request, initialState ]);

  return dataState;
};

const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanet(id), [id]);

  return useRequest(request);
};

const PlanetInfo = ({id}) => {

  const { data, loading, error } = usePlanetInfo(id);

  if (error) {
    return <div>Something is wrong</div>
  }

  if (loading) {
    return <div>loading...</div>
  }
  return (
    <div style={{padding: '10px'}}>{`${id} - ${data.name}`}</div>
  );
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
