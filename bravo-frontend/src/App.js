import Link from './Link';

function App() {
  return (
    <div className="h-screen flex  items-center bg-emerald-700">
      <div className="m-96">
      <h1 className="font-serif text-6xl text-yellow-500">Welcome to Bravo.</h1>
      <p className="ml-8 mt-2 py-0.5 font-sans text-yellow-500">A <Link src="https://reactjs.org/" displayText="React" /> app with <Link src="https://tailwindcss.com/" displayText="Tailwind" /> and <Link src="https://strapi.io/" displayText="Strapi" /> CMS</p>
      </div>
    </div>
  );
}

export default App;
