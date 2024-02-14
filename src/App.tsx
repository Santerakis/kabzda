import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
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

    return (
        <div className='App'>
            <PageTitle title='This is App component'/>
            <div>{on.toString()}</div>

            Article 1
            <UncontrolledRating/>

            Article 2
            <R value={ratingValue} onClick={setRatingValue}/>

            <Accordion title={'MENU'} collapsed={collapsed} onClick={setCollapsed}/>
            <UncontrolledAccordion title={'USERS'}/>

            <UncontrolledOnOff onChange={setOn}/>
            <OnOff on={on} onChange={setOn}/>
        </div>
    );
}


export default App;
