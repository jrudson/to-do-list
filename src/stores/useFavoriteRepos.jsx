import { create } from 'zustand';

const useFavoriteRepoStore = create(
    (set) => ({
        favoriteRepoIds: false,
        addToFavorites: (repoId) => {
            set((state) => ({
                favoriteRepoIds: true
            }));
        },
        removeFromFavorites: (repoId) => {
            set((state) => ({
                favoriteRepoIds: false
            }));
        }
    })
);

export default useFavoriteRepoStore;
