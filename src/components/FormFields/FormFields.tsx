import { useState } from "react";
import type { ChangeEvent, ReactNode } from "react";
import IconSlot from "../IconSlot/IconSlot";
import "./FormFields.css";

interface FieldLabelProps {
  label: string;
  required?: boolean;
}

function FieldLabel({ label, required }: FieldLabelProps) {
  return (
    <span className="bloom-field-label">
      {label}
      {required && <span className="bloom-field-required">•</span>}
    </span>
  );
}

interface TextFieldProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  leadingIcon?: ReactNode;
}

export function TextField({ label, required, placeholder, value, onChange, leadingIcon }: TextFieldProps) {
  return (
    <label className="bloom-field">
      <FieldLabel label={label} required={required} />
      <span className="bloom-field-input-wrap">
        {leadingIcon && <IconSlot icon={leadingIcon} size={16} />}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange && onChange(event.target.value)}
        />
      </span>
    </label>
  );
}

interface TextAreaFieldProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function TextAreaField({ label, required, placeholder, value, onChange }: TextAreaFieldProps) {
  return (
    <label className="bloom-field">
      <FieldLabel label={label} required={required} />
      <textarea
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange && onChange(event.target.value)}
      />
    </label>
  );
}

interface PasswordFieldProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  leadingIcon?: ReactNode;
  toggleIcon?: ReactNode;
}

export function PasswordField({
  label,
  required,
  placeholder,
  value,
  onChange,
  leadingIcon,
  toggleIcon,
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <label className="bloom-field">
      <FieldLabel label={label} required={required} />
      <span className="bloom-field-input-wrap">
        {leadingIcon && <IconSlot icon={leadingIcon} size={16} />}
        <input
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange && onChange(event.target.value)}
        />
        <button
          type="button"
          className="bloom-field-toggle"
          onClick={() => setVisible(!visible)}
        >
          <IconSlot icon={toggleIcon} label="olho" size={16} />
        </button>
      </span>
    </label>
  );
}

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  options: SelectOption[];
  onChange?: (value: string) => void;
  chevronIcon?: ReactNode;
}

export function SelectField({ label, required, placeholder, options, onChange, chevronIcon }: SelectFieldProps) {
  return (
    <label className="bloom-field">
      <FieldLabel label={label} required={required} />
      <span className="bloom-field-input-wrap">
        <select defaultValue="" onChange={(event) => onChange && onChange(event.target.value)}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <IconSlot icon={chevronIcon} label="v" size={12} />
      </span>
    </label>
  );
}
