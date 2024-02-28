"use client";
import { PlanillaInit } from "@/components/planilla/PlanillaInit";
import { SearchPlanilla } from "@/components/planilla/SearchPlanilla";
import React from "react";
import { Search } from "semantic-ui-react";

const page = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl text-secondary mb-2">Planillas del sistemas</h1>
      </div>
      <div className=" max-w-[1500px] m-auto flex-col items-center justify-center">
        <PlanillaInit />
      </div>
    </div>
  );
};

export default page;
