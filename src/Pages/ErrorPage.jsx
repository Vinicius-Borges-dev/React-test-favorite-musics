import Container from "../Components/Common/Container";
import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";

function ErrorPage() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="w-100 position-relative" style={{ height: "80vh" }}>
          <div className="position-absolute top-50 start-50 translate-middle">
            <div className="mx-auto" style={{ width: "250px" }}>
              <img src="https://placehold.co/250" alt="Imagem de erro" />
            </div>
            <h1 className="text-center">Ops! Não tem nada aqui</h1>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default ErrorPage;
