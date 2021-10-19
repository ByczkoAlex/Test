import {useCallback, useState} from "react";
import axios from "axios";

export const useLoadContent = () => {
    const [imgList, setImgList] = useState([]);
    const [next, setNext] = useState([]);
    const [pageCount, SetPageCount] = useState(1);
    const getContent = useCallback(async (value) => {
        await axios.get(`https://rickandmortyapi.com/api/character/?name=` + value).then(response => {
            setImgList(response.data.results)
            setNext(response.data.info.next)
        })
    }, []);
    // TODO: Put fetchMore method here
    const fetchMore = useCallback(async () => {
        await axios.get(next)
            .then(response => {
                setNext(response.data.info.next)
                setImgList(prevState => [...prevState, ...response.data.results])
                SetPageCount(prevState => prevState + 1 )
                })
    }, [next]);
    const ResultArray = imgList.filter((el, index) =>
        index < 10 * pageCount
    )

    return [ResultArray, getContent, fetchMore];
};
/* TODO: fetch images from this url: https://rickandmortyapi.com/api/character/
        (to fetch with name add name in search query: https://rickandmortyapi.com/api/character/?name=rick)
      */