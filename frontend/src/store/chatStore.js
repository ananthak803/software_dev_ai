import { create } from "zustand";

export const useChatStore = create((set) => ({
    projects: [],
    activeId: null,
    messages: [],
    isLoading: false,

    setLoading: (isLoading) =>
        set({ isLoading }),

    addMessage: (message) =>
        set((state) => ({
            messages: [...state.messages, message],
        })),

    setMessages: (messages) =>
        set({ messages }),

    setActiveId: (project) =>
        set({ activeId: project }),

    addProject: (project) =>
    set((state) => ({
      projects: [...state.projects, project],
      activeId: project,
    })),
}));