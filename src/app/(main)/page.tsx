"use client";

import UserCard from "@/components/ui/cards/page";
import { useUsers } from "@/hooks/useUsers";

export default function Home() {
  const { data } = useUsers();
  console.log(data, "Data");
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data?.map((user: any) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}
