import {assets} from '../../assets/homePage/assets.js';

function HomeSection() {
    return (
    <div className="p-4 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        
        {/* Sidebar */}
        <aside className="bg-white p-4 rounded-md shadow text-sm font-medium text-gray-800">
          <h3 className="text-red-600 font-bold mb-4">SALE 40% OFF</h3>
          <ul className="space-y-2">
            {[
              "Laptops", "PC & Computers", "Cell Phones", "Tablets",
              "Gaming & VR", "Networking", "Cameras", "Sounds",
              "Office", "Storage, USB", "Accessories", "Clearance"
            ].map((item, index) => (
              <li key={index} className="hover:text-green-600 cursor-pointer">{item}</li>
            ))}
          </ul>
        </aside>

        {/* Main content area (spanning 3 columns on large screens) */}
        <main className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Hero Banner */}
          <div className="relative bg-gray-300 rounded-md p-6 flex flex-col justify-center items-start col-span-2 h-64 overflow-hidden">
            <img src={assets.headPhoneW} className="" />
            <h2 className="text-white text-2xl font-bold absolute top-10">Noise Cancelling</h2>
            <p className="text-white text-sm mb-4 absolute">Boso Over-Ear Headphone<br/>Wifi, Voice Assistant,<br/>Low Latency Game Mode</p>
            <button className="bg-white absolute bottom-5 text-black text-sm px-4 py-2 rounded-md font-semibold">BUY NOW</button>

            {/* Simulated Carousel Dots */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          {/* Product Card 1 - Watch */}
          <div className="bg-white relative p-4 rounded-md flex flex-col justify-between shadow text-center">
            <h3 className="text-sm mb-2 absolute right-4">XOMIA<br/><span>Sport Water Resistance Watch</span></h3>
            <img src={assets.watch} alt="Watch" className="mx-auto mb-2" />
            <button className="bg-black text-white text-xs px-4 py-2 rounded">SHOP NOW</button>
          </div>

          {/* Product Card 2 - PlayGo */}
          <div className="bg-white p-4 rounded-md shadow flex items-center gap-3 col-span-1">
            <img src={assets.ps5} alt="Playgo" />
            <div>
              <p className="text-sm">Sono Playgo 5<br/>from <span className="text-green-600">Rs.100k</span></p>
              <button className="text-xs underline mt-1">DISCOVER NOW</button>
            </div>
          </div>

          {/* Product Card 3 - Keyboard */}
          <div className="bg-gray-200 relative p-4 rounded-md shadow col-span-1">
            <h3 className="text-sm absolute top-10 left-8 text-white">Logitek Bluetooth <br /> <span className="text-yellow-500">Keyboard</span></h3>
            <p className="text-xs mt-1 absolute top-25 left-8 text-white">Best for all device</p>
            <img src={assets.keyboard} alt="Keyboard" className="mt-2" />
          </div>

          {/* Product Card 4 - GoPro */}
          <div className="bg-black text-white relative p-4 rounded-md shadow col-span-1">
            <h3 className="font-bold text-lg absolute top-4">OKODO HERO 11+ BLACK</h3>
            <p className="text-green-400 mt-2 absolute  top-10">FROM Rs.80k</p>
            <img src={assets.okodo} alt="GoPro" className="mt-4 rounded" />
          </div>

        </main>
      </div>
    </div>
  );
}

export default HomeSection;