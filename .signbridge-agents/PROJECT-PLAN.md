# SignBridge App - Complete Build Plan

**Project**: HIPAA-compliant healthcare communication platform for Deaf and Hard-of-Hearing patients
**Deployment**: Netlify (frontend) + HIPAA-compliant backend
**Timeline**: 12-16 weeks for MVP
**Agent System**: All 20 agents available

---

## 🏗️ Architecture Decision (Architecture Agent)

### **CRITICAL: HIPAA Compliance with Netlify**

⚠️ **Netlify Limitation**: Netlify does NOT sign Business Associate Agreements (BAA) and is NOT HIPAA-compliant for backend/database.

**Solution**: Hybrid Architecture
- ✅ **Netlify**: Frontend hosting (Next.js static/SSG pages)
- ✅ **HIPAA-Compliant Backend**: Separate service with BAA
- ✅ **HIPAA-Compliant Database**: PostgreSQL with encryption + BAA
- ✅ **HIPAA-Compliant Video**: Daily.co or Twilio (both sign BAAs)

---

## 🎯 Recommended Tech Stack

### **Frontend (Netlify)**
- **Framework**: Next.js 14 (React + TypeScript)
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: Zustand (lightweight, simple)
- **Video UI**: Daily.co React SDK
- **i18n**: next-i18next (English + Spanish)
- **Deployment**: Netlify (frontend only)

### **Backend (HIPAA-Compliant)**
**Option A: Supabase** (Recommended for MVP)
- ✅ PostgreSQL database (encrypted)
- ✅ Authentication (built-in)
- ✅ Real-time subscriptions
- ✅ Row-level security
- ✅ **Signs BAA** for HIPAA compliance
- ✅ Generous free tier
- ✅ Can scale to production
- Cost: Free → $25/mo → $599/mo (production)

**Option B: Railway + PostgreSQL**
- Node.js backend
- PostgreSQL database
- More control, more complex
- Cost: ~$20-50/mo for MVP

**Recommendation**: **Supabase** for MVP (faster, built-in auth, BAA available)

### **Video Platform**
**Daily.co** (Recommended)
- ✅ HIPAA-compliant (signs BAA)
- ✅ 60fps support (critical for sign language)
- ✅ Recording capability
- ✅ Simple React SDK
- ✅ Good pricing ($0.0015/min)
- Cost: Free → $99/mo (unlimited development) → Production pricing

### **Additional Services**
- **Email**: AWS SES (HIPAA-compliant, has BAA)
- **File Storage**: AWS S3 (encrypted, BAA signed)
- **Monitoring**: Sentry (error tracking)
- **Analytics**: Plausible (privacy-focused) or custom

---

## 📊 Architecture Diagram

```
┌─────────────────────────────────────────────────────┐
│                   USER (Browser)                    │
│          (Patient / Provider / Interpreter)         │
└────────────────┬────────────────────────────────────┘
                 │
                 │ HTTPS
                 │
┌────────────────▼────────────────────────────────────┐
│              NETLIFY (Frontend)                     │
│                                                     │
│  ┌───────────────────────────────────────────────┐  │
│  │         Next.js 14 Application                │  │
│  │  ┌─────────────────────────────────────────┐  │  │
│  │  │ Pages:                                  │  │  │
│  │  │ - / (landing)                           │  │  │
│  │  │ - /login                                │  │  │
│  │  │ - /dashboard (patient/provider)         │  │  │
│  │  │ - /appointments                         │  │  │
│  │  │ - /video-call                           │  │  │
│  │  │ - /profile                              │  │  │
│  │  └─────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
└────┬──────────────────┬─────────────────┬──────────┘
     │                  │                 │
     │ API Calls        │ Auth            │ Video
     │ (PHI data)       │                 │
     │                  │                 │
┌────▼──────────┐  ┌────▼──────────┐  ┌──▼──────────┐
│   SUPABASE    │  │   SUPABASE    │  │  DAILY.CO   │
│   (Backend)   │  │     (Auth)    │  │   (Video)   │
│               │  │               │  │             │
│ - REST API    │  │ - Email/Pass  │  │ - WebRTC    │
│ - PostgreSQL  │  │ - MFA         │  │ - Recording │
│ - Realtime    │  │ - Sessions    │  │ - 60fps     │
│               │  │               │  │             │
│ ✅ BAA Signed │  │ ✅ BAA Signed │  │ ✅ BAA Signed│
│ HIPAA Ready   │  │ HIPAA Ready   │  │ HIPAA Ready │
└───────────────┘  └───────────────┘  └─────────────┘
```

