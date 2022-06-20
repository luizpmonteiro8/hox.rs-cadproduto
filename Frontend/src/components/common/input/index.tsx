/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import * as Styled from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface InputProps extends React.LinkHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  columnClasses?: string;
  error?: string;
  formatter?: (value: string) => string;
  autoFocusValue?: boolean;
  onChange: (item: any) => void;
  disabled?: boolean;
  name: string;
  value: string | number;
  type?: string;
  min?: string;
  step?: string;
  autoComplete?: string;
  marginRightIconPassword?: number;
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  error,
  formatter,
  onChange,
  autoFocusValue,
  disabled,
  name,
  value,
  type,
  autoComplete,
  ...inputProps
}: InputProps) => {
  const onInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    const formattedValue = (formatter && formatter(value as string)) || value;

    onChange({
      ...event,
      target: {
        name,
        value: formattedValue,
      },
    });
  };

  const [firstLoading, setFirstLoading] = useState<boolean>(true);

  return (
    <Styled.Wrapper>
      {!!label && <label htmlFor={id}>{label}</label>}
      <>
        <input
          className={error ? 'invalid-feedback-input' : ''}
          onChange={onInputChange}
          id={id}
          disabled={disabled}
          name={name}
          value={value}
          type={type}
          autoComplete={autoComplete}
          ref={
            autoFocusValue && firstLoading
              ? function (input) {
                  if (input != null) {
                    input.focus();
                    setFirstLoading(false);
                  }
                }
              : undefined
          }
          {...inputProps}
        />
        <div className="invalid-feedback">{error}</div>
      </>
    </Styled.Wrapper>
  );
};

export const InputPassword: React.FC<InputProps> = ({
  id,
  name,
  label,
  onChange,
  value,
  error,
  marginRightIconPassword,
  ...inputProps
}: InputProps) => {
  const [visibled, setVisibled] = useState(false);
  return (
    <Styled.Wrapper>
      {!!label && <label>{label}</label>}
      <Styled.Password>
        <input
          className={error ? 'invalid-feedback-input pass-wrapper' : 'pass-wrapper'}
          id={id}
          name={name}
          type={visibled ? 'text' : 'password'}
          onChange={onChange}
          value={value}
          {...inputProps}
        />

        <FontAwesomeIcon
          style={{ position: 'absolute', marginRight: marginRightIconPassword }}
          icon={visibled ? faEyeSlash : faEye}
          color={error ? 'red' : ''}
          onClick={() => setVisibled(!visibled)}
        />
      </Styled.Password>

      <div className="invalid-feedback">{error}</div>
    </Styled.Wrapper>
  );
};
