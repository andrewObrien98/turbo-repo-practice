import type { Route } from "./+types/home";
import { Button } from "@repo/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <Button appName="Hello App">
      Open alert
    </Button>
  );
}
