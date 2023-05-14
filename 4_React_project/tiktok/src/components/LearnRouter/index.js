import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import HomePage from './pages/Home'
import NewsPage from './pages/News'
import ContactPage from './pages/Contact'
import ItemDetail from './pages/ItemDetail'

function LearnRouter() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchItems()
    }, [])


    const fetchItems = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "{{authorization}}");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };

        const itemsResponse = await fetch('https://fortnite-api.theapinetwork.com/items/popular', requestOptions)
        const items = await itemsResponse.json()

        setItems(items.entries[1].entries)
    }

    return (
        <div className='LearnRouter' style={{ textAlign: 'center' }}>
            <nav>
                <ul style={{ listStyle: 'none' }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <ul>
                {items && items.map(item => (
                    <Link to={`/shop/${item.identifier}`}>
                        <li key={item.identifier}>{item.name}</li>
                    </Link>
                ))}
            </ul>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/shop/:id" element={<ItemDetail />} />
            </Routes>


        </div>
    )
}

export default LearnRouter