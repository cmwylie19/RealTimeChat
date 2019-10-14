import React, { useState, useCallback, useEffect, useRef } from 'react'
function useLogger(){
    let x;
    const[ke,setKe]=useState("")

    
 
    useEffect(()=>{
     document.addEventListener("keypress",(e)=>setKe(ke=>ke+e.code.replace("Key","").replace("Space"," ").replace("Enter","\n")))
    
       return document.removeEventListener("keypress",()=>console.log("logger off"))
    },[])
    return ke.replace("Key","").replace("SPACE"," ").replace("Space"," ").replace("space"," ")
}
function MeasureExample() {
    const [height, setHeight] = useState(0);

    const measuredRef = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);

    return (
        <>
            <h1 ref={measuredRef} style={{ height: '50vh' }}><h2>The above header is {Math.round(height)}px tall</h2>Hello, world</h1>

        </>
    );
}
function Latest(props) {
    // Keep latest props in a ref.
    let latestProps = useRef(props);
    useEffect(() => {
        latestProps.current = props;
    });

    useEffect(() => {
        function tick() {
            // Read latest props at any time
            console.log(props);
        }

        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [props]); // This effect never re-runs
}



const List = React.memo(({ items }) => {
    // log('renderList');
    return items.map((item, key) => <div key={key}>item: {item.text}</div>);
  });

  export function getInitialItems(n) {
    return new Array(n)
      .fill(null)
      .map((_, i) => ({ text: i }));
  }
  
  export function App() {
    // log('renderApp');
  
    const [count, setCount] = useState(0);
    const [items, setItems] = useState(getInitialItems(10));
    (getInitialItems(10))
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>
          inc
        </button>
        <List items={items} />
      </div>
    );
  }
function Counter() {
  let logg=useLogger();
    const [colr, setColr] = useState("white")
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);
    let x

    useEffect(()=>{
        x=setInterval(() =>  setColr('#' + Math.floor(Math.random() * 16777215).toString(16)),2000)
        return ()=>clearInterval(x)
    })
    function usePrevious(value) {
        const ref = useRef();
        
        useEffect(() => {
            ref.current = value;
           
           
        });
        return ()=>ref.current
    }

   
    return <React.Fragment s>

        <MeasureExample /><div style={{backgroundColor: colr,height:"100px"}} ></div>
    {logg}
        <h1>Now: {count}, before: {prevCount}<br />
        <br /><App />
            <button onClick={() => setCount(count + 1)}>add</button>
            <button onClick={() => setCount(count + 1)}>add</button>
        </h1>;
     </React.Fragment>

}


export default Counter