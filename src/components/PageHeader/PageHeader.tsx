import type { ReactNode } from "react";
import "./PageHeader.css";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}

function PageHeader({ title, subtitle, actions }: PageHeaderProps) {
  return (
    <div className="bloom-page-header">
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {actions && <div className="bloom-page-header-actions">{actions}</div>}
    </div>
  );
}

export default PageHeader;
