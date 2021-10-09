import { useState, useRef } from "react";

const RefComponent = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const numRef = useRef(0);
    /** 
     * The value of the reference is persisted (stays the same) between component re-renderings;
        Updating a reference doesn’t trigger a component re-rendering.
    * 
    */ 
  function incrementAndDelayLogging() {
    setStateNumber(stateNumber + 1);
    numRef.current++;
    setTimeout(
      () => alert(`state: ${stateNumber} | ref: ${numRef.current}`),
      1000
    );
  }

  /** 
     * ref.current.getBoundingClientRect() 
     * return height, witdth, top, right, bottom, left of element
    * 
    */ 

  return (
    <div>
      <h1>useRef Example</h1>
      <button onClick={incrementAndDelayLogging}>delay logging</button>
      <h4>state: {stateNumber}</h4>
      <h4>ref: {numRef.current}</h4>
    </div>
  );
};

export default RefComponent;
