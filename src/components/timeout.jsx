import React, { useEffect } from 'react';

function CustomAlert({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 1500); 
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="custom-alert">
      {message}
    </div>
  );
}

export default CustomAlert;
