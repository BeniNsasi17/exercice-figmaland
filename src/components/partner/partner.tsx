
const Partners = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {/* Ajouter les logos des partenaires ici */}
          <div className="p-6 border rounded-lg text-center bg-white">Partner 1</div>
          <div className="p-6 border rounded-lg text-center bg-white">Partner 2</div>
          <div className="p-6 border rounded-lg text-center bg-white">Partner 3</div>
          <div className="p-6 border rounded-lg text-center bg-white">Partner 4</div>
        </div>
      </div>
    </section>
  );
};

export default Partners;