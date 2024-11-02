import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  text1: string;
  text2: string;
  textPrice: string;
  color?: "gray" | "blue" | "black"; // Возможные цвета
}

const OfferContainer: React.FC<Props> = ({
  title,
  text1,
  text2,
  textPrice,
  color = "gray",
  ...props
}) => {
  // Определяем классы для цвета фона и фона заголовка
  const backgroundColorClass =
    color === "gray"
      ? "bg-[#F3F3F3]"
      : color === "blue"
      ? "bg-[#039BE5]"
      : "bg-[#191A23]";

  const textColorClass = color === "black" ? "text-white" : "";

  const titleBgColorClass = color === "gray" ? "bg-[#039BE5]" : "bg-white";

  return (
    <div
      {...props}
      className={`flex flex-col flex-wrap justify-between border border-black shadow-custom rounded-3xl p-12 w-auto gap-4 h-auto ${backgroundColorClass}`}
    >
      <div className="w-auto h-auto flex flex-col gap-6 justify-center items-center max-w-96">
        <div>
          <span
            className={`custom-title-with-bg text-xl w-auto inline-block ${titleBgColorClass}`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
        <span
          className={`font-spaceGrotesk text-xl ${textColorClass}`}
          dangerouslySetInnerHTML={{ __html: text1 }}
        />
        <span
          className={`font-spaceGrotesk text-xl ${textColorClass}`}
          dangerouslySetInnerHTML={{ __html: text2 }}
        />
      </div>
      <div className="flex justify-center items-center">
        <span
          className={`custom-title-with-bg text-xl w-auto inline-block ${titleBgColorClass}`}
          dangerouslySetInnerHTML={{ __html: textPrice }}
        />
      </div>
    </div>
  );
};

export default OfferContainer;
