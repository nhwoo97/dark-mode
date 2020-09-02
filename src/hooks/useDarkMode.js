import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage('darkmode',initialValue)

    useEffect( ()=> {
        if(someValue===true){
            document.body.classList.add('dark-mode')
        }else{
            document.body.classList.remove('dark-mode')
        }
    },[someValue])

    return [someValue, setSomeValue];
}
