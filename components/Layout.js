const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="antialiased text-gray-900 py-10 align-center flex flex-col flex-1 items-center">
        <main className="max-w-4xl py-12 md:mx-w-4xl bg-white px-10">
          <h1 className="text-6xl font-bold">Will Generator</h1>
          {children}
        </main>
      </main>
      <footer className="bg-blue-50 flex items-center justify-center w-full h-24 border-t">
        &copy; {new Date().getFullYear()} Will G.
      </footer>
    </div>
  );
};

export default Layout;
