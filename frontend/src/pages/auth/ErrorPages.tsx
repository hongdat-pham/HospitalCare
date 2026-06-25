import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/auth.store';
import { ROLE_DEFAULT_ROUTES } from '../../routes/roleRoutes';

export function Page403() {
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);

  function goBack() {
    if (user) {
      navigate(ROLE_DEFAULT_ROUTES[user.role], { replace: true });
    } else {
      navigate('/login', { replace: true });
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        <p className="text-6xl font-bold text-primary-600">403</p>
        <h1 className="mt-4 text-2xl font-semibold text-gray-900">Khong co quyen truy cap</h1>
        <p className="mt-2 text-gray-500 text-sm">
          Tai khoan cua ban khong co quyen truy cap trang nay.
        </p>
        <button onClick={goBack} className="btn-primary mt-6">
          Quay ve trang chinh
        </button>
      </div>
    </div>
  );
}

export function Page404() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        <p className="text-6xl font-bold text-primary-600">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-gray-900">Khong tim thay trang</h1>
        <p className="mt-2 text-gray-500 text-sm">
          Trang ban dang tim khong ton tai hoac da bi xoa.
        </p>
        <button onClick={() => navigate(-1)} className="btn-primary mt-6">
          Quay lai
        </button>
      </div>
    </div>
  );
}
