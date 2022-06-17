import * as Styled from './styles';
import { useRouter } from 'next/dist/client/router';
import { signOut } from 'next-auth/react';

export type MenuProps = {
  title?: string;
};

export const Menu = ({ title }: MenuProps) => {
  const router = useRouter();

  const logout = () => {
    signOut({ redirect: false });
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  return (
    <Styled.Wrapper>
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
            <div className="col-md-3 ms-1">
              <a className="navbar-brand text-color" href="/lista/produtos">
                Cadastro de produtos
              </a>
            </div>
            <div className="col-md-6">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarColor01"
                aria-controls="navbarColor01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item dropdown ">
                    <a
                      className="dropdown-toggle text-color"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Cadastrar
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="/cadastros/produtos">
                        Produtos
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="dropdown-toggle text-color"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Listar
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="/lista/produtos">
                        Produtos
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <a className="btn btn-light" href="#" role="button" onClick={() => logout()}>
                Sair
              </a>
            </div>
          </nav>
        </div>
      </div>
    </Styled.Wrapper>
  );
};
