import React from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import MiniCard from "../Component/MiniCard";
import ProductCard from "../Component/ProductCard";
import BannerPromo from "../Component/BannerPromo";

const Home = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="flex justify-center items-center ">
        <div class="w-full h-[432px] bg-[#CFE0E6] border border-gray-400 flex justify-center items-center ">
          <div className="bg-[url('../src/Assets/Banner-Photo.svg')] bg-cover w-[642px] h-[361px] -ml-12"></div>
          <div className="w-[475px] h-[377px] text-left pl-10 pt-5">
            <h6 className="font-bold text-[#093341]  flex text-3xl ">
              WELCOME TO <br /> BLOOMIFY
            </h6>
            <p>
              Not sure where to start? Explore our informative articles, how-to
              guides, product recommendations and consultations to gain valuable
              insights into your beauty and wellness journey.
            </p>
            <Button variation={"primary"} className="w-full mt-10">
              Find Now
            </Button>
            <br />
          </div>
        </div>
      </div>
      <div className="m-12">
        <h3 className="text-3xl flex items-center justify-center m-12 ">
          Treatment Recommendation
        </h3>
        <div className="overflow-hidden flex justify-between m-12 my-2">
          <MiniCard
            imageUrl="../src/Assets/MiniCard1.svg"
            title="How to get clear skin fast"
            description="Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type."
            category="Skincare"
            clinic="Benings Clinic"
          />
          <MiniCard
            imageUrl="../src/Assets/MiniCard2.svg"
            title="Chemical Peeling"
            description="Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type. "
            category="Skincare"
            clinic="ERHA"
          />
          <MiniCard
            imageUrl="../src/Assets/MiniCard3.svg"
            title="Spa and Message"
            description="Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type. "
            category="Skincare"
            clinic="BUJASPA Massage & Nail Art"
          />
        </div>
      </div>
      <div className="mt-12 w-full h-[900px] bg-[#B0CCD5] ">
        <h3 className="text-3xl flex items-center justify-center py-20 text-[#093341]">
          Product Recomendation
        </h3>
        <div className="mx-auto w-full max-w-[1224px] flex justify-between items-center">
          <ProductCard
            imageUrl="../src/Assets/product_image.svg"
            title="Acne Treatment"
            description="Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration"
            price="100.000"
          />

          <ProductCard
            imageUrl="../src/Assets/product_image-1.svg"
            title="Acne Treatment"
            description="Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration"
            price="100.000"
          />
          <ProductCard
            imageUrl="../src/Assets/product_image.svg"
            title="Acne Treatment"
            description="Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration"
            price="100.000"
          />

          <ProductCard
            imageUrl="../src/Assets/product_image-1.svg"
            title="Acne Treatment"
            description="Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration"
            price="100.000"
          />
        </div>
      </div>

      <h3 className="text-3xl flex items-center justify-center py-20 text-[#093341]">
        Promo
      </h3>
      <div className="w-full h-[450px]  bg-cover bg-no-repeat bg-center">
        <BannerPromo
          imageUrl="../src/Assets/PromoBanner.svg"
          title="Special Offers"
          promo="Save up to 50%"
          description="Kartini’s Day is coming! 
          For everything she’s given you, it's time to give back. Shower her with love, happiness, and the best of Bloomify."
        />
      </div>
      <div className="m-12 mt-0">
        <h3 className="text-3xl flex items-center justify-center m-12 ">
          Article
        </h3>
        <div className="overflow-hidden flex justify-between m-12 my-2">
          <MiniCard
            imageUrl="../src/Assets/MiniCard1.svg"
            title="How to get clear skin fast"
            description="Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type."
          />
          <MiniCard
            imageUrl="../src/Assets/MiniCard2.svg"
            title="9 Tricks for Healthier, Fuller-Looking Hair"
            description="Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type. "
          />
          <MiniCard
            imageUrl="../src/Assets/MiniCard3.svg"
            title="Spa and Message"
            description="Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type. "
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
