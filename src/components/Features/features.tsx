
const Features = () => {
  return (
    <section className="py-12 bg-white">
      <div className="flex-col-reverse container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <p className="text-center mb-12">Most calendars are designed for teams. Slate is designed for freelancers</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className=" flex flex-col items-center p-6 border rounded-lg text-center">
            <img className="size-36" src="./img/feature1.png" alt="" />
            <h3 className="text-xl font-bold mb-4 w-48">OpenType features Variable fonts</h3>
            <p className="w-48">Slate helps you see how many more days you need to work to reach your financial goal.</p>
          </div>
          <div className=" flex flex-col items-center  p-6 border rounded-lg text-center">
          <img className="size-36" src="./img/feature2.png" alt="" />
            <h3 className="text-xl font-bold mb-4">Design with real data</h3>
            <p className="w-48">Slate helps you see how many more days you need to work to reach your financial goal..</p>
          </div>
          <div className=" flex flex-col items-center  p-6 border rounded-lg text-center">
          <img className="size-36" src="./img/feature3.png" alt="" />
            <h3 className="text-xl font-bold mb-4">Fastest way to take action</h3>
            <p className="w-48">Slate helps you see how many more days you need to work to reach your financial goal.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="flex items-center justify-center absolute bg-blue rounded-full size-28">
        <img className="flex items-center justify-center size-20" src="./public/videoPlay.svg" alt="" />
        </div>
        
        <img className="" src="./img/screen.png" alt="" />
      </div>
      
    </section>
  );
};












export default Features;