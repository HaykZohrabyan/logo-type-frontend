import { createContext, useState, useContext, type ReactNode, useMemo } from 'react';
import type { IPost } from '../types/types.ts';

interface AppContextType {
  posts: IPost[];
  setPosts: (posts: IPost[]) => void;
  searchedPosts: IPost[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [posts, setPosts] = useState<IPost[]>([]);

  const searchedPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;

    return posts.filter((post) => post?.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, posts]);

  return (
    <AppContext.Provider
      value={{
        posts,
        setPosts,
        searchQuery,
        setSearchQuery,
        searchedPosts
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};
