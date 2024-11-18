import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$79,90</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          at dolores explicabo cumque quisquam placeat quis alias dolorum esse,
          fugit nemo adipisci aspernatur eaque a repellat, repudiandae illo
          officia! Quidem.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
