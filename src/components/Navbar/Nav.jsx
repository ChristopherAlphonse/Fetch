import Logo from "../../assets/footer-logo.svg";

function Nav() {
  return (
    <header className="sticky bg-primary">
      <nav className="rounded  px-2 py-2.5 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={Logo} className="sm:9 mr-3" alt="Fetch Logo" width={80} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
