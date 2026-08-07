"use client";
import { use } from "react";
import WatchView from "../../../components/WatchView";

export default function WatchPage({ params }) {
  const { id } = use(params);
  return <WatchView id={id} />;
}
