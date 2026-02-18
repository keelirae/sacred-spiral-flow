import { useState, useEffect, createContext, useContext } from "react";
import { User } from "firebase/auth";
import { onAuthStateChange } from "@/lib/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChange((authUser) => {
      if (authUser) {
        setUser(authUser);
        setLoading(false);
      } else {
        // Demo mode: create a fake user so dashboard is accessible
        const demoUser = {
          uid: "demo-user-123",
          email: "demo@overload.local",
          displayName: "Demo Coach",
          photoURL: null,
          emailVerified: true,
          isAnonymous: false,
          metadata: {},
          providerData: [],
          refreshToken: "demo-refresh-token",
          tenantId: null,
          phoneNumber: null,
          providerId: "demo",
          reload: async () => {},
          getIdToken: async () => "demo-token",
          getIdTokenResult: async () => ({ token: "demo-token", claims: {}, expirationTime: new Date().toISOString(), issuedAtTime: new Date().toISOString() }),
          toJSON: () => ({}),
          delete: async () => {},
        } as unknown as User;
        setUser(demoUser);
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
