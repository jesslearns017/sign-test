# SignBridge Agent Orchestration Matrix

## Quick Reference Guide for Task Delegation

This matrix helps you determine which agents to involve for different types of tasks.

---

## By Task Type

### Feature Development

| Task | Lead Agent(s) | Supporting Agents | Validation Agents |
|------|---------------|-------------------|-------------------|
| **New frontend feature** | Frontend Agent | Healthcare UX, Sign Language & Deaf Culture | Accessibility, QA, Performance |
| **New API endpoint** | Backend Agent | Database & PHI, Architecture | Cybersecurity, HIPAA, QA |
| **Video feature** | Real-time Video Agent | Frontend, Backend | Sign Language & Deaf Culture, HIPAA, Performance |
| **Interpreter system** | Backend, Medical Translation | Spanish & LSM, Sign Language & Deaf Culture | Legal & Privacy, HIPAA |
| **Patient dashboard** | Frontend, Healthcare UX | Sign Language & Deaf Culture, Accessibility | QA, Accessibility |
| **EHR integration** | Medical Terminology & EHR | Backend, Database & PHI | HIPAA, Cybersecurity, Legal & Privacy |
| **Multilingual feature** | Spanish & LSM, Medical Translation | Frontend, Healthcare UX | Sign Language & Deaf Culture, QA |

### Compliance & Security

| Task | Lead Agent(s) | Supporting Agents | Validation Agents |
|------|---------------|-------------------|-------------------|
| **HIPAA audit** | HIPAA Compliance | Cybersecurity, Database & PHI, Legal & Privacy | Meta-Agent |
| **Security audit** | Cybersecurity | HIPAA Compliance, DevOps, Backend | QA |
| **Penetration testing** | Cybersecurity | DevOps, Backend | HIPAA Compliance |
| **Privacy policy update** | Legal & Privacy | HIPAA Compliance, Spanish & LSM | Medical Translation |
| **Accessibility audit** | Accessibility | Sign Language & Deaf Culture, Frontend | Healthcare UX |
| **Data breach response** | Legal & Privacy, HIPAA Compliance | Cybersecurity, DevOps | - |

### Infrastructure & DevOps

| Task | Lead Agent(s) | Supporting Agents | Validation Agents |
|------|---------------|-------------------|-------------------|
| **Deploy to production** | DevOps | QA, HIPAA Compliance, Cybersecurity | Architecture |
| **Database migration** | Database & PHI | Backend, DevOps | HIPAA Compliance, Performance |
| **Infrastructure upgrade** | DevOps, Architecture | Database & PHI, Backend | Cybersecurity, HIPAA |
| **Performance optimization** | Performance | Frontend, Backend, Database & PHI | QA |
| **CI/CD pipeline** | DevOps, QA | Backend, Frontend | Cybersecurity |

### UX & Design

| Task | Lead Agent(s) | Supporting Agents | Validation Agents |
|------|---------------|-------------------|-------------------|
| **User research** | Healthcare UX | Sign Language & Deaf Culture, Spanish & LSM | - |
| **Redesign feature** | Healthcare UX, Frontend | Sign Language & Deaf Culture, Accessibility | QA, Accessibility |
| **Onboarding flow** | Healthcare UX | Frontend, Medical Translation | Accessibility, Sign Language & Deaf Culture |
| **Error messages** | Healthcare UX, Frontend | Medical Translation, Spanish & LSM | Accessibility |

### Testing & Quality

| Task | Lead Agent(s) | Supporting Agents | Validation Agents |
|------|---------------|-------------------|-------------------|
| **Write test suite** | QA | Frontend, Backend | - |
| **Load testing** | Performance, QA | DevOps, Backend | Architecture |
| **Regression testing** | QA | Frontend, Backend | - |
| **Accessibility testing** | Accessibility, QA | Frontend | Sign Language & Deaf Culture |

---

## By User Role Affected

### Patient-Facing Features

**Always Involve**:
- Healthcare UX Agent (patient experience)
- Accessibility Agent (inclusive design)
- Sign Language & Deaf Culture Agent (Deaf patient needs)

**Often Involve**:
- Spanish & LSM Agent (multilingual patients)
- Frontend Agent (UI implementation)
- Legal & Privacy Agent (patient consent, privacy)

**Validate With**:
- QA Agent
- HIPAA Compliance Agent
- Meta-Agent (quality check)

### Provider-Facing Features

**Always Involve**:
- Healthcare UX Agent (clinical workflow)
- Medical Terminology & EHR Agent (medical context)
- Frontend Agent (provider UI)

