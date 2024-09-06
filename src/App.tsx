
import Header from './components/Header/header';
import Features from './components/Features/features';
import Footer from './components/Footer/footer';
import Testimonials from './components/Testimonials/testimonials';
import Partners from './components/partner/partner';


function App() {
  return (
    <div className="App">
      <Header />
       <main>
        <Features /> 
        <Partners />
       {/*  <Testimonials /> */}
      </main>
      {/* <Footer />   */}
    </div>
  );
}

export default App;