import React from "react";
interface IProps {
}
interface IState {
    city: string,
    wheather_report: {
        temperature: Number,
        name: string,
        icon_url: string,
        description: string,
    }
}

export default class Weather extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            city: "Stockholm",
            wheather_report: {
                temperature: 0,
                name: "",
                icon_url: "",
                description: "",
            }
        };

    }


    async set_city_state() {


        let new_city = prompt("Enter city to get weather for");
        if (new_city == null || new_city == "") {
            new_city = "Karlstad";
        }

        await this.setState({ "city": new_city });

        await this.fetch_weather_data();

        document.cookie = `city=${new_city}`;
    }

    async fetch_weather_data() {

        let response = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=75eb98055e5b55ca0b9b944980edc956&units=metric`)).json();
        this.setState({
            wheather_report: {
                temperature: response.main.temp,
                name: response.name,
                icon_url: `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`,
                description: response.weather[0].description,
            }
        });
        console.log(response)
    }

    async componentDidMount() {

        console.log(document.cookie)
        let city = document.cookie.split("=")[1];
        if (city == null) {
            city = "Stockholm";
        }

        await this.setState({ "city": city });
        await this.fetch_weather_data()


    }




    render() {

        return (
            <>
                <div className="weather">
                    <span className="name text-large" onClick={async () => await this.set_city_state()} >{this.state.wheather_report.name}</span>
                        <div className="grid">
                            <img className="icon" src={this.state.wheather_report.icon_url}></img>
                            <span className="temp text-medium">{this.state.wheather_report.temperature}°C</span>
                            <span className="desc text-small" >{this.state.wheather_report.description}</span>
                        </div>
                </div>
            </>
        )
    }

}