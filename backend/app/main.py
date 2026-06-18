from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import Base, engine

from app.api.v1.endpoints.auth import router as auth_router
from app.api.v1.endpoints.datasets import router as datasets_router
from app.api.v1.endpoints.forecasting import router as forecasting_router
from app.api.v1.endpoints.analytics import router as analytics_router
from app.api.v1.endpoints.users import router as users_router
from app.api.v1.endpoints.reports import router as reports_router
from app.api.v1.endpoints.health import router as health_router
from app.api.v1.endpoints.admin import router as admin_router
from app.api.v1.endpoints.notifications import router as notifications_router
from app.api.v1.endpoints.realtime import router as realtime_router
from app.api.v1.endpoints.roles import router as roles_router
from app.api.v1.endpoints.system import router as system_router
from app.api.v1.endpoints.search import router as search_router
from app.api.v1.endpoints.advanced_analytics import router as advanced_analytics_router
from app.api.v1.endpoints.ml_ops import router as ml_ops_router

# Phase 4 routers
from app.api.v1.endpoints.automation import router as automation_router
from app.api.v1.endpoints.integrations import router as integrations_router
from app.api.v1.endpoints.ai_features import router as ai_features_router
from app.api.v1.endpoints.forecast_comparison import router as forecast_comparison_router
from app.api.v1.endpoints.user_management import router as user_management_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Advanced AI Demand Forecasting API",
    version="4.0.0",
    description="Enterprise AI-powered Demand Forecasting Platform — Phase 4"
)

origins = ["http://localhost:5173", "http://127.0.0.1:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Existing routers
app.include_router(auth_router)
app.include_router(users_router)
app.include_router(datasets_router)
app.include_router(forecasting_router)
app.include_router(analytics_router)
app.include_router(reports_router)
app.include_router(health_router)
app.include_router(admin_router)
app.include_router(notifications_router)
app.include_router(realtime_router)
app.include_router(roles_router)
app.include_router(system_router)
app.include_router(search_router)
app.include_router(advanced_analytics_router)
app.include_router(ml_ops_router)

# Phase 4 routers
app.include_router(automation_router)
app.include_router(integrations_router)
app.include_router(ai_features_router)
app.include_router(forecast_comparison_router)
app.include_router(user_management_router)

@app.get("/")
def root():
    return {"message": "Advanced AI Demand Forecasting API v4.0 Running — Phase 4 Active"}

def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(title=app.title, version=app.version, description=app.description, routes=app.routes)
    openapi_schema["components"]["securitySchemes"] = {
        "BearerAuth": {"type": "http", "scheme": "bearer", "bearerFormat": "JWT"}
    }
    openapi_schema["security"] = [{"BearerAuth": []}]
    app.openapi_schema = openapi_schema
    return app.openapi_schema

app.openapi = custom_openapi