---

## 🎯 MVP Feature Scope

### **Phase 1: Core Authentication & Profiles** (Weeks 1-2)
**Features**:
- User registration (patients, providers, interpreters)
- Email/password authentication + MFA
- User profiles (with language preferences)
- Role-based access control (RBAC)

**Agents Involved**:
- Architecture Agent (design)
- Frontend Agent (UI)
- Backend Agent (Supabase setup)
- Authentication Agent (auth flow)
- HIPAA Compliance Agent (review)

---

### **Phase 2: Appointment Scheduling** (Weeks 3-4)
**Features**:
- Providers set availability
- Patients book appointments
- Calendar integration
- Email/SMS reminders
- Interpreter request option

**Agents Involved**:
- Healthcare UX Agent (booking flow)
- Frontend Agent (calendar UI)
- Backend Agent (appointment API)
- Database & PHI Agent (schema)

---

### **Phase 3: Video Consultations** (Weeks 5-7)
**Features**:
- Patient-provider video calls
- Interpreter can join calls
- 60fps video for sign language clarity
- Recording (with consent)
- Chat during call
- Screen sharing (for documents)

**Agents Involved**:
- Real-time Video Agent (Daily.co integration)
- Sign Language & Deaf Culture Agent (video quality)
- Frontend Agent (video UI)
- Backend Agent (session management)
- HIPAA Compliance Agent (encryption, consent)

---

### **Phase 4: Spanish & LSM Support** (Weeks 8-9)
**Features**:
- Language selector (English/Spanish)
- Spanish UI translations
- LSM interpreter matching
- Spanish consent forms

**Agents Involved**:
- Spanish & LSM Agent (translation, LSM)
- Medical Translation Agent (medical terms)
- Frontend Agent (i18n)
- Legal & Privacy Agent (Spanish legal docs)

---

### **Phase 5: Compliance & Security** (Weeks 10-11)
**Features**:
- HIPAA audit logging
- Data encryption validation
- Security audit
- Accessibility audit
- Legal document review
- Patient data export (HIPAA right to access)

**Agents Involved**:
- HIPAA Compliance Agent (full audit)
- Cybersecurity Agent (penetration test)
- Legal & Privacy Agent (legal review)
- Accessibility Agent (WCAG audit)
- QA Agent (comprehensive testing)

---

### **Phase 6: Testing & Deployment** (Weeks 12-13)
**Features**:
- Unit tests (80% coverage)
- Integration tests
- E2E tests (Playwright)
- Load testing
- Performance optimization
- Staging deployment
- Production deployment

**Agents Involved**:
- QA Agent (testing)
- Performance Agent (optimization)
- DevOps Agent (deployment)
- All compliance agents (final review)

---

### **Phase 7: Beta Testing** (Weeks 14-16)
**Features**:
- Deaf community beta testing
- Spanish-speaking Deaf users
- Feedback collection
- Bug fixes
- Iteration based on feedback

**Agents Involved**:
- Sign Language & Deaf Culture Agent (Deaf beta testers)
- Spanish & LSM Agent (Latino Deaf testers)
- Healthcare UX Agent (user feedback)
- QA Agent (bug fixes)

---

## 💰 Cost Estimate (MVP)

### **Development Phase** (3-4 months)
- **Supabase**: Free tier (sufficient for development)
- **Daily.co**: Free tier (10,000 minutes/month)
- **Netlify**: Free tier
- **Domain**: $12/year
- **Total**: ~$12 for domain only

### **Production (First 100 Patients)**
- **Supabase**: $25/month (Pro tier with BAA)
- **Daily.co**: $99/month (unlimited development + production)
- **Netlify**: Free tier (sufficient for static frontend)
- **AWS S3**: ~$5/month (file storage)
- **AWS SES**: ~$1/month (email)
- **Domain**: $12/year
- **Total**: ~$130/month

