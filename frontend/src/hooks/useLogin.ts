import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/auth.service';
import { useAuthStore } from '../stores/auth.store';
import type { LoginCredentials } from '../types';
import { ROLE_DEFAULT_ROUTES } from '../routes/roleRoutes';

export function useLogin() {
  const navigate = useNavigate();
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
    onSuccess: (data) => {
      authService.saveSession(data);
      setUser(data.user);
      const destination = ROLE_DEFAULT_ROUTES[data.user.role] ?? '/';
      navigate(destination, { replace: true });
    },
  });
}
