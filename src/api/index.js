import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const url1 = 'http://covid19-india-adhikansh.herokuapp.com/states'
const url2 = 'http://covid19-india-adhikansh.herokuapp.com/state'

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDataState = async (state) => {
  let changeableUrlState = `${url2}/Karnataka`;

  if (state) {
    changeableUrlState = `${url2}/${state}`;
  }

  try {
    const { data: { data: {0: { confirmed, cured, death, total }} } } = await axios.get(changeableUrlState);
    //console.log({ data: { data: {0: { confirmed, cured, death, total }} }});
    return  { confirmed, cured, death, total };
  } catch (error) {
    return error;
  }
};


export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};

export const fetchStates = async () => {
  try {
    const { data: {state}} = await axios.get(`${url1}`);
    //console.log({ data: {state}});
    return state.map((state) => state.name);
  } catch (error) {
    return error;
  }
};