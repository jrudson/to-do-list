import { create } from "zustand";

const useManagerProjects = create(
    (set) => ({
        allProjects: [],
        addToProjects: (projects) => {
            set((state) => ({
                allProjects: projects
            }));
        }
    })
);

export default useManagerProjects;
