import * as React from 'react';

export default function Square() {
  return (
    <button onClick={async () => {
      try {
        console.log('fetching...')
        const response = await fetch("https://www.reddit.com/r/nba.json")
        const json = await response.json();
        console.log(json);
      } catch (e) {
        console.error(e)
      }
    }}>
      "Fetch"
    </button>
  );
}