### **Production (1,000+ Patients)**
- **Supabase**: $599/month (Team tier, more resources)
- **Daily.co**: $0.0015/min (pay-as-you-go)
  - Assume 500 calls/month × 30 min avg = 15,000 min
  - 15,000 × $0.0015 = $22.50
- **Netlify**: $19/month (Pro tier, better performance)
- **AWS S3**: ~$20/month
- **AWS SES**: ~$5/month
- **Monitoring (Sentry)**: $26/month
- **Total**: ~$700/month

---

## 📋 Database Schema (Database & PHI Agent)

### **Core Tables**

```sql
-- Users (Supabase Auth handles most of this)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  role VARCHAR(20) NOT NULL, -- 'patient', 'provider', 'interpreter', 'admin'
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  preferred_language VARCHAR(10) DEFAULT 'en', -- 'en', 'es'
  preferred_sign_language VARCHAR(10), -- 'ASL', 'LSM', 'LSE'
  phone VARCHAR(20),
  timezone VARCHAR(50),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only read/update their own profile
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Patient-specific data
CREATE TABLE patients (
  id UUID PRIMARY KEY REFERENCES profiles(id),
  date_of_birth DATE,
  medical_record_number VARCHAR(50) UNIQUE,
  emergency_contact_name VARCHAR(100),
  emergency_contact_phone VARCHAR(20),
  allergies TEXT,
  medications TEXT,
  conditions TEXT,
  -- PHI fields encrypted at rest by Supabase
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE patients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Patients can view own data"
  ON patients FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Providers can view assigned patients"
  ON patients FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM appointments
      WHERE appointments.patient_id = patients.id
      AND appointments.provider_id = auth.uid()
    )
  );

-- Provider-specific data
CREATE TABLE providers (
  id UUID PRIMARY KEY REFERENCES profiles(id),
  specialty VARCHAR(100),
  license_number VARCHAR(50),
  license_state VARCHAR(2),
  bio TEXT,
  languages TEXT[], -- ['en', 'es', 'ASL', 'LSM']
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE providers ENABLE ROW LEVEL SECURITY;

-- Appointments
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES patients(id),
  provider_id UUID NOT NULL REFERENCES providers(id),
  interpreter_id UUID REFERENCES profiles(id),
  appointment_date TIMESTAMPTZ NOT NULL,
  duration_minutes INTEGER DEFAULT 30,
  status VARCHAR(20) DEFAULT 'scheduled', -- 'scheduled', 'in_progress', 'completed', 'cancelled'
  appointment_type VARCHAR(50), -- 'video_consultation', 'follow_up', etc.
  requires_interpreter BOOLEAN DEFAULT FALSE,
  preferred_sign_language VARCHAR(10), -- 'ASL', 'LSM', etc.
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE INDEX idx_appointments_patient ON appointments(patient_id);
CREATE INDEX idx_appointments_provider ON appointments(provider_id);
CREATE INDEX idx_appointments_date ON appointments(appointment_date);

-- Video sessions
CREATE TABLE video_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  appointment_id UUID NOT NULL REFERENCES appointments(id),
  daily_room_name VARCHAR(100) UNIQUE,
  daily_room_url TEXT,
  started_at TIMESTAMPTZ,
  ended_at TIMESTAMPTZ,
  duration_seconds INTEGER,
  recording_url TEXT, -- Encrypted, stored in S3
  participants JSONB, -- Track who joined
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE video_sessions ENABLE ROW LEVEL SECURITY;

-- Audit logs (HIPAA requirement)
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  user_role VARCHAR(20),
  action VARCHAR(50) NOT NULL, -- 'read', 'create', 'update', 'delete'
  resource_type VARCHAR(50), -- 'patient', 'appointment', 'video_session'
  resource_id UUID,
  ip_address INET,
  user_agent TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Audit logs are append-only, no one can delete
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No one can delete audit logs"
  ON audit_logs FOR DELETE
  USING (FALSE);

-- Only admins can read audit logs
CREATE POLICY "Admins can read audit logs"
  ON audit_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );
```

