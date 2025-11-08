import { Router, Route } from '@solidjs/router';
import ContentLayout from './components/ContentLayout';
import WithNavBarLayout from './components/WithNavBarLayout';

import Academic from './contents/academic.mdx';
import About from './contents/about.mdx';
import Links from './contents/links.mdx';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div class="scrollbar h-dvh w-full overflow-auto bg-purple-light px-4">
      <Router>
        <Route path="/" component={WithNavBarLayout}>
          <Route
            path="/"
            component={() => (
              <ContentLayout title="Academic">{(<Academic />) as Element}</ContentLayout>
            )}
          />
          <Route
            path="/about"
            component={() => <ContentLayout title="About">{(<About />) as Element}</ContentLayout>}
          />
          <Route
            path="/links"
            component={() => <ContentLayout title="Links">{(<Links />) as Element}</ContentLayout>}
          />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