**Often Involve**:
- Backend Agent (clinical data API)
- Authentication Agent (provider access control)
- Real-time Video Agent (consultations)

**Validate With**:
- HIPAA Compliance Agent
- QA Agent
- Performance Agent

### Interpreter-Facing Features

**Always Involve**:
- Sign Language & Deaf Culture Agent (ASL requirements)
- Spanish & LSM Agent (Spanish sign languages)
- Medical Translation Agent (medical terminology)

**Often Involve**:
- Real-time Video Agent (interpretation sessions)
- Backend Agent (interpreter matching)
- Authentication Agent (interpreter credentials)

**Validate With**:
- Legal & Privacy Agent (interpreter confidentiality)
- HIPAA Compliance Agent
- QA Agent

### Admin-Facing Features

**Always Involve**:
- Authentication Agent (admin access control)
- Frontend Agent (admin dashboard)
- Backend Agent (admin API)

**Often Involve**:
- Database & PHI Agent (reporting queries)
- HIPAA Compliance Agent (audit logs)

**Validate With**:
- Cybersecurity Agent
- QA Agent

---

## By System Layer

### Frontend (React/Next.js)
**Primary**: Frontend Agent
**Support**: Healthcare UX, Accessibility, Sign Language & Deaf Culture
**Validate**: QA, Performance

### Backend (Node.js/API)
**Primary**: Backend Agent
**Support**: Database & PHI, Architecture, Medical Terminology & EHR
**Validate**: Cybersecurity, HIPAA Compliance, QA

### Database (PostgreSQL)
**Primary**: Database & PHI Agent
**Support**: Backend, Architecture
**Validate**: HIPAA Compliance, Performance, Cybersecurity

### Video (WebRTC/Daily.co)
**Primary**: Real-time Video Agent
**Support**: Frontend, Backend, Sign Language & Deaf Culture
**Validate**: HIPAA Compliance, Performance, QA

### Infrastructure (AWS/Vercel)
**Primary**: DevOps Agent
**Support**: Architecture, Cybersecurity, Database & PHI
**Validate**: HIPAA Compliance, Performance

### Authentication & Authorization
**Primary**: Authentication Agent
**Support**: Backend, Cybersecurity, Legal & Privacy
**Validate**: HIPAA Compliance, QA

---

## Parallel vs Sequential Workflows

### Can Run in Parallel ⚡
- Frontend design + Backend design
- UI implementation + API implementation (with agreed contract)
- Documentation + Code implementation
- Unit tests + Integration tests (for different modules)
- Multiple compliance audits (HIPAA, Security, Accessibility)

### Must Run Sequentially 🔗
1. **Architecture design** → Implementation
2. **UX design** → Frontend implementation
3. **API implementation** → API tests
4. **Feature complete** → Compliance audit
5. **All tests pass** → Deployment
6. **Staging deployment** → Production deployment

### Typical Sequential Chain
```
Architecture Agent
    ↓
UX/Design Agents (Healthcare UX, Sign Language, Spanish)
    ↓
Implementation Agents (Frontend, Backend, Database) [can be parallel]
    ↓
Testing Agent (QA)
    ↓
Compliance Agents (HIPAA, Security, Legal) [can be parallel]
    ↓
DevOps Agent (Deployment)
    ↓
Meta-Agent (Post-launch review)
```

---

## Critical Path Analysis

### For Any Production Deployment
```
Must Complete (in order):
1. Feature implementation ✓
2. Tests written and passing ✓
3. HIPAA compliance review ✓ (BLOCKER)
4. Security audit ✓ (BLOCKER)
5. Legal review (if new feature type) ✓
6. Accessibility audit ✓
7. Performance benchmarks met ✓
8. Staging deployment successful ✓
9. Production deployment ✓
```

**BLOCKER** = Cannot deploy without these

---

## Emergency Workflows

### Security Breach Detected
1. **Cybersecurity Agent** (IMMEDIATE): Assess and contain
2. **DevOps Agent** (IMMEDIATE): Isolate affected systems
3. **Legal & Privacy Agent** (IMMEDIATE): Determine if PHI exposed
4. **HIPAA Compliance Agent** (If PHI): Breach notification requirements
5. **Orchestration Agent**: Coordinate incident response
6. **Meta-Agent**: Post-incident review

