const request = require('request')

const forecast = (latitude,longitude,callback)=>{
    const url ='http://api.weatherstack.com/current?access_key=69d1071c80c5d396396a07164c56543a&query='+ latitude + ',' + longitude+'&units=m'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to weather service',undefined)
        }else if(response.body.error){
            callback('Unable to find location',undefined)
        } else {
            callback(undefined,response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' °C outside but it feels like '+response.body.current.feelslike+'°C.')
        }
    })
}

module.exports = forecast