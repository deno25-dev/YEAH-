import "./styles.css";

export default function App() {
  return (
    <div className="min-h-screen bg-tv-bg p-8">
      <h1 className="text-3xl font-bold text-white mb-4">
        🎯 Red Pill Charting
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-tv-sidebar p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-200">Indicators</h2>
          <p className="text-gray-400">SMA, EMA, RSI, MACD</p>
        </div>
        <div className="col-span-2 bg-gray-900 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-200">Chart Area</h2>
          <div className="h-64 bg-gray-800 rounded mt-2 flex items-center justify-center">
            <p className="text-gray-500">Candlestick Chart Here</p>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-tv-sidebar rounded">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-tv-green rounded">Play</button>
          <button className="px-4 py-2 bg-gray-700 rounded">Pause</button>
          <button className="px-4 py-2 bg-gray-700 rounded">Reset</button>
        </div>
      </div>
    </div>
  );
}
