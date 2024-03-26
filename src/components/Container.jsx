const Container = ({ children, className = '' }) => {
  return (
    <div
      className={`py-8 px-4 mx-auto w-full md:px-8 md:py-12 lg:py-16 xl:px-20 2xl:px-32 2xl:py-24 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
