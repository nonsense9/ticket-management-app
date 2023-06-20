import React, {useState} from "react";

export const Dictionary = () => {
    const dictionaryUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
    const [dictionary, setDictionary] = useState([{}] as any);
    const [word, setWord] = useState('' as string);

    const getDictionary = () => {
        if (!word) return;
        return fetch(`${dictionaryUrl}${word}`, {
            method: 'GET',
        }).then((res) => res.json().then(res => setDictionary(res))).finally(() => drawAudioButtons());
    }
    const drawAudioButtons = () => {
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
        <div>
            <label htmlFor='word'>Introduce your word</label>
            <input name='word' onChange={(event) => setWord(event.target.value)}/>
            <button onClick={getDictionary}>Play Audio</button>
        </div>
        {dictionary && dictionary.title ?
            <div style={{color: 'red'}}>{dictionary.message}</div> : dictionary?.map((item: any, idx: number) => {
                return <div key={idx}>{item.sourceUrls}</div>
            })}
    </div>
}
