const Layout = ({ children }) => {
  return (
    <>
      <div className="antialiased flex flex-col items-center h-screen py-2">
        <main className="max-w-4xl py-12 md:mx-w-4xl bg-white p-10 flex-grow">
          <h1 className="text-5xl font-bold mb-5">Will Generator</h1>
          {children}
        </main>
        <footer className="bg-blue-50 flex flex-col items-center justify-center w-full h-24 border-t">
          <p className="p-10">&copy; {new Date().getFullYear()} Will G.</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
