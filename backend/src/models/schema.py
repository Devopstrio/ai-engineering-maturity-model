from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, JSON, Boolean
from sqlalchemy.orm import relationship, declarative_base
import datetime

Base = declarative_base()

class Tenant(Base):
    __tablename__ = "tenants"
    id = Column(String, primary_key=True)  # UUID
    name = Column(String, nullable=False)
    industry = Column(String)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class User(Base):
    __tablename__ = "users"
    id = Column(String, primary_key=True)
    tenant_id = Column(String, ForeignKey("tenants.id"))
    email = Column(String, unique=True, nullable=False)
    role = Column(String, default="viewer") # admin, contributor, viewer

class Assessment(Base):
    __tablename__ = "assessments"
    id = Column(String, primary_key=True)
    tenant_id = Column(String, ForeignKey("tenants.id"))
    created_by = Column(String, ForeignKey("users.id"))
    status = Column(String, default="in_progress") # in_progress, completed
    total_score = Column(Float, default=0.0)
    maturity_level = Column(Integer, default=1)
    completed_at = Column(DateTime)
    raw_responses = Column(JSON) # Detailed JSON of all answers

class DomainScore(Base):
    __tablename__ = "domain_scores"
    id = Column(Integer, primary_key=True)
    assessment_id = Column(String, ForeignKey("assessments.id"))
    domain_name = Column(String)
    score = Column(Float)
    maturity_level = Column(Integer)
    gap_analysis = Column(String)
    recommendations = Column(JSON)

class AuditLog(Base):
    __tablename__ = "audit_logs"
    id = Column(Integer, primary_key=True)
    tenant_id = Column(String, ForeignKey("tenants.id"))
    user_id = Column(String)
    action = Column(String)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)
