"use client";
import { use } from "react";
import WatchView from "../../../components/WatchView";

export default function SeriesPage({ params }) {
  const { id } = use(params);
  return <WatchView type="series" id={id} />;
}
