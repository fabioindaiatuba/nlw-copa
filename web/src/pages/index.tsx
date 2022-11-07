import Image from 'next/image';
import appPreviewImg from '../assets/app-nlw-copa-preview.png';
import logoImg from '../assets/logo.svg';
import usersAvatarExampleImg from '../assets/users-avatar-example.png';

interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <main>
        <Image
          src={logoImg}
          alt="NLW Copa"
        />
        <h1>Crie seu própio bolão da copa e compartilhe entre amigos!</h1>
        <div>
          <Image
            src={usersAvatarExampleImg}
            alt=""
          />
          <strong>
            <span>+12.592</span> pessoasjá estão usando
          </strong>
        </div>
      </main>

      <Image
        src={appPreviewImg}
        alt="Dois celulares exibindo uma prévia da aplicação nlw móvel"
        quality={100}
      />
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      count: data.count
    }
  }
}