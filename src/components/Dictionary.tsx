import React, {useState} from "react";

export const Dictionary = () => {
    const [dictionary, setDictionary] = useState([{}] as any);
    const [word, setWord] = useState('' as string);

    const getDictionary = () => {
        if (!word) return;
        return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, {
            method: 'GET',
        }).then((res) => res.json()).then(res => setDictionary(res))
    }
    const getAudio = () => {
        const audio = dictionary.map((i: {phonetics: any;}) => i.phonetics[0])
        let a = new Audio(audio[0].audio)
        a.play();
    }

    return <div>
        <div>
            <label htmlFor='word'>Introduce word to play</label>
            <input name='word' onChange={(event) => setWord(event.target.value)}/>
            <button onClick={getDictionary}>Get Audio</button>
            <button onClick={getAudio}>Play Audio</button>
        </div>
        {dictionary ? JSON.stringify(dictionary) : null}
    </div>
}
