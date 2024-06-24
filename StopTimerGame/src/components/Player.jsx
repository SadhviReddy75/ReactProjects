import {useState, useRef} from 'react';
export default function Player() {

  const[pName,setPName] = useState(null);
  
  const name = useRef();

  function handleClick(){
    setPName(name.current.value);
    name.current.value='';
  }
  return (
    <section id="player">
      <h2>Welcome { pName ?? 'unknown entity'}</h2>
      <p>
        <input type="text"  ref= {name}/>
        <button onClick = {handleClick}>Set Name</button>
      </p>
    </section>
  );
}
