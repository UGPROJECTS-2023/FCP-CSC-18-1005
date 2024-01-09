import { useState } from 'react';
import { FaImage } from 'react-icons/fa';
import PropTypes from "prop-types"

const PhotoUpload = ({ onImageSelect, name }) => {
  const [selectedImageURL, setSelectedImageURL] = useState(null);

  const handleImageSelect = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      // Store only the first selected file
      const selectedFile = files[0];

      // Show the selected image
      const imageURL = URL.createObjectURL(selectedFile);
      setSelectedImageURL(imageURL);

      // Pass the selected file to the parent component
      onImageSelect(e);
    } else {
      setSelectedImageURL(null);
    }
  };

  return (
    <div className="relative">
      <label htmlFor="image-upload" className="cursor-pointer">
        {selectedImageURL ? (
          <img
            src={selectedImageURL}
            alt=""
            className="w-32 h-32"
          />
        ) : (
          <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
            <FaImage size={32} />
          </div>
        )}
      </label>
      <input
        id="image-upload"
        type="file"
        name={name} // Use the specified name for the input field
        accept="image/x-png,image/gif,image/jpeg"
        className="hidden"
        onChange={handleImageSelect}
        multiple={false} // You can enable multiple file uploads if needed
      />
    </div>
  );
}

PhotoUpload.propTypes = {
  name: PropTypes.string.isRequired, // The name of the input field
  onImageSelect: PropTypes.func.isRequired,
}

export default PhotoUpload;
