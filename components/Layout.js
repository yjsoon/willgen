const Layout = ({ children }) => {
  return (
    <>
      <div className="antialiased flex flex-col items-center justify-center h-screen py-2">
        <main className="max-w-4xl py-12 md:mx-w-4xl bg-white px-10 flex-grow">
          <h1 className="text-6xl font-bold mb-10">Will Generator</h1>
          {children}
        </main>
        <footer className="bg-blue-50 flex items-center justify-center w-full h-24 border-t">
          &copy; {new Date().getFullYear()} Will G.
        </footer>
      </div>
    </>
  );
};

export default Layout;
