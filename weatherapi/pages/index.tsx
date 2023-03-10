import Head from 'next/head';
import Search from '../components/Search';
import Forecast from '../components/Forecast';
import useForecast from '../hooks/useForecast';

export default function Home(): JSX.Element {
  const {
    location,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  } = useForecast();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center bg-gradient-to-br from-purple-800 via-teal-500 to-violet-700 h-[100vh] w-full">
        {forecast ? (
          <Forecast data={forecast} />
        ) : (
          <Search
            location={location}
            options={options}
            onInputChange={onInputChange}
            onOptionSelect={onOptionSelect}
            onSubmit={onSubmit}
          />
        )}
      </main>
    </>
  );
}
