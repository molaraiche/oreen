import Cars from "@/pages/Cars";
import Home from "@/pages/Home";

const App = () => {
  return (
    <div className='bg'>
      <section className='container mx-auto px-4 '>
        <Home />
      </section>
      <section className='container mx-auto px-4 '>
        <Cars />
      </section>
    </div>
  );
};

export default App;
