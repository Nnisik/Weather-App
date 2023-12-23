import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, Image, View, SafeAreaView, ActivityIndicator } from 'react-native';
import { styles } from './Style';


export default function App() {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const apiKey = "ab23266f6d76498191b143316231912";

  React.useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Moscow&days=5&aqi=no&alerts=no`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);
  
  return (
    <View style={ styles.container }>
      <SafeAreaView className="flex flex-1">
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        data && (
            <View style={{ "justifyContent":"space-between", "flexDirection":"column", "flex":1}}>
              <View style={ styles.topPanel }>
                {/* location info */}
                <Text style={ styles.locationInfo }>{data.location.name}, {data.location.country}</Text><View>
                {/* current weather info section */}
                <View style={ styles.todayWeatherContainer }>
                    <Text style={ styles.todayWeather}>{data.current.temp_c}</Text>
                    <Text style={ styles.todayWeatherDecor }>o</Text>
                  </View>
                  <Text style={ styles.todayWeatherInfo }>{ data.current.condition.text }</Text>
                </View>
              </View>
              { /* current weather - extra info */ }
              <View styel={ styles.bottomPanel }>
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
          )
        )}
      </SafeAreaView>
    </View>
  )
}