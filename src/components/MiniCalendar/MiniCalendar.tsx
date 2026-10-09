import type { ReactNode } from "react";
import IconSlot from "../IconSlot/IconSlot";
import "./MiniCalendar.css";

interface CalendarDay {
  day: number;
  otherMonth?: boolean;
}

interface CalendarEvent {
  id: string;
  time: string;
  title: string;
  tag: string;
}

interface MiniCalendarProps {
  title?: string;
  titleIcon?: ReactNode;
  monthLabel: string;
  weeks: CalendarDay[][];
  todayDay?: number;
  selectedDay?: number;
  daysWithEvent?: number[];
  onSelectDay?: (day: number) => void;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
  prevIcon?: ReactNode;
  nextIcon?: ReactNode;
  eventsTitle?: string;
  eventsDate?: string;
  events?: CalendarEvent[];
}

const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

function MiniCalendar({
  title = "Calendário",
  titleIcon,
  monthLabel,
  weeks,
  todayDay,
  selectedDay,
  daysWithEvent = [],
  onSelectDay,
  onPrevMonth,
  onNextMonth,
  prevIcon,
  nextIcon,
  eventsTitle = "Eventos do dia",
  eventsDate,
  events = [],
}: MiniCalendarProps) {
  return (
    <div className="bloom-mini-calendar">
      <div className="bloom-mini-calendar-title">
        <IconSlot icon={titleIcon} label="calendario" size={28} />
        <h2>{title}</h2>
      </div>

      <div className="bloom-mini-calendar-nav">
        <button type="button" className="bloom-mini-calendar-prev" onClick={onPrevMonth}>
          <IconSlot icon={prevIcon ? prevIcon : nextIcon} label=">" size={14} />
        </button>
        <span>{monthLabel}</span>
        <button type="button" onClick={onNextMonth}>
          <IconSlot icon={nextIcon} label=">" size={14} />
        </button>
      </div>

      <div className="bloom-mini-calendar-grid">
        {weekdays.map((weekday) => (
          <span key={weekday} className="bloom-mini-calendar-weekday">
            {weekday}
          </span>
        ))}

        {weeks.map((week, weekIndex) =>
          week.map((item, dayIndex) => {
            let className = "bloom-mini-calendar-day";
            if (item.otherMonth) className += " is-other-month";
            if (!item.otherMonth && item.day === todayDay) className += " is-today";
            if (!item.otherMonth && item.day === selectedDay) className += " is-selected";
            const hasEvent = !item.otherMonth && daysWithEvent.includes(item.day);

            return (
              <button
                key={weekIndex + "-" + dayIndex}
                type="button"
                className={className}
                onClick={() => onSelectDay && onSelectDay(item.day)}
              >
                {String(item.day).padStart(2, "0")}
                {hasEvent && <span className="bloom-mini-calendar-dot"></span>}
              </button>
            );
          })
        )}
      </div>

      <div className="bloom-mini-calendar-events">
        <div className="bloom-mini-calendar-events-header">
          <h3>{eventsTitle}</h3>
          <span>{eventsDate}</span>
        </div>

        {events.map((event) => (
          <div key={event.id} className="bloom-mini-calendar-event">
            <span className="bloom-mini-calendar-event-time">{event.time}</span>
            <div className="bloom-mini-calendar-event-body">
              <span>{event.title}</span>
              <span className="bloom-mini-calendar-event-tag">{event.tag}</span>
            </div>
            <IconSlot icon={nextIcon} label=">" size={14} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiniCalendar;
