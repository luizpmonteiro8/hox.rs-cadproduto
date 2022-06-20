import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type Props = {
  title: string;
  children?: React.ReactNode;
  icon?: IconDefinition;
};

export const Accordion = ({ title, icon, children }: Props) => {
  const [rotateIcon, setRotateIcon] = useState(false);

  return (
    <details className="collapse">
      <summary className="title" onClick={() => setRotateIcon(!rotateIcon)}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <FontAwesomeIcon style={{ marginRight: '5px' }} icon={icon} />
            {title}
          </div>

          <FontAwesomeIcon
            style={
              rotateIcon
                ? { transform: 'rotate(0deg)', transition: 'transform 0.5s' }
                : { transform: 'rotate(90deg)', transition: 'transform 0.5s' }
            }
            icon={faArrowDown}
          />
        </div>
      </summary>
      {children}
    </details>
  );
};

export const AccordionChildren = ({ title, icon, children }: Props) => {
  const [rotateIconChildren, setRotateIconChildren] = useState(false);

  return (
    <details className="collapse">
      <summary
        className="title"
        onClick={() => setRotateIconChildren(!rotateIconChildren)}
        style={{ marginLeft: '25px', width: '185px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <FontAwesomeIcon style={{ marginRight: '5px' }} icon={icon} />
            {title}
          </div>

          <FontAwesomeIcon
            style={
              rotateIconChildren
                ? { transform: 'rotate(0deg)', transition: 'transform 0.5s' }
                : { transform: 'rotate(90deg)', transition: 'transform 0.5s' }
            }
            icon={faArrowDown}
          />
        </div>
      </summary>
      <div style={{ marginLeft: '15px' }}>{children}</div>
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
