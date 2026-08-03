"use client";
import { use } from "react";
import WatchView from "../../../components/WatchView";

export default function MoviePage({ params }) {
  const { id } = use(params);
  return <WatchView type="movie" id={id} />;
}
