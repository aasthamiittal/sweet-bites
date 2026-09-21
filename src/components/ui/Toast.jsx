import { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: <CheckCircle size={20} />,
    error: <AlertCircle size={20} />,
    info: <Info size={20} />,
  };

  const styles = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-primary text-white',
  };

  return (
    <div
      className={`fixed top-24 right-4 z-50 flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl animate-slide-in-right ${styles[type]}`}
    >
      {icons[type]}
      <p className="font-medium">{message}</p>
      <button
        onClick={onClose}
        className="ml-4 hover:opacity-75 transition-opacity"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default Toast;
