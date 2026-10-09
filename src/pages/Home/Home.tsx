import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import StatCard from "../../components/StatCard/StatCard";
import ListItemCard from "../../components/ListItemCard/ListItemCard";

import menuIcon from "../../assets/icons/menu.png";
import homeIcon from "../../assets/icons/home.png";
import bemEstarIcon from "../../assets/icons/bem-estar.png";
import acolhimentoIcon from "../../assets/icons/acolhimento.png";
import eventosIcon from "../../assets/icons/eventos.png";
import comunicadosIcon from "../../assets/icons/comunicados.png";
import gerenciamentoIcon from "../../assets/icons/gerenciamento.png";
import logoBIcon from "../../assets/icons/logo-b.png";
import sinoIcon from "../../assets/icons/sino.png";
import buscaIcon from "../../assets/icons/busca.png";
import calendarioIcon from "../../assets/icons/calendario.png";
import chevronDownIcon from "../../assets/icons/chevron-down-topbar.png";
import chevronRightIcon from "../../assets/icons/chevron-right.png";
import sorrisoIcon from "../../assets/icons/sorriso.png";
import pessoasIcon from "../../assets/icons/pessoas.png";
import setaCimaIcon from "../../assets/icons/seta-cima.png";
import heroImage from "../../assets/images/hero-mountains.png";
import coracaoIcon from "../../assets/icons/coracao.png";
import barrasIcon from "../../assets/icons/barras.png";
import calendarioPontosIcon from "../../assets/icons/calendario-pontos.png";
import historicoIcon from "../../assets/icons/historico.png";
import mensagemIcon from "../../assets/icons/mensagem.png";
import comunidadeIcon from "../../assets/icons/comunidade.png";
import notaIcon from "../../assets/icons/nota.png";
import raioIcon from "../../assets/icons/raio.png";

import "./Home.css";

function DateBadge({ day, month }: { day: string; month: string }) {
  return (
    <div className="home-date-badge">
      <span className="home-date-badge-day">{day}</span>
      <span className="home-date-badge-month">{month}</span>
    </div>
  );
}

function PanelTitle({ icon, text }: { icon?: string; text: string }) {
  return (
    <span className="home-panel-title">
      {icon && <img src={icon} alt="" />}
      {text}
    </span>
  );
}

