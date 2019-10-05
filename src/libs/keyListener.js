import { useEffect, useState, useRef } from "react";


export function useKeyListener(value) {
    const [code, setCode] = useState(0);
    const prevCode = usePrevious(code);

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
      }
      return prevCode;
  }
  
  