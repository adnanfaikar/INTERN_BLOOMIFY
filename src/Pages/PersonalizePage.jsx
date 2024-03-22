import React, { useEffect } from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import MiniCard from "../Component/MiniCard";
import ProductCard from "../Component/ProductCard";
import BannerPromo from "../Component/BannerPromo";
import Treatment1 from "../Assets/MiniCard1.svg";
import Treatment2 from "../Assets/MiniCard2.svg";
import Treatment3 from "../Assets/MiniCard3.svg";
import Product1 from "../Assets/product_image.svg";
import Product2 from "../Assets/product_image-1.svg";
import Article2 from "../Assets/Article_2.svg";
import Promo from "../Assets/PromoBanner.svg";

const PersonalizePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Bloomify";
    const favicon = document.getElementById("favicon");
    if (favicon) {
      favicon.href = "/src/logo_dark.svg";
    }
  }, []);

  return (
    <MainLayout>
      <div className="flex justify-center items-center">
        <div className="xl:bg-[url('../src/Assets/Banner-2.svg')] bg-cover w-full h-[481px]  mx-0 md:mx-auto md:bg-PP00 sm:hidden xl:inline ">
          <div className="max-w-[505px] h-[377px] text-center md:text-center  pt-5 md:items-center  ">
            <p>
              These are the results of the <br /> survey that are right for you!
            </p>
          </div>
        </div>
      </div>

      <div className="m-12">
        <h3 className="xl:text-3xl flex items-center justify-center m-12 sm:text-xl">
          Treatment Recommendation
        </h3>
        <div className="overflow-hidden flex justify-center xl:space-x-20 my-2 md:space-x-12  flex-col sm:flex-row ">
          <MiniCard
            imageUrl={Treatment1}
            title="Acne Peeling"
            description="Experience transformative beauty with our exclusive skincare treatments! Unveil radiant skin and say goodbye to imperfections. "
            category="Skincare"
            clinic="ERHA "
            onClick={() => navigate("/details")}
          />
          <MiniCard
            imageUrl={Treatment2}
            title="Chemical Peeling"
            description="Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type. "
            category="Skincare"
            clinic="ERHA"
            onClick={() => navigate("/details")}
          />
          <MiniCard
            imageUrl={Treatment3}
            title="Spa and Message"
            description="Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type. "
            category="Skincare"
            clinic="BUJASPA Massage & Nail Art"
            onClick={() => navigate("/details")}
          />
        </div>
      </div>
      <div className="mt-12 w-full h-[900px] bg-[#B0CCD5] ">
        <h3 className="text-3xl flex items-center justify-center py-20 text-[#093341] font-regular">
          Product Recomendation
        </h3>
        <div className="mx-auto w-full max-w-[1224px] flex flex-wrap justify-between items-center">
          <ProductCard
            imageUrl={Product1}
            title="Acne Treatment"
            description="Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration"
            price="100.000"
          />
          <ProductCard
            imageUrl={Product2}
            title="Acne Treatment"
            description="Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration"
            price="100.000"
          />

          <div className="hidden md:flex">
            <ProductCard
              imageUrl={Product1}
              title="Acne Treatment"
              description="Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration"
              price="100.000"
            />
          </div>
          <div className="hidden lg:flex">
            <ProductCard
              imageUrl={Product2}
              title="Acne Treatment"
              description="Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration"
              price="100.000"
            />
          </div>
        </div>
      </div>

      <h3 className="text-3xl flex items-center justify-center py-20 text-[#093341] font-regular">
        Promo
      </h3>
      <div className="w-full xl:h-[450px] md:h-[384px]  bg-cover bg-no-repeat bg-center">
        <BannerPromo
          imageUrl={Promo}
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
        <div className="overflow-hidden flex justify-center xl:space-x-20 my-2 md:space-x-6 flex-col sm:flex-row">
          <MiniCard
            imageUrl={Treatment1}
            title="How to get clear skin fast"
            description="Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type."
            onClick={() => navigate("/Article")}
          />
          <MiniCard
            imageUrl={Article2}
            title="Healthy Hair? What Is It: The Science Behind Healthy Hair"
            description="While genetics play a key role, your diet, the weather, pollution, and your overall. "
            onClick={() => navigate("/Article2")}
          />
          <MiniCard
            imageUrl={Treatment3}
            title="Spa and Message"
            description="Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type. "
            onClick={() => navigate("/Article")}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default PersonalizePage;
