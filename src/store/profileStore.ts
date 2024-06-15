import { create } from "zustand";

// Define the Profile type
type Profile = {
  login: string;
  avatar_url: string;
};

// Define the Action type for the store's actions
type Action = {
  updateProfile: (login: string, avatar_url: string) => void;
};

// Combine the Profile and Action types into a single type
type ProfileState = Profile & Action;

// Create the zustand store
export const useProfileStore = create<ProfileState>((set) => ({
  login: "maulydev",
  avatar_url: "https://avatars.githubusercontent.com/u/120643496?v=4",
  updateProfile: (login, avatar_url) => set({ login, avatar_url }),
}));
