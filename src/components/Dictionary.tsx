import React, {useState} from "react";

export const Dictionary = () => {
    const dictionaryUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
    const [dictionary, setDictionary] = useState([{}] as any);
    const [word, setWord] = useState('' as string);

    const getDictionary = () => {
        if (!word) return;
        return fetch(`${dictionaryUrl}${word}`, {
            method: 'GET',
        }).then((res) => res.json().then(res => setDictionary(res)));
    }
    const getAudio = () => {
        const audio = dictionary.map((i: {phonetics: any;}) => i.phonetics[0].audio ? i.phonetics[0] : i.phonetics[1])
        let a = new Audio(audio[0].audio);
        a.play();
    }

    return <div>
        <div>
            <label htmlFor='word'>Introduce word to play</label>
            <input name='word' onChange={(event) => setWord(event.target.value)}/>
            <button onClick={getDictionary}>Get Audio</button>
            <button onClick={getAudio}>Play Audio</button>
        </div>
        {dictionary && dictionary.title ?
            <div style={{color: 'red'}}>{dictionary.message}</div> : dictionary.map((item: any, idx: number) => {
                return <div key={idx}>{item.sourceUrls}</div>
            })}
    </div>
}
