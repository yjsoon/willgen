const Layout = ({ children }) => {
  return (
    <div className="antialiased text-gray-900 bg-gray-400 py-10 h-full">
      <main className="max-w-4xl mx-auto py-12 md:mx-w-4xl bg-white px-10">
        <h1 className="text-6xl font-bold">Will Generator</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
