import Advantages from "@/pages/Advantages";
import Cars from "@/pages/Cars";
import Home from "@/pages/Home";
import Services from "@/pages/Services";

const App = () => {
  return (
    <>
      <div className='bg'>
        <section className='container mx-auto px-4 '>
          <Home />
        </section>
      </div>
      <section className='container mx-auto px-4 '>
        <Cars />
      </section>
      <div className='bg-services'>
        <section className='container mx-auto px-4'>
          <Services />
        </section>
      </div>
      <section className='container mx-auto px-4'>
        <Advantages />
      </section>
    </>
  );
};

export default App;
