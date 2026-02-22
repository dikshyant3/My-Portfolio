# Dikshyant Dhungana Portfolio Website

A professional academic portfolio website built with React, TypeScript, and Tailwind CSS, featuring a clean design, robust component architecture, and full WCAG accessibility compliance.

## 🏗️ Project Structure

```
/
├── App.tsx                          # Main application with routing
├── styles/
│   └── globals.css                  # Global styles, CSS variables, and design tokens
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Main navigation header with routing
│   │   └── Footer.tsx              # Footer with copyright information
│   ├── pages/
│   │   ├── HomePage.tsx            # Home page with hero and news
│   │   ├── ResearchPage.tsx        # Research interests page
│   │   ├── PublicationsPage.tsx    # Publications list page
│   │   ├── ExperiencePage.tsx      # Experience and education page
│   │   ├── SkillsPage.tsx          # Skills and expertise page
│   │   ├── VitaePage.tsx           # CV/Resume page
│   │   └── ContactPage.tsx         # Contact form and information
│   ├── sections/
│   │   ├── HeroSection.tsx         # Hero section with profile and introduction
│   │   ├── ResearchSection.tsx     # Research interests and areas
│   │   ├── NewsSection.tsx         # Timeline of recent news and updates
│   │   ├── ExperienceSection.tsx   # Professional experience timeline
│   │   ├── EducationSection.tsx    # Academic background timeline
│   │   ├── SkillsSection.tsx       # Technical skills categorized by domain
│   │   ├── PublicationsSection.tsx # Academic publications list
│   │   └── ContactSection.tsx      # Contact form and information
│   ├── router/
│   │   └── Router.tsx              # Simple client-side routing
│   └── ui/
│       ├── TimelineItem.tsx        # Reusable timeline component
│       └── ScrollToTop.tsx         # Scroll to top button
```

## 📄 Page Structure

The website is organized into separate pages:

- **Home (/)**: Profile introduction and news timeline
- **Research (/research)**: Research interests and focus areas
- **Publications (/publications)**: Academic publications and papers
- **Experience (/experience)**: Work experience and education
- **Skills (/skills)**: Technical skills and expertise
- **Vitae (/vitae)**: Downloadable CV and comprehensive resume
- **Contact (/contact)**: Contact form and information

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2563eb` - Used for primary actions and accents
- **Blue Dark**: `#1e40af` - Hover states and emphasis
- **Text Primary**: `#1a1a1a` - Main text content
- **Text Secondary**: `#4a5568` - Secondary text and descriptions
- **Text Muted**: `#718096` - Less important text
- **Background Light**: `#f7fafc` - Section backgrounds
- **Timeline**: `#e2e8f0` - Timeline elements

### Typography
- **Base Font Size**: 16px
- **Font Weights**: 
  - Normal: 400
  - Medium: 500 (headings, buttons, labels)
- **Line Height**: 1.5 for optimal readability
- **Headings**: Consistent sizing with proper hierarchy

### Spacing & Layout
- **Max Content Width**: 1152px (6xl)
- **Section Padding**: 64px vertical (16 on mobile)
- **Component Spacing**: Consistent 24px between elements
- **Border Radius**: 0.625rem (10px)

## ♿ Accessibility Features (WCAG Compliance)

### Keyboard Navigation
- ✅ Full keyboard navigation support
- ✅ Visible focus indicators (2px blue outline)
- ✅ Logical tab order throughout the site
- ✅ Skip to main content link for screen readers

### ARIA Labels & Semantic HTML
- ✅ Proper heading hierarchy (h1, h2, h3)
- ✅ Semantic HTML5 elements (header, main, section, nav, footer)
- ✅ ARIA labels on interactive elements
- ✅ ARIA landmarks for screen reader navigation
- ✅ Descriptive button and link labels

### Color Contrast
- ✅ Minimum 4.5:1 contrast ratio for normal text
- ✅ Minimum 3:1 contrast ratio for large text
- ✅ Sufficient contrast on all interactive elements

### Forms & Inputs
- ✅ Associated labels with input fields
- ✅ Required field indicators
- ✅ Clear error messages and validation
- ✅ Focus states on form elements

### Motion & Animation
- ✅ Respects `prefers-reduced-motion` for users who need it
- ✅ Smooth scroll behavior (auto on reduced motion)
- ✅ Subtle transitions that enhance UX

### Images & Media
- ✅ Descriptive alt text on all images
- ✅ Decorative icons marked with `aria-hidden="true"`

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Flexible Grid**: Uses CSS Grid and Flexbox
- **Mobile Menu**: Hamburger menu for small screens

## 🧩 Component Architecture

### Layout Components
- **Header**: Sticky navigation with mobile menu
- **Footer**: Simple copyright footer

### Section Components
Each section is self-contained and reusable:
- Independent state management
- Consistent styling patterns
- Clear props interface
- Semantic HTML structure

### UI Components
Reusable components with single responsibility:
- **TimelineItem**: Generic timeline display
- **ScrollToTop**: Floating scroll button

## 🎯 Key Features

1. **Hero Section**
   - Professional profile with circular image
   - Social media links (Email, LinkedIn, GitHub, Google Scholar)
   - Brief introduction and research focus

2. **Research Section**
   - Categorized research interests
   - Detailed topic breakdown
   - Visual icons for each area

3. **Timeline Sections**
   - News updates
   - Professional experience
   - Academic education
   - Consistent timeline design

4. **Skills Section**
   - Categorized by technology domain
   - Visual tags for easy scanning
   - Icon-based categories

5. **Publications Section**
   - Organized by type (Conference, Journal, Workshop)
   - Year and venue information
   - Links to publications

6. **Contact Section**
   - Functional contact form
   - Contact information display
   - Office location details

## 🔧 Customization Guide

### Updating Colors
Edit `/styles/globals.css` and modify the CSS custom properties:
```css
:root {
  --color-accent-blue: #2563eb;
  --color-accent-blue-dark: #1e40af;
  /* ... other colors ... */
}
```

### Adding New Sections
1. Create a new file in `/components/sections/`
2. Follow the existing pattern with proper TypeScript types
3. Import and add to `/App.tsx`
4. Ensure accessibility attributes are included

### Modifying Content
Each section component contains its own data. Update the data arrays/objects within each component file:
- Research areas in `ResearchSection.tsx`
- News items in `NewsSection.tsx`
- Experience items in `ExperienceSection.tsx`
- etc.

## 🚀 Performance Optimizations

- Lazy loading for images (via ImageWithFallback component)
- Minimal dependencies
- Efficient React rendering
- CSS-only animations where possible
- Optimized bundle size

## 📋 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 🛠️ Technology Stack

- **React 18+**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS v4**: Utility-first styling
- **Lucide React**: Icon library
- **CSS Custom Properties**: Design tokens

## 📝 Best Practices

1. **Component Organization**: Clear separation of concerns
2. **Type Safety**: Full TypeScript coverage
3. **Accessibility First**: WCAG 2.1 Level AA compliant
4. **Responsive Design**: Mobile-first approach
5. **Performance**: Optimized rendering and assets
6. **Maintainability**: Clean, documented code
7. **Semantic HTML**: Proper element usage
8. **CSS Architecture**: Scoped styles with Tailwind

## 🔄 Future Enhancements

Potential improvements for the future:
- Dark mode support
- Blog section with markdown support
- Project showcase gallery
- Internationalization (i18n)
- Analytics integration
- RSS feed for publications
- Advanced filtering for publications
- Interactive project demos

## 📞 Support

For questions or issues with this template, please refer to the component documentation within each file.