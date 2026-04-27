import json
from typing import List, Dict

class MaturityScoringEngine:
    """Enterprise Scoring Engine for AI Engineering Maturity."""
    
    def __init__(self):
        # Weights per domain (sum = 1.0)
        self.domain_weights = {
            "Strategy": 0.10,
            "Governance": 0.15,
            "Security": 0.15,
            "Data": 0.15,
            "MLOps": 0.15,
            "LLMOps": 0.15,
            "FinOps": 0.10,
            "Value": 0.05
        }

    def calculate_score(self, assessment_data: Dict[str, int]) -> Dict:
        """
        Calculates maturity score across 12 domains.
        Returns aggregate maturity level (1-5).
        """
        results = {}
        weighted_sum = 0
        
        for domain, score in assessment_data.items():
            weight = self.domain_weights.get(domain, 0.05)
            results[domain] = {
                "score": score,
                "contribution": round(score * weight, 2),
                "label": self._get_label_for_score(score)
            }
            weighted_sum += score * weight
            
        final_level = round(weighted_sum)
        
        return {
            "organization": "Devopstrio Client",
            "maturity_index": round(weighted_sum, 2),
            "final_maturity_level": final_level,
            "domain_breakdown": results,
            "summary": f"Targeting Maturity Level {final_level}. Recommend focus on {self._get_weakest_domain(results)}."
        }

    def _get_label_for_score(self, score):
        labels = {1: "Initial", 2: "Repeatable", 3: "Defined", 4: "Managed", 5: "Optimized"}
        return labels.get(score, "Incomplete")

    def _get_weakest_domain(self, results):
        return min(results, key=lambda k: results[k]['score'])

# Sample CLI execution
if __name__ == "__main__":
    engine = MaturityScoringEngine()
    test_data = {
        "Strategy": 3,
        "Governance": 2,
        "Security": 2,
        "Data": 4,
        "MLOps": 3,
        "LLMOps": 1
    }
    print(json.dumps(engine.calculate_score(test_data), indent=4))
