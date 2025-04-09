import Image from 'next/image';

export default function MyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Random Photo</h1>
        <div className="relative w-full aspect-square">
          <Image
            src="https://picsum.photos/800/800"
            alt="Random photo from Lorem Picsum"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
} 