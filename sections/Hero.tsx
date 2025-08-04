export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 px-8 rounded-md shadow-lg text-center">
      <h2 className="text-5xl font-extrabold mb-4">
        Welcome to Your Mini Website Builder
      </h2>
      <p className="text-lg max-w-xl mx-auto opacity-90">
        Easily create stunning web pages with drag-and-drop sections and live
        editing.
      </p>
      <button className="mt-8 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
        Get Started
      </button>
    </section>
  );
}
