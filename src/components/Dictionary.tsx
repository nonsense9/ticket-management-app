import React, {useState} from "react";
import {Button} from "react-bootstrap";

export const Dictionary = () => {
    const dictionaryUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
    const [dictionary, setDictionary] = useState([{}] as any);
    const [word, setWord] = useState('' as string);

    const getWordFromDictionary = () => {
        if (!word) return;
        return fetch(`${dictionaryUrl}${word}`, {
            method: 'GET',
        }).then((res) => res.json().then(res => setDictionary(res))).finally(() => handlePlayAudio());
    }
    const handlePlayAudio = () => {
        if (dictionary.length > 0) {
            const btns = dictionary?.map((i: any) => {
                return i
            })
            const {phonetics} = btns[0]
            const audios = phonetics?.map((i: any) => i.audio);
            const filteredAudios = audios?.filter((i: any) => i !== '')
            for (let i = 0; i < filteredAudios?.length; i++) {
                let a = new Audio(filteredAudios[i]);
                a.play();
            }
        }
    }

    return <div>
        <div className="d-flex justify-content-center align-items-center">
            <label htmlFor='word'>Introduce your word</label>
            <input name='word' onChange={(event) => setWord(event.target.value)}/>
            <Button onClick={getWordFromDictionary}>Play Audio</Button>
        </div>
        {dictionary && dictionary.title ?
            <div><p className="text-secondary">{`${dictionary.message} ${dictionary.resolution}`}</p>
            </div> : dictionary?.map((item: any, idx: number) => {
                return <div key={idx}>{item.sourceUrls}</div>
            })}
    </div>
}
