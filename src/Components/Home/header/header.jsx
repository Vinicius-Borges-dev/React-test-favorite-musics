import styles from "./header.module.css";

function Header() {
  return (
    <>
      <div
        className={`${styles.card_header} position-relative text-white text-center text-bg-dark`}
      >
        <div className="position-absolute top-50 start-50 translate-middle">
          <p className={styles.text_header}>
            <div className="fs-2 m-0 p-0">Bem vindo</div>
            <div className="fs-3 m-0 p-0">ao</div>
            <div className="fs-1 m-0 p-0">Meu Lugar Favorito</div>
          </p>
        </div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x">
          <p className={`${styles.subtext_header} fs-5`}>
            Aqui eu criei um espaço pessoal onde coloco algumas das músicas que
            ouço no dia-a-dia, este é apenas um <div>site experimental</div>
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
