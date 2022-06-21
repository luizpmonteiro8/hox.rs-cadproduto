import { useServerStatusService } from 'app/services/serverStatus.service';
import { useEffect, useState } from 'react';
import * as Styled from './styles';

export const ServerStatus = () => {
  const service = useServerStatusService();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      service.status().then((resp) => {
        setStatus(resp);
        if (resp) clearInterval(interval);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Styled.Wrapper statusServer={status}>
      <div>
        <p>Status server Heroku</p>
      </div>
      <div className="row">
        <div className="red"></div>
        <div className="green"></div>
      </div>
      <div>{status ? <p>Faça login</p> : <p>Aguarde server iniciar</p>}</div>
    </Styled.Wrapper>
  );
};
