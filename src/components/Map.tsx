import {useEffect, useRef, useState} from "react";
export const Map = () => {
    const ref = useRef<any>();
    const [center, setCenter] = useState<any>(null)
    const zoom = 8;

    const getCoords = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const {latitude, longitude} = position?.coords;
                latitude && longitude? setCenter({lat: latitude, lng: longitude}) : setCenter(null)
            })
        }
    }
    useEffect(() => {
        getCoords();
    }, [])

    useEffect(() => {
        new window.google.maps.Map(ref.current, {
            center,
            zoom,
        });
    }, [center]);


    return <div ref={ref} id="map"/>;
}
