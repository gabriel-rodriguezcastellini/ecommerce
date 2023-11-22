const brandName = "ShopHub";

const NavBar = () => {
  return (
    <nav>
      <h3>{brandName}</h3>
      <div>
        <button>Celulares</button>
        <button>Tablets</button>
        <button>Notebooks</button>
      </div>
    </nav>
  );
};

export default NavBar;
