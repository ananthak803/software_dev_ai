import { create } from "zustand";

export const useChatStore = create((set) => ({
    conversations: [],
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

    setActiveId: (id) =>
        set({ activeId: id }),

    addConversation: (conversation) =>
        set((state) => ({
            conversations: [
                ...state.conversations,
                conversation,
            ],
        })),
}));