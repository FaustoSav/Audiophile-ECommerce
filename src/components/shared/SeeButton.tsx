import { useContext } from "react";
import { Link } from "react-router-dom";
import { CommerceContext } from "../../context/CommerceContext";

interface IButton {
  toProduct: string;
  styles?: string;
  customText?:string
}
export const SeeButton = (params: IButton) => {
  const { scrollTotop } = useContext(CommerceContext);

  return (
    <Link
      onClick={() => scrollTotop("auto")}
      className={`button ${params.styles}`}
      to={`${params.toProduct}`}
    >
      {
        params.customText ? params.customText : 'See product'
      }
    </Link>
  );
};
