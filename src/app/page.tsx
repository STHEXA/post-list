import UserList from "@/components/UserList";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="m-3 text-6xl font-medium text-gray-600">
        ユーザー一覧取得
      </h2>
      <UserList />
    </div>
  );
}
