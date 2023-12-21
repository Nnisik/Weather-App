import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, Image, View, TextInput, Button } from 'react-native';
import { styles } from './Style';


export default function App() {
  const data = {
    "location": {
        "name": "Moscow",
        "region": "Moscow City",
        "country": "Russia",
        "lat": 55.75,
        "lon": 37.62,
        "tz_id": "Europe/Moscow",
        "localtime_epoch": 1703073464,
        "localtime": "2023-12-20 14:57"
    },
    "current": {
        "last_updated_epoch": 1703072700,
        "last_updated": "2023-12-20 14:45",
        "temp_c": 3.0,
        "temp_f": 37.4,
        "is_day": 1,
        "condition": {
            "text": "Partly cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
            "code": 1003
        },
        "wind_mph": 11.9,
        "wind_kph": 19.1,
        "wind_degree": 230,
        "wind_dir": "SW",
        "pressure_mb": 998.0,
        "pressure_in": 29.47,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 93,
        "cloud": 75,
        "feelslike_c": -0.8,
        "feelslike_f": 30.6,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 1.0,
        "gust_mph": 15.1,
        "gust_kph": 24.4
    },
    "forecast": {
      "forecastday": [
        {
          "date": "2023-12-20",
          "date_epoch": 1703030400,
          "day": {
            "maxtemp_c": 1.5,
            "maxtemp_f": 34.7,
            "mintemp_c": 0.1,
            "mintemp_f": 32.2,
            "avgtemp_c": 1.1,
            "avgtemp_f": 34.0,
            "maxwind_mph": 13.6,
            "maxwind_kph": 22.0,
            "totalprecip_mm": 0.93,
            "totalprecip_in": 0.04,
            "totalsnow_cm": 0.75,
            "avgvis_km": 7.4,
            "avgvis_miles": 4.0,
            "avghumidity": 97.0,
            "daily_will_it_rain": 1,
            "daily_chance_of_rain": 85,
            "daily_will_it_snow": 0,
            "daily_chance_of_snow": 17,
            "condition": {
              "text": "Patchy rain possible",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
              "code": 1063
            },
            "uv": 1.0
          },
        },
        {
          "date": "2023-12-21",
          "date_epoch": 1703116800,
          "day": {
            "maxtemp_c": 0.7,
            "maxtemp_f": 33.2,
            "mintemp_c": -0.3,
            "mintemp_f": 31.4,
            "avgtemp_c": 0.3,
            "avgtemp_f": 32.5,
            "maxwind_mph": 11.9,
            "maxwind_kph": 19.1,
            "totalprecip_mm": 7.38,
            "totalprecip_in": 0.29,
            "totalsnow_cm": 6.26,
            "avgvis_km": 7.1,
            "avgvis_miles": 4.0,
            "avghumidity": 95.0,
            "daily_will_it_rain": 1,
            "daily_chance_of_rain": 74,
            "daily_will_it_snow": 0,
            "daily_chance_of_snow": 67,
            "condition": {
              "text": "Light snow",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/326.png",
              "code": 1213
            },
            "uv": 1.0
          },
        },
        {
          "date": "2023-12-22",
          "date_epoch": 1703203200,
          "day": {
            "maxtemp_c": 0.4,
            "maxtemp_f": 32.8,
            "mintemp_c": -3.4,
            "mintemp_f": 25.9,
            "avgtemp_c": -1.1,
            "avgtemp_f": 30.1,
            "maxwind_mph": 15.0,
            "maxwind_kph": 24.1,
            "totalprecip_mm": 1.43,
            "totalprecip_in": 0.06,
            "totalsnow_cm": 1.2,
            "avgvis_km": 9.0,
            "avgvis_miles": 5.0,
            "avghumidity": 90.0,
            "daily_will_it_rain": 1,
            "daily_chance_of_rain": 80,
            "daily_will_it_snow": 0,
            "daily_chance_of_snow": 22,
            "condition": {
              "text": "Moderate snow",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/332.png",
              "code": 1219
            },
            "uv": 1.0
          },
        }
      ]
    }
  };

  const [_data, setData] = React.useState({});
  React.useEffect(() => {
    fetch("http://api.weatherapi.com/v1/forecast.json?key=ab23266f6d76498191b143316231912&q=Moscow&days=3&aqi=no&alerts=no")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);
  
  return (
    <View style={ styles.container }>
      <View style={ styles.topPanel }>
        <View style={ styles.todayWeatherContainer }>
          <Text style={ styles.todayWeather}>{data.current.temp_c}</Text>
          <Text style={ styles.todayWeatherDecor }>o</Text>
        </View>
        <Text style={ styles.todayWeatherInfo }>{ data.current.condition.text }</Text>
      </View>
      <View style={ styles.bottomPanel }>
        <Text style={ styles.locationInfo }>{data.location.name}, {data.location.country}</Text>
        <View style={ styles.extraInfo }>
          <View style={ styles.infoContainer }>
            <View style={[styles.infoElement, styles.margin]}>
              <Image 
                source={require("./assets/icons8-wind-48.png")}>
              </Image>
              <Text style={ styles.todayInfo}>{ data.current.wind_kph } kph</Text>
            </View>
            <View style={[styles.infoElement, styles.margin]}>
              <Image 
                source={require("./assets/icons8-arrow-48.png")}>
              </Image>
              <Text style={ styles.todayInfo}>{ data.current.wind_dir }</Text>
            </View>
            <View style={[styles.infoElement, styles.margin]}>
              <Image 
                source={require("./assets/icons8-wet-48.png")}>
              </Image>
              <Text style={ styles.todayInfo}>{ data.current.humidity }%</Text>
            </View>
            <View style={[styles.infoElement, styles.margin]}>
              <Image 
                source={require("./assets/icons8-uv-index-48.png")}>
              </Image>
              <Text style={ styles.todayInfo}>{ data.current.uv }</Text>
            </View>
          </View>
        </View>
        <View style={[styles.extraInfo, styles.margin]}>
          <View style={[styles.forecastTableRow, styles.padding, styles.tableHeader]}>
            <Text style={ styles.tableHeaderText }>Day</Text>
            <Text style={ styles.tableHeaderText }>t</Text>
          </View>
          <View style={ styles.forecastInfo }>
            { data.forecast.forecastday.map(dayInfo => (
              <View key={ dayInfo.date_epoch } style={ styles.forecastTableRow }>
                <View style={ styles.forecastRowLeft}>
                  <Text style={[styles.forecastDay, styles.padding]}>{dayInfo.date}</Text>
                  <Image
                    source={{uri: "https:"+dayInfo.day.condition.icon }}
                    style={ styles.forecastImage } >
                  </Image>
                </View>
                <Text style={ styles.textColor } >{dayInfo.day.maxtemp_c} - {dayInfo.day.mintemp_c}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}