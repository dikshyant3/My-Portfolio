# Multi-Page Portfolio Website - Implementation Guide

## Overview
This portfolio website has been restructured to use a multi-page architecture with client-side routing. Each major section is now its own page, with the News section integrated into the Home page.

## Page Structure

### 🏠 Home Page (/)
- **Components**: HeroSection + NewsSection
- **Content**: Profile introduction, bio, social links, and recent news timeline
- **Purpose**: First impression and latest updates

### 🔬 Research Page (/research)
- **Components**: ResearchSection
- **Content**: Four main research areas with detailed topic breakdowns
- **Areas**: Distributed Systems, Cloud Computing, ML Infrastructure, Data Processing

### 📚 Publications Page (/publications)
- **Components**: PublicationsSection
- **Content**: Academic publications organized by type (Conference/Journal/Workshop)
- **Features**: Year badges, venue information, publication links

### 💼 Experience Page (/experience)
- **Components**: ExperienceSection + EducationSection
- **Content**: Professional work experience and academic education
- **Features**: Timeline visualization with icons

### 🛠️ Skills Page (/skills)
- **Components**: SkillsSection
- **Content**: Technical skills categorized by domain
- **Categories**: Programming, Cloud, Databases, ML, Distributed Systems, Tools

### 📄 Vitae Page (/vitae)
- **Components**: VitaePage
- **Content**: Comprehensive CV with download option
- **Sections**: Education, Research, Publications, Experience, Awards

### 📧 Contact Page (/contact)
- **Components**: ContactSection
- **Content**: Contact form, contact information, office location
- **Features**: Form validation, map placeholder

## Navigation Flow

```
Header (Sticky)
  ├─ Logo → Home
  ├─ Home → /
  ├─ Research → /research
  ├─ Publications → /publications
  ├─ Experience → /experience
  ├─ Skills → /skills
  ├─ Vitae → /vitae
  └─ Contact → /contact

Breadcrumb (Below Header on sub-pages)
  Home > Current Page

Footer (Bottom)
  Copyright Information
```

## Routing Implementation

### Client-Side Routing
The application uses a simple custom routing solution without external dependencies:

```typescript
// Navigation function used throughout the app
const navigate = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// App.tsx handles route changes
useEffect(() => {
  const handlePopState = () => {
    setCurrentPath(window.location.pathname);
  };
  window.addEventListener('popstate', handlePopState);
  return () => window.removeEventListener('popstate', handlePopState);
}, []);
```

### Active Route Highlighting
The Header component receives `currentPath` as a prop and highlights the active navigation item with:
- Blue text color (`text-[var(--color-accent-blue)]`)
- Light blue background (`bg-blue-50`)

## Key Features

### 1. Breadcrumb Navigation
- Shows current location in site hierarchy
- Only appears on non-home pages
- Clickable home link for quick navigation
- ARIA labels for accessibility

### 2. Smooth Page Transitions
- Smooth scroll to top on navigation
- Consistent animations across pages
- No page reload (SPA behavior)

### 3. Mobile Responsiveness
- Hamburger menu on mobile devices
- Touch-friendly navigation
- Proper spacing for all screen sizes

### 4. Accessibility Features
- Skip to main content link
- Proper ARIA landmarks
- Keyboard navigation
- Focus management on route change
- Breadcrumb navigation for context

## File Organization

```
/components
├── pages/               # One file per page/route
│   ├── HomePage.tsx
│   ├── ResearchPage.tsx
│   ├── PublicationsPage.tsx
│   ├── ExperiencePage.tsx
│   ├── SkillsPage.tsx
│   ├── VitaePage.tsx
│   └── ContactPage.tsx
├── sections/           # Reusable section components
│   ├── HeroSection.tsx
│   ├── NewsSection.tsx
│   ├── ResearchSection.tsx
│   ├── ExperienceSection.tsx
│   ├── EducationSection.tsx
│   ├── SkillsSection.tsx
│   ├── PublicationsSection.tsx
│   └── ContactSection.tsx
├── layout/            # Layout components
│   ├── Header.tsx
│   └── Footer.tsx
└── ui/               # Reusable UI components
    ├── TimelineItem.tsx
    ├── ScrollToTop.tsx
    └── Breadcrumb.tsx
```

