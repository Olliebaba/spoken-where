import { gql } from '@apollo/client';
import { useState } from 'react';

import client from '@/apollo-client';
import CountriesSelect from '@/components/CountriesSelect';
import Map from '@/components/Map';

export interface CountryItem {
  code: string;
  emoji: string;
  name: string;
  __typename: 'Country';
}

export interface ListCountries {
  countries: CountryItem[];
}

const Index = (props: ListCountries) => {
  const { countries } = props;

  const [selectedCountry, setSelectedCountry] = useState(
    countries[0]?.code || '',
  );

  return (
    <div>
      <CountriesSelect
        countries={props.countries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <Map />
    </div>
  );
};

export default Index;

export async function getServerSideProps(): Promise<{ props: ListCountries }> {
  const { data }: { data: ListCountries } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: [...data.countries].sort((a, b) => (a.name > b.name ? 1 : -1)),
    },
  };
}
