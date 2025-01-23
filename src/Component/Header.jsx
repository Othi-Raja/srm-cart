import React, { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { Link } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa6";
import { IoMicCircleOutline } from "react-icons/io5";
import { FaMicrophoneSlash } from "react-icons/fa6";

// Product List with images and prices
const productList = [
  { name: "Apple", price: "$1.99", image: "https://png.pngtree.com/png-vector/20210522/ourmid/pngtree-apple-is-naturally-thirsty-and-healthy-png-image_3323218.jpg" },
  { name: "Banana", price: "$0.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUY9Bi_invEAwFjM2jEMxNSc3NwLT3dzXeRA&s" },
  { name: "Orange", price: "$1.49", image: "https://png.pngtree.com/element_our/png/20180903/orange-png-png_75700.jpg" },
  { name: "Tomato", price: "$2.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27BW-s_DxhWZ5xYAdaEn36DkHEAtHtKbduw&s" },
  { name: "Potato", price: "$1.29", image: "https://png.pngtree.com/png-vector/20201024/ourmid/pngtree-clean-smooth-vegetable-potatoes-png-image_2371443.jpg" },
  { name: "Carrot", price: "$1.69", image: "https://png.pngtree.com/element_pic/16/05/31/00574c6e02d716a.jpg" },
  { name: "Milk", price: "$2.50", image: "https://img.freepik.com/premium-vector/realistic-clear-glass-milk-isolated-transparent-background_68094-190.jpg" },
  { name: "Eggs", price: "$3.00", image: "https://www.shutterstock.com/image-vector/chicken-egg-shadow-on-transparent-260nw-437018548.jpg" },
  { name: "Bread", price: "$1.50", image: "https://png.pngtree.com/png-vector/20201110/ourmid/pngtree-two-slices-of-bread-stacked-png-image_2408819.jpg" },
  { name: "Rice", price: "$4.99", image: "https://static.vecteezy.com/system/resources/thumbnails/045/913/366/small/uncooked-white-rice-in-wooden-bowl-cut-out-stock-png.png" }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);  // State for cart modal visibility
  const [searchQuery, setSearchQuery] = useState('');  // Search input query state
  const [suggestions, setSuggestions] = useState([]);  // Search suggestions
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', pinCode: '' }); // Form data
  const [selectedProduct, setSelectedProduct] = useState(null);  // Product selected from suggestions
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  // Function to handle the voice search (start/stop)
  const handleVoiceSearch = () => {
    if (listening) {
      SpeechRecognition.stopListening();  // Stop listening when mic is clicked
    } else {
      SpeechRecognition.startListening({ continuous: true });  // Start listening when mic is clicked
    }
  };

  // Filter the product list based on the search query
  const filterSuggestions = (query) => {
    if (query.length > 0) {
      const filtered = productList.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Update search suggestions whenever the search query or transcript changes
  useEffect(() => {
    filterSuggestions(searchQuery || transcript);
  }, [searchQuery, transcript]);

  // Function to handle search input manually (user typing)
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);  // Update search query when typing
    if (e.target.value === "") {
      resetTranscript();  // Reset the transcript when input is cleared manually
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed for ${selectedProduct.name}. Details: ${JSON.stringify(formData)}`);
    setShowAddressForm(false); // Close the form after submission
    setFormData({ name: '', phone: '', address: '', pinCode: '' }); // Clear form fields
  };
  // Function to open and close the cart modal
  const toggleCartModal = () => {
    setIsOpen(!isOpen);
  };
 // Handle the form data changes
 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};

  // Function to handle product selection
  const handleProductClick = (product) => {
    setSelectedProduct(product);  // Set the selected product
    setSuggestions([]);  // Clear the search suggestions when a product is clicked
  };

  return (
    <div>
      {/* Header Banner */}
      <div className="border-bottom pb-5">
        <div className="bg-light py-1">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-12 d-flex" style={{ alignItems: 'center' }} />
              <div className="col-md-2 col-xxl-1 text-end d-none d-lg-block" style={{ marginLeft: '20px' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container">
          {/* Logo aligned to the left */}
          <Link className="navbar-brand" to="/Grocery-react/">
            <h4>SRM FreshCart</h4>
          </Link>

          {/* Search bar and voice button aligned to the right */}
          <div className="d-flex justify-content-end align-items-center w-100">
            <div className="col-8 col-sm-6 col-lg-9 py-2">
              <input
                className="form-control"
                style={{ width: "100%" }}
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type or speak to search..."
                value={searchQuery || transcript}  // Display either manual input or transcript
                onChange={handleSearchInputChange}  // Update the search query when user types
              />
              {/* Suggestions dropdown */}
              {suggestions.length > 0 && (
                <ul className="list-group mt-2" style={{ position: "absolute", width: "100%", zIndex: 100 }}>
                  {suggestions.map((suggestion, index) => (
                    <li 
                      key={index} 
                      className="list-group-item list-group-item-action"
                      onClick={() => handleProductClick(suggestion)}
                      style={{ display: 'flex', alignItems: 'center' }}  // Align image and text
                    >
                      <img 
                        src={suggestion.image} 
                        alt={suggestion.name} 
                        style={{ width: '30px', height: '30px', marginRight: '10px' }}  // Style the image
                      />
                      {suggestion.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="d-flex ms-2">
              <button onClick={toggleCartModal} className="btn btn-light">
                <FaMicrophone />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="modal show" style={{ display: 'block', position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <h5>{selectedProduct.name}</h5>
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  style={{ width: '50px', height: '50px', marginBottom: '10px' }}  // Display product image in modal
                />
                <p>Price: {selectedProduct.price}</p>
                <button className="btn btn-primary" onClick={() => setShowAddressForm(true)}>Cash on Delivery</button> <br />
                <button type="button" className="border-0 btn-transparent" onClick={() => setSelectedProduct(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
 {/* Address Form Modal */}
 {showAddressForm && (
        <div className="modal show" style={{ display: 'block', position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <h5>Enter your Address</h5>
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label>Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label>Phone Number</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label>Address</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="address" 
                      value={formData.address} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label>Pin Code</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="pinCode" 
                      value={formData.pinCode} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  <button type="submit" className="btn btn-success">Submit</button>
                  <button type="button" className="border-0 btn-transparent mt-3" onClick={() => setShowAddressForm(false)}>Close</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal (popup) */}
      {isOpen && (
        <div className="modal show" style={{ display: 'block', position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="d-flex justify-content-center mt-3">
                  <button onClick={handleVoiceSearch} className="btn btn-transparent border-0">
                    {listening ? <FaMicrophoneSlash size={90} /> : <IoMicCircleOutline size={90} />}
                  </button>
                </div>
                <center>
                  <button type="button" className="border-0 btn-transparent" onClick={toggleCartModal}>Close</button>
                </center>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
