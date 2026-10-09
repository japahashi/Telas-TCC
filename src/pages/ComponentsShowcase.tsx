import { useState } from "react";
import {
  Sidebar,
  Topbar,
  PageHeader,
  Badge,
  Button,
  SummaryStats,
  StatCard,
  ListItemCard,
  Tabs,
  SearchInput,
  TextField,
  TextAreaField,
  SelectField,
  MiniCalendar,
  HeroBanner,
} from "../components";
import menuIcon from "../assets/icons/menu.png";
import homeIcon from "../assets/icons/home.png";
import bemEstarIcon from "../assets/icons/bem-estar.png";
import acolhimentoIcon from "../assets/icons/acolhimento.png";
import eventosIcon from "../assets/icons/eventos.png";
import comunicadosIcon from "../assets/icons/comunicados.png";
import gerenciamentoIcon from "../assets/icons/gerenciamento.png";
import logoBIcon from "../assets/icons/logo-b.png";
import sinoIcon from "../assets/icons/sino.png";
import buscaIcon from "../assets/icons/busca.png";
import calendarioIcon from "../assets/icons/calendario.png";
import calendarioTituloIcon from "../assets/icons/calendario-titulo.png";
import chevronDownTopbarIcon from "../assets/icons/chevron-down-topbar.png";
import chevronDownFormIcon from "../assets/icons/chevron-down-form.png";
import chevronRightIcon from "../assets/icons/chevron-right.png";
import graficoIcon from "../assets/icons/grafico.png";
import pessoasIcon from "../assets/icons/pessoas.png";
import pausadoIcon from "../assets/icons/pausado.png";
import sorrisoIcon from "../assets/icons/sorriso.png";
import setaCimaIcon from "../assets/icons/seta-cima.png";

const weeks = [
  [
    { day: 29, otherMonth: true },
    { day: 30, otherMonth: true },
    { day: 1 },
    { day: 2 },
    { day: 3 },
    { day: 4 },
    { day: 5 },
  ],
  [{ day: 6 }, { day: 7 }, { day: 8 }, { day: 9 }, { day: 10 }, { day: 11 }, { day: 12 }],
  [{ day: 13 }, { day: 14 }, { day: 15 }, { day: 16 }, { day: 17 }, { day: 18 }, { day: 19 }],
  [{ day: 20 }, { day: 21 }, { day: 22 }, { day: 23 }, { day: 24 }, { day: 25 }, { day: 26 }],
  [
    { day: 27 },
    { day: 28 },
    { day: 29 },
    { day: 30 },
    { day: 31 },
    { day: 1, otherMonth: true },
    { day: 2, otherMonth: true },
  ],
];

const events = [
  { id: "1", time: "14:00", title: "Porque me sinto triste?", tag: "Aviso" },
  { id: "2", time: "16:00", title: "Porque me sinto triste?", tag: "Evento" },
];

function ComponentsShowcase() {
  const [activeSidebarId, setActiveSidebarId] = useState("home");
  const [activeTab, setActiveTab] = useState("panorama");
  const [selectedDay, setSelectedDay] = useState(10);

  return (
    <div>
      <Sidebar
        menuIcon={<img src={menuIcon} alt="" />}
        items={[
          { id: "home", label: "Inicio", icon: <img src={homeIcon} alt="" /> },
          { id: "bem-estar", label: "Bem-estar", icon: <img src={bemEstarIcon} alt="" /> },
          { id: "acolhimento", label: "Acolhimento", icon: <img src={acolhimentoIcon} alt="" /> },
          { id: "eventos", label: "Eventos", icon: <img src={eventosIcon} alt="" /> },
          { id: "comunicados", label: "Comunicados", icon: <img src={comunicadosIcon} alt="" /> },
          { id: "gerenciamento", label: "Gerenciamento", icon: <img src={gerenciamentoIcon} alt="" /> },
        ]}
        activeId={activeSidebarId}
        onSelect={setActiveSidebarId}
      />

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
        chevronIcon={<img src={chevronDownTopbarIcon} alt="" />}
      />

      <PageHeader
        title="Bem-estar"
        subtitle="Acompanhe o bem-estar dos estudantes"
        actions={<Button>Novo evento</Button>}
      />

      <Tabs
        items={[
          { value: "panorama", label: "Panorama geral" },
          { value: "turmas", label: "Turmas" },
        ]}
        value={activeTab}
        onChange={setActiveTab}
      />

      <SearchInput placeholder="Buscar sala" icon={<img src={buscaIcon} alt="" />} />

      <SummaryStats
        items={[
          { id: "cadastradas", value: 12, label: "Cadastradas", icon: <img src={graficoIcon} alt="" /> },
          { id: "ativas", value: 8, label: "Ativas", icon: <img src={pessoasIcon} alt="" /> },
          { id: "inativas", value: 4, label: "Inativas", icon: <img src={pausadoIcon} alt="" /> },
        ]}
      />

      <StatCard
        icon={<img src={sorrisoIcon} alt="" />}
        label="Indice bem-estar"
        badgeText="Bom"
        value="78%"
        trendIcon={<img src={setaCimaIcon} alt="" />}
        trendText="8% de aumento nesse mes"
        chevronIcon={<img src={chevronRightIcon} alt="" />}
        onClick={() => {}}
      />

      <Badge variant="good">Bom</Badge>
      <Badge variant="warning">Atencao</Badge>
      <Badge variant="alert">Alerta</Badge>

      <ListItemCard
        leadingIcon={<img src={graficoIcon} alt="" />}
        title="B09"
        subtitle="Sala de aula convencional"
        trailing={<img src={chevronRightIcon} alt="" width={16} height={16} />}
        onClick={() => {}}
      />

      <TextField label="Nome da sala" required placeholder="Nome da sala" />
      <TextAreaField label="Descricao" placeholder="Faca uma breve descricao" />
      <SelectField
        label="Tipo"
        required
        placeholder="Selecione o tipo da sala"
        chevronIcon={<img src={chevronDownFormIcon} alt="" />}
        options={[
          { value: "convencional", label: "Sala de aula convencional" },
          { value: "auditorio", label: "Auditorio" },
        ]}
      />

      <MiniCalendar
        title="Calendário"
        titleIcon={<img src={calendarioTituloIcon} alt="" />}
        monthLabel="Julho 2026"
        nextIcon={<img src={chevronRightIcon} alt="" />}
        weeks={weeks}
        todayDay={6}
        selectedDay={selectedDay}
        daysWithEvent={[8, 10]}
        onSelectDay={setSelectedDay}
        eventsTitle="Comunicados do dia"
        eventsDate="10 de Julho de 2026"
        events={events}
      />

      <HeroBanner greetingTitle="Ola, Manoel!" greetingText="Algum outro texto legal vai ficar aqui." />
    </div>
  );
}

export default ComponentsShowcase;
