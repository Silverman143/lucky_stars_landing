import React from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import CustomButton from "./components/сustomButton";
import LanguagePicker from "./components/languagePicker";
import ContentBox from "./components/contentBox";
import OfferContainer from "./components/offerContainer";
import ContactForm from "./components/contactForm";
import MobileNavigationBar from "./components/navigationBar";
import NavigationBar from "./components/navigationBar";

function App() {
  const { t, i18n } = useTranslation();

  const scrollToContactForm = () => {
    const element = document.getElementById("contactForm");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center m-2 md:m-10 ">
      <NavigationBar t={t} scrollToContactForm={scrollToContactForm} />
      <section className=" w-full h-auto max-w-[1440px] container">
        <div className=" grid grid-cols-1 items-center md:grid-cols-2 md:py-16 gap-9 my-16 max-w-[1440px]">
          <div className=" flex flex-col gap-9 md:max-w-[532px]">
            <text className=" font-spaceGrotesk text-3xl md:text-6xl ">
              {t("title1")}
            </text>
            <img src="/images/iphones.svg" className="md:hidden w-auto m-4" />
            <text className=" font-spaceGrotesk text-xl">{t("text1")}</text>
          </div>
          <img
            src="/images/iphones.svg"
            className="hidden md:block w-auto m-4"
          />
        </div>
        <img className=" w-[1440px]" src="/images/blueLine.svg" />
      </section>
      <section className=" w-full h-full max-w-[1440px] justify-center items-center mt-9 container">
        <div className=" flex flex-row flex-wrap gap-10">
          <text className=" custom-title-with-bg text-xl md:text-4xl">
            {t("section2_title")}
          </text>
          <text className=" font-spaceGrotesk text-lg text-black max-w-[700px]">
            {t("section2_title_info")}
          </text>
        </div>
        <div
          className=" grid grid-cols-1 md:grid-cols-2 w-full py-8 gap-4"
          id="about"
        >
          <ContentBox
            title={t("benefit1_title")}
            text={t("benefit1_text")}
            image={"/images/benefitsImages/business.svg"}
          />
          <ContentBox
            title={t("benefit2_title")}
            text={t("benefit2_text")}
            image={"/images/benefitsImages/deposit.svg"}
            color="blue"
          />
          <ContentBox
            title={t("benefit3_title")}
            text={t("benefit3_text")}
            image={"/images/benefitsImages/crypto-payment.svg"}
            color="black"
          />
          <ContentBox
            title={t("benefit4_title")}
            text={t("benefit4_text")}
            image={"/images/benefitsImages/fast.svg"}
          />
          <ContentBox
            title={t("benefit5_title")}
            text={t("benefit5_text")}
            image={"/images/benefitsImages/admin-panel.svg"}
            color="blue"
          />
          <ContentBox
            title={t("benefit6_title")}
            text={t("benefit6_text")}
            image={"/images/benefitsImages/referrals.svg"}
            color="black"
          />
        </div>
        {/* Get persinal offer  */}
        <div className=" flex justify-center items-center w-full">
          <div className=" flex flex-col md:flex-row bg-[#F3F3F3] px-14 py-14 rounded-2xl justify-between w-full max-w-[1230px]">
            <div className=" flex flex-col max-w-[500px] gap-7">
              <span className=" font-spaceGrotesk text-3xl">
                {t("personal_offer_card_title")}
              </span>
              <span className=" font-spaceGrotesk text-lg">
                {t("personal_offer_card_text")}
              </span>
              <CustomButton
                text={t("contact_us")}
                onClick={scrollToContactForm}
              />
            </div>
            <img className=" p-9" src="/images/customer-service.svg" />
          </div>
        </div>
      </section>
      <section
        className=" w-full h-full max-w-[1440px] mt-9 container"
        id="pricing"
      >
        <div className=" flex flex-row flex-wrap gap-10">
          <text className=" custom-title-with-bg text-xl md:text-4xl">
            {t("section3_title")}
          </text>
          <text className=" font-spaceGrotesk text-lg text-black max-w-[499px]">
            {t("section3_title_info")}
          </text>
        </div>
        <div className=" flex flex-row flex-wrap my-8 gap-4 justify-center">
          <OfferContainer
            title={t("offer1_title")}
            text1={t("offer1_text1")}
            text2={t("offer1_text2")}
            textPrice={`${t("offer_price")} 500$`}
          />
          <OfferContainer
            title={t("offer2_title")}
            text1={t("offer2_text1")}
            text2={t("offer2_text2")}
            textPrice={`${t("offer_price")} 1500$`}
            color="blue"
          />
          <OfferContainer
            title={t("offer3_title")}
            text1={t("offer3_text1")}
            text2={t("offer3_text2")}
            textPrice={`${t("offer_price")} 4000$`}
            color="black"
          />
        </div>
      </section>
      <section
        className="w-full h-full max-w-[1440px] mt-9 container"
        id="contactForm"
      >
        <div className=" flex flex-row flex-wrap gap-10">
          <text className=" custom-title-with-bg text-xl md:text-4xl">
            {t("section4_title")}
          </text>
          <text className=" font-spaceGrotesk text-lg text-black max-w-[499px]">
            {t("section4_title_info")}
          </text>
        </div>
        <div className=" flex flex-col-reverse md:grid md:grid-cols-2 bg-gray-100 px-12 py-8 my-4 rounded-3xl justify-center items-center">
          <ContactForm t={t} />
          <div className=" w-full h-full flex justify-center items-center p-8">
            <img src="/images/iphones.svg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