### Production Down
1. **DevOps Agent** (IMMEDIATE): Restore service
2. **Backend Agent** (If backend issue): Debug and fix
3. **Database Agent** (If database issue): Recover data
4. **Orchestration Agent**: Status updates to stakeholders
5. **Meta-Agent**: Post-mortem

### Critical Bug in Production
1. **Relevant Domain Agent**: Fix bug
2. **QA Agent**: Test fix
3. **DevOps Agent**: Hotfix deployment
4. **HIPAA/Security Agent** (If PHI affected): Compliance check
5. **Meta-Agent**: Root cause analysis

---

## Agent Communication Protocols

### When Agent A Needs Input from Agent B

**Option 1: Orchestration Agent coordinates**
```
Agent A → Orchestration Agent → Agent B → Orchestration Agent → Agent A
```

**Option 2: Direct delegation (for simple cases)**
```
Agent A: "I need [specific input] from [Agent B]"
[Invoke Agent B via Task tool]
Agent B provides output
Agent A continues with output
```

### When Agents Disagree

**Example**: HIPAA Agent says "Encrypt everything in logs"
           Performance Agent says "Logging encryption adds 50ms latency"

**Resolution Process**:
1. **Orchestration Agent** identifies conflict
2. Consults **Architecture Agent** for technical solution
3. Consults **Legal & Privacy Agent** if legal/compliance issue
4. Makes decision based on priorities:
   - Patient safety: HIGHEST
   - HIPAA compliance: REQUIRED (non-negotiable)
   - Performance: OPTIMIZE within compliance constraints
5. Documents decision rationale
6. Implements solution that satisfies both agents (e.g., async logging queue)

---

## Agent Handoff Checklist

When Agent A completes work and hands to Agent B:

- [ ] Clear summary of what was done
- [ ] Output artifacts (code, designs, documents)
- [ ] Context Agent B needs to know
- [ ] Specific task for Agent B
- [ ] Dependencies or blockers
- [ ] Expected timeline
- [ ] How to reach Agent A if questions

---

## Recommended Agent Invocation Patterns

### Small Task (1 agent, <1 hour)
```markdown
Invoke: Single domain agent
Example: "Fix typo in Spanish translation"
         → Spanish & LSM Agent
```

### Medium Task (2-3 agents, 1-4 hours)
```markdown
Invoke: Orchestration Agent
Orchestration Agent delegates to 2-3 domain agents
Example: "Add new form field for patient allergies"
         → Orchestration Agent
            → Frontend Agent (form UI)
            → Backend Agent (API)
            → QA Agent (tests)
```

### Large Task (5+ agents, 1+ days)
```markdown
Invoke: Orchestration Agent + Architecture Agent
Example: "Build interpreter matching system"
         → Architecture Agent (design system)
         → Orchestration Agent (coordinate implementation)
            → Multiple domain agents in phases
```

### Major Initiative (10+ agents, weeks)
```markdown
Invoke: Architecture Agent + Orchestration Agent + Weekly Meta-Agent reviews
Example: "Launch SignBridge v1.0"
         → Architecture Agent (overall design)
         → Orchestration Agent (project management)
         → All domain agents (implementation)
         → Meta-Agent (weekly quality reviews)
```

---

## Quick Decision Tree

```
Is this a new feature or major change?
├─ YES → Start with Architecture Agent
└─ NO → Continue below

Does this affect PHI or patient data?
├─ YES → Must involve HIPAA Compliance Agent
└─ NO → Continue below

Does this affect multiple system components?
├─ YES → Use Orchestration Agent
└─ NO → Use single domain agent

Is this patient-facing?
├─ YES → Involve Healthcare UX + Accessibility + Sign Language
└─ NO → Continue below

Is this compliance/legal related?
├─ YES → Involve Legal & Privacy Agent
└─ NO → Continue below

Use appropriate domain agent(s) for the technical work
```

---

## Pro Tips

1. **When in doubt, ask Orchestration Agent** - It will figure out the right delegation

2. **Always involve HIPAA Compliance Agent** for anything touching PHI

3. **Accessibility and Sign Language agents** should review all patient-facing UI

4. **Run compliance agents in parallel** at the end (HIPAA, Security, Legal, Accessibility)

5. **Architecture Agent upfront** saves rework later on large features

6. **Meta-Agent quarterly reviews** keep agent system improving

7. **Document handoffs** - Don't assume next agent has all context

8. **Parallel when possible** - Many agents can work simultaneously

9. **Test before deploy** - QA Agent before DevOps Agent, always

10. **Learn from failures** - Meta-Agent should review what went wrong
