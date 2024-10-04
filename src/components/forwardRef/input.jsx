/* eslint-disable react/prop-types */
import { useEffect, useState} from "react";

function Input({ ref }) {
    const [inputValue, setInputValue] = useState('');
    // const inputRef = useRef();

    useEffect(() => {
        ref.current.value = inputValue
    }, [inputValue, ref]);

    // useImperativeHandle(ref, () => ({
    //   focus: () => {
    //     inputRef.current.focus();
    //   },
    //   clear: () => {
    //     inputRef.current.value = '';
    //   },
    // }));

    return (
        <div>
            <input
                ref={ref}
                className="rounded border text-black border-gray-500 py-2 px-3 w-1/2"
                type="text"
                // value={inputValue}s
                onChange={(e) => setInputValue(e.target.value)}
            />
            {/* <h1 className="text-4xl py-3">{inputValue}</h1> */}
        </div>
    );
}
export default Input;