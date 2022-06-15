import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const Accordion = ({ title, children }: Props) => {
  return (
    <details className="collapse">
      <summary className="title">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {title} <FontAwesomeIcon className="arrow" icon={faArrowDown} />
        </div>
      </summary>
      {children}
    </details>
  );
};

type PropsItem = {
  title: string;
  navigate: () => void;
};

export const AccordionItem = ({ title, navigate }: PropsItem) => {
  return (
    <div className="description" onClick={navigate}>
      {title}
    </div>
  );
};
