const Header = () => {
  return (
    <>
      <nav className="py-4 md:py-8 fixed top-0 w-full !bg-[#191D26] border-b border-[#F5BF42] z-50">
        <div className="container mx-auto flex items-center justify-center md:justify-between gap-x-6">
          <a href="/" className="text-white text-3xl">
            Shadman<span className="text-[#F5BF42] font-bold">.</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
