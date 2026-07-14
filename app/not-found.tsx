export default function NotFound() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">

      <h1 className="text-7xl font-bold">
        404
      </h1>

      <p className="mt-5 text-gray-400">
        Page not found.
      </p>

      <a
        href="/"
        className="mt-8 px-6 py-3 bg-cyan-500 rounded-lg"
      >
        Go Home
      </a>

    </main>
  );
}