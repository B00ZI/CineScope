import { useState, useEffect } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {

    const [savedValue, setSavedValue] = useState<T>(() => {

        const valueInStr = localStorage.getItem(key)

        if (valueInStr) {
            return JSON.parse(valueInStr)
        }

        return initialValue

    })
    useEffect(()=>{
     
        const valueToStr = JSON.stringify(savedValue)
        localStorage.setItem(key , valueToStr)
  

    },[key , savedValue]) 

    return [savedValue , setSavedValue] as const

}