import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div className="h-screen">
      <Sidebar>
        <div className="h-full w-64 p-4">
          <h1 className="text-2xl font-semibold mb-4">Sidebar Content</h1>
          <p>Your sidebar content goes here.</p>
        </div>
      </Sidebar>
    </div>
  );
}
