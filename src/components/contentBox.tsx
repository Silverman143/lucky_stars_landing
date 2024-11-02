import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  text: string;
  image: string;
  color?: "gray" | "blue" | "black"; // Возможные цвета
}

const ContentBox: React.FC<Props> = ({
  title,
  text,
  image,
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
      className={`grid grid-cols-1 mdp:grid-cols-2 border border-black shadow-custom rounded-3xl p-6 md:p-12 w-auto h-auto ${backgroundColorClass}`}
    >
      <div className="w-auto h-auto flex flex-col gap-6 justify-center order-1 md:order-2">
        <div>
          <span
            className={`custom-title-with-bg text-2xl w-auto inline-block ${titleBgColorClass}`}
          >
            {title}
          </span>
        </div>
        <span
          className={`font-spaceGrotesk text-xl md:text-3xl ${textColorClass}`}
        >
          {text}
        </span>
      </div>
      <div className="flex justify-center items-center order-2 md:order-1">
        <img src={image} alt="Content" className="h-auto mb-4" />
      </div>
    </div>
  );
};

export default ContentBox;
