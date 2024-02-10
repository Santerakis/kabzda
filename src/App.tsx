import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating as R} from "./components/Rating/Rating";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";

function App() {
    return (
        <div>
            <PageTitle title='This is App component'/>

            Article 1
            <R />

            Article 2
            <R value={3}/>

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
