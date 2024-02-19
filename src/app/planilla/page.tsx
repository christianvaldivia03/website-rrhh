"use client";
import { PlanillaInit } from "@/components/planilla/PlanillaInit";
import { SearchPlanilla } from "@/components/planilla/SearchPlanilla";
import React from "react";
import { Search } from "semantic-ui-react";

const page = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl text-secondary">Planillas del sistema</h1>
      </div>
      <div className="relative">
        <PlanillaInit />
      </div>
    </div>
  );
};

export default page;
