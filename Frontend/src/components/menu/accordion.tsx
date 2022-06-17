import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';

type Props = {
  title: string;
  children?: React.ReactNode;
  icon?: IconDefinition;
};

export const Accordion = ({ title, icon, children }: Props) => {
  return (
    <details className="collapse">
      <summary className="title">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <FontAwesomeIcon style={{ marginRight: '5px' }} icon={icon} />
            {title}
          </div>

          <FontAwesomeIcon className="arrow" icon={faArrowDown} />
        </div>
      </summary>
      {children}
    </details>
  );
};

type PropsItem = {
  title: string;
  navigate: () => void;
  icon?: IconDefinition;
};

export const AccordionItem = ({ title, icon, navigate }: PropsItem) => {
  return (
    <div className="description" onClick={navigate}>
      <FontAwesomeIcon icon={icon} style={{ marginRight: '5px' }} />
      {title}
    </div>
  );
};
