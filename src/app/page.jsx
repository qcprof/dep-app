export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-bold text-center text-red-700 mt-10">
        Depreciation Calculator
      </h1>
      <p className="text-lg text-black text-left mt-5 ml-10">
        This site will help you calculate depreciation expense using the
        following methods.
      </p>
      <ol className="list-decimal list-inside bg-zinc-700 p-5  rounded-lg max-w-md ml-10">
        <li className=" text-zinc-200 mb-1">Straight Line Depreciation</li>
        <li className=" text-zinc-200 mb-1">
          Sum of the Years Method Depreciation
        </li>
        <li className=" text-zinc-200 mb-1">
          Double Declining Balance Depreciation
        </li>
        <li className=" text-zinc-200">Units of Production Depreciation</li>
      </ol>
    </>
  );
}

// font-bold text-center text-blue-600 mb-4
