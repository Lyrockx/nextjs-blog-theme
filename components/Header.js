import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
    <img src="https://github.com/Lyrockx/Image/blob/main/IMG_9521.jpeg?raw=true" alt="image description" className="w-12 h-12 rounded-full block mx-auto mb-4" />
    <p className="text-2xl dark:text-white text-center">
      <Link href="/">
        <a>{name}</a>
      </Link>
    </p>
  </header>

  );
}
