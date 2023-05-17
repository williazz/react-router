import * as React from 'react';

type FetcherProps = {
  name: string;
  url: string;
}

export default function Fetcher(props: FetcherProps) {
  return (
    <button onClick={async () => {
      try {
        console.log('fetching...')
        const response = await fetch(props.url)
        const json = await response.json();
        console.log(json);
      } catch (e) {
        console.error(e)
      }
    }}>
      {props.name}
    </button>
  );
}
