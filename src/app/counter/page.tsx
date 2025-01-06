import { Metadata } from "next";
import { Counter } from "./counter";

export const metadata: Metadata = {
  title: {
    absolute: "Counter",
  },
};

export default function CounterPage() {
  return <Counter />;
}