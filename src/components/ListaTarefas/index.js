import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";
import { ListaTarefasConcluidas } from "../ListaTarefasConcluidas/index";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    const tarefaConcluida = lista.filter((item) => item === tarefa);
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);
    setTarefasConcluidas([...tarefasConcluidas, tarefaConcluida]);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
      <ListaTarefasConcluidas tarefasConcluidas={tarefasConcluidas} />
    </ListaTarefasContainer>
  );
}
