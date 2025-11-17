import { useState, useEffect } from 'react';
import { Phone, MessageSquare, Instagram, Mail, CheckCircle, Shield, Clock, Users, Car, Home, CreditCard, TrendingUp, Zap, Star } from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('pessoal');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      id: 'pessoal',
      title: 'Empréstimo Pessoal',
      description: 'Crédito rápido e sem burocracia para você resolver suas necessidades pessoais.',
      icon: <Users className="w-12 h-12 text-blue-600" />,
      features: ['Taxas competitivas', 'Aprovação em minutos', 'Sob consulta ao SPC/Serasa']
    },
    {
      id: 'juridico',
      title: 'Empréstimo Empresarial',
      description: 'Capitalize seu negócio com crédito personalizado para empresas de todos os portes.',
      icon: <TrendingUp className="w-12 h-12 text-green-600" />,
      features: ['Para MEI, ME e EPP', 'Prazos flexíveis', 'Sem garantia exigida']
    },
    {
      id: 'recebiveis',
      title: 'Antecipação de Recebíveis',
      description: 'Receba seus valores antecipados e mantenha o fluxo de caixa da sua empresa saudável.',
      icon: <CreditCard className="w-12 h-12 text-purple-600" />,
      features: ['Antecipe faturas e boletos', 'Liberdade financeira imediata', 'Processo 100% digital']
    },
    {
      id: 'titulos',
      title: 'Desconto de Títulos',
      description: 'Transforme seus títulos em dinheiro agora, com condições especiais para sua empresa.',
      icon: <Zap className="w-12 h-12 text-yellow-600" />,
      features: ['Desconto de duplicatas', 'Rápido e seguro', 'Taxas transparentes']
    },
    {
      id: 'veiculos',
      title: 'Empréstimo com Garantia de Veículo',
      description: 'Use seu veículo como garantia e obtenha crédito com taxas reduzidas e prazos estendidos.',
      icon: <Car className="w-12 h-12 text-red-600" />,
      features: ['Até 80% do valor do veículo', 'Veículo permanece com você', 'Avaliação rápida']
    },
    {
      id: 'imoveis',
      title: 'Empréstimo com Garantia de Imóvel',
      description: 'Obtenha crédito com garantia de imóvel, ideal para investimentos ou grandes projetos.',
      icon: <Home className="w-12 h-12 text-indigo-600" />,
      features: ['Até 70% do valor do imóvel', 'Prazos longos', 'Taxas diferenciadas']
    }
  ];

  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      const handleClick = (e: Event) => {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      };
      anchor.addEventListener('click', handleClick);
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030097007/EqOOZgaAaSAeZvpH.png" 
                alt="AWR Cash" 
                className="h-24" style={{paddingTop: '-10px', paddingRight: '-20px', paddingBottom: '-10px', paddingLeft: '-20px', width: '200px', height: '120px'}}
              />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Serviços</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">Como Funciona</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Depoimentos</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contato</a>
            </nav>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Serviços</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Como Funciona</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Contato</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Soluções Financeiras Inteligentes para Você e Seu Negócio
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Crédito rápido, seguro e sem burocracia. Aproveite as melhores taxas do mercado com nossa plataforma 100% digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://forms.zohopublic.com/contatoawr1/form/ClientDetails/formperma/aqajmxlg2jQvN7I6E-ayZjIIUptFQrWTzRjgaabOdWs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Solicitar Crédito
                </a>
                <a 
                  href="https://wa.me/5511975500328" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-green-600 mr-3" />
                  <span className="font-semibold text-green-600">100% Seguro</span>
                </div>
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-blue-600 mr-3" />
                  <span className="font-semibold text-blue-600">Aprovação Rápida</span>
                </div>
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-yellow-600 mr-3" />
                  <span className="font-semibold text-yellow-600">Processo Digital</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-8 h-8 text-purple-600 mr-3" />
                  <span className="font-semibold text-purple-600">Taxas Competitivas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções financeiras completas para pessoas físicas e jurídicas, com tecnologia que simplifica sua vida.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                  activeTab === service.id ? 'border-2 border-blue-600' : ''
                }`}
                onClick={() => setActiveTab(service.id)}
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-800 ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Como Funciona</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Processo simples, rápido e 100% digital. Em poucos passos, você recebe seu crédito.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Solicite Online</h3>
              <p className="text-gray-600">
                Preencha nosso formulário com seus dados e escolha o serviço desejado.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Avaliação Rápida</h3>
              <p className="text-gray-600">
                Nossa equipe analisa sua solicitação e aprova em minutos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Receba Seu Crédito</h3>
              <p className="text-gray-600">
                O valor é transferido para sua conta bancária em até 24 horas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Confiança e satisfação são nossos maiores ativos. Veja o que nossos clientes têm a dizer sobre nossos serviços.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">J</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">João Silva</h4>
                  <p className="text-sm text-gray-600">Empresário</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Obtive meu empréstimo empresarial em menos de 24 horas. O processo foi extremamente simples e as taxas foram muito competitivas. Recomendo!"
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">M</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">Maria Santos</h4>
                  <p className="text-sm text-gray-600">Profissional Liberal</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Precisei de um empréstimo pessoal urgente e a AWR Cash me atendeu rapidamente. A equipe foi super atenciosa e o processo 100% digital."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">C</div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">Carlos Oliveira</h4>
                  <p className="text-sm text-gray-600">Proprietário de Imóveis</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Usei meu imóvel como garantia e consegui um excelente valor com taxas muito abaixo do mercado. Excelente serviço!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
              <p className="text-xl text-gray-600">
                Estamos aqui para ajudar! Entre em contato conosco e descubra como podemos ajudar você.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Fale Conosco</h3>
                
                <div className="space-y-6">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <p className="text-blue-800 mb-2">
                      Para solicitar um empréstimo ou obter mais informações, preencha nosso formulário:
                    </p>
                    <a 
                      href="https://forms.zohopublic.com/contatoawr1/form/ClientDetails/formperma/aqajmxlg2jQvN7I6E-ayZjIIUptFQrWTzRjgaabOdWs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Preencher Formulário
                    </a>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-gray-600 mb-4">
                      Ou entre em contato diretamente com nossa equipe:
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Phone className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                        <div>
                          <p className="font-semibold text-gray-800">WhatsApp</p>
                          <a href="https://wa.me/5511921499423" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            (11) 97550-0328
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <MessageSquare className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                        <div>
                          <p className="font-semibold text-gray-800">Instagram</p>
                          <a href="https://instagram.com/awrcash" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            @awrcash
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Nossos Contatos</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">WhatsApp</p>
                      <a href="https://wa.me/5511921499423" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        (11) 921 499 423
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageSquare className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">Instagram</p>
                      <a href="https://instagram.com/awrcash" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        @awrcash
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">E-mail</p>
                      <a href="mailto:contato@awrcash.com.br" className="text-blue-600 hover:underline">
                        contato@awrcash.com.br
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Horário de Atendimento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-100 text-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030097007/EqOOZgaAaSAeZvpH.png" 
                alt="AWR Cash" 
                className="h-20 mb-4"
              />
              <p className="text-gray-700 mb-4">
                Soluções financeiras inteligentes para pessoas físicas e jurídicas, com tecnologia que simplifica sua vida.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/awrcash" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Serviços</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-blue-600">Empréstimo Pessoal</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600">Empréstimo Empresarial</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600">Antecipação de Recebíveis</a></li>
                <li><a href="#" className="text-gray-700 hover:text-blue-600">Desconto de Títulos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Links Úteis</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-700 hover:text-blue-600">Serviços</a></li>
                <li><a href="#how-it-works" className="text-gray-700 hover:text-blue-600">Como Funciona</a></li>
                <li><a href="#testimonials" className="text-gray-700 hover:text-blue-600">Depoimentos</a></li>
                <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="text-gray-700">(11) 921 499 423</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="text-gray-700">contato@awrcash.com.br</span>
                </div>
                <div className="flex items-center">
                  <Instagram className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="text-gray-700">@awrcash</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-300 mt-8 pt-8 text-center">
            <p className="text-gray-700">
              © {new Date().getFullYear()} AWR Cash. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
