import React, {useState} from 'react';
import './App.css';
import {Accordion, Item} from "./components/Accordion/Accordion";
import {Rating as R, RatingValue} from "./components/Rating/Rating";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValue>(0)
    const [collapsed, setCollapsed] = useState(false)
    const [on, setOn] = useState(false)
    const [items, setItems] = useState<Item[]>([
        {title: 'Sergey', id: '1'},
        {title: 'Dima', id: '2'},
        {title: 'Andrey', id: '3'},
    ])
    const [itemId, setItemId] = useState<string | undefined>()

    return (
        <div className='App'>
            <PageTitle title='This is App component'/>
            <div>{on.toString()}</div>
            <div>itemId: {itemId}</div>

            Article 1
            <UncontrolledRating onChange={setRatingValue} />

            Article 2
            <R value={ratingValue} onClick={setRatingValue}/>

            <Accordion items={items} title={'MENU'} collapsed={collapsed} onClick={setCollapsed} onItemClick={setItemId}/>
            <UncontrolledAccordion title={'USERS'}/>

            <UncontrolledOnOff onChange={setOn}/>
            <UncontrolledOnOff defaultOn={true} onChange={setOn}/>
            <OnOff on={on} onChange={setOn}/>
        </div>
    );
}


export default App;
