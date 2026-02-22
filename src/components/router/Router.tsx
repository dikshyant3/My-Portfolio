import React, { useState, useEffect } from 'react';

interface Route {
  path: string;
  component: React.ComponentType;
}

interface RouterProps {
  routes: Route[];
}

export const Router: React.FC<RouterProps> = ({ routes }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const matchedRoute = routes.find(route => route.path === currentPath) || routes[0];
  const Component = matchedRoute.component;

  return <Component />;
};

export const getCurrentPath = () => window.location.pathname;
