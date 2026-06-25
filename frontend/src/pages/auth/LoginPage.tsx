import { useState, type FormEvent } from 'react';
import { useLogin } from '../../hooks/useLogin';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;
    login.mutate({ username: username.trim(), password });
  }

  const errorMessage = login.error
    ? (login.error as { response?: { data?: { message?: string } } })
        ?.response?.data?.message ?? 'Dang nhap that bai. Vui long thu lai.'
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 to-primary-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">HospitalCare</h1>
          <p className="text-primary-200 mt-1 text-sm">He thong Quan ly Benh vien Da khoa</p>
        </div>

        {/* Card */}
        <div className="card p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Dang nhap he thong</h2>

          {errorMessage && (
            <div className="mb-4 px-4 py-3 rounded-lg bg-red-50 border border-red-200">
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="label">
                Ten dang nhap
              </label>
              <input
                id="username"
                type="text"
                autoComplete="username"
                className="input-field"
                placeholder="Nhap ten dang nhap"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={login.isPending}
              />
            </div>

            <div>
              <label htmlFor="password" className="label">
                Mat khau
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className="input-field"
                placeholder="Nhap mat khau"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={login.isPending}
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full mt-2"
              disabled={login.isPending || !username.trim() || !password.trim()}
            >
              {login.isPending ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Dang dang nhap...
                </span>
              ) : (
                'Dang nhap'
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-primary-300 text-xs mt-6">
          HospitalCare v1.0 — Do an tot nghiep
        </p>
      </div>
    </div>
  );
}
