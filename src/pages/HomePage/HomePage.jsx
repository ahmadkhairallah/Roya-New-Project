import MainNewsSection from "../../components/home/MainNews/MainNewsSection";
import Carousel from "../../components/home/Carousel/Carousel";
import Advertisement from "../../components/common/Advertisment/Advertisement";
import SelectedSections from "../../components/home/SelectedSections/SelectedSections";

const HomePage = () => {
  return (
    <>
      <MainNewsSection />
      <Carousel />
      <Advertisement
        imageUrl="../../../public/assets/images/ad-img-2.webp"
        altText="إعلان رئيسي"
      />
      <SelectedSections/>
      <Advertisement
        imageUrl="../../../public/assets/images/ad-img-1 (1).webp"
        altText="إعلان رئيسي"
      />
      <Carousel />
    </>
  );
};

export default HomePage;
