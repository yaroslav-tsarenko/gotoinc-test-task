import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

interface AuthStore {
    users: User[];
    currentUser: User | null;
    register: (name: string, email: string, password: string) => void;
    login: (email: string, password: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set, get) => ({
            users: [],
            currentUser: null,
            register: (name: string, email: string, password: string) => {
                const newUser: User = { id: Date.now().toString(), name, email, password };
                set((state: AuthStore) => ({ users: [...state.users, newUser] }));
            },
            login: (email: string, password: string) => {
                const user: User | undefined = get().users.find((user: User) => user.email === email && user.password === password);
                if (user) {
                    set({ currentUser: user });
                } else {
                    alert('Invalid email or password');
                }
            },
            logout: () => set({ currentUser: null }),
        }),
        {
            name: 'auth-storage',
        }
    )
);
