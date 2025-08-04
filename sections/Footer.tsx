export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 px-8 rounded-md shadow-inner mt-12 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Your Mini Website Builder. All rights
        reserved.
      </p>
      <p className="mt-2 text-xs opacity-70">
        Built with ❤️ using Next.js and Tailwind CSS
      </p>
    </footer>
  );
}
