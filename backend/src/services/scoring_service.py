import json
from typing import Dict, List, Optional

class EnterpriseScoringService:
    """The Proprietary Logic Core of the AI Engineering Maturity Model."""
    
    def __init__(self):
        # Professional weighting matrix for Level 5 certification
        self.weights = {
            "Strategy & Leadership": 0.08,
            "AI Governance": 0.12,
            "Responsible AI & Security": 0.15,
            "Data Engineering": 0.12,
            "ML Platform Engineering": 0.10,
            "LLMOps Readiness": 0.12,
            "DevSecOps Automation": 0.08,
            "Model Lifecycle": 0.10,
            "Observability": 0.05,
            "FinOps": 0.03,
            "Talent Model": 0.03,
            "Business Value": 0.02
        }

    def evaluate_assessment(self, responses: Dict[str, int]) -> Dict:
        """
        Processes raw audit responses into high-fidelity maturity metrics.
        """
        domain_results = {}
        cumulative_index = 0.0
        
        for domain, score in responses.items():
            weight = self.weights.get(domain, 0.05)
            # Level Mapping: 1=Initial, 2=Repeatable, 3=Defined, 4=Managed, 5=Optimized
            maturity_level = self._map_score_to_level(score)
            
            domain_results[domain] = {
                "score": score,
                "level": maturity_level,
                "gap": self._generate_gap_summary(domain, score),
                "recommendation": self._get_remediation(domain, score)
            }
            cumulative_index += score * weight
            
        final_level = round(cumulative_index)
        
        return {
            "metadata": {
                "engine_version": "3.0.0-PRO",
                "integrity_hash": "6A-F1-E2"
            },
            "maturity_index": round(cumulative_index, 2),
            "global_level": final_level,
            "breakdown": domain_results,
            "is_production_ready": final_level >= 4
        }

    def _map_score_to_level(self, score: float) -> int:
        if score >= 4.5: return 5
        if score >= 3.5: return 4
        if score >= 2.5: return 3
        if score >= 1.5: return 2
        return 1

    def _generate_gap_summary(self, domain: str, score: float) -> str:
        if score < 3: return f"Critical architectural instability in {domain}."
        if score < 4.5: return f"Sub-optimal automation in {domain} lifecycle."
        return f"{domain} is operating at peak industrial efficiency."

    def _get_remediation(self, domain: str, score: float) -> str:
        # Integrated remediation mapping to Devopstrio assets
        if "Security" in domain and score < 3:
            return "Deploy the Devopstrio 12-Factor Scanner and Zero-Trust Landing Zone."
        if "Data" in domain and score < 3:
            return "Implement the Enterprise Data Platform Accelerator (EDPA)."
        return "Continue iterative optimization of existing telemetry."

# Integration Test
if __name__ == "__main__":
    svc = EnterpriseScoringService()
    p_audit = {
        "Responsible AI & Security": 2,
        "Data Engineering": 1,
        "LLMOps Readiness": 1,
        "ML Platform Engineering": 5
    }
    report = svc.evaluate_assessment(p_audit)
    print(json.dumps(report, indent=4))
