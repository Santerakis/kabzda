import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating as R, RatingValue} from "./components/Rating/Rating";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValue>(0)

    return (
        <div className='App'>
            <PageTitle title='This is App component'/>

            Article 1
            <UncontrolledRating />

            Article 2
            <R value={ratingValue} onClick={setRatingValue}/>

            <Accordion title={'MENU'} collapsed={false}/>
            <UncontrolledAccordion title={'USERS'}/>

            <OnOff on={true}/>
            <OnOff on={true}/>
            <OnOff on={true}/>
            <OnOff on={true}/>
        </div>
    );
}


export default App;
