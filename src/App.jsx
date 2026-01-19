import { useState } from "react";
import { projects } from "./projects";
import "./App.css";

function App() {
  const [filtro, setFiltro] = useState("Todos");

  const filtrados =
    filtro === "Todos"
      ? projects
      : projects.filter((p) => p.area === filtro);

  return (
    <div className="container">

      {/* HERO / PORTADA */}
      <div className="hero">
        <div>
          <h1>Plataforma de Proyectos Tecnológicos</h1>

          <p>
            Sistema diseñado para facilitar la visualización, organización y consulta
            interactiva de proyectos tecnológicos desarrollados por estudiantes e investigadores.
          </p>

          <p>
            Los proyectos tecnológicos son iniciativas que aplican herramientas digitales,
            innovación y pensamiento creativo para resolver problemas reales en áreas como
            software, inteligencia artificial, redes, seguridad e Internet de las cosas.
          </p>

          <p><strong>Tecnologías utilizadas:</strong> React, Firebase Hosting e Inteligencia Artificial.</p>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
          width="200"
          alt="Asistente IA"
        />
      </div>

      {/* FILTRO */}
      <h2>Catálogo de Proyectos</h2>

      <select className="select" onChange={(e) => setFiltro(e.target.value)}>
        <option>Todos</option>
        <option>Software</option>
        <option>IA</option>
        <option>Web</option>
        <option>IoT</option>
        <option>Redes</option>
        <option>Seguridad</option>
      </select>

      {/* TARJETAS */}
      <div className="cards">
        {filtrados.map((p, i) => (
          <div className="card" key={i}>
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>
            <small>
              Área: {p.area}<br />
              Estado: {p.estado}<br />
              Impacto: {p.impacto}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
