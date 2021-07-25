import { useEffect, useState } from 'react';

const PREFIX = "react-codepen-clone-";

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key;

    // get the data from local storage
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey);

        // if data exists, parse json data
        if (jsonValue !== '' || jsonValue !== null) {
            return JSON.parse(jsonValue);
        }
        // if initial value is function return function
        // else return value
        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue;
        }
    })

    // If any changed updates the value for the prefex key 
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    // return value and function
    return [value, setValue]
}
