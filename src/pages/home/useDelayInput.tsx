import { useEffect, useState } from "react";

const useDelayInput = (inputValue: string) => {
  const [delayedValue, setDelayedValue] = useState("");
  /* const actions = useMemo(() => {
    let id: number;
    return {
      connect: (value: any) => {
        id = setTimeout(() => {
          console.log(value);
          setDelayedValue(value);
        }, 500);
      },
      disconnect: () => {
        clearTimeout(id);
      },
    };
  }, []);

  useEffect(() => {
    actions.disconnect();
    actions.connect(inputValue);
  }, [inputValue]); */

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setDelayedValue(inputValue);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  return delayedValue;
};

export default useDelayInput;
