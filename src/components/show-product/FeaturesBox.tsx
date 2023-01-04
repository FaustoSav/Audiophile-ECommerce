
import { IncludedItems } from '../../interfaces/interface';

export const FeaturesBox = ({ product }: any) => {
  return (
    <div className="lg:flex  lg:gap-10 lg:mb-20">
        <div className="mt-16">
          <h3 className="subTitle">Features</h3>
          <p className="description-text whitespace-pre-line md:leading-[22px]">
            {product.features}
          </p>
        </div>

        <div className="w-full mt-16 ">
          <h3 className="subTitle">in the box</h3>
          <ul className="lg:space-y-2">
            {product.includedItems.map((product: IncludedItems) => {
              return (
                <li className="leading-[32px]" key={product.item}>
                  <span className="text-customOrgange font-bold mr-3">
                    {product.quantity}x
                  </span>
                  <span className="text-textGrayDark ">{product.item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
  )
}
