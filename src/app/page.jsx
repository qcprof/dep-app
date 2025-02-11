export default function Home() {
  return (
    <>
      <div className="bg-black min-h-screen p-8">
        <h1 className="text-4xl font-bold text-yellow-500 mb-6">
          Depreciation Calculator
        </h1>
        <p className="text-yellow-300 text-lg mb-8">
          This site will help you calculate depreciation expense using the
          following methods.
        </p>
        <ol className="list-decimal list-inside space-y-4 text-yellow-200">
          <li className="bg-yellow-500/10 p-3 rounded-lg">
            Straight Line Depreciation
          </li>
          <li className="bg-yellow-500/10 p-3 rounded-lg">
            Sum of the Years Method Depreciation
          </li>
          <li className="bg-yellow-500/10 p-3 rounded-lg">
            Double Declining Balance Depreciation
          </li>
          <li className="bg-yellow-500/10 p-3 rounded-lg">
            Units of Production Depreciation
          </li>
        </ol>
      </div>
    </>
  );
}

// font-bold text-center text-blue-600 mb-4
