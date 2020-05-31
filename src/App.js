import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import { fetchCountriesData } from './api';

import coronaImage from './images/coronavirus-3.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData});

        // const fetchedCountryData = await fetchCountriesData();
        // console.log(fetchedCountryData);
        
    }

    handleCountryChange = async (country) => {
        //fetch the data
        const fetchedCountryData = await fetchCountriesData(country);
        // console.log(country);
        // console.log('???', fetchedCountryData);
        this.setState({ data: fetchedCountryData, country: country });
        
        //set the state
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                <Cards data = {data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;