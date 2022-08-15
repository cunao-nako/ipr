type listItem = {
  key: string;
  title?: string;
  text: string;
};

export type TodoList = listItem[];

export type newTODO = {
  title?: string;
  text?: string;
};