---

## 🔐 Security Requirements (Cybersecurity + HIPAA Agents)

### **Must-Haves for HIPAA Compliance**

1. **Encryption**
   - ✅ At rest: Supabase encrypts PostgreSQL with AES-256
   - ✅ In transit: All HTTPS/TLS 1.2+
   - ✅ Video: Daily.co uses DTLS encryption

2. **Authentication**
   - ✅ Strong passwords (12+ chars, complexity)
   - ✅ MFA required for providers and admins
   - ✅ Session timeout: 15 minutes idle
   - ✅ Account lockout: 5 failed attempts

3. **Authorization**
   - ✅ Row-level security (RLS) on all tables
   - ✅ Principle of least privilege
   - ✅ Role-based access control (RBAC)

4. **Audit Logging**
   - ✅ Log all PHI access (who, what, when, IP)
   - ✅ Append-only logs (cannot be deleted)
   - ✅ Log retention: 6 years minimum

5. **Business Associate Agreements (BAA)**
   - ✅ Supabase: Sign BAA before production
   - ✅ Daily.co: Sign BAA before production
   - ✅ AWS S3/SES: Covered under AWS BAA

6. **Patient Rights**
   - ✅ Right to access data (download button)
   - ✅ Right to amend records
   - ✅ Accounting of disclosures

---

## 🎨 UI/UX Requirements (Healthcare UX + Sign Language Agents)

### **Design Principles**

1. **Visual-First** (for Deaf users)
   - Large, clear video windows (not tiny PIP)
   - Visual notifications (not audio alerts)
   - Vibration alerts on mobile
   - Status indicators visible at all times

