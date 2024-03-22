import React from "react";
import MainLayout from "../Layout/MainLayout";
import Author from "../Component/Author";
import ImageAuthor from "../Assets/Photo_2.svg";

const Article2 = () => {
  return (
    <MainLayout>
      <div className="flex justify-center  h-[2000px] ">
        <div className="pt-32">
          <h1 className="font-semibold text-4xl text-center ">
            The Science Behind Healthy Hair
          </h1>
          <div className="ml-[108px] mt-6">
            <Author
              name="Dr. Nicola Williams, Ph. D."
              reviewer={"Spohia Coveney"}
              imageUrl={ImageAuthor}
            />{" "}
          </div>

          <div className="w-[1062px] h-[1100px] mt-20 text-justify">
            <p>
              What is healthy hair and what is the science behind it? Here we
              discuss the structure of the hair and its propensity to exhibit a
              healthy appearance or otherwise. Why is it that our locks can
              appear lackluster? A better understanding of the natural
              properties of our hair has led us to the use of conditioning
              treatments to better manage and improve its appearance. In recent
              years we have witnessed an increasing demand for natural and
              sustainable hair-care products. Here we take a closer look at the
              use of plants in haircare.
            </p>
            <h6 className="text-2xl font-medium mt-10">
              What does healthy hair look like?
            </h6>

            <p>
              Healthy looking hair is generally thought of as smooth and shiny
              looking as opposed to dull, coarse and frizzy. The virtues of
              smoothness and shine relate to hair surface properties. Clean cut
              or tapered ends are further signifiers of health and relate to the
              hair cortex. <br />
              <br />
              Among the reasons why a person might be left grappling with a
              less-than-healthy looking set of locks include excess styling and
              cosmetic treatments, such as the use of chemical dyes or bleaches.
              Here chemical damage may occur to contribute to a dull, frizzy,
              and lackluster appearance of the hair. Furthermore, age-related
              changes such as natural greying or androgenetic alopecia (hair
              loss in older men) can result in loss of shine and smoothness.{" "}
              <br />
              <br />
              To keep our hair looking healthy involves the coordination of a
              complex set of elements; an interplay between medical and
              biological factors, scalp-care habits, hair care procedures and
              environmental factors. Cosmetics are used to alter the physical
              and mechanical properties of the hair, which in turn is dependent
              on internal structure and protein constitution. The hair surface
              when observed as “structured” at the molecular level has
              implications for the design of eco-friendly and sustainable
              ingredients and formulations for both shampoos and conditioners
              and these products have witnessed a rise in consumer demand in
              recent years.
            </p>
            <h6 className="text-2xl font-medium mt-10">
              What is the structure of the hair like?
            </h6>
            <p>
              The structure of hair consists of an outermost hydrophobic layer
              along with a cortex. Taken together these layers confer the
              coveted physical properties of luster (shine) and volume (body)
              necessary for the designation of hair “health.” <br />
              <br />
              The hydrophobic lipid epicuticle layer comprises flattened
              overlapping cuticle cells. The normal cuticle is smooth in
              appearance and allows for the reflection of light. Meanwhile, the
              inner cortex is made up of closely packed spindle-shaped cells
              filled with keratin filaments. Permanent changes occur in the
              cortex when hair is exposed to treatments such as coloring or
              procedures such as curling or straightening.
            </p>
            <h6 className="text-2xl font-medium mt-10">
              Shampoo and conditioner go hand-in-hand
            </h6>
            <p>
              Shampoo works as a cleanser to remove excess oil, sebum, and dirt.
              However, when used alone it leaves wet hair tangled, difficult to
              manage and prone to fizziness upon drying. A poor combing
              technique can cause mechanical stress and lead the outermost
              covalently bound lipid layer to be removed, leaving the hair
              surface hydrophilic and ionized. <br />
              <br />A solution to this problem is the application of
              conditioning treatments to the hair after shampooing or combining
              shampoo and conditioner into a single application ––a well-worn
              time-saving maneuver. The challenge in either case (shampoo +
              conditioner or a formulation in which the two are combined) is to
              maintain conditioning ingredients on the surface of the hair after
              the removal of the cleansing formulation. The most common
              conditioning ingredients consist of cationic surfactants, cationic
              polyelectrolytes, lipophilic conditioners (such as oils, natural
              waxes, fatty alcohols) and silicones.
            </p>
            <h6 className="text-2xl font-medium mt-10">
              The demand for natural and sustainable products
            </h6>
            <p>
              The cosmetic industry has sought to cater to demands for more
              natural and sustainable products. The big challenge here is to be
              able to replace traditional low-cost surfactants with new
              biosurfactants and for a similar price. Great strides have been
              made in this direction using green science principles and many new
              ingredients are nowadays eco-friendly.
              <br />
              <br />
              There are several advantages of solid shampoos over traditional
              formulations, such as amenability to easy transportation and
              improved microbiological stability (the presence of water in the
              composition of traditional shampoos necessitates the use of
              additional preservatives).  Here next we will turn to focus on the
              use of herbs.
              <br />
              <br />
              The use of herbals for cleansing the hair has been known since
              time immemorial. In recent times there has been a resurgence in
              the use of herbals in conjunction with the increasing trend in
              favour of natural, raw materials. Herbal products are also favored
              because they offer the added advantages of being low cost, as well
              as proffering a low risk of side effects.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Article2;
