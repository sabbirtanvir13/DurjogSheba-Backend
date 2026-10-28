# 🚨 DurjogSheba (দুর্যোগ সেবা) — Backend API

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Prisma ORM](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
[![bKash](https://img.shields.io/badge/bKash-E2136E?style=for-the-badge&logoColor=white)](https://developer.bka.sh/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**DurjogSheba (দুর্যোগ সেবা)** is an emergency disaster response, relief coordination, rescue operation management, and donation platform tailored for crisis-affected communities.

This repository powers the core backend services, providing secure RESTful APIs for real-time rescue tracking, shelter capacity monitoring, relief item supply management, volunteer task delegation, and automated bKash tokenized payment processing.

---

## 📑 Table of Contents

- [Features](#-features)
- [System Architecture & Tech Stack](#-system-architecture--tech-stack)
- [Database Schema & Models](#-database-schema--models)
- [API Endpoints Reference](#-api-endpoints-reference)
- [Environment Configuration](#-environment-configuration)
- [Getting Started](#-getting-started)
- [Database Seeding](#-database-seeding)
- [Build & Deployment](#-build--deployment)
- [Linting & Formatting](#-linting--formatting)

---

## 🌟 Features

### 🔐 1. Authentication & Role-Based Access Control (RBAC)
- Multi-role authorization: **`ADMIN`**, **`VOLUNTEER`**, and **`DONOR`**.
- User registration, login, and secure JWT-based access/refresh token management with HTTP-only cookies.
- Email verification and password reset workflows powered by **Redis OTP storage** and **Nodemailer + EJS** responsive templates.
- Google OAuth token integration support.

### 🆘 2. Emergency Rescue Operations
- Real-time SOS rescue request creation with location details, contact numbers, trapped people count, and urgency levels (`LOW`, `MEDIUM`, `HIGH`, `CRITICAL`).
- Volunteer task assignment and workflow status tracking (`PENDING` ➔ `ASSIGNED` ➔ `IN_PROGRESS` ➔ `RESCUED` / `CANCELLED`).
- Soft-deletion safeguards for audit trails.

### 🏕️ 3. Shelter Management
- Track shelters by district, upazila, physical address, maximum capacity, and current headcount.
- Volunteer coordinator assignment per shelter.
- Multi-image shelter photo upload integration with **Cloudinary**.

### 📦 4. Relief Supplies & Needs Tracking
- Track essential relief supplies (food, water, medicine, baby care) categorized by units (`KG`, `LITER`, `PACKET`, `PIECE`, `BOX`).
- Demand-versus-fulfillment tracking with urgency prioritization (`LOW`, `MEDIUM`, `HIGH`, `CRITICAL`).
- Status updates (`PENDING`, `IN_PROGRESS`, `FULFILLED`, `CANCELLED`).

### 🤝 5. Volunteer Task Dashboard
- Dedicated volunteer dashboard with metric summaries (Total assigned, pending, in-progress, completed).
- Self-assignment workflow for unassigned rescue missions.
- Status updating for active rescue operations.

### 💳 6. Donation & bKash Payment Gateway
- Seamless fundraising with **bKash Tokenized Checkout** (`createPayment` & `executePayment` callbacks).
- Transaction ID generation, verification, and payment status lifecycle (`PENDING`, `COMPLETED`, `FAILED`, `REFUNDED`).
- Dynamic redirection to frontend success/failure result pages.

### 🛡️ 7. Admin Moderation & User Management
- View platform-wide statistics and all registered users.
- Manage user lifecycle statuses (`ACTIVE`, `BLOCKED`, `PENDING`, `SUSPENDED`).

---

## 🛠 System Architecture & Tech Stack

| Layer | Technology |
|---|---|
| **Runtime & Framework** | Node.js (ESM), Express.js 5 |
| **Language** | TypeScript (Strict mode) |
| **Database & ORM** | PostgreSQL, Prisma ORM 7 (`@prisma/adapter-pg`) |
| **In-Memory Cache** | Redis (ioredis / node-redis) for OTPs & temporary states |
| **Payment Gateway** | bKash Tokenized Checkout API |
| **Media Storage** | Cloudinary & Multer |
| **Validation** | Zod schema validation |
| **Security & Middleware** | Helmet, CORS, Cookie-Parser, Bcrypt |
| **Email Service** | Nodemailer with EJS template engine |
| **Code Quality** | Biome (Formatting & Linting) |
| **Bundling & Production** | Esbuild & Vercel Serverless Functions |

---

## 🗄 Database Schema & Models

```mermaid
erDiagram
    User ||--o| Donor : "has profile"
    User ||--o{ Shelter : "coordinates"
    User ||--o{ RescueRequest : "assigned as volunteer"
    User ||--o{ Donation : "donates"
    Shelter ||--o{ ReliefNeed : "requires"
    Shelter ||--o{ RescueRequest : "shelters victims"

    User {
        string id PK
        string name
        string email UK
        string password
        string phoneNumber
        Role role
        UserStatus status
        boolean isVerified
        string imageUrl
    }

    Donor {
        string id PK
        string userId FK
        string name
        string email UK
        string phoneNumber
    }

    Shelter {
        string id PK
        string name
        string district
        string upazila
        int capacity
        int currentPeople
        string coordinatorId FK
    }

    ReliefNeed {
        string id PK
        string shelterId FK
        string itemName
        int quantity
        int fulfilled
        Unit unit
        UrgencyLevel urgency
        ReliefStatus status
    }

    RescueRequest {
        string id PK
        string shelterId FK
        string location
        string contactPhone
        int peopleCount
        UrgencyLevel urgency
        RescueStatus status
        string assignedToId FK
    }

    Donation {
        string id PK
        string donorId FK
        float amount
        string currency
        string transactionId UK
        string paymentGateway
        PaymentStatus status
    }
```

---

## 🔌 API Endpoints Reference

### Base URL: `/api/v1`

#### 🔑 Authentication (`/api/v1/auth`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `POST` | `/register` | Register new user / donor account | Public |
| `POST` | `/verify-otp` | Verify registration OTP | Public |
| `POST` | `/login` | Authenticate user and receive JWT cookies | Public |
| `POST` | `/refresh-token` | Regenerate access token via refresh token | Public |
| `POST` | `/forgot-password`| Send password reset OTP to email | Public |
| `POST` | `/reset-password` | Reset password using verified OTP | Public |
| `POST` | `/change-password`| Change current user password | Authenticated |

#### 🏕️ Shelters (`/api/v1/shelters`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/` | List all shelters (filter by district/upazila) | Public |
| `GET` | `/:id` | Get shelter details with relief & rescue requests | Public |
| `POST` | `/` | Create a new shelter (with photo upload) | `ADMIN`, `VOLUNTEER` |
| `PATCH` | `/:id` | Update shelter details or capacity | `ADMIN`, `VOLUNTEER` |
| `DELETE`| `/:id` | Remove a shelter | `ADMIN` |

#### 📦 Relief Needs (`/api/v1/relief-needs`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/` | List relief requests across shelters | Public |
| `GET` | `/:id` | Get relief need details | Public |
| `POST` | `/` | Create relief supply request | `ADMIN`, `VOLUNTEER` |
| `PATCH` | `/:id` | Update relief fulfillment progress | `ADMIN`, `VOLUNTEER` |
| `DELETE`| `/:id` | Delete relief request | `ADMIN` |

#### 🆘 Rescue Requests (`/api/v1/rescue-requests`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/` | List rescue requests (filterable by status/urgency) | Public / Auth |
| `GET` | `/:id` | Get single rescue request details | Public / Auth |
| `POST` | `/` | Submit emergency rescue/SOS request | Public / Auth |
| `PATCH` | `/:id/assign` | Assign volunteer to rescue operation | `ADMIN`, `VOLUNTEER` |
| `PATCH` | `/:id/status` | Update rescue status (`IN_PROGRESS`, `RESCUED`) | `ADMIN`, `VOLUNTEER` |
| `DELETE`| `/:id` | Soft delete rescue request | `ADMIN` |

#### 🤝 Volunteers (`/api/v1/volunteers`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/dashboard` | Get volunteer overview statistics & tasks | `VOLUNTEER`, `ADMIN` |
| `GET` | `/my-rescues` | Get rescues assigned to logged-in volunteer | `VOLUNTEER` |
| `POST` | `/assign-self/:id`| Self-assign to a pending rescue request | `VOLUNTEER` |
| `PATCH` | `/rescue-status/:id`| Update progress of assigned rescue mission | `VOLUNTEER` |

#### 💳 Donations & bKash (`/api/v1/donations`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `POST` | `/initiate` | Initiate bKash tokenized payment checkout | `DONOR`, Authenticated |
| `GET` | `/bkash/callback` | bKash payment gateway execution callback | Public / bKash Gateway |
| `GET` | `/my-donations` | View donation history for logged-in user | `DONOR`, Authenticated |
| `GET` | `/` | View all platform donations summary | `ADMIN` |

#### 👤 Users & Admin (`/api/v1/user`, `/api/v1/admin`)
| Method | Endpoint | Description | Access |
|---|---|---|---|
| `GET` | `/user/me` | Fetch profile information | Authenticated |
| `PATCH` | `/user/me` | Update profile information and avatar | Authenticated |
| `GET` | `/admin/users` | List all registered users | `ADMIN` |
| `PATCH` | `/admin/users/:id/status` | Update user status (`ACTIVE`, `BLOCKED`) | `ADMIN` |

---

## ⚙️ Environment Configuration

Create a `.env` file in the project root by copying `.env.example`:

```bash
cp .env.example .env
```

Configure the following variables:

```env
PORT=5000
NODE_ENV="development"
backend_base_url="http://localhost:5000"
FRONTEND_URL="http://localhost:3000"

# PostgreSQL Database (Supabase / Neon / Local PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/durjog_sheba?schema=public"

# JWT Authentication
BCRYPT_SALT_ROUNDS=10
JWT_SECRET="your_jwt_secret_key"
JWT_EXPIRES_IN="7d"
JWT_ACCESS_SECRET="your_access_secret_key"
JWT_ACCESS_EXPIRES_IN="1d"
JWT_REFRESH_SECRET="your_refresh_secret_key"
JWT_REFRESH_EXPIRES_IN="7d"

# Redis Cache
REDIS_USER="default"
REDIS_PASSWORD=""
REDIS_HOST="localhost"
REDIS_PORT=6379

# Nodemailer SMTP Configuration
SMTP_USER="your_email@gmail.com"
SMTP_SENDER="your_email@gmail.com"
SMTP_PASSWORD="your_gmail_app_password"

# Cloudinary Storage
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

# bKash Tokenized Checkout
BKASH_BASE_URL="https://tokenized.sandbox.bka.sh/v1.2.0-beta"
BKASH_USERNAME="your_sandbox_username"
BKASH_PASSWORD="your_sandbox_password"
BKASH_APP_KEY="your_sandbox_app_key"
BKASH_APP_SECRET="your_sandbox_app_secret"
BKASH_CALLBACK_URL="http://localhost:5000/api/v1/donations/bkash/callback"
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18+ or v20+)
- **npm** or **pnpm**
- **PostgreSQL** instance running
- **Redis** server running locally or hosted (e.g. Upstash)

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/sabbirtanvir13/DurjogSheba-Backend.git
cd DurjogSheba-Backend
npm install
```

### 3. Generate Prisma Client
Generate the TypeScript client into `src/generated/prisma`:

```bash
npx prisma generate
```

### 4. Push Database Schema
Sync your Prisma schema with your PostgreSQL database:

```bash
npx prisma db push
```

### 5. Run Development Server
Start the development server with live reload:

```bash
npm run dev
```

The API will be available at: `http://localhost:5000`

---

## 🌱 Database Seeding

To quickly initialize the database with default accounts (`ADMIN`, `VOLUNTEER`, `DONOR`), run:

```bash
npm run seed
```

This populates default credentials configured in `src/app/utils/seed.ts`.

---

## 🏗️ Build & Deployment

### Production Build
Bundle the application using `esbuild` for production:

```bash
npm run build
```
This generates the optimized bundle in `api/index.js`.

### Vercel Deployment
The project includes a pre-configured `vercel.json` pointing to `api/index.js`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "api/index.js"
    }
  ]
}
```

Simply connect this GitHub repository to [Vercel](https://vercel.com/) and configure your environment variables in the Vercel Project Settings.

---

## 🧹 Linting & Formatting

Format and lint using **Biome**:

```bash
# Check formatting
npm run format:check

# Format files
npm run format:fix

# Check linter rules
npm run lint:check

# Auto-fix linter issues
npm run lint:fix
```

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