2. **Deaf Flag Brand Colors**
   - Primary: Deaf Blue (#0055CC)
   - Secondary: Turquoise (#00BCD4)
   - Accent: Deaf Yellow (#FFD700)
   - Dark: Navy (#001F3F)

3. **Accessibility**
   - WCAG 2.1 AA minimum
   - Keyboard navigation
   - Screen reader compatible
   - High contrast mode option
   - Large text option (up to 200%)

4. **Health Literacy**
   - 6th-8th grade reading level
   - Plain language (avoid medical jargon)
   - Visual aids and icons
   - ASL/LSM video instructions (not just text)

5. **Mobile-First**
   - Many patients use phones primarily
   - Touch targets 44×44px minimum
   - Responsive design

---

## 📦 Project Structure

```
signbridge-app/
├── .env.local                    # Environment variables (not committed)
├── .env.example                  # Template for environment variables
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── netlify.toml                  # Netlify deployment config
├── public/
│   ├── images/
│   ├── videos/                   # ASL/LSM instruction videos
│   └── fonts/
├── src/
│   ├── app/                      # Next.js 14 App Router
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── forgot-password/
│   │   ├── (dashboard)/
│   │   │   ├── patient/
│   │   │   ├── provider/
│   │   │   └── interpreter/
│   │   ├── appointments/
│   │   ├── video-call/
│   │   └── api/                  # API routes (proxy to Supabase)
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── video/                # Video call components
│   │   ├── appointments/
│   │   └── shared/
│   ├── lib/
│   │   ├── supabase/             # Supabase client
│   │   ├── daily/                # Daily.co video client
│   │   ├── utils/
│   │   └── hooks/
│   ├── types/
│   │   └── database.types.ts     # Generated from Supabase
│   └── styles/
│       └── globals.css
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
└── docs/
    └── architecture/
```

---

## 🚀 Deployment Strategy (DevOps Agent)

### **Environments**

1. **Development** (Local)
   - Local Next.js dev server
   - Supabase local instance OR remote dev project
   - Daily.co development mode
   - No BAAs needed

2. **Staging** (Netlify)
   - Netlify preview deployment
   - Supabase staging project
   - Daily.co test environment
   - BAAs signed
   - Test with fake patient data

3. **Production** (Netlify + Supabase)
   - Netlify production deployment
   - Supabase production project
   - Daily.co production
   - All BAAs signed
   - Real patient data (PHI)

### **CI/CD Pipeline** (GitHub Actions)

```yaml
# .github/workflows/main.yml
name: SignBridge CI/CD

on:
  push:
    branches: [main, staging, development]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test
      - run: npm run test:e2e

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm audit
      - run: npx snyk test

  accessibility:
    runs-on: ubuntu-latest
    steps:
      - run: npm run build
      - run: npx @axe-core/cli http://localhost:3000

  deploy-staging:
    needs: [test, security, accessibility]
    if: github.ref == 'refs/heads/staging'
    runs-on: ubuntu-latest
    steps:
      - uses: netlify/actions/cli@master
        with:
          args: deploy --prod
```

---

## ✅ Pre-Launch Checklist

### **HIPAA Compliance** (HIPAA Compliance Agent)
- [ ] BAA signed with Supabase
- [ ] BAA signed with Daily.co
- [ ] BAA signed with AWS (S3, SES)
- [ ] All PHI encrypted at rest and in transit
- [ ] Audit logging implemented
- [ ] Patient rights implemented (access, amend, accounting)
- [ ] Privacy Officer designated
- [ ] Breach notification procedure documented
- [ ] Notice of Privacy Practices posted

### **Security** (Cybersecurity Agent)
- [ ] Penetration testing completed
- [ ] No critical or high vulnerabilities
- [ ] npm audit clean
- [ ] HTTPS enforced everywhere
- [ ] CORS properly configured
- [ ] Rate limiting on APIs
- [ ] Session management secure

### **Accessibility** (Accessibility Agent)
- [ ] WCAG 2.1 AA compliant
- [ ] Lighthouse accessibility score 100
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Color contrast validated

### **Legal** (Legal & Privacy Agent)
- [ ] Terms of Service published
- [ ] Privacy Policy published
- [ ] Consent forms reviewed by attorney
- [ ] Spanish legal documents translated
- [ ] Telemedicine licensing verified

### **Deaf Community** (Sign Language & Deaf Culture Agent)
- [ ] Video quality 60fps
- [ ] Visual notifications implemented
- [ ] ASL instruction videos created
- [ ] Beta tested with Deaf community
- [ ] Feedback incorporated

### **Testing** (QA Agent)
- [ ] Unit tests 80%+ coverage
- [ ] Integration tests pass
- [ ] E2E tests pass
- [ ] Load testing completed
- [ ] Cross-browser testing

### **Performance** (Performance Agent)
- [ ] Lighthouse Performance score 90+
- [ ] Core Web Vitals pass
- [ ] Page load time <2s
- [ ] Video latency <200ms

---

## 📅 12-Week Sprint Plan

| Week | Phase | Focus | Agents |
|------|-------|-------|--------|
| 1-2 | Phase 1 | Auth & Profiles | Architecture, Frontend, Backend, Auth, HIPAA |
| 3-4 | Phase 2 | Appointments | UX, Frontend, Backend, Database |
| 5-7 | Phase 3 | Video Calls | Video, Frontend, Backend, Sign Language, HIPAA |
| 8-9 | Phase 4 | Spanish/LSM | Spanish, Translation, Frontend, Legal |
| 10-11 | Phase 5 | Compliance | HIPAA, Security, Legal, Accessibility, QA |
| 12-13 | Phase 6 | Testing & Deploy | QA, Performance, DevOps, All Compliance |
| 14-16 | Phase 7 | Beta Testing | Sign Language, Spanish, UX, QA |

---

## 💡 Success Criteria

### **MVP Launch Ready When**:
- ✅ Patients can register and book appointments
- ✅ Providers can conduct video consultations
- ✅ Interpreters can join video calls
- ✅ Spanish language support functional
- ✅ HIPAA compliant (all BAAs signed, audit logging works)
- ✅ Accessible (WCAG 2.1 AA)
- ✅ Secure (no critical vulnerabilities)
- ✅ Tested by Deaf community (positive feedback)
- ✅ All compliance agents approve

---

## 🎯 Next Immediate Steps

**Ready to proceed?** Here's what we'll do next:

1. **Initialize Next.js project**
2. **Set up Supabase project**
3. **Configure Daily.co account**
4. **Create initial database schema**
5. **Build authentication flow**

**Shall I start building the MVP? Which phase would you like to begin with?**