## Customization Guide

### Adding a New Page

1. **Create Page Component**
```typescript
// /components/pages/NewPage.tsx
import React from 'react';
import { NewSection } from '../sections/NewSection';

export const NewPage: React.FC = () => {
  return <NewSection />;
};
```

2. **Add Route to App.tsx**
```typescript
// Import the new page
import { NewPage } from './components/pages/NewPage';

// Add to renderPage function
case '/new-page':
  return <NewPage />;
```

3. **Add Navigation Link to Header**
```typescript
<NavItem to="/new-page" isActive={isActive('/new-page')}>
  New Page
</NavItem>
```

### Modifying Page Content

Each page component imports one or more section components. To modify content:
1. Navigate to the relevant section file in `/components/sections/`
2. Update the data arrays or content
3. Changes will automatically reflect on the corresponding page

### Changing Routes

To change a route path:
1. Update the route in `App.tsx` renderPage function
2. Update the navigation link in `Header.tsx`
3. Update the breadcrumb title mapping in `Breadcrumb.tsx`

## Performance Considerations

### Optimizations Implemented
- No heavy routing library dependency
- Component-level code splitting ready
- Efficient re-rendering with React state
- Smooth animations without blocking

### Future Optimizations
- Lazy loading for page components
- Prefetching on hover
- Image optimization
- Code splitting by route

## SEO Considerations

Since this is a client-side rendered application:
- Consider adding meta tags dynamically per page
- Implement proper title updates on route change
- Add structured data for academic profile
- Consider SSR/SSG for production deployment

## Browser Compatibility

### Tested and Supported
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Features Used
- History API (pushState/popState)
- ES6+ JavaScript
- CSS Custom Properties
- Flexbox & Grid

## Deployment Notes

For production deployment:
1. Configure server to redirect all routes to index.html (SPA routing)
2. Set up proper 404 handling
3. Consider implementing:
   - Server-side rendering (Next.js)
   - Static site generation
   - Progressive Web App features

### Example Server Configurations

**Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Apache (.htaccess):**
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Troubleshooting

### Issue: Page refreshes instead of routing
**Solution**: Ensure all navigation uses the custom navigate function, not native anchor links

### Issue: Active state not updating
**Solution**: Verify currentPath prop is passed to Header and updated on route change

### Issue: Back button not working
**Solution**: PopState event listener should be properly registered in App.tsx

### Issue: Breadcrumb showing on home page
**Solution**: Breadcrumb component checks `if (currentPage === '/') return null`

## Testing Checklist

- [ ] All navigation links work correctly
- [ ] Browser back/forward buttons function
- [ ] Active page highlights in navigation
- [ ] Breadcrumb appears on sub-pages only
- [ ] Smooth scroll to top on page change
- [ ] Mobile menu closes after navigation
- [ ] Keyboard navigation works (Tab, Enter)
- [ ] Screen reader announces page changes
- [ ] All forms validate properly
- [ ] External links open in new tabs

## Maintenance

### Regular Updates Needed
- News items (NewsSection.tsx)
- Publications (PublicationsSection.tsx)
- Experience entries (ExperienceSection.tsx)
- Skills list (SkillsSection.tsx)
- Profile photo (HeroSection.tsx)
- Contact information (ContactSection.tsx)

### Content Update Frequency
- **News**: Monthly or after major events
- **Publications**: After each publication
- **Experience**: When changing positions
- **Skills**: Quarterly or when learning new technologies

---

For additional questions or support, refer to the main README.md file.
