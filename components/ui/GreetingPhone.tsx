const GreetingPhone = () => {
  const greetingsText = ["Hello", "Bonjour", "Hola", "Hallo", "Sannu", "Witam"];
  // Triple the list to create seamless snake-biting-tail loop
  const tripledGreetings = [...greetingsText, ...greetingsText, ...greetingsText];

  return (
    <div className="mt-6 sm:mt-20 -mb-40 sm:-mb-32 min-h-90 sm:min-h-140 xl:min-h-150 w-full sm:w-90 lg:w-[320px] xl:w-100 bg-[var(--blueBg)] border-5 sm:border-8 border-white rounded-[32px] sm:rounded-[60px] xl:rounded-[70px] py-5 px-5 flex flex-col justify-start items-center relative overflow-hidden">
      <div className="bg-[#F0FEFF] rounded-full w-20 sm:w-[105px] h-5 sm:h-7 mx-auto"></div>

      <div className="mt-10 min-h-64 max-h-76 lg:min-h-80 lg:max-h-80 xl:min-h-90 xl:max-h-90 w-full flex items-center justify-center overflow-hidden">
        <div className="greeting-scroll flex flex-col gap-4">
          {tripledGreetings.map((text, idx) => (
            <p
              key={idx}
              className="font-black text-4xl sm:text-5xl xl:text-6xl text-white whitespace-nowrap"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GreetingPhone;
