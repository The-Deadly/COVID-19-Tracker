import React,{Component} from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/corona.png';

class App extends Component {

  state = {
    data: {},
    country: ""
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }

  changeCountryHandler = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});
  }

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={this.state.data} />
        <CountryPicker changeCountryHandler={this.changeCountryHandler} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
