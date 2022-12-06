import { ListaContainer, Tarefa } from "./styled";

export function ListaTarefasConcluidas({ tarefasConcluidas }) {
  return (
    <ListaContainer>
      <ul>
        {tarefasConcluidas.map((tarefa, index) => {
          return (
            <Tarefa key={index}>
              <p>{tarefa}</p>
            </Tarefa>
          );
        })}
      </ul>
    </ListaContainer>
  );
}
