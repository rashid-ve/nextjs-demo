import { Card } from "@/app/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      Archived Notifications
      <div>
        <Link href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  );
}
