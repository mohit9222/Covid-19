import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchStates } from '../../api';

import styles from '../StatePicker/StatePicker.module.css';


const States = ({ handleStateChange }) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
        setStates(await fetchStates());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl color="primary" className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleStateChange(e.target.value)}>
        <option value="">Karnataka</option>
        {states.map((state, i) => <option key={i} value={state}>{state}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default States;