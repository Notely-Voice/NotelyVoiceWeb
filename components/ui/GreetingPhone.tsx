const GreetingPhone = () => {
  const greetingsText = ["Hello", "Bonjour", "Hola", "Hallo", "Sannu", "Witam"];
  // Triple the list to create seamless snake-biting-tail loop
  const tripledGreetings = [...greetingsText, ...greetingsText, ...greetingsText];

  return (
    <div className="mt-20 -mb-32 min-h-[560px] xl:min-h-[600px] w-90 lg:w-[320px] xl:w-100 bg-[var(--blueBg)] border-8 border-white rounded-[60px] xl:rounded-[70px] py-5 px-5 flex flex-col justify-start items-center relative overflow-hidden">
      <div className="bg-[#F0FEFF] rounded-full mt-1.5 w-[105px] h-7 mx-auto"></div>

      <div className="mt-10 min-h-64 max-h-76 lg:min-h-80 lg:max-h-80 xl:min-h-90 xl:max-h-90 w-full flex items-center justify-center overflow-hidden">
        <div className="greeting-scroll flex flex-col gap-4">
          {tripledGreetings.map((text, idx) => (
            <p
              key={idx}
              className="font-black text-5xl xl:text-6xl text-white whitespace-nowrap"
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
