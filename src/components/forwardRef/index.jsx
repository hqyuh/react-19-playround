import { useRef } from 'react';
import Input from './input';

export default function InputContainer() {
    const ref = useRef(null);

    const onFocus = () => {
        ref.current.focus();
    }

    return (
        <>
            <Input ref={ref} />
            {/* <button onClick={() => ref.current.focus()} className='bg-slate-600'>Focus</button> */}
            <button onClick={onFocus} className='bg-slate-600 p-3 text-white rounded mt-2'>Focus</button>
        </>
    );
}