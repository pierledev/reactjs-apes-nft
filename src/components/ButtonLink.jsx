const ButtonLink = ({
  children,
  className = '',
  type,
  link,
  variant = 'primary',
}) => {
  const combinedStyles = `py-3 px-7 font-medium text-xs lg:text-xl ${variant === 'primary' ? 'bg-orange text-white' : variant === 'secondary' ? 'bg-white text-slate' : 'bg-slate text-orange border border-orange transition-all duration-300 ease-in-out hover:border-white hover:text-white hover:bg-orange'} ${className}`;

  if (link) {
    return (
      <a href='#' className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedStyles}>
      {children}
    </button>
  );
};

export default ButtonLink;
