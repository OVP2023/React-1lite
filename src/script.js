function ShopItemFunc(props) {
  return (
    <div className="ShopItemFunc">
      <div class="main-content">
        <h2>{props.brand}</h2>
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
        <div class="description">{props.descriptionFull}</div>
        <div class="highlight-window mobile">
          <div class="highlight-overlay"></div>
        </div>
        <div class="divider"></div>
        <div class="purchase-info">
          <div class="price">
            {props.currency}
            {props.price}
          </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
}

const item = {
  brand: "Tiger of Sweden",
  title: "Leonard coat",
  description: "Minimalistic coat in cotton-blend",
  descriptionFull:
    "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  price: 399.0,
  currency: "£"
};

ReactDOM.render(
  <ShopItemFunc
    brand={item.brand}
    title={item.title}
    description={item.description}
    descriptionFull={item.descriptionFull}
    price={item.price}
    currency={item.currency}
  />,
  document.getElementById("root")
);
