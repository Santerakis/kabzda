import React, { useState, useEffect } from 'react';
import './Analog.css'; // Подключаем CSS для стилей

function App() {
    const [time, setTime] = useState(new Date());

    // Обновление времени каждую секунду
    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Очистка интервала после размонтирования компонента
        return () => clearInterval(timerID);
    }, []);

    // Функция для рассчета угла поворота стрелок
    const getRotateDegree = (value: number, max: number) => (value / max) * 360;

    // Получение текущего времени в формате {часы, минуты, секунды}
    const getHourMinuteSecond = () => {
        const hour = time.getHours() % 12; // Приведение к 12-часовому формату
        const minute = time.getMinutes();
        const second = time.getSeconds();
        return { hour, minute, second };
    };

    // Рендер стрелочных часов
    return (
        <div className="clock">
            <div className="hour-hand" style={{ transform: `rotate(${getRotateDegree(getHourMinuteSecond().hour * 60 + getHourMinuteSecond().minute, 720)}deg)` }} />
            <div className="minute-hand" style={{ transform: `rotate(${getRotateDegree(getHourMinuteSecond().minute * 60 + getHourMinuteSecond().second, 3600)}deg)` }} />
            <div className="second-hand" style={{ transform: `rotate(${getRotateDegree(getHourMinuteSecond().second, 60)}deg)` }} />
        </div>
    );
}

export default App;