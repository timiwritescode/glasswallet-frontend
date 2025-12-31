export const PATHS = {
  HOME: '/',
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  FORGOT_PASSWORD: '/auth/forgot-password',
  VERIFY_CODE: '/auth/verify-reset-code',
  VERIFY_EMAIL: '/auth/verify-email',
  RESET_PASSWORD: '/auth/reset-password',
  DASHBOARD: {
    ROOT: '/dashboard',
    POTS: '/dashboard/pots',
    SETTINGS: '/dashboard/settings',
  }
} as const; 