import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Define types for the API response data
interface GlobalData {
  updated: number; // Timestamp of the last update
  cases: number; // Total number of cases
  todayCases: number; // Total cases reported today
  deaths: number; // Total number of deaths
  todayDeaths: number; // Total deaths reported today
  recovered: number; // Total number of recovered cases
  todayRecovered: number; // Total recoveries reported today
  active: number; // Total number of active cases
  critical: number; // Total number of critical cases
  casesPerOneMillion: number; // Cases per one million people
  deathsPerOneMillion: number; // Deaths per one million people
  tests: number; // Total number of tests conducted
  testsPerOneMillion: number; // Tests per one million people
  population: number; // Total population affected
  oneCasePerPeople: number; // Number of people per one case
  oneDeathPerPeople: number; // Number of people per one death
  oneTestPerPeople: number; // Number of people per one test
  activePerOneMillion: number; // Active cases per one million people
  recoveredPerOneMillion: number; // Recovered cases per one million people
  criticalPerOneMillion: number; // Critical cases per one million people
  affectedCountries: number; // Total number of affected countries
}

// CountryInfo and CountryData interfaces remain unchanged
interface CountryInfo {
  _id: number; // Country ID
  iso2: string; // ISO2 code
  iso3: string; // ISO3 code
  lat: number; // Latitude
  long: number; // Longitude
  flag: string; // Country flag URL
}

interface CountryData {
  updated: number; // Timestamp of the last update
  country: string; // Country name
  countryInfo: CountryInfo; // Country info
  cases: number; // Total number of cases
  todayCases: number; // Total cases reported today
  deaths: number; // Total number of deaths
  todayDeaths: number; // Total deaths reported today
  recovered: number; // Total number of recovered cases
  todayRecovered: number; // Total recoveries reported today
  active: number; // Total number of active cases
  critical: number; // Total number of critical cases
  casesPerOneMillion: number; // Cases per one million people
  deathsPerOneMillion: number; // Deaths per one million people
  tests: number; // Total number of tests conducted
  testsPerOneMillion: number; // Tests per one million people
  population: number; // Total population affected
  continent: string; // Continent name
  oneCasePerPeople: number; // Number of people per one case
  oneDeathPerPeople: number; // Number of people per one death
  oneTestPerPeople: number; // Number of people per one test
  activePerOneMillion: number; // Active cases per one million people
  recoveredPerOneMillion: number; // Recovered cases per one million people
  criticalPerOneMillion: number; // Critical cases per one million people
}

// Updated HistoricalData interface to match API response
interface HistoricalData {
  cases: Record<string, number>; // Date as key, cases count as value
  deaths: Record<string, number>; // Date as key, deaths count as value
  recovered: Record<string, number>; // Date as key, recovered count as value
}

const fetchGlobalData = async (): Promise<GlobalData> => {
  const { data } = await axios.get('https://disease.sh/v3/covid-19/all');
  return data;
};

const fetchCountryData = async (): Promise<CountryData[]> => {
  const { data } = await axios.get('https://disease.sh/v3/covid-19/countries');
  return data;
};

const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const { data } = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return data;
};

export const useCovidData = () => {
  return {
    globalData: useQuery<GlobalData, Error>({
      queryKey: ['globalData'],
      queryFn: fetchGlobalData,
    }),
    countryData: useQuery<CountryData[], Error>({
      queryKey: ['countryData'],
      queryFn: fetchCountryData,
    }),
    historicalData: useQuery<HistoricalData, Error>({
      queryKey: ['historicalData'],
      queryFn: fetchHistoricalData,
    }),
  };
};
