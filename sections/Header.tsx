type Props = {
  title?: string;
  description?: string;
};

export default function Header({
  title = "Header",
  description = "Build amazing pages with your Mini Website Builder",
}: Props) {
  return (
    <header className="bg-blue-600 text-white py-6 px-8 rounded-md shadow-md">
      <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
      <p className="mt-2 text-lg opacity-80">{description}</p>
    </header>
  );
}
