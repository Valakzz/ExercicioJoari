import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import { Riple } from "react-loading-indicators";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://randomuser.me/api/?results=5&nat=br&inc=name,dob,picture"
      );

      const data = await response.json();

  
      const alunos = data.results.map((s, index) => ({
        ...s,
        id: index,
        ativo: true,
      }));

      setStudents(alunos);
      setLoading(false);
    }

    fetchData();
  }, []);


  const toggleAtivo = (id) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ativo: !s.ativo } : s))
    );
  };

  if (loading) {
    return (
      <div>
        <Riple color="#32cd32" size="medium" text="" textColor="" />
      </div>
    );
  }


  const ativos = students.filter((s) => s.ativo);
  const inativos = students.filter((s) => !s.ativo);

  return (
    <>
      <Header />

      <h2 className="membrosId">Membros Ativos</h2>
      <div className="all-cards">
        {ativos.map((student) => (
          <Card
            key={student.id}
            name={student.name.first}
            age={student.dob.age}
            picture={student.picture.large}
            ativo={student.ativo}
            onToggle={() => toggleAtivo(student.id)}
          />
        ))}
      </div>

      <h2 className="membrosId">Membros Inativos</h2>
      <div className="all-cards">
        {inativos.map((student) => (
          <Card
            key={student.id}
            name={student.name.first}
            age={student.dob.age}
            picture={student.picture.large}
            ativo={student.ativo}
            onToggle={() => toggleAtivo(student.id)}
          />
        ))}
      </div>
    </>
  );
}

export default App;