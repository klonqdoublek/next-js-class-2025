
import MenuBar from '../../Components/MenuBar';

export default function About() {
  return (
    <><MenuBar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-green-600">About Page</h1>
        <p className="mt-4 text-lg text-gray-700">ข้อมูลเกี่ยวกับเรา</p>
      </main>
    </>
  );
}
