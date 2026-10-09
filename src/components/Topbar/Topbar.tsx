import type { ReactNode } from "react";
import IconSlot from "../IconSlot/IconSlot";
import SearchInput from "../SearchInput/SearchInput";
import "./Topbar.css";

interface TopbarProps {
  brandTitle: string;
  brandIcon?: ReactNode;
  brandSubtitle?: string;
  searchPlaceholder?: string;
  searchIcon?: ReactNode;
  dateLabel: string;
  notificationCount?: number;
  userName: string;
  userRole: string;
  avatar?: ReactNode;
  bellIcon?: ReactNode;
  calendarIcon?: ReactNode;
  chevronIcon?: ReactNode;
}

function Topbar({
  brandTitle,
  brandIcon,
  brandSubtitle,
  searchPlaceholder = "Pesquisar funcionalidades",
  searchIcon,
  dateLabel,
  notificationCount = 0,
  userName,
  userRole,
  avatar,
  bellIcon,
  calendarIcon,
  chevronIcon,
}: TopbarProps) {
  return (
    <header className="bloom-topbar">
      <div className="bloom-topbar-brand">
        <div className="bloom-topbar-brand-title">
          {brandIcon ? (
            <span className="bloom-topbar-brand-mark">{brandIcon}</span>
          ) : (
            <span className="bloom-topbar-brand-letter">{brandTitle[0]}</span>
          )}
          <span>{brandTitle.slice(1)}</span>
        </div>
        {brandSubtitle && <span className="bloom-topbar-brand-subtitle">{brandSubtitle}</span>}
      </div>

      <SearchInput className="bloom-topbar-search" placeholder={searchPlaceholder} icon={searchIcon} />

      <div className="bloom-topbar-actions">
        <button type="button" className="bloom-topbar-bell">
          <IconSlot icon={bellIcon} label="sino" size="1.3vw" />
          {notificationCount > 0 && <span className="bloom-topbar-bell-count">{notificationCount}</span>}
        </button>

        <button type="button" className="bloom-topbar-date">
          <IconSlot icon={calendarIcon} label="calendario" size="1vw" />
          <span>{dateLabel}</span>
          <IconSlot icon={chevronIcon} label="v" size="0.8vw" />
        </button>

        <button type="button" className="bloom-topbar-user">
          <IconSlot icon={avatar} label="avatar" size="2.4vw" className="bloom-topbar-avatar" />
          <div className="bloom-topbar-user-info">
            <span className="bloom-topbar-user-name">{userName}</span>
            <span className="bloom-topbar-user-role">{userRole}</span>
          </div>
          <IconSlot icon={chevronIcon} label="v" size="0.8vw" />
        </button>
      </div>
    </header>
  );
}

export default Topbar;
