function Button({ url, children, linkClass }) {
  return (
    <button className="bg-neutral-700 px-2 py-1 md:px-4 md:py-1 hover:bg-neutral-500 cursor-pointer transition-colors ">
      <a href={url} className={linkClass} target="_blank" rel="noopener noreferrer">{children}</a>
    </button>
  );
}

export default Button;
