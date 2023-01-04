export const GridImages = ({ product }: any) => {
  return (
    <div className="flex  flex-col  gap-5 customGrid:grid-container ">
      <picture className="row-start-1 first ">
        <img
          className="rounded-md tablet:hidden  "
          src={product.gallery.first.mobile}
          alt="gallery-img"
        />
        <img
          className="rounded-md hidden tablet:block lg:hidden h-full"
          src={product.gallery.first.tablet}
          alt="gallery-img"
        />{" "}
        <img
          className="rounded-md hidden lg:block h-[100%]"
          src={product.gallery.first.desktop}
          alt="gallery-img"
        />
      </picture>

      <picture className="row-start-2 row-end-2 second">
        <img
          className="rounded-md tablet:hidden "
          src={product.gallery.second.mobile}
          alt="gallery-img"
        />
        <img
          className="rounded-md hidden tablet:block lg:hidden  h-[100%]"
          src={product.gallery.second.tablet}
          alt="gallery-img"
        />{" "}
        <img
          className="rounded-md hidden lg:block h-[100%]"
          src={product.gallery.second.desktop}
          alt="gallery-img"
        />
      </picture>

      <picture className="row-start-1 col-start-2  third ">
        <img
          className="rounded-md tablet:hidden "
          src={product.gallery.third.mobile}
          alt="gallery-img"
        />
        <img
          className="rounded-md hidden tablet:block lg:hidden h-[100%]"
          src={product.gallery.third.tablet}
          alt="gallery-img"
        />{" "}
        <img
          className="rounded-md hidden lg:grid h-[100%]"
          src={product.gallery.third.desktop}
          alt="gallery-img"
        />
      </picture>
    </div>
  );
};
