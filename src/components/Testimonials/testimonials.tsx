
const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <p>"This service is fantastic! Highly recommend to everyone!"</p>
            <p className="mt-4 font-semibold">- Client 1</p>
          </div>
          <div className="p-6 border rounded-lg">
            <p>"Amazing experience, will definitely come back again."</p>
            <p className="mt-4 font-semibold">- Client 2</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;