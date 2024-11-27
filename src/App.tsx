import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyle } from './globalStyles';
import { AppRoutes } from './routes/AppRoutes';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
