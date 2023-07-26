import { Select } from '@chakra-ui/react';

import type { ListCountries } from '@/pages';

interface CountriesSelectProps extends ListCountries {
  selectedCountry: string;
  setSelectedCountry: (v: string) => void;
}

const CountriesSelect = (props: CountriesSelectProps) => {
  const { countries, selectedCountry, setSelectedCountry } = props;

  return (
    <Select
      onChange={(event) => setSelectedCountry(event.target.value)}
      placeholder="Select A Country"
      value={selectedCountry}
    >
      {countries.map(({ code, name }) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </Select>
  );
};

export default CountriesSelect;
