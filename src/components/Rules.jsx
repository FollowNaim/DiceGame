const Rules = () => {
  return (
    <div className="px-4 mt-2 mb-2 max-w-[500px] mx-auto sm:mt-12">
      <div className="mx-auto p-4 bg-amber-100 rounded">
        <h2 className="text-xl ml-4 font-semibold">How to play dice game</h2>
        <div className="ml-4 mt-2">
          <p className="">1 - Select any number.</p>
          <p>2 - Click on dice image.</p>
          <p>
            3 - after click on dice if selected number is equal to dice number
            you will get same point as dice{" "}
          </p>
          <p>4 - if you get wrong guess then 2 point will be dedcuted. </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
