import { useEffect, useState } from 'react';

const PREFIX = "react-codepen-clone-";

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key;

    // get the data from local storage
    const [value, setValue] = useState(() => {
        try {
            // Get from local storage by key
            const jsonValue = localStorage.getItem(prefixedKey);
            // if data exists, Parse stored json
            if (jsonValue !== null) {
                return JSON.parse(jsonValue);
            }
            // if initialValue is function return function
            // else return initialValue
            if (typeof initialValue === 'function') {
                return initialValue()
            } else {
                return initialValue;
            }
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    })

    // If any changed updates the value for the prefex key 
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    // return value and function
    return [value, setValue];
}
