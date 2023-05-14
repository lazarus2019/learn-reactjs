import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function ItemDetail() {
    let params = useParams()

    const [item, setItem] = useState({
        images: {}
    })

    useEffect(() => {
        fetchItem()
    }, [params])


    const fetchItem = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "{{authorization}}");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };

        const itemResponse = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${params.id}`, requestOptions)
        const item = await itemResponse.json()
        setItem(item.data.item)
    }

    console.log(item)

    return (
        <div className='ItemDetail'>
            <h1>{item.name}</h1>
            <img
            src={item.images.background}
            ></img>
        </div>
    )
}

export default ItemDetail