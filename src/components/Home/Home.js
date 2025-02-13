import './Home.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="home">
      <h1>!Bienvenido a mi Portfolio!</h1>
      <div className="img-container">
        {/* <Image className="img-face" src="/img_cara2.JPEG" alt="Logo" width={200} height={65.5} /> */}
      </div>
    </div>
  );
}