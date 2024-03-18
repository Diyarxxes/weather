import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [cityName, setCityName] = useState('')
  const [weather, setWeather] = useState([])
  const api = '257fa5e23b9aaa86938b8fb798506089'

  const getWeather = () => {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}`)
      .then(({ data }) => setWeather(data)).catch((error) => alert('вы не правильнго ввели город'))
    setCityName('')
  }
  return (
    <div>
      <div className='container'>
        <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} placeholder='Введите город' />
        <button onClick={getWeather}>Search</button>


        <div>
          {weather.length === 0 ? "здесь будет ваша погода":
          <table className='table' border={1}>
          <thead>
            <tr>
              <th>Прогноз погоды</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Город</td>
              <td>{weather.name}</td>
            </tr>

            <tr>
              <td>Страна</td>
              <td>{weather.sys.country}</td>
            </tr>

            <tr>
              <td>Температура</td>
              <td>{(weather.main.temp - 273.15).toFixed(1)} %C</td>
            </tr>

            <tr>
              <td>небо</td>
              <td>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" />
              </td>
            </tr>
          </tbody>


        </table>
          }
        </div>

      </div>


    </div>
  );
}

export default App;
