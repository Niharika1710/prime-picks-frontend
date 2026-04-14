import { RouterProvider } from 'react-router';
import { createRouter } from './routes';
import { useMemo } from 'react';

/**
 * Prime Picks - Premium E-commerce Website
 *
 * BACKEND INTEGRATION GUIDE:
 * -------------------------
 * This application is structured for easy integration with a Spring Boot backend.
 *
 * Key Integration Points:
 *
 * 1. PRODUCTS API:
 *    - Endpoint: GET /api/products/featured
 *    - Component: FeaturedProducts.tsx (lines 30-70)
 *    - See detailed integration notes in FeaturedProducts.tsx
 *
 * 2. CART FUNCTIONALITY:
 *    - Endpoint: POST /api/cart/add
 *    - Current: Local state management (see RootLayout.tsx)
 *    - To integrate: Replace handleAddToCart with API call
 *    - Expected payload: { productId: number, quantity: number }
 *
 * 3. NEWSLETTER SUBSCRIPTION:
 *    - Endpoint: POST /api/newsletter/subscribe
 *    - Component: Footer.tsx
 *    - Expected payload: { email: string }
 *
 * 4. USER AUTHENTICATION (Future):
 *    - Login: POST /api/auth/login
 *    - Register: POST /api/auth/register
 *    - JWT token management
 *
 * 5. ORDER MANAGEMENT (Future):
 *    - Checkout: POST /api/orders/create
 *    - Order history: GET /api/orders/user/{userId}
 *
 * Environment Variables (create .env file):
 * - VITE_API_BASE_URL=http://localhost:8080
 * - VITE_API_TIMEOUT=10000
 *
 * Example API Service (create src/services/api.ts):
 *
 * const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
 *
 * export const apiClient = {
 *   get: async (endpoint: string) => {
 *     const response = await fetch(`${API_BASE_URL}${endpoint}`);
 *     return response.json();
 *   },
 *   post: async (endpoint: string, data: any) => {
 *     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
 *       method: 'POST',
 *       headers: { 'Content-Type': 'application/json' },
 *       body: JSON.stringify(data)
 *     });
 *     return response.json();
 *   }
 * };
 */

export default function App() {
  // Create router instance
  const router = useMemo(() => createRouter(), []);

  return <RouterProvider router={router} />;
}