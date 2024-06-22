
import hamburguer2 from './assets/hamburguer2.png'
import pizza2 from './assets/pizza2.png'
import sushi2 from './assets/sushi2.png'

function App() {
  return (
    <>
      <div className="font-sans text-gray-900">
        {/* Header Section */}
        <header className="bg-gray-800 text-white p-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Restaurante DeliciasDoDia</h1>
          <nav className="flex space-x-4">
            <a href="#menu" className="text-lg hover:text-gray-400">Menu</a>
            <a href="#about" className="text-lg hover:text-gray-400">Sobre Nós</a>
            <a href="#contact" className="text-lg hover:text-gray-400">Contato</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="bg-cover bg-center text-blcack py-32 px-5" >
          <h2 className="text-5xl font-bold text-center">Bem-vindo ao Restaurante DeliciasDoDia</h2>
          <p className="text-2xl text-center mt-4">Onde a comida é uma obra de arte</p>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-20 px-5 text-center">
          <h2 className="text-4xl font-bold mb-10">Nosso Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pizza */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <img src={pizza2} alt="Pizza" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold">Pizza</h3>
              <p className="mt-4">Descrição deliciosa da pizza.</p>
            </div>
            {/* Hamburguer */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <img src={hamburguer2} alt="Hamburguer" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold">Hamburguer</h3>
              <p className="mt-4">Descrição deliciosa do hamburguer.</p>
            </div>
            {/* Sushi */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <img src={sushi2} alt="Sushi" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold">Sushi</h3>
              <p className="mt-4">Descrição deliciosa do sushi.</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-5 text-center bg-gray-50">
          <h2 className="text-4xl font-bold mb-10">Sobre Nós</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Somos um restaurante dedicado a proporcionar a melhor experiência gastronômica.
            Nossa equipe de chefs talentosos utiliza ingredientes frescos e de alta qualidade
            para criar pratos inesquecíveis.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-5 text-center">
          <h2 className="text-4xl font-bold mb-10">Contato</h2>
          <p className="text-lg mb-4">Email: exemplo@restaurante.com</p>
          <p className="text-lg mb-4">Telefone: (00) 1234-5678</p>
          <p className="text-lg mb-4">Endereço: Rua Exemplo, 123, Cidade, País</p>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy; 2024 Restaurante Exemplo. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
