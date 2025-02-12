import Advantages from "@/pages/Advantages";
import Cars from "@/pages/Cars";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Newsletter from "@/pages/Newsletter";
import Services from "@/pages/Services";
import Testimonials from "@/pages/Testimonials";

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
      <section className='container mx-auto px-4'>
        <Contact />
      </section>
      <section className='container mx-auto px-4'>
        <Testimonials />
      </section>
      <div className='bg-red-2'>
        <section className='container mx-auto px-4'>
          <Newsletter />
        </section>
      </div>
    </>
  );
};

export default App;
