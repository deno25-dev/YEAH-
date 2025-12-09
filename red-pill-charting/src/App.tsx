import "./styles.css";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Top Navigation - Minimal like TradingView */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Area - Use YOUR logo here */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="font-bold">КТ</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Красная таблетка</h1>
                <p className="text-sm text-gray-400">Offline Charting v1.0</p>
              </div>
            </div>
            
            {/* Symbol & Timeframe - TradingView style */}
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-gray-900 rounded">BTC/USD</div>
              <div className="flex gap-1">
                {['1D', '4H', '1H', '15M'].map((tf) => (
                  <button key={tf} className="px-3 py-1 text-sm bg-gray-800 hover:bg-gray-700 rounded">
                    {tf}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-primary hover:bg-red-700 rounded">
                Import CSV
              </button>
              <div className="text-sm text-green-400 px-3 py-1 bg-green-900/30 rounded">
                ✓ Offline
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main Layout - Chart takes >80% as per PRD */}
      <main className="container mx-auto p-4 flex gap-4">
        {/* Left Sidebar - 15% */}
        <aside className="w-64 bg-sidebar rounded-lg p-4">
          <h2 className="font-semibold mb-4 text-gray-300">Indicators</h2>
          <div className="space-y-2">
            {['Volume', 'SMA 20', 'SMA 50', 'RSI', 'MACD'].map((ind) => (
              <div key={ind} className="flex items-center justify-between p-2 hover:bg-gray-800 rounded">
                <span className="text-gray-300">{ind}</span>
                <div className="w-6 h-6 rounded border border-gray-600"></div>
              </div>
            ))}
          </div>
          
          <h2 className="font-semibold mt-6 mb-4 text-gray-300">Drawing Tools</h2>
          <div className="grid grid-cols-3 gap-2">
            {['📏', '📐', '⬛', '📝', '🔍', '🔄'].map((tool) => (
              <button key={tool} className="p-2 bg-gray-800 hover:bg-gray-700 rounded">
                {tool}
              </button>
            ))}
          </div>
        </aside>
        
        {/* Main Chart Area - 85% (matches PRD: chart >80% of screen) */}
        <div className="flex-1">
          {/* Chart Container */}
          <div className="bg-card rounded-lg p-4 h-[600px] flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-4">📈</div>
              <p className="text-lg">Chart Area</p>
              <p className="text-sm mt-2">Import CSV data to begin charting</p>
              <p className="text-xs text-gray-600 mt-1">Supports 10M+ bars offline</p>
            </div>
          </div>
          
          {/* Volume/Additional Panels */}
          <div className="mt-4 bg-sidebar rounded-lg p-4 h-32">
            <p className="text-gray-400">Volume & Additional Indicators</p>
          </div>
          
          {/* Replay Controls - Bottom as per PRD */}
          <div className="mt-4 bg-card rounded-lg p-4">
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 bg-primary rounded-full">▶</button>
              <div className="flex-1">
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="w-1/3 h-full bg-primary rounded-full"></div>
                </div>
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>Jan 2020</span>
                  <span>Current: Dec 2023</span>
                  <span>Present</span>
                </div>
              </div>
              <span className="text-gray-300">Replay Mode</span>
            </div>
          </div>
        </div>
      </main>
      
      {/* Status Bar - Bottom */}
      <footer className="border-t border-gray-800 mt-4 p-3 text-sm text-gray-500">
        <div className="container mx-auto flex justify-between">
          <span>Красная таблетка • All data local • No telemetry</span>
          <span>Ready for CSV import</span>
        </div>
      </footer>
    </div>
  );
}
