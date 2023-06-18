import { create } from 'zustand';

const useFavoriteRepoStore = create(
    (set) => ({
        favoriteRepoIds: [],
        addToFavorites: (repoId) => {
            set((state) => ({
                favoriteRepoIds: [...state.favoriteRepoIds, repoId]
            }));
        },
        removeFromFavorites: (repoId) => {
            set((state) => ({
                favoriteRepoIds: [...state.favoriteRepoIds.filter((id) => id != repoId)]
            }));
        }
    })
);

export default useFavoriteRepoStore;
