type Props = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

export default function Hero({
  title = "Welcome to Your Mini Website Builder",
  description = "Easily create stunning web pages with drag-and-drop sections and live editing.",
  imageUrl,
}: Props) {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 px-8 mt-5 rounded-md shadow-lg text-center">
      <h2 className="text-5xl font-extrabold mb-4">{title}</h2>

      <p className="text-lg max-w-xl mx-auto opacity-90">{description}</p>

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Hero Image"
          className="mx-auto mt-6 rounded-lg shadow-md"
        />
      )}

      <button className="mt-8 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 cursor-pointer">
        Get Started
      </button>
    </section>
  );
}
