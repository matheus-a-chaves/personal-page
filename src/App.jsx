import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Menu,
  X,
  Star,
  Code2,
  Zap,
  Sparkles,
  Rocket,
  Globe,
  Mail,
} from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#contact", label: "Contato" },
];

function App() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      if (window.scrollY < 100) {
        setActiveSection("#home");
        return;
      }

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const headerOffset = 20;
      const elementPosition = targetSection.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setOpen(false);
  };
  return (
    <div className="bg-black text-white selection:bg-fuchsia-500/30">
      <header className="bg-black sticky top-0 border-b border-white/10 z-50 backdrop-blur-sm bg-black/80">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Code2 className="size-8 text-fuchsia-500" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg">Matheus Chaves</span>
              <span className="text-[10px] text-gray-400 -mt-0.5">
                Desenvolvedor profissional de websites
              </span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className={`hover:text-fuchsia-400 transition-colors ${
                  activeSection === l.href
                    ? "text-fuchsia-500 font-semibold"
                    : ""
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button className="md:hidden p-2 rounded-lg hover:bg-white/5">
            <Menu className="size-5" onClick={() => setOpen(true)} />
          </button>
        </div>
        {open && (
          <div className="md:hidden">
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            >
              <div
                className="fixed right-0 top-0 h-full w-80 bg-black border-l border-white/10 p-6 z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2">
                    <Code2 className="size-6 text-fuchsia-500" />
                    <span className="font-bold">Matheus Chaves</span>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-white/5">
                    <X className="size-5" onClick={() => setOpen(false)} />
                  </button>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className={`text-lg hover:text-fuchsia-400 transition-colors ${
                        activeSection === l.href
                          ? "text-fuchsia-500 font-semibold"
                          : ""
                      }`}
                      onClick={(e) => handleNavClick(e, l.href)}
                    >
                      {l.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 md:py-26">
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 via-transparent to-transparent"></div>
        <div className="mx-auto max-w-6xl px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Landing Pages Profissionais que
              <br />
              <span className="text-fuchsia-500">Geram Resultados</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Aumente suas vendas com uma landing page profissional. Design
              moderno, carregamento rápido e otimizado para conversão.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg
                 bg-fuchsia-600 px-8 py-4 font-semibold text-lg
                  hover:bg-fuchsia-700 transition-all shadow-lg shadow-fuchsia-500/30"
              >
                Solicitar Orçamento <ArrowRight className="size-5" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4
                font-semibold text-lg border-2 border-white/20
                hover:bg-white/5 transition-all"
              >
                Ver Projetos
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                label: "Entrega Rápida",
                icon: Zap,
                color: "text-fuchsia-500",
                description:
                  "Desenvolvimento ágil e entrega no menor prazo possível",
              },
              {
                label: "Design Profissional",
                icon: Sparkles,
                color: "text-fuchsia-500",
                description: "Visual moderno e alinhado com sua marca",
              },
              {
                label: "Foco em Conversão",
                icon: Rocket,
                color: "text-fuchsia-500",
                description: "Cada elemento pensado para gerar vendas",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-fuchsia-500/50 transition-all backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <item.icon className={`size-6 ${item.color} flex-shrink-0`} />
                  <div>
                    <div className="font-bold text-lg mb-2">{item.label}</div>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Você <span className="text-fuchsia-500">Recebe</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Uma landing page completa e pronta para vender
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Design Personalizado",
              description:
                "Designs únicos criados especificamente para a identidade da sua marca",
              icon: <Sparkles className="size-6 text-fuchsia-500" />,
            },
            {
              title: "Layout Responsivo",
              description:
                "Exibição perfeita em todos os dispositivos - mobile, tablet e desktop",
              icon: <Globe className="size-6 text-fuchsia-500" />,
            },
            {
              title: "Carregamento Rápido",
              description:
                "Performance otimizada para carregamento rápido e melhor SEO",
              icon: <Zap className="size-6 text-fuchsia-500" />,
            },
            {
              title: "Código Limpo",
              description:
                "Código bem estruturado e de fácil manutenção seguindo as melhores práticas",
              icon: <Code2 className="size-6 text-fuchsia-500" />,
            },
            {
              title: "Otimizado para SEO",
              description:
                "Construído com as melhores práticas de SEO para melhor ranqueamento",
              icon: <Star className="size-6 text-fuchsia-500" />,
            },
            {
              title: "Foco em Conversão",
              description:
                "Elementos estratégicos de design para maximizar as taxas de conversão",
              icon: <Rocket className="size-6 text-fuchsia-500" />,
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-fuchsia-500/50 transition-all"
            >
              <div className="flex items-start gap-4">
                {service.icon}
                <div>
                  <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-fuchsia-500">Projetos</span> Recentes
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Landing pages que geraram resultados reais para empresas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Plataforma SaaS",
              category: "Tecnologia",
              result: "300% de aumento em cadastros",
            },
            {
              name: "Loja E-commerce",
              category: "Varejo",
              result: "150% de aumento nas conversões",
            },
            {
              name: "Agência Digital",
              category: "Serviços",
              result: "200+ leads qualificados",
            },
            {
              name: "Aplicativo Mobile",
              category: "Tecnologia",
              result: "10k+ downloads",
            },
          ].map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-fuchsia-500/50 transition-all group"
            >
              <div className="aspect-video bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-lg mb-6 flex items-center justify-center">
                <Code2 className="size-16 text-fuchsia-500/50 group-hover:text-fuchsia-500 transition-colors" />
              </div>
              <h3 className="font-bold text-xl mb-2">{project.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{project.category}</p>
              <p className="text-fuchsia-500 font-semibold">{project.result}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Histórias de <span className="text-fuchsia-500">Sucesso</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Veja o que meus clientes dizem
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Johnson",
              role: "CEO, TechStart",
              text: "A landing page superou todas as expectativas. Nossa taxa de conversão triplicou no primeiro mês. Trabalho altamente profissional!",
            },
            {
              name: "Michael Chen",
              role: "Diretor de Marketing",
              text: "Qualidade excepcional e atenção aos detalhes. A página carrega incrivelmente rápido e fica deslumbrante em todos os dispositivos.",
            },
            {
              name: "Emma Williams",
              role: "Fundadora, GrowthLab",
              text: "Melhor investimento que fizemos este ano. A landing page é linda, funcional e, o mais importante - ela converte!",
            },
          ].map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-fuchsia-500/50 transition-all"
            >
              <div className="flex items-center gap-1 text-fuchsia-500 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <footer>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20 mb-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos Conversar Sobre{" "}
            <span className="text-fuchsia-500">Seu Projeto?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Entre em contato e receba um orçamento personalizado. Vou te ajudar
            a criar a landing page perfeita para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="mailto:seu.email@exemplo.com"
              className="inline-flex items-center gap-3 rounded-lg
               bg-fuchsia-600 px-8 py-4 font-semibold text-lg
                hover:bg-fuchsia-700 transition-all shadow-lg shadow-fuchsia-500/30"
            >
              <Mail className="size-5" />
              Entre em Contato
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-2xl font-bold text-fuchsia-500 mb-2">
                Entrega Rápida
              </div>
              <div className="text-gray-400">
                Melhores práticas de desenvolvimento ágil
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-fuchsia-500 mb-2">
                50+
              </div>
              <div className="text-gray-400">Projetos Concluídos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-fuchsia-500 mb-2">
                100%
              </div>
              <div className="text-gray-400">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Code2 className="size-6 text-fuchsia-500" />
              <span className="font-bold text-xl">Matheus Chaves</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Matheus Chaves. Todos os direitos
              reservados.
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-fuchsia-500 transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-fuchsia-500 transition-colors"
              >
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
