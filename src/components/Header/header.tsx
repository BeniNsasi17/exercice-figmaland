
const Header = () => {
  return (
    <>
     <section className="relative bg-cover bg-center h-96 bg-[url('/img/banner.png')]  ">  
    <div className=" absolute inset-0 bg-black bg-opacity-55">
      <header className=" text-white py-6">
        <div className=" flex justify-between items-center px-6">
          <div className=" flex justify-center gap-20 items-center w-full">
            <div>
              <nav className="space-x-6">
                <a href="#" className="hover:text-gray-300">Home</a>
                <a href="#" className="hover:text-gray-300">Product</a>
                <a href="#" className="hover:text-gray-300">Pricing</a>
                <a href="#" className="hover:text-gray-300">About</a>
                <a href="#" className="hover:text-gray-300">Contact</a>
              </nav>
            </div>
            
            <div className="">
            <img src="./img/logo.png" alt="" className="size-" />
            </div>
          </div>

          <div className="flex">
            <img src="./img/twitter.png" alt="" className="size-12"/>
            <img src="./img/facebook.png" alt="" className="size-12"/>
            <img src="./img/linkedin.png" alt="" className="size-12"/>
          </div>

        </div>
        </header>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-5xl font-bold">The best products start with Figma</h1>
        <p className="mt-4 w-72">Most calendars are designed for teams. Slate is designed for freelancers.</p>
    </div>
    </div>
  </section>
  </>
  );
};

export default Header;