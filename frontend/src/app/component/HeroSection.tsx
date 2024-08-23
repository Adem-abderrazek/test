import Link from 'next/link';



const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white">
  Discover, Collect, and Play. 
  Dive into the world of <span className="text-primary">exclusive games</span> curated just for you.
  <br />
</h1>
<p className="text-gray-200 mt-4 text-lg">
  Explore a <span className="text-primary">vast library</span> of games that cater to your passion,
  build your <span className="text-primary">ultimate collection</span>, and experience gaming like never before.
  Find the <span className="text-primary">perfect game</span> and start playing today!
</p>
<Link href="/games">
  <button className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-medium mt-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-x-1 animate-bounce">
    Start your collection
  </button>
</Link>

          </div>
          <div className="flex justify-center items-center">
           <img src="https://res.cloudinary.com/dc0gmzuud/image/upload/v1723638879/dc2ae9d05a596e7fbbaf4749b6874ac5-removebg-preview_pt2wnd.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
