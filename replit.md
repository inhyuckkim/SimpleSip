# SimpleSip Portable Matcha Maker - E-commerce Website

## Overview

SimpleSip is a modern e-commerce website built for selling the SimpleSip Portable Matcha Maker and a complete line of SimpleSip Flavor Powders. The main product is an innovative device that allows users to make perfect matcha beverages anywhere, complemented by five premium flavor powder varieties. The application targets females aged 10-30 who value convenience and quality in their beverage preparation. The site features a comprehensive product catalog, cart functionality, order management, and customer engagement tools.

## Recent Changes (January 2025)

- **Product Line Expansion**: Added 5 SimpleSip Flavor Powder products ($7 each)
  - Vanilla Matcha Powder
  - Strawberry Matcha Powder  
  - Chai Spice Matcha Powder
  - Blueberry Matcha Powder
  - Banana Matcha Powder
- **Enhanced Product Page**: Redesigned to showcase both main device and flavor powders
- **Home Page Enhancement**: Added flavor powders preview section
- **How It Works Page**: Created comprehensive 3-step process page with step-by-step images
- **Navigation Update**: Added "How It Works" to main navigation menu
- **Comprehensive Product Descriptions**: All flavor powders include compatibility messaging with the main device

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## System Architecture

This is a full-stack web application built with a **monorepo structure** using:

- **Frontend**: React with TypeScript, built with Vite
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom matcha-themed design tokens

### Key Architectural Decisions

1. **Monorepo Structure**: All code (client, server, shared) lives in one repository for simplified development and deployment
2. **TypeScript Throughout**: Full type safety across frontend, backend, and shared schemas
3. **Component-Based UI**: Uses shadcn/ui for consistent, accessible components
4. **Session-Based Cart**: Cart functionality tied to browser sessions rather than user accounts
5. **In-Memory Storage with Database Schema**: Currently uses memory storage but designed for easy PostgreSQL integration

## Key Components

### Frontend Architecture (`client/`)
- **React with TypeScript**: Modern React with hooks and functional components
- **Vite Build System**: Fast development server and optimized builds
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight client-side routing
- **Framer Motion**: Smooth animations and transitions
- **shadcn/ui**: Pre-built accessible UI components

### Backend Architecture (`server/`)
- **Express.js**: RESTful API server
- **Session Management**: Browser session-based cart functionality
- **Memory Storage**: In-memory data storage with database-ready interfaces
- **Type-Safe APIs**: Shared schemas between client and server

### Shared Components (`shared/`)
- **Database Schema**: Drizzle ORM schema definitions
- **Type Definitions**: Shared TypeScript types and Zod validation schemas

## Data Flow

1. **Product Display**: Static product data served from memory storage
2. **Cart Management**: Session-based cart items stored in memory, associated with browser session
3. **Order Processing**: Orders created from cart items with customer information
4. **Contact Forms**: Customer inquiries stored with contact information

### API Endpoints
- `GET /api/products` - Retrieve all products
- `GET /api/products/:id` - Get single product
- `GET /api/cart` - Get cart items for session
- `POST /api/cart` - Add item to cart
- `PATCH /api/cart/:id` - Update cart item quantity
- `DELETE /api/cart/:id` - Remove item from cart
- `POST /api/orders` - Create order from cart
- `POST /api/contact` - Submit contact message

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connector (ready for future use)
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/react-***: Accessible UI primitives
- **framer-motion**: Animation library
- **wouter**: Lightweight routing
- **zod**: Schema validation

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type checking
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast bundling for production

## Deployment Strategy

### Development
- Uses Vite dev server for frontend with HMR
- Express server runs in development mode with tsx
- Replit-specific plugins for development environment

### Production Build
1. **Frontend**: `vite build` creates optimized static assets in `dist/public/`
2. **Backend**: `esbuild` bundles server code to `dist/index.js`
3. **Static Serving**: Express serves built frontend assets from `dist/public/`
4. **Database**: Ready for PostgreSQL deployment with Drizzle migrations

### Environment Setup
- Database URL configuration ready for PostgreSQL
- Session management for cart functionality
- Static asset serving in production mode
- `NODE_ENV=production` properly sets production mode

### Deployment Configuration (Fixed - July 24, 2025)
**Issue**: Deployment was blocked due to development configuration being used instead of production.

**Applied Fixes**:
1. ✅ **Build Command**: Already configured in `.replit` as `build = ["npm", "run", "build"]`
2. ✅ **Production Run Command**: Already configured in `.replit` as `run = ["npm", "run", "start"]`
3. ✅ **Environment Detection**: Enhanced server to use explicit `NODE_ENV` check alongside Express environment detection
4. ✅ **Production Scripts**: 
   - `npm run build`: Builds frontend and backend for production
   - `npm start`: Runs with `NODE_ENV=production node dist/index.js`
5. ✅ **Build Verification**: Successfully tested production build - assets generated correctly in `dist/` directory

**Deployment Status**: ✅ Ready for production deployment via Replit's deployment feature.

The application is now properly configured for deployment to Replit Deployments with correct production settings.