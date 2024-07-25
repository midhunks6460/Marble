import Carousels from "./Carousels";

interface DescProps {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  slides: string[];
  setHeroImageChanging: React.Dispatch<React.SetStateAction<boolean>>;
}

const Desc: React.FC<DescProps> = ({
  activeIndex,
  setActiveIndex,
  slides,
  setHeroImageChanging,
}) => {
  return (
    <div className="bg-gray-200 w-full h-[80vh] overflow-hidden rounded-2xl p-6 flex flex-col items-start hover:scale-105 duration-300">
      <h1 className="text-5xl font-bold text-gray-700 mb-4 animate-slideUp font-dancing">
        Description
      </h1>
      <div className="mt-6 text-base text-gray-800 space-y-4">
        <p className="animate-slideUp text-2xl hover:scale-105 duration-300 font-monotype italic text-gray-600">
          Marble design is renowned for its elegance and sophistication,
          bringing a timeless quality to any space. The natural veining and
          unique patterns found in marble create a luxurious and distinctive
          appearance that enhances the overall aesthetic of interiors and
          exteriors alike.
        </p>
      </div>
      <div className="bg-white mt-4 hover:scale-105 duration-300 ml-40">
        <Carousels
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          slides={slides}
          setHeroImageChanging={setHeroImageChanging}
        />
      </div>
    </div>
  );
};

export default Desc;
