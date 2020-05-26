import React, { Component } from 'react'
import StatePicker from '../components/StatePicker/StatePicker'
import IndiaCards from '../components/Cards/IndiaCards'
import { fetchDataState } from '../api/';
import styles from '../App.module.css';


class IndiaDetails extends Component {
        state = {
        data: {},
        state: '',
      }

      async componentDidMount() {
        const data = await fetchDataState();
    
        this.setState({ data: data });
      }
    
      handleStateChange = async (state) => {
        const data = await fetchDataState(state);
    
        this.setState({ data: data, state: state });
      }
    
      render() {
        const { data, state } = this.state;

        return (
            <div className={styles.container}>
                <IndiaCards data={data} />
                <StatePicker handleStateChange={this.handleStateChange}/>
            </div>
    );
  }
}


export default IndiaDetails