import React from "react";
import MainLayout from "../Layout/MainLayout";
import Author from "../Component/Author";
import ImageAuthor from "../Assets/Photo_1.svg";

const ArticlePage = () => {
  return (
    <MainLayout>
      <div className="flex justify-center  h-[1750px] ">
        <div className="pt-32">
          <h1 className="font-semibold text-4xl text-center ">
            How to Get Clear Skin Fast
          </h1>
          <div className="ml-[108px] mt-6">
            <Author
              name="Dr. Christina Asyi, Ph. D."
              reviewer={"Dr. John Doe"}
              imageUrl={ImageAuthor}
            />{" "}
          </div>

          <div className="w-[1062px] h-[1100px] mt-20 text-justify">
            <p>
              There is no instant way to clear acne or blemishes, but strategies
              that can help include avoiding touching the skin or popping
              pimples, washing frequently, and using products suited to the
              specific problem and the person’s skin type. In general, people
              with acne or blemishes have skin that is dry, oily, or a
              combination of the two. Numerous skin care tips exist for
              different skin types, and there are also general tips that people
              can try. Anyone uncertain about their skin care routine should
              consult a dermatologist for additional advice.
            </p>
            <h6 className="text-2xl font-medium mt-10">
              Pare back your skincare routine
            </h6>

            <p>
              Constant breakouts and social media feeds full of people with
              seemingly perfect skin (remember, filters aren’t always obvious)
              can manifest into feeling desperate about managing your skin. This
              can result in an overcomplicated skincare routine. <br /> <br />
              Dr Emma Craythorne, consultant dermatologist at OneWelbeck Skin
              Health and Allergy, says that one of the most common mistakes
              people make is “not understanding the type of acne they have. This
              can result in people using the wrong ingredients or applying too
              many products to compensate.” She stresses that a simple and
              repetitive approach is key. <br />
              <br />
              “The best skincare regime is a consistent one that addresses
              specific skin concerns,” seconds Dr Ifeoma Ejikeme, founder and
              medical director of Adonia Medical Clinic. “To see the biggest
              benefit, it is best to maintain skin treatments and skincare for a
              minimum of a skin cycle (at least 6-8 weeks).” So, try to be
              patient with a pared-back routine that doesn't involve using too
              many harsh products at once.
            </p>
            <h6 className="text-2xl font-medium mt-10">
              Double cleanse before bed
            </h6>
            <p>
              Tip number two: never go to sleep with your makeup on. No matter
              what time it is, or how many drinks you’ve had, always wash your
              face before bed. Then, do it again. “Ensuring that your skin is
              thoroughly cleansed should be your top priority,” says Niamh Ryan,
              skin expert and co-founder of Ella & Jo Cosmetics. “Your entire
              skincare routine rests on this one step.” <br />
              <br />
              “Your first cleanse will remove surface makeup, product build-up
              and daily grime, while your second cleanse will clean the skin
              itself,” continues Ryan. On the days that you wear makeup, use an
              oil-based cleanser first. And on the other days, try a cleansing
              milk. “For your second cleanse, I would recommend a formula
              containing salicylic acid as this is great for oily and
              blemish-prone skin.”
            </p>
            <h6 className="text-2xl font-medium mt-10">Exfoliate Often</h6>
            <p>
              “Exfoliation will help shed dead skin cells, unclogging pores,
              allowing your skincare products to penetrate better, and leaving
              your skin looking healthier and more radiant,” assures Dr Sophie
              Shotter, aesthetic doctor and founder of Illuminate Skin Clinic.
              To help clear skin, go for chemical exfoliants over physical
              exfoliants. <br />
              <br />
              “I would usually introduce AHAs and BHAs two-to-three times per
              week,” says Shotter. Salicylic acid (a BHA) works wonders on oily
              skin types, “as it penetrates really well.” If you have rosacea or
              sensitive skin, “stick to PHAs like gluconolactone as they
              moisturise while gently exfoliating.”
            </p>
            <h6 className="text-2xl font-medium mt-10">
              Strengthen your skin barrier
            </h6>
            <p>
              A good skin barrier is the secret to clear skin. “The outermost
              layer is important because it serves as the first line of defence
              against environmental aggressors such as pollution, germs and
              irritants, while also preventing moisture loss from the skin,”
              explains Dr Alexis Granite, CeraVe consultant dermatologist.
              <br />
              <br />
              Skin with a disrupted barrier may be dehydrated and flaky as well
              as red and irritated, “it may also be more prone to breakouts and
              dermatitis,” she continues. To maintain a healthy skin barrier,
              Granite recommends hydrating products that contain ceramides,
              glycerine and hyaluronic acid.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ArticlePage;