function Home() {
  const menuItems = [
    { id: "inicio", label: "Início", icon: <img src={homeIcon} alt="Início" /> },
    { id: "bem-estar", label: "Bem-estar", icon: <img src={bemEstarIcon} alt="Bem-estar" /> },
    { id: "acolhimento", label: "Acolhimento", icon: <img src={acolhimentoIcon} alt="Acolhimento" /> },
    { id: "eventos", label: "Eventos", icon: <img src={eventosIcon} alt="Eventos" /> },
    { id: "comunicacao", label: "Comunicação", icon: <img src={comunicadosIcon} alt="Comunicação" /> },
    { id: "academico", label: "Acadêmico", icon: <img src={gerenciamentoIcon} alt="Acadêmico" /> },
  ];

  const acoesRapidas = [
    { label: "Avaliações do dia", icon: historicoIcon },
    { label: "Enviar mensagem", icon: mensagemIcon },
    { label: "Locais de acolhimento", icon: comunidadeIcon },
    { label: "Criar evento", icon: calendarioPontosIcon },
    { label: "Criar turma", icon: notaIcon },
  ];

  const eventos = [
    { day: "06", month: "Jul", title: "Dia da pizza", info: "14:00 - 16:00 | Refeitório" },
    { day: "10", month: "Jul", title: "Porque me sinto triste?", info: "14:30 - 15:30 | Sala" },
    { day: "20", month: "Ago", title: "Festival de talentos", info: "O dia todo | Auditório" },
  ];

  const dadosRecentes = [
    { label: "Total de alunos", value: "345", icon: historicoIcon },
    { label: "Avaliações realizadas", value: "428", icon: historicoIcon },
    { label: "Eventos feitos no mês", value: "9", icon: calendarioPontosIcon },
    { label: "Mensagens enviadas", value: "3", icon: mensagemIcon },
  ];

  return (
    <div className="home">
      <Sidebar
        items={menuItems}
        activeId="inicio"
        menuIcon={<img src={menuIcon} alt="Menu" />}
        onSelect={() => {}}
        onMenuClick={() => {}}
      />

      <div className="background">
        <div className="truebackground">
          <Topbar
            brandTitle="Bloom"
            brandIcon={<img src={logoBIcon} alt="" />}
            brandSubtitle="Institucional"
            searchIcon={<img src={buscaIcon} alt="" />}
            dateLabel="06 jul, 2026"
            notificationCount={2}
            userName="Fernando Leonid"
            userRole="Coordenador"
            bellIcon={<img src={sinoIcon} alt="" />}
            calendarIcon={<img src={calendarioIcon} alt="" />}
            chevronIcon={<img src={chevronDownIcon} alt="" />}
          />

          <div className="home-content">
            <div className="home-top-section">
              <div className="home-top-left">
                <HeroBanner
                  eyebrow="Bem-vindo de volta,"
                  greetingTitle="Olá, Manoel!"
                  greetingText="Algum outro texto legal vai ficar aqui."
                  backgroundImage={<img src={heroImage} alt="" />}
                />

                <div className="home-stats">
                  <StatCard
                    icon={<img src={sorrisoIcon} alt="" />}
                    label="Índice bem-estar"
                    badgeText="Bom"
                    value="78%"
                    trendIcon={<img src={setaCimaIcon} alt="" />}
                    trendText="8% de aumento nesse mês"
                    chevronIcon={<img src={chevronRightIcon} alt="" />}
                    onClick={() => {}}
                  />
                  <StatCard
                    icon={<img src={pessoasIcon} alt="" />}
                    label="Participação"
                    badgeText="Bom"
                    value="67%"
                    trendIcon={<img src={setaCimaIcon} alt="" />}
                    trendText="12% de aumento nesse mês"
                    chevronIcon={<img src={chevronRightIcon} alt="" />}
                    onClick={() => {}}
                  />
                  <StatCard
                    icon={<img src={coracaoIcon} alt="" />}
                    label="Turmas em atenção"
                    badgeText="Bom"
                    value="3"
                    trendIcon={<img src={setaCimaIcon} alt="" />}
                    trendText="2% de aumento nesse mês"
                    chevronIcon={<img src={chevronRightIcon} alt="" />}
                    onClick={() => {}}
                  />
                </div>
              </div>

              <div className="home-panel home-quick-actions">
                <div className="home-panel-header">
                  <PanelTitle icon={raioIcon} text="Ações rápidas" />
                </div>
                <div className="home-panel-list">
                  {acoesRapidas.map((acao) => (
                    <ListItemCard
                      key={acao.label}
                      leadingIcon={<img src={acao.icon} alt="" />}
                      title={acao.label}
                      trailing={<img src={chevronRightIcon} alt="" width={16} height={16} />}
                      onClick={() => {}}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="home-lower">
              <div className="home-panel home-chart-card">
                <div className="home-panel-header">
                  <PanelTitle icon={barrasIcon} text="Visão geral" />
                  <span className="home-chart-range">Últimos 30 dias</span>
                </div>

                <svg viewBox="0 0 600 220" className="home-chart-svg">
                  <polyline
                    points="0,140 60,120 120,150 180,90 240,110 300,70 360,100 420,60 480,90 540,50 600,80"
                    className="home-chart-line home-chart-line-green"
                  />
                  <polyline
                    points="0,170 60,160 120,180 180,150 240,160 300,130 360,150 420,120 480,140 540,110 600,130"
                    className="home-chart-line home-chart-line-blue"
                  />
                  <polyline
                    points="0,190 60,195 120,185 180,200 240,190 300,205 360,195 420,210 480,200 540,205 600,195"
                    className="home-chart-line home-chart-line-purple"
                  />
                </svg>

                <div className="home-chart-legend">
                  <span className="home-chart-legend-item">
                    <span className="home-chart-dot home-chart-dot-green"></span>
                    Bem estar
                  </span>
                  <span className="home-chart-legend-item">
                    <span className="home-chart-dot home-chart-dot-blue"></span>
                    Participação
                  </span>
                  <span className="home-chart-legend-item">
                    <span className="home-chart-dot home-chart-dot-purple"></span>
                    Turmas em atenção
                  </span>
                </div>
              </div>

              <div className="home-panel">
                <div className="home-panel-header">
                  <PanelTitle icon={calendarioPontosIcon} text="Eventos" />
                  <span className="home-panel-link">Ver todos ›</span>
                </div>
                <div className="home-panel-list">
                  {eventos.map((evento) => (
                    <ListItemCard
                      key={evento.title}
                      leadingIcon={<DateBadge day={evento.day} month={evento.month} />}
                      title={evento.title}
                      subtitle={evento.info}
                    />
                  ))}
                </div>
              </div>

              <div className="home-panel">
                <div className="home-panel-header">
                  <PanelTitle text="Dados recentes" />
                </div>
                <div className="home-panel-list">
                  {dadosRecentes.map((dado) => (
                    <ListItemCard
                      key={dado.label}
                      leadingIcon={dado.icon && <img src={dado.icon} alt="" />}
                      title={dado.label}
                      trailing={<span>{dado.value}</span>}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
