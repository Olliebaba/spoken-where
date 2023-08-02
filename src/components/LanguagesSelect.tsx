import { Select } from '@chakra-ui/react';

import type { ListCountries } from '@/pages';

interface LanguagesSelectProps extends ListCountries {
  selectedCountry: string;
  setSelectedCountry: (v: string) => void;
}

const LanguagesSelect = (props: LanguagesSelectProps) => {
  const { countries, selectedCountry, setSelectedCountry } = props;

  return (
    <Select
      onChange={(event) => setSelectedCountry(event.target.value)}
      placeholder="Select A Country"
      value={selectedCountry}
    >
      {countries.map(({ code, emoji, name }) => (
        <option key={code} value={code}>
          {`${emoji} ${name}`}
        </option>
      ))}
    </Select>
  );
};

export default LanguagesSelect;
