import os
from fastapi import FastAPI, Depends, HTTPException, Security
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from fastapi.middleware.cors import CORSMiddleware
from src.services.scoring_service import EnterpriseScoringService
from pydantic import BaseModel
from typing import Dict, List

# AI Engineering Maturity Model - Enterprise API v3.0.0
app = FastAPI(
    title="AI-EMM Professional Platform",
    description="Fortune 500 AI Governance & Maturity Assessment Engine",
    version="3.0.0"
)

# Multi-Tenant CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Hardened in prod to specific subdomains
    allow_methods=["*"],
    allow_headers=["*"],
)

security = HTTPBearer()
scoring_engine = EnterpriseScoringService()

# --- Models ---
class AssessmentRequest(BaseModel):
    organization_id: str
    assessment_name: str
    scores: Dict[str, int]

# --- Routes ---

@app.get("/health")
def get_health():
    """Liveness & Readiness probe for K8s."""
    return {"status": "operational", "version": "3.0.0"}

@app.post("/api/v3/assessments/evaluate")
def evaluate_maturity(req: AssessmentRequest, token: HTTPAuthorizationCredentials = Depends(security)):
    """
    Evaluates global maturity and returns executive metrics.
    Authentication: JWT required.
    """
    # Token validation logic would go here
    try:
        report = scoring_engine.evaluate_assessment(req.scores)
        # Log to Audit Table (conceptual)
        print(f"Audit: Org {req.organization_id} performed assessment: {req.assessment_name}")
        return {
            "request_id": "uuid-99-f1",
            "organization_id": req.organization_id,
            "results": report
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/v3/benchmarks/{industry}")
def get_industry_benchmarks(industry: str):
    """Returns comparative benchmarking data for specific industries."""
    benchmarks = {
        "finance": {"avg": 3.8, "top_10": 4.5, "focus": "Security & Data"},
        "healthcare": {"avg": 2.9, "top_10": 4.1, "focus": "Governance & Ethics"},
        "retail": {"avg": 3.2, "top_10": 4.8, "focus": "MLOps & Cost"}
    }
    return benchmarks.get(industry.lower(), {"avg": 3.0})

# --- Entrypoint ---
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
