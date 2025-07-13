import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { AppCotext } from '../context/AppContext';
import { toast } from 'react-toastify';

function UserProfile() {

  const navigate = useNavigate();
  const {backendUrl, setIsLoggedin} = useContext(AppCotext);

  const onSubmitButton = async (item) => {

    axios.defaults.withCredentials = true;

    try {
      if (item == 'Logout') {
        const {data} = await axios.post(backendUrl + '/api/customer/auth/logout');

        if (data.success) {
          setIsLoggedin(false);
          navigate('/');
          toast.success(data.message)
        } 
      }
    } catch (error) {
      
    }
    
  };

  return (
    <div className="flex flex-col m-3">
      <Nav />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="flex flex-col lg:flex-row bg-white shadow rounded-lg overflow-hidden">
          {/* Sidebar */}
          <aside className="lg:w-1/4 bg-gray-100 p-6 space-y-4">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-2"></div>
              <h2 className="text-lg font-semibold">Mark Cole</h2>
              <p className="text-sm text-gray-600">swoo@gmail.com</p>
            </div>
            <nav className="space-y-2">
              {['Account Info', 'My Orders', 'My Address', 'Change Password', 'Logout'].map((item, i) => (
                <button
                  onClick={() => onSubmitButton(item)}
                  key={i}
                  className="flex justify-between w-full bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-green-100 transition"
                >
                  <span>{item}</span>
                  <span>➔</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Form Area */}
          <main className="flex-1 p-6">
            <h1 className="text-2xl font-bold mb-6">Account Info</h1>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name *</label>
                  <input
                    type="text"
                    defaultValue="Mark"
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                  <input
                    type="text"
                    defaultValue="Cole"
                    required
                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address *</label>
                <input
                  type="email"
                  defaultValue="swoo@gmail.com"
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  defaultValue="+1 0231 4554 452"
                  className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition"
              >
                SAVE
              </button>
            </form>
          </main>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default UserProfile;