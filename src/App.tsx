import './App.css';
import './index.css';
import Navigator from './navigator/Navigator';

import AuthState from './context/authentication/authState';
import EncuentrosState from './context/encuentros/encuentrosState';
import EquiposState from './context/equipos/equiposState';
import InscripcionState from './context/inscripcion/inscripcionState';
import MiembrosState from './context/miembros/miembrosState';
import OrganizacionState from './context/organizacion/organizacionState';
import TorneosState from './context/torneos/torneosState';
import UsuariosState from './context/usuarios/usuariosState';

function App() {
  return (
    <AuthState>
      <EncuentrosState>
        <EquiposState>
          <InscripcionState>
            <MiembrosState>
              <OrganizacionState>
                <TorneosState>
                  <UsuariosState>
                    <div className="App view">
                      <Navigator />
                    </div>
                  </UsuariosState>
                </TorneosState>
              </OrganizacionState>
            </MiembrosState>
          </InscripcionState>
        </EquiposState>
      </EncuentrosState>
    </AuthState>
  );
}

export default App;
