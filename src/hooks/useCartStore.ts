import create from 'zustand';

interface CartItem {
  suffix: string;
  name: string;
  buy_price: number;
  renew_price: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (suffix: string) => void;
  clearCart: () => void;
}

