import Image from "next/image";
import CustomCarousel from "./ImageCarousell/Carousell";

const ImageSlider = ({ images }) => {
  return (
    <CustomCarousel loop>
      {images.map((src, i) => {
        return (
          <div className="relative h-96 flex-[0_0_100%]" key={i}>
            <Image src={src} fill alt="alt" />
          </div>
        );
      })}
    </CustomCarousel>
  );
};

export default ImageSlider;
