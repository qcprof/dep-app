export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
        Depreciation Calculator
      </h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        This site will help you calculate depreciation expense using the
        following methods.
      </p>
      <ol className="list-decimal list-inside bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
        <li className="text-gray-800 mb-2">Straight Line Depreciation</li>
        <li className="text-gray-800 mb-2">Sum of the Years Method Depreciation</li>
        <li className="text-gray-800 mb-2">
          Double Declining Balance Depreciation
        </li>
        <li className="text-gray-800">Units of Production Depreciation</li>
      </ol>
    </>
  );
}
