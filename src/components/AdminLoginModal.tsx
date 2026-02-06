import { useState } from 'react';
import { X, ShieldCheck, AlertCircle, User, Lock } from 'lucide-react';

interface AdminLoginModalProps {
  onClose: () => void;
  onSubmit: (data: { username: string; password: string }) => void;
  error?: string | null;
}

export function AdminLoginModal({ onClose, onSubmit, error }: AdminLoginModalProps) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close admin login"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-50 rounded-full">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-2xl">Admin Login</h2>
        </div>

        <p className="text-gray-600 text-sm mb-6">
          Sign in to access the admin panel and manage properties.
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex gap-2 items-start">
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-600 text-sm font-semibold">Login failed</p>
              <span className="text-red-600 text-sm">{error}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-2 text-gray-700">
              <User className="w-4 h-4 inline mr-2" />
              Admin Email / Username
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="admin@gmail.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-700">
              <Lock className="w-4 h-4 inline mr-2" />
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
