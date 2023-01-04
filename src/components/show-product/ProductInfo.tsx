
import { FeaturesBox } from "./FeaturesBox";
import { GridImages } from "./GridImages";
import { ProductHero } from "./ProductHero";

export default function ProductInfo({ product }: any) {
  return (
    <div className="columCentered gap-6 mt-6  ">
      <ProductHero product={product} />
      <FeaturesBox product={product} />
      <GridImages product={product} />
    </div>
  );
}
