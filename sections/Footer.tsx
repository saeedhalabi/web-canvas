type Props = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

export default function Footer({
  title = "Your Mini Website Builder",
  description = "Built with ❤️ using Next.js and Tailwind CSS",
  imageUrl,
}: Props) {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 px-8 rounded-md shadow-inner mt-12 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} {title}. All rights reserved.
      </p>

      <p className="mt-2 text-xs opacity-70">{description}</p>

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Footer Image"
          className="mx-auto mt-4 max-h-32 rounded"
        />
      )}
    </footer>
  );
}
